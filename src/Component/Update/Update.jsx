import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((e) => {
        setFormData(e.data);
        console.log(formdata);
      })
      .catch((e) => console.log(e));
  }, []);

  const handlesubmit = async (event) => {
    event.preventDefault();
    await axios
      .put("http://localhost:3000/users/" + id, formdata)
      .then(console.log("sucessfully updated"), navigate("/"))
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeHandle = (e) => {
 setFormData({   ...formdata,
  [e.target.name]: e.target.value,})
  };
  return (
    <div>
      <h1>Update your data</h1>

      <div>
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
                // id="inputName"
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
    </div>
  );
}

export default Update;
