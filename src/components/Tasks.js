import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

const Tasks = (props) => {
  const { tasks, deleteTask, toggleReminder } = props;

  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ))}
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func,
  toggleReminder: PropTypes.func,
};

export default Tasks;
