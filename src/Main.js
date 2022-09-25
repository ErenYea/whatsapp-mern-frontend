import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Main.css";

const Main = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);
  useEffect(() => {
    var pusher = new Pusher("6c0ab72ab72aedfcac74", {
      cluster: "ap2",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      setMessages([...messages, data]);
      alert(JSON.stringify(data));
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);
  return (
    <div className="app__body">
      <Sidebar />
      <Chat messages={messages} />
    </div>
  );
  return <div>Main</div>;
};

export default Main;
