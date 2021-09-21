import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { del } from "./Redux/changeSlice";

function Output() {
  const mystate = useSelector((state) => state.changeSlice);
  const desp = useDispatch();
  let dateCheck = "";
  let current_date = new Date();
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    dateCheck = year + month + day;

    return [year, month, day].join("-");
  }

  let currentDate = formatDate(current_date);
  return (
    <div className="m-5 text-center">
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Task</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Submition Date</th>
            <th scope="col">Submition Date</th>
          </tr>
        </thead>
        <tbody>
          {mystate.value.map((item, index) => {
            return (
              // <div>
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item.task}</td>
                <td>{item.describe}</td>
                <td>{item.date}</td>

                <td>
                  {item.date.replace(/-/g, "") === dateCheck ? (
                    <p>Due Date is Today</p>
                  ) : item.date.replace(/-/g, "") <= dateCheck ? (
                    <p>Due Date is Today</p>
                  ) : null}
                </td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      desp(del({ in: index }));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              // </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Output;
