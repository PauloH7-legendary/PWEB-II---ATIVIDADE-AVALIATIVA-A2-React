import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const estiloLink = ({ isActive }) => ({
    color: isActive ? "#bd35d5" : "#38374d",
    fontWeight: isActive ? 700 : 400,
    textDecoration: "none",
    borderBottom: isActive
      ? "2px solid #bd35d5"
      : "2px solid transparent",
    paddingBottom: "6px",
  });

  return (
    <footer className="site-footer">
      <nav className="footer-links" aria-label="Navegação do rodapé">
        <NavLink to="/destinos" style={estiloLink}>
          Destinos
        </NavLink>

        <NavLink to="/ofertas" style={estiloLink}>
          Ofertas
        </NavLink>

        <NavLink to="/contato" style={estiloLink}>
          Contato
        </NavLink>
      </nav>

      <div className="footer-wave" aria-hidden="true"></div>
    </footer>
  );
}

export default Footer;