import React, { useEffect, useReducer, useState } from "react";
import { taskReducer } from "./taskReducer";

//import './reduceIntro'


const init = () => {
  return JSON.parse(localStorage.getItem('tasks')) || []
}

export const TaskApp = () => {
  const [tasks, dispatch] = useReducer(taskReducer, [], init);
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  

  const handleNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime(),
      task: taskInput,
      done: false,
    };

    const addNewTask = {
      type: "ADD_TASK",
      payload: newTask,
    };

    dispatch(addNewTask);
    setTaskInput('')
  };

  const handleDeleteTask = (id) => {
    dispatch({
      type:'DELETE_TASK',
      payload: id
    })
  }

  const handleToggleTask = (id) => {
    dispatch({
      type:'TOGGLE_TASK',
      payload: id
    })
  }

  return (
    <div className="container">
      <h3>TaskApp</h3>
      <div className="d-flex justify-content-start">
        <h5>
          Total: <span>10 </span>
        </h5>
        <h5>
          Pendientes: <span>5</span>
        </h5>
      </div>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            {tasks.map(({ id, task, done }) => {
              return (
                <li
                  key={id}
                  className="list-group-item d-flex justify-content-between"
                >
                  <span className={`align-self-center ${done ? "text-decoration-line-through" : ''}`} onClick={ () => handleToggleTask(id) }>{task}</span>
                  <button className="btn btn-danger" onClick={ () => handleDeleteTask(id) }>DELETE</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-5">
          <form action="">
            <input
              type="text"
              className="form-control"
              value={taskInput}
              onChange={(e) => {
                setTaskInput(e.target.value);
              }}
              placeholder="Add New Task..."
            />
            <button onClick={handleNewTask} className="btn btn-primary mt-2">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
