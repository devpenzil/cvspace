/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function Editor() {
  const navigation = useNavigate();
  onAuthStateChanged(auth, (user) => {
    user !== null ? null : navigation("/");
  });

  return <div>Editor</div>;
}

export default Editor;
