import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import Main from "./Main";

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    console.log(state.user);
  }, [state.user]);

  if (state.user == null) {
    return (
      <div className="app">
        <div className="app__body">
          <Login />
        </div>
      </div>
    );
  } else {
    return (
      <div className="app">
        <Main />
      </div>
    );
  }
}

export default App;
