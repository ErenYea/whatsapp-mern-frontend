import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarChat.css";
const SidebarChat = ({ selected }) => {
  return (
    <div className={selected ? "sidebarChat selected" : "sidebarChat"}>
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>THis is the last message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
