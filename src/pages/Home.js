import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Chat from "../components/Chat";

export default function Home() {
  const [user, setUser] = useState({});
  let token = localStorage.getItem("token");
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios({
        method: "GET",
        baseURL: "http://localhost:8000/api/",
        url: "user/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.status === 200) {
        Swal.fire({
          title: data.message,
          icon: "success",
        });
      }
      setUser(data);
    };
    if (!token) {
      Swal.fire({
        title: "Ingresa o registrate en la plataforma",
      });
      setTimeout(() => {
        history.push("/ingreso");
      }, 200);
    } else {
      fetchData();
    }
  }, [history, token]);

  return (
    <div>
      <Navbar info={user} />
      <div className="card mx-5 my-4">
        <div className="card-header bg-dark text-white">
          <h1>Classroom</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <div className="card bg-dark" style={{ height: "600px" }}>
                <div className="card-body">
                  <iframe
                    title="Video"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/GEwsZctX77w"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card bg-dark text-white">
                <div className="card-header">
                  <h3 className="mt-2">Chat</h3>
                </div>
                <div className="card-body">
                  <Chat user={user} />  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
