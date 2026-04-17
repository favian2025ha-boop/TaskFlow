const TaskCard = ({ title, category, status }) => {
  return (
    <div className={`task-card ${status}`}>
      <h3>{title}</h3>
      <span className="category-tag">{category}</span>
      <div className="task-footer">
        <span className="status-text">{status === 'done' ? ' Completada' : ' Pendiente'}</span>
        <button className="btn-action">Editar</button>
      </div>
    </div>
  );
};

export default TaskCard;