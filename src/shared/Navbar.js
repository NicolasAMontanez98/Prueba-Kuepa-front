import React from "react";

export default function Navbar({ info }) {
  console.log(info);
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
        <span>{info.message}</span>
      </nav>
    </div>
  );
}
