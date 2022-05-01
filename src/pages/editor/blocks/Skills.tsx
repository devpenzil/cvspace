/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { onAuthStateChanged } from "firebase/auth";
import { child, get, push, ref, remove, set, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import PenIcons from "../../../assets/icons/PenIcons";
import TrashIcon from "../../../assets/icons/TrashIcon";
import AppBtn from "../../../components/appbtn/AppBtn";
import AppInput from "../../../components/appinput/AppInput";
import AppRange from "../../../components/apprange/AppRange";
import ElementHeader from "../../../components/elementheader/ElementHeader";
import EmptyBlock from "../../../components/emptyblock/EmptyBlock";
import { auth, dbref } from "../../../firebase/firebase";
import { singleskills } from "../../../types/editorTypes";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Skills() {
  const [isLoading, SetisLoading] = useState(false);
  const navigate = useNavigate();
  const [qdata, Setqdata] = useState<any>([]);
  const [userUid, SetuserUid] = useState<string | undefined>("");
  const [editmode, SetEditMode] = useState<boolean>(false);
  const [singleData, SetSingleData] = useState<singleskills>({
    skill: "",
    rate: "50",
    id: "",
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      SetuserUid(user?.uid);
      user !== null ? fetchdata(user.uid) : navigate("/");
    });
  }, []);
  const fetchdata = (id: any) => {
    get(child(ref(dbref), `users/${id}/skills`))
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
    SetisLoading(true);
    if (singleData.skill === "") {
      toast.error("Fill all mandatory fields");
      SetisLoading(false);
      return false;
    }

    const postListRef = ref(dbref, `users/${userUid}/skills`);
    const newPostRef = push(postListRef);
    set(newPostRef, {
      skill: singleData.skill,
      rate: singleData.rate,
    })
      .then(() => {
        toast.success("Updated");
        SetSingleData({
          ...singleData,
          skill: "",
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
    remove(ref(dbref, `users/${userUid}/skills/${id}`))
      .then(() => {
        toast.success("Item Deleted");
        fetchdata(userUid);
      })
      .catch((Error) => {
        console.log("error");
      });
  };
  const addtoedit = (data: any) => {
    SetEditMode(true);
    SetSingleData({
      ...singleData,
      skill: data[1].skill,
      rate: data[1].rate,
      id: data[0],
    });
  };
  const updatedata = () => {
    update(ref(dbref, `users/${userUid}/skills/${singleData.id}`), {
      skill: singleData.skill,
      rate: singleData.rate,
    })
      .then(() => {
        toast.success("success");
        fetchdata(userUid);
      })
      .catch((Error) => {
        console.log(Error);
      });
    SetEditMode(false);
    SetisLoading(false);
    SetSingleData({
      ...singleData,
      skill: "",
      rate: "",
      id: "",
    });
  };
  return (
    <div className="container mx-auto">
      <ElementHeader title="Skills" />
      <div className="w-full flex flex-col md:flex-row justify-around">
        <div className="md:w-1/2  lg:w-1/3 pt-6 ">
          <>
            <AppInput
              loading={isLoading}
              triggerchange={(e) => {
                SetSingleData({ ...singleData, skill: e });
              }}
              value={singleData.skill}
              label="Add a Skill"
              mandatory
            />
            <AppRange
              triggerChange={(e) => {
                SetSingleData({ ...singleData, rate: e });
              }}
              value={singleData.rate}
              loading={isLoading}
            />
            {editmode ? (
              <AppBtn
                label="Update"
                triggerClick={() => {
                  updatedata();
                }}
                loading={isLoading}
              />
            ) : (
              <AppBtn
                label="Save"
                triggerClick={() => {
                  addItem();
                }}
                loading={isLoading}
              />
            )}
          </>
        </div>
        <div className="md:w-1/2  lg:w-1/3">
          {qdata.length === 0 && <EmptyBlock />}
          {qdata.map((obj: any, i: any) => {
            return (
              <div className="py-2" key={i}>
                <div className="card w-full bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{obj[1].skill}</h2>
                    <progress
                      className="progress progress-primary w-full"
                      value={obj[1].rate}
                      max={100}
                    />
                    <div className="card-actions justify-end">
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          addtoedit(obj);
                        }}
                      >
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

export default Skills;
