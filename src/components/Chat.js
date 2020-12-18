import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import {
  ChatRow,
  Message,
  FriendRow,
  FriendMessage,
  Name,
  Friend,
  Text,
  TextFriend,
} from "./StyledComponents";

export default function Chat({ user }) {
  const messageEl = useRef(null);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("//localhost:8000/clase");
    socketRef.current.on("messages saves", (msjs) => {
      setMessages(msjs);
      console.log(msjs);
    });
    socketRef.current.on("new messages", (msj) => {
      setMessages((prevMsjs) => prevMsjs.concat(msj));
      console.log(msj);
    });
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      usuario: user.usuario,
      moderador: user.userType === "moderador",
      text,
    };
    setText("");
    socketRef.current.emit("send message", newObj);
  };

  return (
    <div className="card my-1" style={{ height: "100%" }}>
      <div
        className="card-body"
        ref={messageEl}
        style={{ height: "18rem", overflow: "auto" }}
      >
        {messages.map((message, index) => {
          if (message.usuario === user.usuario) {
            return (
              <ChatRow key={index}>
                <Message>
                  <Name>{message.usuario}</Name>
                  <Text>{message.text}</Text>
                </Message>
              </ChatRow>
            );
          } else {
            return (
              <FriendRow key={index}>
                <FriendMessage>
                  <Friend>
                    {message.usuario}{" "}
                    {message.moderador ? "(moderador)" : "(estudiante)"}
                  </Friend>
                  <TextFriend>{message.text}</TextFriend>
                </FriendMessage>
              </FriendRow>
            );
          }
        })}
      </div>
      <div className="card-footer justify-content-md-center">
        <form onSubmit={handleChatSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                rows={2}
              />
            </div>
            <div className="col-2">
              <button
                variant="outline-warning"
                className="btn btn-success rounded-pill"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
