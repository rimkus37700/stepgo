if (-not (Test-Path .\src\pages)) { mkdir .\src\pages }

@'
export default function Legal() {
  return (
    <div style={{ minHeight: "100vh", padding: 24, fontFamily: "system-ui, Arial", background: "#f8fafc", color: "#0f172a" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Mentions légales & Contact</h1>
        <p style={{ color: "#475569", lineHeight: 1.6 }}>
          <strong>StepGo</strong> – Spray nettoyant semelles<br />
          Forme juridique : Auto-entrepreneur<br />
          SIRET : (à compléter)<br />
          Adresse : (à compléter)<br />
          Email : <a href="mailto:contact@stepgo.fr">contact@stepgo.fr</a>
        </p>

        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 16 }}>Paiement & Sécurité</h2>
        <p style={{ color: "#475569" }}>Paiements traités via Stripe. Nous ne stockons aucune donnée bancaire.</p>

        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 16 }}>Livraison</h2>
        <p style={{ color: "#475569" }}>Expédition sous 24–48h ouvrées. Suivi communiqué par email.</p>

        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 16 }}>Retours & Remboursements</h2>
        <p style={{ color: "#475569" }}>Vous disposez de 30 jours pour nous retourner le produit intact pour remboursement.</p>

        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 16 }}>Données personnelles</h2>
        <p style={{ color: "#475569" }}>Nous respectons le RGPD. Pour toute demande : <a href="mailto:privacy@stepgo.fr">privacy@stepgo.fr</a>.</p>
      </div>
    </div>
  );
}
'@ | Out-File -Encoding utf8 .\src\pages\Legal.jsx

# Vérifie qu'il existe bien
dir .\src\pages
