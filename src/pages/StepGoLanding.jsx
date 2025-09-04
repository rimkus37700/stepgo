// src/pages/StepGoLanding.jsx
const urlPack1 = "https://buy.stripe.com/test_link_pack1";
const urlPack2 = "https://buy.stripe.com/test_link_pack2";
const urlPack3 = "https://buy.stripe.com/test_link_pack3";

export default function StepGoLanding() {
  const star = "★";

  return (
    <div style={{ fontFamily: "system-ui, Arial", color: "#0f172a", background: "#f8fafc" }}>
      {/* Bandeau top confiance */}
      <div style={{ background: "#0ea5e9", color: "#0b1120", textAlign: "center", padding: "8px 12px", fontWeight: 700 }}>
        Livraison 48h • Satisfait ou remboursé 30 jours • Paiement sécurisé
      </div>

      {/* HERO */}
      <section style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 24, gridTemplateColumns: "1.2fr 1fr" }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
            <h1 style={{ fontSize: 42, fontWeight: 800, marginBottom: 12 }}>
              Step<span style={{ color: "#06b6d4" }}>Go</span> – Spray nettoyant semelles
            </h1>
            <p style={{ fontSize: 18, color: "#334155", marginBottom: 18 }}>
              Nettoyez vos semelles en 5 secondes avant de monter en voiture. 
              <strong> Évitez non seulement la saleté, mais aussi les microbes</strong> qui s’accrochent sous les chaussures
              et que l’on transporte ensuite partout : voiture, maison, bureau.
            </p>
            <ul style={{ margin: "0 0 18px 18px", color: "#334155", lineHeight: 1.6 }}>
              <li>Action express : pulvériser, essuyer, c’est propre</li>
              <li>Compatible toutes matières (caoutchouc, EVA, TPU…)</li>
              <li>Format compact parfait pour la boîte à gants</li>
            </ul>
            <a
              href={urlPack1}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 22px",
                borderRadius: 999,
                background: "linear-gradient(90deg,#34d399,#22d3ee)", // vert d'eau → cyan
                color: "#111827",
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                marginRight: 12
              }}
            >
              Commander maintenant
            </a>
            <a href="#packs" style={{ fontWeight: 700, color: "#0284c7", textDecoration: "none" }}>
              Voir les packs ↓
            </a>
          </div>

          {/* Avant / Après (adulte) */}
          <div style={{ background: "#fff", borderRadius: 16, padding: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <div style={{ fontWeight: 800, marginBottom: 8, textAlign: "center" }}>Avant</div>
                <img
                  src="/avant.jpg" // 👉 mets ton image dans public/avant.jpg
                  alt="Semelle sale avec saletés et microbes avant nettoyage"
                  style={{ width: "100%", height: 240, objectFit: "cover", borderRadius: 12, border: "1px solid #e2e8f0" }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 800, marginBottom: 8, textAlign: "center" }}>Après</div>
                <img
                  src="/apres.jpg" // 👉 mets ton image dans public/apres.jpg
                  alt="Semelle propre et saine après StepGo"
                  style={{ width: "100%", height: 240, objectFit: "cover", borderRadius: 12, border: "1px solid #e2e8f0" }}
                />
              </div>
            </div>
            <div style={{ fontSize: 12, color: "#64748b", textAlign: "center", marginTop: 8 }}>
              *Images d’illustration. Pour un résultat optimal, pulvériser puis essuyer avec un chiffon microfibre.
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices (dont Hygiène renforcée + icône microbe barré) */}
      <section style={{ padding: "10px 20px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          {[
            { t: "Propreté instantanée", d: "Élimine poussières et salissures en une passe." },
            { t: "Sans traces", d: "Fini les dépôts au sol ou les résidus collants." },
            { t: "Conçu pour la voiture", d: "Format compact + action rapide = parfait avant de monter." },
          ].map((b, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 6px 18px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0" }}>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>{b.t}</div>
              <div style={{ color: "#475569" }}>{b.d}</div>
            </div>
          ))}

          {/* Carte hygiène avec icône */}
          <div style={{ background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 6px 18px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0", display: "flex", gap: 12 }}>
            <img
              src="/microbe.svg" // 👉 mets l'icône dans public/microbe.svg (icône microbe barré)
              alt="Réduction des microbes sous les semelles"
              style={{ width: 40, height: 40 }}
            />
            <div>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>Hygiène renforcée</div>
              <div style={{ color: "#475569" }}>
                Réduit les microbes et bactéries qui voyagent sous les chaussures et se déposent dans la voiture et à la maison.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avant / Après ENFANT (même couleur de semelle, très crédible) */}
      <section style={{ padding: "30px 20px 10px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", background: "#fff", borderRadius: 16, padding: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 12px" }}>Pour toute la famille</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <div style={{ fontWeight: 800, marginBottom: 8, textAlign: "center" }}>Avant (enfant)</div>
              <img
                src="/enfant_avant.jpg" // 👉 mets l'image dans public/enfant_avant.jpg
                alt="Semelle enfant sale avec microbes avant nettoyage"
                style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 12, border: "1px solid #e2e8f0" }}
              />
            </div>
            <div>
              <div style={{ fontWeight: 800, marginBottom: 8, textAlign: "center" }}>Après (enfant)</div>
              <img
                src="/enfant_apres.jpg" // 👉 mets l'image dans public/enfant_apres.jpg
                alt="Semelle enfant propre après StepGo"
                style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 12, border: "1px solid #e2e8f0" }}
              />
            </div>
          </div>
          <div style={{ fontSize: 12, color: "#64748b", marginTop: 8 }}>
            Idéal avant de monter en voiture après l’école, le sport ou le parc.
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section id="packs" style={{ padding: "36px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8, textAlign: "center" }}>Choisissez votre pack</h2>
          <p style={{ textAlign: "center", color: "#475569", marginBottom: 22 }}>
            Livraison 48h • Paiement sécurisé • Retours sous 30 jours
          </p>
          <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
            {[
              { titre: "1 Spray", prix: "19,90 €", url: urlPack1 },
              { titre: "2 Sprays", prix: "34,90 €", url: urlPack2 },
              { titre: "3 Sprays", prix: "49,90 €", url: urlPack3 },
            ].map((p, i) => (
              <div key={i} style={{ background: "#ffffff", borderRadius: 16, padding: 20, boxShadow: "0 10px 25px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0" }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>{p.titre}</h3>
                <p style={{ margin: "8px 0 16px", fontWeight: 700, fontSize: 18 }}>{p.prix}</p>
                <a
                  href={p.url}
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
        </div>
      </section>

      {/* AVIS CLIENTS */}
      <section style={{ padding: "8px 20px 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 16 }}>Ils utilisent StepGo</h2>
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {[
              { nom: "Nicolas D.", note: 5, texte: "Super pratique avant de monter en voiture. Plus de traces, top !" },
              { nom: "Sarah M.", note: 5, texte: "J’avais un doute, mais c’est efficace et rapide. Je recommande." },
              { nom: "Rachid K.", note: 4, texte: "Format spray nickel, odeur discrète, semelles comme neuves." },
            ].map((a, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: 16, border: "1px solid #e2e8f0", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>{a.nom}</div>
                <div style={{ color: "#f59e0b", marginBottom: 8 }}>{star.repeat(a.note)}</div>
                <div style={{ color: "#475569" }}>{a.texte}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (avec question Microbes) */}
      <section style={{ padding: "8px 20px 36px", background: "#eef2ff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 16 }}>FAQ</h2>

          <details style={detailsStyle}><summary style={sumStyle}>Est-ce compatible avec toutes les semelles ?</summary><div style={ansStyle}>Oui, StepGo est formulé pour caoutchouc, EVA, TPU et mélanges courants. Toujours tester sur une zone discrète.</div></details>

          <details style={detailsStyle}><summary style={sumStyle}>Odeur ou traces ?</summary><div style={ansStyle}>Odeur discrète, pas de traces si essuyé avec un chiffon propre. Ne pas saturer.</div></details>

          <details style={detailsStyle}><summary style={sumStyle}>Livraison & retours</summary><div style={ansStyle}>Expédition sous 24–48h. Retours sous 30 jours si le produit est intact. Remboursement sous 5–7 jours ouvrés.</div></details>

          <details style={detailsStyle}><summary style={sumStyle}>Est-ce que StepGo agit aussi contre les microbes ?</summary><div style={ansStyle}>En nettoyant vos semelles, vous réduisez les dépôts de poussière, de saletés et de microbes que l’on transporte sans le savoir dans la voiture et la maison.</div></details>
        </div>
      </section>

      {/* TRUST */}
      <section style={{ padding: "24px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          {[
            { t: "Paiement sécurisé", d: "Traitement via Stripe, données chiffrées." },
            { t: "Expédition 48h", d: "Colis préparé sous 24h ouvrées." },
            { t: "Satisfait ou remboursé", d: "30 jours pour changer d’avis." },
          ].map((b, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 12, padding: 16, border: "1px solid #e2e8f0", textAlign: "center", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
              <div style={{ fontWeight: 800, marginBottom: 4 }}>{b.t}</div>
              <div style={{ color: "#475569" }}>{b.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "16px 20px", background: "#0b1120", color: "#e2e8f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <div>© {new Date().getFullYear()} StepGo</div>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="/legal" style={{ color: "#a5b4fc", textDecoration: "none", fontWeight: 700 }}>Mentions & Contact</a>
            <a href={urlPack1} target="_blank" rel="noopener noreferrer" style={{ color: "#34d399", textDecoration: "none", fontWeight: 800 }}>
              Commander
            </a>
          </div>
        </div>
      </footer>

      {/* Petit badge de build pour vérifier le bon déploiement */}
      <div style={{ textAlign: "center", marginTop: 10, color: "#64748b", fontSize: 12 }}>
        v1.1 – build {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}

// Styles réutilisés pour la FAQ
const detailsStyle = { background: "#fff", borderRadius: 12, padding: 12, marginBottom: 10, border: "1px solid #e2e8f0" };
const sumStyle = { cursor: "pointer", fontWeight: 800 };
const ansStyle = { color: "#475569", marginTop: 8 };

