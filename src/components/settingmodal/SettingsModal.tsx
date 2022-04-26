/* eslint-disable react-hooks/exhaustive-deps */
import { deleteUser, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, dbref } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { ref, remove } from "firebase/database";
function SettingsModal() {
  const navigate = useNavigate();
  const [userUid, SetuserUid] = useState<string | undefined>("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      SetuserUid(user?.uid);
      user !== null ? SetuserUid(user.uid) : navigate("/");
    });
  }, []);
  const deleteuser = () => {
    const user = auth.currentUser;
    remove(ref(dbref, `users/${userUid}`))
      .then(() => {
        console.log("data cleared");
      })
      .catch((Error) => {
        console.log("error");
      });
    user !== null &&
      deleteUser(user)
        .then(() => {
          console.log("user deleted");
        })
        .catch((Error) => {
          console.log(Error);
        });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Account Settings</h3>
          <div className="py-4">
            <h4 className="text-base font-bold">Delete your account</h4>
            <p className="py-3 text-sm font-semibold">
              By deleting your account, you will lost all your data and login
              information. we won't store any of your data.
            </p>
            <button className="btn btn-error" onClick={deleteuser}>
              Delete account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
