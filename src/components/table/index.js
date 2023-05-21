import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./style.module.css";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/students/")
      .then((response) => {
        setData(response.data.students);
      })
      .catch((err) => console.log(err));
  }, [data]);

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/students/${id}`).then(() => {
      alert("Post deleted!");
    });
  };
  return (
    <div className={style.container}>
      <h1>Students Data</h1>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Field</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((d) => (
            <tr key={d.email}>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.age}</td>
              <td>{d.field}</td>
              <td>
                <button
                  style={{
                    padding: "0.9rem 1.2rem",
                    backgroundColor: "red   ",
                    borderRadius: "0.6rem",
                    border: "none",
                    color: "#fff",
                    fontSize: "1.8rem",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteHandler(d?._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
