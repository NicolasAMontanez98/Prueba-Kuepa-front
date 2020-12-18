import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const history = useHistory();

  const handleLogOut = (e) => {
    localStorage.removeItem("token");
    history.push("/ingreso");
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark px-4">
        <img
          src="http://www.kuepa.com/COV2/assets/img/logo.png"
          alt="Login"
          title="Login"
          width="120"
          height="34"
          className="my-3"
        />

        <motion.button
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.7 }}
          dragConstraints={{ left: -100, right: 100 }}
          className="btn btn-danger"
          onClick={handleLogOut}
        >
          Salir
        </motion.button>
      </nav>
    </div>
  );
}
