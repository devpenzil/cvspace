/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { onAuthStateChanged } from "firebase/auth";
import { child, get, push, ref, remove, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import PenIcons from "../../../assets/icons/PenIcons";
import TrashIcon from "../../../assets/icons/TrashIcon";
import AppBtn from "../../../components/appbtn/AppBtn";
import AppInput from "../../../components/appinput/AppInput";
import AppRange from "../../../components/apprange/AppRange";
import ElementHeader from "../../../components/elementheader/ElementHeader";
import EmptyBlock from "../../../components/emptyblock/EmptyBlock";
import { auth, dbref } from "../../../firebase/firebase";
import { SingleLanguage } from "../../../types/editorTypes";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Language() {
  const [isLoading, SetisLoading] = useState(false);
  const navigate = useNavigate();
  const [qdata, Setqdata] = useState<any>([]);
  const [userUid, SetuserUid] = useState<string | undefined>("");
  const [singleData, SetSingleData] = useState<SingleLanguage>({
    language: "",
    rate: "50",
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      SetuserUid(user?.uid);
      user !== null ? fetchdata(user.uid) : navigate("/");
    });
  }, []);
  const fetchdata = (id: any) => {
    get(child(ref(dbref), `users/${id}/language`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          Setqdata(Object.entries(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const addItem = () => {
    if (singleData.language === "") {
      toast.error("Fill all mandatory fields");
      return false;
    }

    const postListRef = ref(dbref, `users/${userUid}/language`);
    const newPostRef = push(postListRef);
    set(newPostRef, {
      language: singleData.language,
      rate: singleData.rate,
    })
      .then(() => {
        toast.success("Updated");
        SetSingleData({
          ...singleData,
          language: "",
          rate: "50",
        });
        SetisLoading(false);
        fetchdata(userUid);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.log(error);
        SetisLoading(false);
      });
  };
  const deleteItem = (id: any) => {
    remove(ref(dbref, `users/${userUid}/language/${id}`))
      .then(() => {
        toast.success("Item Deleted");
        fetchdata(userUid);
      })
      .catch((Error) => {
        console.log("error");
      });
  };
  return (
    <div className="container mx-auto">
      <ElementHeader title="Languages" />
      <div className="w-full flex justify-around">
        <div className="w-1/3 pt-6 ">
          <>
            <AppInput
              loading={false}
              triggerchange={(e) => {
                SetSingleData({ ...singleData, language: e });
              }}
              value={singleData.language}
              label="Add a language"
              mandatory
            />
            <AppRange
              triggerChange={(e) => {
                SetSingleData({ ...singleData, rate: e });
              }}
              value={singleData.rate}
            />
            <AppBtn
              label="Save"
              triggerClick={() => {
                addItem();
              }}
            />
          </>
        </div>
        <div className="w-1/3">
          {qdata.length === 0 && <EmptyBlock />}
          {qdata.map((obj: any, i: any) => {
            return (
              <div className="py-2" key={i}>
                <div className="card w-full bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{obj[1].language}</h2>
                    <progress
                      className="progress progress-primary w-full"
                      value={obj[1].rate}
                      max={100}
                    />
                    <div className="card-actions justify-end">
                      <span className="cursor-pointer">
                        <PenIcons />
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          deleteItem(obj[0]);
                        }}
                      >
                        <TrashIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Language;
