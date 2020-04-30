import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./navsAndMenues/Navbar";
import axios from "axios";
import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Enter a username"),
  email: yup.string().email("Enter a valid email").required("Enter your email"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      "Password must contain at least one Uppercase, one Lowercase, and a Number"
    )
    .required("Enter your password"),
  account_type: yup.string(),
});

const SignupForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    account_type: "",
  };

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    account_type: "",
  });

  const [formState, setFormState] = useState(initialState);
  const history = useHistory();

  const onChangeHandler = (e) => {
    e.preventDefault();
    e.persist();

    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });

    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });

    console.log(formState);
  };

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("https://bw-node.herokuapp.com/auth/register", formState)
      .then((res) => {
        console.log(res);
        history.push("./login");
      })
      .catch((err) => {
        console.log(err);
        alert("Username is taken");
      });
    setFormState(initialState);
  };

  return (
    <div className="blurred-bg-container">
      <Navbar />
      <div className="content">
        <div className="text">
          <div className="signup-form">
            <h1 className="title is-2 welcome">Signup</h1>

            <form className="form" onSubmit={signup}>
              <label htmlFor="username">
                Username
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-large"
                      type="text"
                      name="username"
                      onChange={onChangeHandler}
                      value={formState.username}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user" />
                    </span>
                  </p>
                  {errors.username}
                </div>
              </label>

              <label htmlFor="email">
                Email
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-large"
                      type="text"
                      name="email"
                      onChange={onChangeHandler}
                      value={formState.email}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope" />
                    </span>
                  </p>
                  {errors.email}
                </div>
              </label>

              <label htmlFor="password">
                Password
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-large"
                      type="password"
                      name="password"
                      onChange={onChangeHandler}
                      value={formState.password}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock" />
                    </span>
                  </p>
                  {errors.password}
                </div>
              </label>

              <label htmlFor="account_type">
                Account Type
                <select
                  className="input is-large"
                  type="text"
                  name="account_type"
                  onChange={onChangeHandler}
                  value={formState.account_type}
                >
                  <option></option>
                  <option value="admin">Admin</option>
                </select>
                {errors.account_type}
              </label>

              <div className="spacer-sm" />
              <button
                type="submit"
                className="button is-danger is-large is-rounded"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
        <div className="blur"></div>
      </div>
    </div>
  );
};

export default SignupForm;
