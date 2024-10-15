import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Due Date: {task.dueDate}</p>
              <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
