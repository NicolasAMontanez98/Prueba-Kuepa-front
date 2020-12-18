import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import "../style/pages.css";

export default function Register() {
  const [nombre, setName] = useState("");
  const [usuario, setUser] = useState("");
  const [tipoDeUsuario, setUserType] = useState("");
  const [contrasenia, setPassword] = useState("");
  let history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:8000/api/user/register",
      {
        nombre,
        usuario,
        tipoDeUsuario,
        contrasenia,
      }
    );
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
    <form
      className="card register-form bg-dark text-white"
      onSubmit={handleRegister}
    >
      <div className="mb-3 text-center">
        <div className="row">
          <div className="col-3 border-end">
            <img
              src="http://www.kuepa.com/COV2/assets/img/logo.png"
              alt="Login"
              title="Login"
              width="120"
              height="34"
              className="my-3"
            />
          </div>
          <div className="col-9 text-left">
            <h2 className="my-3">
              <strong>Registro</strong>
            </h2>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="form-group col-md-6">
          <label htmlFor="inputName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control input-login"
            id="inputName"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group col-md-6">
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
      </div>
      <div className="mb-3">
        <label htmlFor="inputUserType" className="form-label">
          Tipo de Usuario
        </label>
        <select
          id="inputUserType "
          className="form-control input-login"
          defaultValue={"predeterminado"}
          onChange={(e) => setUserType(e.target.value)}
          required
        >
          <option value="predeterminado" disabled>
            Seleccione una opción
          </option>
          <option value="Estudiante">Estudiante</option>
          <option value="Moderador">Moderador</option>
        </select>
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
        <div id="userHelp" className="form-text">
          No compartiremos tu información con nadie más.
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.7 }}
        dragConstraints={{ left: -100, right: 100 }}
        type="submit"
        className="btn btn-success btn-lg btn-block login-button rounded-pill mb-3"
      >
        Registrarse
      </motion.button>
      <div className="text-muted text-center">
        Volver a <Link to="/ingreso">ingreso</Link>
      </div>
    </form>
  );
}
