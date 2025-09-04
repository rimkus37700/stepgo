export default function StepGoLanding() {
  return (
    <div style={{ minHeight: "100vh", padding: 32, fontFamily: "system-ui, Arial" }}>
      <h1 style={{ fontSize: 42, fontWeight: 800, marginBottom: 12 }}>
        StepGo – Spray nettoyant semelles
      </h1>

      <p style={{ fontSize: 18, color: "#444", marginBottom: 24, maxWidth: 720 }}>
        Nettoyez vos semelles juste avant de monter en voiture pour éviter de salir l’intérieur,
        surtout après un gros nettoyage. Spray rapide, propre, sans traces.
      </p>

      {/* CTA principal */}
      <a
        href="https://buy.stripe.com/test_link_pack1"  /* ← remplace par TON vrai lien Stripe */
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "14px 22px",
          borderRadius: 999,
          background: "linear-gradient(90deg,#34d399,#22d3ee)",
          color: "#111",
          fontWeight: 800,
          textDecoration: "none",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          marginBottom: 40
        }}
      >
        Commander maintenant
      </a>

      {/* (Optionnel) 3 packs prêts à vendre */}
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", maxWidth: 900 }}>
        {[
          { titre: "1 Spray", prix: "19,90 €", url: "https://buy.stripe.com/test_link_pack1" },
          { titre: "2 Sprays", prix: "34,90 €", url: "https://buy.stripe.com/test_link_pack2" },
          { titre: "3 Sprays", prix: "49,90 €", url: "https://buy.stripe.com/test_link_pack3" },
        ].map((p, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 16, padding: 16, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>{p.titre}</h3>
            <p style={{ margin: 0, color: "#222", fontWeight: 700, marginBottom: 12 }}>{p.prix}</p>
            <a
              href={p.url}  /* ← remplace chaque URL par ton lien Stripe pour chaque pack */
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 16px",
                borderRadius: 999,
                background: "linear-gradient(90deg,#34d399,#22d3ee)",
                color: "#111",
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
    </div>
  );
}

