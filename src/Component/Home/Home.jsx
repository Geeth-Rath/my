import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((data) => {
        setData(data.data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("do you need to delete?");

    if (confirm) {
      await axios
        .delete("http://localhost:3000/users/" + id)
        .then((req) => {
          window.location.reload();
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <div className="container">
      <div className="d-flex flex-collum justify-content-center align-item-center bg-light">
        <h1 className="title">List of Names</h1>
      </div>
      <div className="add-button d-flex justify-content-end">
        <Link className="btn btn-success" to={"/create"}>
          Add +
        </Link>
      </div>
      <div className="name-list rounded  bg-white border shadow p-4 d-flex justify-content-center align-item-center">
        <table class="table table-stripend">
          <thead>
            <tr>
              <th scope="col">Id11</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.website}</td>
                <td>
                  <Link
                    type="button"
                    to={`/read/${e.id}`}
                    class="btn btn-primary"
                  >
                    Read
                  </Link>
                  <Link
                    type="button"
                    class="btn btn-success"
                    to={`/update/${e.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={(d) => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
