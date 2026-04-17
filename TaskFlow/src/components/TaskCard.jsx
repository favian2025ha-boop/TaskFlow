const TaskCard = ({ title, category, status }) => {
  return (
    <div className="task-card"> 
      <span className="category-tag">{category}</span>
      <h3>{title}</h3>
      <div className="task-footer">
      
        <span className={`status-text ${status}`}>
          {status === 'done' ? ' Completada' : ' Pendiente'}
        </span>
        <button className="btn-action">Editar</button>
      </div>
    </div>
  );
};

export default TaskCard;