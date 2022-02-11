import { useState, useEffect } from "react";
const axios = require("axios");

export default function CreateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    postData();
  };

  function postData() {
    axios
      .post("http://localhost:4000/users", {
        email: email,
        password: password,
        name: name,
      })
      .then(function (response) {
        console.log(response);
      });
  }

  //   useEffect(() => {
  //     postData();
  //   }, [email]);

  return (
    <div className="wrapper">
      <h2>Registration</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={onChangeEmail}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={onChangeName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={onChangePassword}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-success btn-block"
          />
        </div>
      </form>
    </div>
  );
}
