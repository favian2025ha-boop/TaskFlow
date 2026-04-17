import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TaskCard from './components/TaskCard';
import Footer from './components/Footer'; // <--- Importación
import './App.css';

function App() {
  const tasks = [
    { id: 1, title: "Configurar entorno Vite", category: "Frontend", status: "done" },
    { id: 2, title: "Diseñar arquitectura de carpetas", category: "Estructura", status: "pending" },
    { id: 3, title: "Crear componentes funcionales", category: "React", status: "pending" },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <section className="content-body">
          <div className="section-header">
            <h1>Panel de Control</h1>
            <button className="btn-add">+ Nueva Tarea</button>
          </div>
          
          <div className="tasks-grid">
            {tasks.map(task => (
              <TaskCard 
                key={task.id}
                title={task.title}
                category={task.category}
                status={task.status}
              />
            ))}
          </div>
        </section>
        <Footer /> {/* <--- Componente renderizado al final */}
      </main>
    </div>
  );
}

export default App;