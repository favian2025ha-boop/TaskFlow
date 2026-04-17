const Sidebar = () => {
  const menuItems = [
    { name: 'Todas las tareas', },
    { name: 'Urgentes', },
    { name: 'Completadas',},
    { name: 'Proyectos',}
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        
        <h2>Task<span className="brand-accent">Flow</span></h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className={`nav-item ${index === 0 ? 'active' : ''}`}>
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-upgrade">
        <p>¿Necesitas más?</p>
        <button className="btn-upgrade">Pasar a Pro</button>
      </div>
    </aside>
  );
};

export default Sidebar;