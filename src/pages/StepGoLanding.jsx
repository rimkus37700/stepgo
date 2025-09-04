export default function StepGoLanding() {
  return (
    <div style={{ minHeight: "100vh", padding: 32, fontFamily: "system-ui, Arial", background: "#f8fafc" }}>
      {/* HERO */}
      <section style={{ textAlign: "center", padding: "40px 24px", marginBottom: 32, background: "#ffffff", borderRadius: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
        <h1 style={{ fontSize: 42, fontWeight: 800, marginBottom: 12, color: "#0f172a" }}>
          StepGo – Spray nettoyant semelles
        </h1>
        <p style={{ fontSize: 18, color: "#334155", margin: "0 auto 24px", maxWidth: 820 }}>
          Évitez de salir votre voiture après un gros nettoyage : en quelques secondes, StepGo
          nettoie vos semelles avant de monter à bord. Propre, rapide, sans traces.
        </p>

        <a
          href="https://buy.stripe.com/test_link_pack1" /* ← remplace par TON vrai lien Stripe */
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "14px 22px",
            borderRadius: 999,
            background: "linear-gradient(90deg,#34d399,#22d3ee)",
            color: "#111827",
            fontWeight: 800,
            textDecoration: "none",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        >
          Commander maintenant
        </a>
      </section>

      {/* OFFRES */}
      <section style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", marginBottom: 12, textAlign: "center" }}>
          Choisissez votre pack
        </h2>
        <p style={{ textAlign: "center", color: "#475569", marginBottom: 24 }}>
          Livraison 48h – Satisfait ou remboursé 30 jours
        </p>

        <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
          {[
            { titre: "1 Spray", prix: "19,90 €", url: "https://buy.stripe.com/test_link_pack1" },
            { titre: "2 Sprays", prix: "34,90 €", url: "https://buy.stripe.com/test_link_pack2" },
            { titre: "3 Sprays", prix: "49,90 €", url: "https://buy.stripe.com/test_link_pack3" },
          ].map((p, i) => (
            <div key={i} style={{ background: "#ffffff", borderRadius: 16, padding: 20, boxShadow: "0 10px 25px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: "#0f172a" }}>{p.titre}</h3>
              <p style={{ margin: "8px 0 16px", color: "#0f172a", fontWeight: 700, fontSize: 18 }}>{p.prix}</p>
              <a
                href={p.url}  /* ← mets ici tes vrais liens Stripe */
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 16px",
                  borderRadius: 999,
                  background: "linear-gradient(90deg,#34d399,#22d3ee)",
                  color: "#111827",
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.12)"
                }}
              >
                Commander
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* BADGE VERSION (debug pour vérifier le bon déploiement) */}
      <div style={{ textAlign: "center", marginTop: 40, color: "#64748b" }}>
        v1.0 – build {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}

