import logo from '../assets/logo.png'; 

const Header = () => {
  const userName = "Harold Rodriguez";
  const userRole = "Administrador"; 
  const today = new Date().toLocaleDateString();

  const handleLogout = () => {
    console.log("Cerrando sesión...");
   
  };

  return (
    <header className="main-header">
      <div className="header-left">
        <img src={logo} alt="TaskFlow Logo" className="logo" />
        <div className="search-wrapper">
          <input type="text" placeholder="Buscar tareas..." className="search-bar" />
        </div>
      </div>

      <div className="header-right">
        <span className="header-date">{today}</span>
        
        <div className="user-section">
          <div className="user-profile">
            <div className="user-info">
              <span className="user-name">Hola, <strong>{userName}</strong></span>
              <span className="user-badge">{userRole}</span>
            </div>
            
            <div className="user-avatar">{userName.charAt(0)}</div>
          </div>

          <button className="btn-logout" onClick={handleLogout} title="Cerrar Sesión">
            <span className="logout-icon">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;