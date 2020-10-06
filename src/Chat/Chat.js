import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import React from "react";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Jack</span>
          This is message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__reciever">
          <span className="chat__name">Jack</span>
          This is message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Jack</span>
          This is message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
    </div>
  );
}

export default Chat;
