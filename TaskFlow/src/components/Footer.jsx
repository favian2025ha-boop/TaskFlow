const Footer = () => {
  const currentYear = new Date().getFullYear();
  const version = "v1.0.2";

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>&copy; {currentYear} <strong>TaskFlow</strong>. Todos los derechos reservados.</p>
        <div className="footer-links">
          <span>Versión {version}</span>
          <span className="separator">|</span>
          <a href="#soporte">Soporte Técnico</a>
          <a href="#privacidad">Privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;