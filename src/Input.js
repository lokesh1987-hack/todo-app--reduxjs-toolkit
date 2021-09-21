import React from "react";
import { useState } from "react";
import { add } from "./Redux/changeSlice";
import { useDispatch } from "react-redux";

function Input() {
  const [task, setTask] = useState("");
  const [describe, setDescribe] = useState("");
  const [date, setDate] = useState("");
  const disp = useDispatch();

  return (
    <div className="container-sm container-md">
      <div className="h1 text-center mt-3 mb-3">To Do List</div>
      <div className="row">
        <div className="input-group col-sm-3 mt-3 mb-3 justify-content-center">
          <span className="input-group-text">Task</span>
          <input
            className="col-sm-3"
            aria-label="task"
            onChange={(event) => {
              setTask(event.target.value);
            }}
            type="text"
          />
        </div>
        <div className="input-group col-sm-3 mt-3 mb-3 justify-content-center">
          <span className="input-group-text">Description</span>
          <input
            className="col-sm-3"
            aria-label="Description"
            onChange={(event) => {
              setDescribe(event.target.value);
            }}
            type="text"
          />
        </div>
        <div className="input-group col-sm-3 mt-3 mb-3 justify-content-center">
          <span className="input-group-text">Pick Date</span>
          <input
            className="col-sm-3"
            aria-label="Pick_Date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
            type="date"
          />
        </div>
        <div className="d-flex justify-content-center mt-3 mb-3">
          <button
            className="btn btn-primary col-sm-3"
            onClick={() => {
              disp(add({ task: task, describe: describe, date: date }));
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;