import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../../utils/User";

// class Login extends Component {
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("you clicked submit");
    axios
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        user.handleLogin(response.data.data);
        //redirect to account page
        // window.location.href="/account";
        props.history.push("/account");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // render() {
  return (
    <div className="container">
      <div className="notification">
        <form onSubmit={handleSubmit}>
          Login Page that will take the user to their account
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <div className="buttons">
              <button className="button is-primary" type="submit">
                Login
              </button>
            </div>
          </div>
          <div className="buttons">
            <Link to="/">
              <button className="button is-primary">Home</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
