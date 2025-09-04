import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f7fafc", padding: 24 }}>
      <div style={{ background: "#fff", borderRadius: 24, padding: 24, maxWidth: 480, width: "100%", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Merci pour votre commande !</h1>
        <p style={{ color: "#444", marginBottom: 20 }}>
          Votre paiement a été validé et nous préparons l’expédition de votre spray StepGo.
        </p>
        <Link to="/" style={{ textDecoration: "none", fontWeight: 800 }}>
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}

