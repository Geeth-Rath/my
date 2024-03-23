import axios from "axios";
import React, { useEffect, useState } from "react";
import { Await, useParams } from "react-router";
import { Link } from "react-router-dom";


function Read() {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get('http://localhost:3000/users/' + id)
      .then((res) => {
        setData(res.data);
        console.log("id", id);
      })
      .catch((e) => {
        console.log(e);
      });
  },[]);
 
  return (
    <div className="container ">
      {" "}
      <form class="row g-3" >
        <div className="input-area">
          <strong>Name: {data && data.name}</strong>
          <div className="email">Email: {data && data.email}</div>
          <div className="phn">Phone: {data && data.phone}</div>

        </div>
    

        <div class="col-12">
        <Link className="gotoedit btn btn-success" to={`/update/${id}`}>Edit</Link>
        <Link className="goback btn btn-primary" to={'/'}>Back</Link>
        </div>
      </form>
    </div>
  );
}

export default Read;
