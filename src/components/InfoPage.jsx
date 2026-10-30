import { Link } from "react-router-dom";
import "./InfoPage.css";
import OfferIllustration from "./OfferIllustration";

function InfoPage({ title, intro, items = [] }) {
  return (
    <main className="info-page">
      <section className="info-content">
        <p className="info-eyebrow">CONNECTFLIGHT</p>

        <h1>{title}</h1>

        <p className="info-intro">{intro}</p>

        <div className="info-cards">
          {items.map((item) => (
            <article className="info-card" key={item.title}>
              {item.illustration && (
         <OfferIllustration type={item.illustration} />
)}
            {item.image && (
  
          <img
          className="info-card-image"
          src={item.image}
          alt={item.imageAlt || item.title}
          loading="lazy"
          />
)}
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <Link className="info-home-link" to="/">
          Voltar para o início
        </Link>
      </section>
    </main>
  );
}

export default InfoPage;