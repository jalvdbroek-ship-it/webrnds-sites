// Lokale server voor de WeBrnds-site.
//   node server.mjs            → http://localhost:4321
//   PORT=5000 node server.mjs → op een andere poort
//
// De server levert de bestanden uit deze map en heeft één extra eindpunt:
// POST /api/brief. Dat is bewust een mock: de brief wordt alleen op het
// scherm getoond en in de terminal gelogd. Voor livegang moet dit endpoint
// naar een mailbox of een formulierservice wijzen.

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 4321);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svgz": "image/svg+xml",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8"
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, { "cache-control": "no-store", ...headers });
  res.end(body);
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (req.method === "POST" && url.pathname === "/api/brief") {
    try {
      const brief = JSON.parse(await readBody(req) || "{}");
      if (!brief.naam || !brief.email) {
        return send(res, 400, JSON.stringify({ antwoord: "Naam en e-mailadres zijn nodig." }), {
          "content-type": "application/json; charset=utf-8"
        });
      }
      console.log("\n--- nieuwe brief -------------------------------------");
      console.log(`Naam:     ${brief.naam}`);
      console.log(`Bedrijf:  ${brief.bedrijf || "-"}`);
      console.log(`E-mail:   ${brief.email}`);
      console.log(`Wanneer:  ${brief.wanneer || "-"}`);
      console.log(`Wat:      ${(brief.wat || []).join(", ") || "-"}`);
      console.log(`Indicatie:${brief.prijs || "-"}`);
      console.log(`Vraag:    ${brief.vastloopt || "-"}`);
      console.log("---------------------------------------------------");
      return send(
        res,
        200,
        JSON.stringify({
          antwoord:
            "Bedankt! Je vraag staat bij de maker. Je krijgt binnen één werkdag antwoord."
        }),
        { "content-type": "application/json; charset=utf-8" }
      );
    } catch (error) {
      return send(res, 400, JSON.stringify({ antwoord: "De brief kon niet gelezen worden." }), {
        "content-type": "application/json; charset=utf-8"
      });
    }
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    return send(res, 405, "Method not allowed");
  }

  let pathname = decodeURIComponent(url.pathname);
  if (pathname.endsWith("/")) pathname += "index.html";

  // Binnen de projectmap blijven: niets kan naar buiten wijzen.
  const target = normalize(join(root, pathname));
  if (!target.startsWith(root.endsWith(sep) ? root : root + sep)) {
    return send(res, 403, "Forbidden");
  }

  try {
    const info = await stat(target);
    if (info.isDirectory()) return send(res, 404, "Not found");
    const body = await readFile(target);
    send(res, 200, body, {
      "content-type": types[extname(target).toLowerCase()] || "application/octet-stream"
    });
  } catch {
    send(res, 404, "Not found");
  }
});

server.listen(port, () => {
  console.log(`WeBrnds draait op http://localhost:${port}`);
});
