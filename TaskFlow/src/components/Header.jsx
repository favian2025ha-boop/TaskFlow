import logo from '../assets/logo.png'; 

const Header = () => {
  const userName = "Desarrollador";
  const today = new Date().toLocaleDateString();

  return (
    <header className="main-header">
      <div className="header-left">
        <img src={logo} alt="TaskFlow Logo" className="logo" />
        <input type="text" placeholder="Buscar tareas..." className="search-bar" />
      </div>
      <div className="header-right">
        <span>{today}</span>
        <div className="user-profile">
          <span>Hola, <strong>{userName}</strong></span>
        </div>
      </div>
    </header>
  );
};

export default Header;