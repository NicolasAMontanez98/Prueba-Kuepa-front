import React, { useEffect } from "react";
import { useHistory, Route } from "react-router-dom";
import Swal from "sweetalert2";

export default function PrivateRoute(props) {
  let history = useHistory();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      Swal.fire({
        title: "Inicia sesión para acceder al contenido",
      });
      setTimeout(() => {
        history.push("/ingreso");
      }, 200);
    }
  }, []);

  return <Route {...props} />;
}
