import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../style/pages.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/login");
  };

  return (
    <div>
      <form className="card login-form" onSubmit={handleLogin}>
        <div className="mx-2 my-3">
          <div className="mb-3 text-center">
            <img
              src="http://www.kuepa.com/COV2/assets/img/logo.png"
              alt="Login"
              title="Login"
              width="120"
              height="34"
            />
            <h2 className="my-3">
              <strong>Login</strong>
            </h2>
          </div>
          <div className="mb-3">
            <label htmlFor="inputUser" className="form-label">
              <strong>Email address</strong>
            </label>
            <input
              type="text"
              className="form-control input-login"
              id="inputUser"
              aria-describedby="userHelp"
              onChange={(e) => setUser(e.target.value)}
            />
            <div id="userHelp" className="form-text">
              No compartiremos tu información con nadie más.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              className="form-control input-login"
              id="inputPassword"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-muted">
            ¿Eres nuevo o nueva?, <Link to="/registro">Registrate</Link>
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.7 }}
          dragConstraints={{ left: -100, right: 100 }}
          type="submit"
          className="btn btn-success btn-lg btn-block login-button rounded-pill mb-3"
        >
          Ingresar
        </motion.button>
      </form>
    </div>
  );
}
