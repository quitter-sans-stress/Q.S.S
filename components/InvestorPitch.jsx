import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SLIDE_INTERVAL_MS = 5000;

export default function InvestorPitch() {
  const slides = useMemo(
    () => [
      {
        title: "Un service humain et moderne",
        text:
          "Q.S.S aide les salariés à quitter leur emploi sans confrontation ni stress. Pour moins d’1€, obtenez un courrier personnalisé.",
        tone: "tone1",
      },
      {
        title: "Pourquoi maintenant ?",
        text:
          "La pression sociale et le stress lié à la démission sont bien réels. Q.S.S répond à une demande croissante.",
        tone: "tone2",
      },
      {
        title: "Notre offre",
        text:
          "Lettre personnalisée : 0,99 € — Envoi postal recommandé avec AR : 7,56 € — Service complet (lettre + envoi + suivi) : 15,90 €.",
        tone: "tone3",
      },
      {
        title: "Nos utilisateurs",
        text:
          "Ceux qui ne savent pas écrire, lire, ou qui redoutent l’échange direct avec leur employeur. Nous les assistons de A à Z.",
        tone: "tone4",
      },
      {
        title: "Opportunité d’investissement",
        text:
          "Croissance rapide sur un marché inexploité. Modèle extensible en Europe avec intégration de services juridiques.",
        tone: "tone5",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <main className="page">
      <header className="header">
        <div className="logoWrap" aria-label="Logo Q.S.S">
          <Image
            src="/logo-qss.png"
            alt="Q.S.S — Quittez votre travail sans stress"
            width={260}
            height={146}
            priority
          />
        </div>
      </header>

      <section className="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            className={`bubble ${slide.tone}`}
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="title">{slide.title}</h1>
            <p className="text">{slide.text}</p>

            <div className="progress" aria-label="Progression">
              {slides.map((s, i) => (
                <span
                  key={s.title}
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Aller au slide ${i + 1}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setIndex(i);
                  }}
                />
              ))}
            </div>

            <p className="hint">
              Défilement automatique • Cliquez sur les points pour naviguer
            </p>
          </motion.div>
        </AnimatePresence>
      </section>

      <footer className="footer">
        <span>
          Contact : aide@quittersansstress.fr • WhatsApp : +33 6 95 47 09 79
        </span>
      </footer>
    </main>
  );
}
