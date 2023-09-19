import React, { useEffect, useReducer, useState } from "react";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "../taskReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('tasks')) || []
}

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [], init);
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
    setTaskInput("");
  };

  const handleDeleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const handleToggleTask = (id) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: id,
    });
  };
  return (
    <TaskContext.Provider value={{
      // Atributes
      tasks,
      taskInput,
      totalTasks: tasks.length,
      pendingTasks: tasks.filter( task => !task.done ).length,
      // Methods
      setTaskInput,
      handleNewTask,
      handleDeleteTask,
      handleToggleTask
    }}>
      {children}
    </TaskContext.Provider>
  );
};
