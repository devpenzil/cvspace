import { onAuthStateChanged } from "firebase/auth";
import { child, get, ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AppBtn from "../../../components/appbtn/AppBtn";

import AppTextArea from "../../../components/apptextarea/AppTextArea";
import ElementHeader from "../../../components/elementheader/ElementHeader";
import { auth, db, dbref } from "../../../firebase/firebase";

function Declaration() {
  const navigate = useNavigate();
  const [declaration, SetDeclaration] = useState<{
    showinprint: boolean;
    declaration: string | null;
  }>({
    showinprint: false,
    declaration: "",
  });
  const [useruid, SetUseruid] = useState<string | undefined>("");
  const [loading, SetLoading] = useState<boolean>(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      SetUseruid(user?.uid);
      user !== null
        ? get(child(db, `users/${user.uid}/declaration`))
            .then((snapshot) => {
              if (snapshot.exists()) {
                SetDeclaration({
                  ...declaration,
                  declaration: snapshot.val().declaration,
                  showinprint: snapshot.val().showinPrint,
                });
              } else {
                console.log("no data");
              }
            })
            .catch((error) => {
              console.log(error);
            })
        : navigate("/");
    });
  }, []);
  const updateFirebase = () => {
    SetLoading(true);
    set(ref(dbref, `users/${useruid}/declaration`), {
      declaration: declaration.declaration,
      showinPrint: declaration.showinprint,
    })
      .then(() => {
        toast.success("Updated");
        SetLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.log(error);
        SetLoading(false);
      });
  };
  return (
    <div className="container mx-auto">
      <ElementHeader
        title="Declaration"
        triggerchange={(e) => {
          SetDeclaration({ ...declaration, showinprint: !e });
        }}
        value={declaration.showinprint}
      />
      <div className="w-full flex justify-around">
        <div className="w-1/2 pt-6 ">
          <AppTextArea
            label="Declaration"
            loading={loading}
            value={declaration.declaration}
            triggerchange={(e) => {
              SetDeclaration({ ...declaration, declaration: e });
            }}
          />
          <AppBtn
            label="Save"
            triggerClick={() => {
              updateFirebase();
            }}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default Declaration;
