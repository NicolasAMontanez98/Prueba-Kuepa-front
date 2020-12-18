import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import "../style/pages.css";

export default function Login() {
  const [usuario, setUser] = useState("");
  const [contrasenia, setPassword] = useState("");
  let history = useHistory();

  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      Swal.fire({
        title: "Ya estás logueado",
      });
      setTimeout(() => {
        history.push("/");
      }, 200);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:8000/api/user/login", {
      usuario,
      contrasenia,
    });
    if (data.status === 200) {
      localStorage.setItem("token", data.token);
      Swal.fire({
        title: `${data.message}`,
        icon: "success",
      });
      setTimeout(() => {
        history.push("/");
      }, 3000);
    } else {
      Swal.fire({
        title: `${data.message}`,
        icon: "error",
      });
    }
    console.log(data);
  };

  return (
    <div>
      <form
        className="card login-form bg-dark text-white "
        onSubmit={handleLogin}
      >
        <div className="mx-2 my-3">
          <div className="mb-3 text-center">
            <div className="row">
              <div className="col-5 border-end">
                <img
                  src="http://www.kuepa.com/COV2/assets/img/logo.png"
                  alt="Login"
                  title="Login"
                  width="120"
                  height="34"
                  className="my-3"
                />
              </div>
              <div className="col-7">
                <h2 className="my-3">
                  <strong>Login</strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputUser" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control input-login"
              id="inputUser"
              aria-describedby="userHelp"
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control input-login"
              id="inputPassword"
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-muted">
            ¿Eres nuevo o nueva?, <Link to="/registro">Registrate</Link>
          </div>
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
