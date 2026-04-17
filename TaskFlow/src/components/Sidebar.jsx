const Sidebar = () => {
  const menuItems = ['Todas las tareas', 'Urgentes', 'Completadas', 'Proyectos'];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2>TaskFlow</h2>
      </div>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;