import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", padding: 24, background: "linear-gradient(135deg,#eff6ff,#e0f2fe,#ecfeff)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Image src="/logo-qss.png" alt="Logo Q.S.S" width={90} height={90} />
          <div>
            <h1 style={{ fontSize: 40, margin: 0 }}>Q.S.S</h1>
            <p style={{ margin: "6px 0 0", color: "#334155" }}>Quittez votre travail sans stress</p>
          </div>
        </div>

        <div style={{ marginTop: 28, padding: 20, borderRadius: 18, background: "rgba(255,255,255,0.75)" }}>
          <h2 style={{ marginTop: 0 }}>Bienvenue 👋</h2>
          <p style={{ color: "#334155", lineHeight: 1.6 }}>
            Pour moins d’1€, obtenez un courrier de démission personnalisé.
            Option envoi recommandé avec AR + service : tarifs affichés dans le parcours.
          </p>

          <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/pitch-deck" style={{ padding: "12px 16px", borderRadius: 14, background: "#2563eb", color: "white", textDecoration: "none" }}>
              Voir la présentation investisseurs
            </Link>

            <a href="mailto:aide@quittersansstress.fr" style={{ padding: "12px 16px", borderRadius: 14, background: "#0ea5e9", color: "white", textDecoration: "none" }}>
              Contacter par email
            </a>

            <a href="https://wa.me/33695470979" style={{ padding: "12px 16px", borderRadius: 14, background: "#22c55e", color: "white", textDecoration: "none" }}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
