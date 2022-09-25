import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import { OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://lh3.googleusercontent.com/a-/ACNPEu_rxhOI3A9fkSq3BbNtgvoJN_4p4m9lZM4jnsXeew=s288-p-no" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="siderbar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat selected={true} />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
