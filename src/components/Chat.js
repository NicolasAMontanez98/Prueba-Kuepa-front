import React from "react";
import io from "socket.io-client";

export default function Chat() {
  let socket = io("https://cors-anywhere.herokuapp.com/http://localhost:8000/api/");
  socket.emit("conectado", "hola desde el cliente");
  return <div></div>;
}
