/* WeBrnds — interactie van de site.
   Alles werkt ook zonder JavaScript: de pagina blijft leesbaar en de
   formulieren blijven bruikbaar via de gewone submit. */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- Mobiel menu ------------------------------------------------------ */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");

  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      var use = toggle.querySelector("use");
      if (use) use.setAttribute("href", open ? "#i-close" : "#i-menu");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("is-open")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        var use = toggle.querySelector("use");
        if (use) use.setAttribute("href", "#i-menu");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape" || !nav.classList.contains("is-open")) return;
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      toggle.focus();
    });
  }

  /* --- Scroll-reveal ----------------------------------------------------- */
  var revealTargets = document.querySelectorAll(
    ".section__head, .service-card, .path__step, .work-card, .price__form, " +
      ".price__summary, .why-card, .faq details, .form, .info-card, .hero__title, " +
      ".hero__lead, .hero__actions, .hero__facts, .hero__cast"
  );

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) {
      el.classList.add("is-in");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          // Ook revealed als het element al boven het venster staat: dan is het
          // namelijk al voorbijgescrollt en moet het zichtbaar blijven.
          var voorbij = entry.boundingClientRect.top < window.innerHeight;
          if (!entry.isIntersecting && !voorbij) return;
          var siblings = Array.prototype.indexOf.call(entry.target.parentNode.children, entry.target);
          entry.target.style.setProperty("--reveal-delay", Math.min(siblings, 5) * 60 + "ms");
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    revealTargets.forEach(function (el) {
      el.classList.add("js-reveal");
      revealObserver.observe(el);
    });
  }

  /* --- De veer: figuren die in beeld komen ------------------------------- */
  var blobInTargets = document.querySelectorAll(".blob-in");

  if (blobInTargets.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      blobInTargets.forEach(function (el) {
        el.classList.add("is-in");
      });
    } else {
      var blobObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var siblings = Array.prototype.indexOf.call(
              entry.target.parentNode.children,
              entry.target
            );
            entry.target.style.setProperty(
              "--pop-delay",
              Math.min(siblings, 5) * 110 + "ms"
            );
            entry.target.classList.add("is-in");
            blobObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.2 }
      );

      blobInTargets.forEach(function (el) {
        blobObserver.observe(el);
      });
    }
  }

  /* --- Werkwijze: de stap die je ziet, licht op -------------------------- */
  var steps = Array.prototype.slice.call(document.querySelectorAll(".path__step"));
  var rail = document.querySelector(".path__rail");

  function activeStep(index) {
    steps.forEach(function (step, i) {
      step.classList.toggle("is-active", i === index);
    });
  }

  if (steps.length) {
    var stapTicking = false;

    function zetStap() {
      var midden = window.innerHeight / 2;
      var beste = 0;
      var besteAfstand = Infinity;
      steps.forEach(function (step, i) {
        var r = step.getBoundingClientRect();
        var afstand = Math.abs(r.top + r.height / 2 - midden);
        if (afstand < besteAfstand) {
          besteAfstand = afstand;
          beste = i;
        }
      });
      activeStep(beste);

      // De lijn van het leerpad kleurt op tot de stap die je leest.
      if (rail) {
        var eerste = steps[0].getBoundingClientRect();
        var laatste = steps[steps.length - 1].getBoundingClientRect();
        var totaal = laatste.top + laatste.height - eerste.top;
        var gedaan = midden - eerste.top;
        var deel = Math.min(Math.max(gedaan / totaal, 0), 1);
        rail.style.setProperty("--path-progress", deel.toFixed(3));
      }
    }

    var bijScroll = function () {
      if (stapTicking) return;
      stapTicking = true;
      requestAnimationFrame(function () {
        zetStap();
        stapTicking = false;
      });
    };

    window.addEventListener("scroll", bijScroll, { passive: true });
    window.addEventListener("resize", bijScroll);
    zetStap();
  }

  /* --- Parallax op de werkbeelden ---------------------------------------- */
  var media = Array.prototype.slice.call(
    document.querySelectorAll(".work-card__media img:not(.fallback)")
  );

  function parallax() {
    var vh = window.innerHeight;
    media.forEach(function (img) {
      var parent = img.parentElement;
      if (!parent) return;
      var box = parent.getBoundingClientRect();
      if (box.bottom < 0 || box.top > vh) return;
      var center = (box.top + box.height / 2 - vh / 2) / vh;
      img.style.setProperty("--ty", (center * 26).toFixed(1) + "px");
    });
  }

  if (media.length && !reduceMotion) {
    var ticking = false;
    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          parallax();
          ticking = false;
        });
      },
      { passive: true }
    );
    window.addEventListener("resize", parallax);
    parallax();
  }

  /* --- Ontbrekende foto's: toon de illustratie --------------------------- */
  document.querySelectorAll("img[data-fallback]").forEach(function (img) {
    img.addEventListener("error", function () {
      img.remove();
    });
  });

  /* --- Prijsconfigurator -------------------------------------------------- */
  var PRIJZEN = {
    website: { label: "Website", vanaf: 2500 },
    webapp: { label: "Webapp", vanaf: 5000 },
    platform: { label: "Platform of klantportaal", vanaf: 10000 },
    automatisering: { label: "Alleen automatisering", vanaf: 0 },
    koppeling: 2000,
    workflow: 5000,
    onderhoud: 175
  };
  var MAX_KOPPELINGEN = 5;

  var euro = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  });

  function bedrag(n) {
    return euro.format(n).replace(/\s/g, "");
  }

  var priceForm = document.querySelector("[data-price]");

  if (priceForm) {
    var rowsEl = priceForm.parentElement.querySelector("[data-price-rows]");
    var totalEl = document.querySelector("[data-price-total]");
    var briefLink = document.querySelector("[data-price-to-brief]");
    var aantal = priceForm.querySelector('input[name="koppelingen"]');

    function keuze() {
      var gekozen = priceForm.querySelector('input[name="pakket"]:checked');
      var aantalWaarde = parseInt(priceForm.querySelector('input[name="koppelingen"]').value || "0", 10) || 0;
      var aan = function (naam) {
        var veld = priceForm.querySelector('input[name="' + naam + '"]');
        return veld ? veld.checked : false;
      };
      return {
        soort: gekozen ? gekozen.value : "website",
        koppelingen: Math.min(Math.max(aantalWaarde, 0), MAX_KOPPELINGEN),
        workflow: aan("workflow"),
        ai: aan("ai"),
        onderhoud: aan("onderhoud")
      };
    }

    function bereken(k) {
      var regels = [];
      var soort = PRIJZEN[k.soort];
      if (soort.vanaf) {
        regels.push({ label: soort.label, tekst: "vanaf " + bedrag(soort.vanaf) });
      }
      var koppelingen = k.soort === "automatisering" && !k.koppelingen && !k.workflow ? 1 : k.koppelingen;
      if (koppelingen) {
        regels.push({
          label: koppelingen === 1 ? "Koppeling of automatisering" : koppelingen + " koppelingen of automatiseringen",
          tekst: "vanaf " + bedrag(koppelingen * PRIJZEN.koppeling)
        });
      }
      if (k.workflow) {
        regels.push({ label: "Complete eerste workflow", tekst: "vanaf " + bedrag(PRIJZEN.workflow) });
      }
      if (k.ai) {
        regels.push({ label: "AI-integratie", tekst: "op aanvraag" });
      }
      if (k.onderhoud) {
        regels.push({ label: "Onderhoud", tekst: bedrag(PRIJZEN.onderhoud) + " per maand", perMaand: true });
      }
      var eenmalig = regels
        .filter(function (r) {
          return !r.perMaand && r.tekst.indexOf("vanaf") === 0;
        })
        .reduce(function (sum, r) {
          return sum + parseInt(r.tekst.replace(/[^0-9]/g, ""), 10);
        }, 0);
      return { regels: regels, eenmalig: eenmalig, perMaand: k.onderhoud ? PRIJZEN.onderhoud : 0 };
    }

    var mascot = document.querySelector("[data-mascot]");

    function teken(k) {
      var p = bereken(k);
      rowsEl.replaceChildren();
      p.regels.forEach(function (regel) {
        var div = document.createElement("div");
        div.className = "price__row";
        var label = document.createElement("span");
        label.textContent = regel.label;
        var value = document.createElement("span");
        value.textContent = regel.tekst;
        div.append(label, value);
        rowsEl.append(div);
      });
      var totaal = "vanaf " + bedrag(p.eenmalig) + " eenmalig";
      if (p.perMaand) totaal += " (+ " + bedrag(p.perMaand) + " per maand)";
      totalEl.textContent = totaal;
      if (briefLink) {
        briefLink.dataset.keuze = k.soort;
        briefLink.dataset.koppelingen = String(k.koppelingen);
      }
      // De mascotte reageert op de nieuwe prijs.
      if (mascot && !reduceMotion) {
        mascot.classList.remove("is-happy");
        void mascot.offsetWidth;
        mascot.classList.add("is-happy");
      }
    }

    priceForm.addEventListener("input", function () {
      teken(keuze());
    });

    priceForm.addEventListener("change", function () {
      teken(keuze());
    });

    priceForm.querySelectorAll("[data-stap]").forEach(function (knop) {
      knop.addEventListener("click", function () {
        var n = parseInt(aantal.value, 10) || 0;
        n = Math.min(Math.max(n + Number(knop.dataset.stap), 0), MAX_KOPPELINGEN);
        aantal.value = String(n);
        aantal.dispatchEvent(new Event("input", { bubbles: true }));
      });
    });

    teken(keuze());
  }

  /* --- De brief: keuze uit de prijzen overnemen ---------------------------- */
  var briefForm = document.querySelector("[data-brief]");

  if (briefLink) {
    briefLink.addEventListener("click", function () {
      if (!briefForm) return;
      var soort = briefLink.dataset.keuze;
      var koppelingen = parseInt(briefLink.dataset.koppelingen || "0", 10);
      var map = {
        website: "Website",
        webapp: "Webapp",
        platform: "Webapp",
        automatisering: "Koppeling"
      };
      briefForm.querySelectorAll('input[name="wat"]').forEach(function (input) {
        input.checked = input.value === map[soort];
      });
      if (koppelingen > 0) {
        var koppeling = briefForm.querySelector('input[name="wat"][value="Koppeling"]');
        if (koppeling) koppeling.checked = true;
      }
    });
  }

  /* --- Formulier: validatie, statussen, versturen -------------------------- */
  if (briefForm) {
    var statusEl = briefForm.querySelector("[data-brief-status]");
    var submitEl = briefForm.querySelector("[data-brief-submit]");
    var resultEl = document.querySelector("[data-brief-result]");
    var MAIL = "schreuderdarren@gmail.com";

    function zetStatus(tekst, state) {
      statusEl.textContent = tekst;
      if (state) statusEl.dataset.state = state;
      else delete statusEl.dataset.state;
    }

    function foutVoor(naam, bericht) {
      var veld = briefForm.querySelector('[name="' + naam + '"]');
      var errorEl = briefForm.querySelector('[data-error-for="' + naam + '"]');
      if (errorEl) errorEl.textContent = bericht || "";
      if (veld && bericht) {
        veld.setAttribute("aria-invalid", "true");
      } else if (veld) {
        veld.removeAttribute("aria-invalid");
      }
    }

    function valideer() {
      var fouten = 0;
      var naam = briefForm.elements.naam.value.trim();
      var email = briefForm.elements.email.value.trim();
      var wat = briefForm.querySelectorAll('input[name="wat"]:checked');

      foutVoor("naam", naam ? "" : "Vul je naam in.");
      if (!naam) fouten++;

      var mailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
      foutVoor("email", mailOk ? "" : "Vul een geldig e-mailadres in.");
      if (!mailOk) fouten++;

      foutVoor("wat", wat.length ? "" : "Kies minstens één optie.");
      if (!wat.length) fouten++;

      return fouten;
    }

    briefForm.addEventListener("input", function (e) {
      if (e.target.name === "naam" || e.target.name === "email") {
        foutVoor(e.target.name, "");
      }
      if (e.target.name === "wat") foutVoor("wat", "");
    });

    briefForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var fouten = valideer();

      if (fouten > 0) {
        zetStatus(
          "Er ontbreken " + fouten + " velden. Controleer de gemarkeerde velden.",
          "fout"
        );
        var eerste = briefForm.querySelector('[aria-invalid="true"]');
        if (eerste) eerste.focus();
        return;
      }

      var data = new FormData(briefForm);
      var brief = {
        naam: data.get("naam"),
        bedrijf: data.get("bedrijf") || "",
        email: data.get("email"),
        wanneer: data.get("wanneer"),
        wat: data.getAll("wat"),
        vastloopt: data.get("vastloopt") || "",
        prijs: totalEl ? totalEl.textContent : ""
      };

      function mailLinkVoor(b) {
        var onderwerp = "Nieuwe aanvraag via de website";
        var inhoud =
          "Naam: " + b.naam + "\n" +
          "Bedrijf: " + (b.bedrijf || "-") + "\n" +
          "E-mail: " + b.email + "\n" +
          "Wanneer: " + (b.wanneer || "-") + "\n" +
          "Wat: " + (b.wat || []).join(", ") + "\n" +
          "Indicatie: " + (b.prijs || "-") + "\n\n" +
          (b.vastloopt || "");
        return (
          "mailto:" + MAIL +
          "?subject=" + encodeURIComponent(onderwerp) +
          "&body=" + encodeURIComponent(inhoud)
        );
      }

      // Het resultaat staat los van het formulier: de bezoeker ziet wat er
      // gebeurd en kan nog een vraag sturen.
      // Een kleine vrolijke viering als de vraag is verstuurd.
      var kleuren = ["#f8b828", "#48d888", "#38b8f8", "#f87888", "#c888f8"];

      function viering() {
        if (reduceMotion || !resultEl) return;
        for (var i = 0; i < 18; i++) {
          var stuk = document.createElement("span");
          stuk.className = "confetti";
          stuk.style.background = kleuren[i % kleuren.length];
          stuk.style.setProperty("--dx", (Math.random() - 0.5) * 320 + "px");
          stuk.style.setProperty("--dy", -60 - Math.random() * 180 + "px");
          stuk.style.setProperty("--rot", (Math.random() - 0.5) * 720 + "deg");
          stuk.style.animationDelay = Math.random() * 180 + "ms";
          resultEl.append(stuk);
          (function (el) {
            setTimeout(function () {
              el.remove();
            }, 1400);
          })(stuk);
        }
      }

      function toonResultaat(tekst, mailHref) {
        briefForm.reset();
        briefForm.hidden = true;
        if (!resultEl) return;
        resultEl.hidden = false;
        var regel = resultEl.querySelector("[data-result-text]");
        if (regel) regel.textContent = tekst;
        var link = resultEl.querySelector("[data-result-mail]");
        if (link && mailHref) link.href = mailHref;
        var opnieuw = resultEl.querySelector("[data-brief-opnieuw]");
        if (opnieuw) opnieuw.focus();
        viering();
      }

      submitEl.disabled = true;
      zetStatus("Bezig met versturen…", "bezig");

      fetch("/api/brief", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(brief)
      })
        .then(function (response) {
          if (!response.ok) throw new Error("HTTP " + response.status);
          return response.json();
        })
        .then(function (antwoord) {
          zetStatus(
            (antwoord && antwoord.antwoord) ||
              "Bedankt! Je vraag staat bij de maker.",
            "ok"
          );
          toonResultaat(
            (antwoord && antwoord.antwoord) ||
              "Je vraag staat bij de maker. Je krijgt binnen één werkdag antwoord.",
            mailLinkVoor(brief)
          );
        })
        .catch(function () {
          // Geen api beschikbaar (statische host): val terug op de e-mailapp.
          zetStatus(
            "Versturen lukte niet. Gebruik de mailknop hieronder, dan lezen we je vraag alsnog.",
            "fout"
          );
          toonResultaat(
            "Versturen lukte niet. Mail je vraag via de knop hieronder, dan lezen we hem alsnog.",
            mailLinkVoor(brief)
          );
        })
        .finally(function () {
          submitEl.disabled = false;
        });
    });

    var opnieuwKnop = document.querySelector("[data-brief-opnieuw]");
    if (opnieuwKnop) {
      opnieuwKnop.addEventListener("click", function () {
        briefForm.hidden = false;
        if (resultEl) resultEl.hidden = true;
        zetStatus("", null);
        var eerste = briefForm.querySelector("input, select, textarea");
        if (eerste) eerste.focus();
      });
    }
  }
})();
