import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";

export const TaskApp = () => {
  const {
    tasks,
    handleDeleteTask,
    taskInput,
    setTaskInput,
    handleNewTask,
    handleToggleTask,
    totalTasks,
    pendingTasks
  } = useContext(TaskContext);
  return (
    <div className="container">
      <h3>TaskApp</h3>
      <div className="d-flex justify-content-start">
        <h5>
          Total: <span>{ totalTasks }</span>
        </h5>
        <h5>
        &nbsp;Pendientes: <span>{ pendingTasks }</span>
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
                  <span
                    className={`align-self-center ${
                      done ? "text-decoration-line-through" : ""
                    }`}
                    onClick={() => handleToggleTask(id)}
                  >
                    {task}
                  </span>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteTask(id)}
                  >
                    DELETE
                  </button>
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
