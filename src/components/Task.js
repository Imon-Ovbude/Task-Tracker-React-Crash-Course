import React from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Task = (props) => {
  const { task, deleteTask, toggleReminder } = props;
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          className='fa-times-style'
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func,
  toggleReminder: PropTypes.func,
};

export default Task;
