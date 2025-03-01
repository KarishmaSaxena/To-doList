import React, { useState } from "react";
import "./styles.css";
function ToDOlist() {
  const [Task, setTask] = useState("");
  const [Description, setDescription] = useState("");
  const [DueDate, setDueDate] = useState("");
  const [Completed, setCompleted] = useState("");
  const [Delete, setDelete] = useState("");

  const AddTask = () => {};

  const DeleteTask = () => {};

  return (
    <div className="todo-wrap ">
      <div className="todo-heading">To-Do List</div>
      <div>
        {" "}
        <input type="text" className="todo-input" placeholder="Enter task" />
        Task
      </div>
      <div>
        <input
          type="text"
          className="todo-description"
          placeholder=" Enter Description"
        />
        Description
      </div>
      <div>
        <input type="date" className="date-input" placeholder="date" /> Date
      </div>
      <div>
        <input type="time" className="time-input" placeholder="time" /> Time
      </div>
      <button className="add-btn" placeholder="Add">
        Add
      </button>
    </div>
  );
}
export default ToDOlist;
