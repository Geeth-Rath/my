import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function Create() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
    console.log(formdata);
  };

  const handlesubmit = async (e) => {
    
    e.preventDefault();
    const reqest = await axios
      .post('http://localhost:3000/users', formdata)
      .then((e) => {
        console.log("sucessfull");
        navigate("/");
      })
      .catch((e) => {
        console.log("error");
      });

  };
  return (
    <div className="container">
      <form class="row g-3" onSubmit={handlesubmit}>
        <div className="input-area">
          <div class="col-12 ">
            <label for="inputAddress" class="form-label d-flex">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formdata.name}
              class="form-control"
              id="inputName"
              placeholder="Name"
              onChange={onChangeHandle}
            />
          </div>
          <div class="col-12">
            <label for="inputEmail4" class="form-label d-flex">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              class="form-control"
              id="inputEmail4"
              placeholder="email"
              onChange={onChangeHandle}
            />
          </div>

          <div class="col-12 ">
            <label for="inputPhone" name="phone" class="form-label d-flex">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formdata.phone}
              class="form-control"
              id="inputPhone"
              placeholder="+94523855"
              onChange={onChangeHandle}
            />
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            submit
          </button>
          <button class="btn btn-secondary">Back</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
