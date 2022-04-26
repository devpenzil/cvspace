/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { onAuthStateChanged } from "firebase/auth";
import {
  child,
  get,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PenIcons from "../../../assets/icons/PenIcons";
import TrashIcon from "../../../assets/icons/TrashIcon";
import AppBtn from "../../../components/appbtn/AppBtn";
import AppDate from "../../../components/appdate/AppDate";
import AppInput from "../../../components/appinput/AppInput";
import AppTextArea from "../../../components/apptextarea/AppTextArea";
import ElementHeader from "../../../components/elementheader/ElementHeader";
import EmptyBlock from "../../../components/emptyblock/EmptyBlock";
import { auth, db, dbref } from "../../../firebase/firebase";
import { singleEducation } from "../../../types/editorTypes";
import { useNavigate } from "react-router-dom";

function EducationQualification() {
  const navigate = useNavigate();
  const [qdata, Setqdata] = useState<any>();
  const [editmode, Seteditmode] = useState(false);
  const [singleedu, SetSingleEdu] = useState<singleEducation>({
    name: "",
    institute: "",
    startdate: "",
    enddate: "",
    summary: "",
  });
  const [userUid, SetuserUid] = useState<string | undefined>("");
  const [isLoading, SetisLoading] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      SetuserUid(user?.uid);
      user !== null ? fetchdata(user.uid) : navigate("/");
    });
  }, []);
  const addItem = () => {
    if (
      singleedu.name === "" ||
      singleedu.institute === "" ||
      singleedu.enddate === "" ||
      singleedu.startdate === ""
    ) {
      toast.error("Fill all mandatory fields");
      return false;
    }
    const postListRef = ref(dbref, `users/${userUid}/education`);
    const newPostRef = push(postListRef);
    set(newPostRef, {
      name: singleedu.name,
      institute: singleedu.institute,
      startdate: singleedu.startdate,
      enddate: singleedu.enddate,
      summary: singleedu.summary,
    })
      .then(() => {
        toast.success("Updated");
        SetSingleEdu({
          ...singleedu,
          enddate: "",
          institute: "",
          name: "",
          startdate: "",
          summary: "",
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
  const fetchdata = (id: any) => {
    get(child(ref(dbref), `users/${id}/education`))
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
  const deleteItem = (id: any) => {
    remove(ref(dbref, `users/${userUid}/education/${id}`))
      .then(() => {
        toast.success("Item Deleted");
        fetchdata(userUid);
      })
      .catch((Error) => {
        console.log("error");
      });
  };
  const updateItem = () => {
    if (
      singleedu.name === "" ||
      singleedu.institute === "" ||
      singleedu.enddate === "" ||
      singleedu.startdate === ""
    ) {
      toast.error("Fill all mandatory fields");
      return false;
    }
    update(ref(dbref, `users/${userUid}/education/${singleedu.id}`), {
      name: singleedu.name,
      institute: singleedu.institute,
      startdate: singleedu.startdate,
      enddate: singleedu.enddate,
      summary: singleedu.summary,
    })
      .then(() => {
        toast.success("success");
        fetchdata(userUid);
      })
      .catch((Error) => {
        console.log(Error);
      });
    Seteditmode(false);
    SetisLoading(false);
    SetSingleEdu({
      ...singleedu,
      enddate: "",
      institute: "",
      name: "",
      startdate: "",
      summary: "",
      id: "",
    });
  };
  const addtoEdit = (data: any) => {
    Seteditmode(true);
    SetSingleEdu({
      ...singleedu,
      enddate: data[1].enddate,
      institute: data[1].institute,
      name: data[1].name,
      startdate: data[1].startdate,
      summary: data[1].summary,
      id: data[0],
    });
  };
  return (
    <div className="container mx-auto">
      <ElementHeader title="Educational Qualification" />
      <div className="w-full flex justify-around">
        <div className="w-1/3 pt-6 ">
          <AppInput
            label="Programmme Name"
            triggerchange={(e) => {
              SetSingleEdu({ ...singleedu, name: e });
            }}
            loading={isLoading}
            value={singleedu.name}
            mandatory
          />
          <AppInput
            label="Institution Name"
            triggerchange={(e) => {
              SetSingleEdu({ ...singleedu, institute: e });
            }}
            loading={isLoading}
            value={singleedu.institute}
            mandatory
          />
          <AppDate
            monthonly={true}
            label={"Start Date"}
            triggerChange={(e) => {
              SetSingleEdu({ ...singleedu, startdate: e });
            }}
            value={singleedu.startdate}
            loading={isLoading}
            mandatory
          />
          <AppDate
            monthonly={true}
            label={"End Date"}
            presentcheck
            triggerChange={(e) => {
              SetSingleEdu({ ...singleedu, enddate: e });
            }}
            value={singleedu.enddate}
            loading={isLoading}
            mandatory
          />
          <AppTextArea
            label="Summary (if any)"
            loading={isLoading}
            value={singleedu.summary}
            triggerchange={(e) => {
              SetSingleEdu({ ...singleedu, summary: e });
            }}
          />
          {editmode ? (
            <AppBtn
              label="Update"
              triggerClick={() => {
                updateItem();
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
        </div>
        <div className="w-1/3">
          {qdata?.length === 0 || (qdata === undefined && <EmptyBlock />)}
          {qdata !== null &&
            qdata?.map((obj: any, i: any) => {
              return (
                <div className="py-3" key={i}>
                  <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{obj[1].name}</h2>
                      <div>
                        {obj[1].startdate} - {obj[1].enddate}
                      </div>
                      <div className="font-bold">{obj[1].institute}</div>
                      <p>{obj[1].summary}</p>
                      <div className="card-actions justify-end">
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            addtoEdit(obj);
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

export default EducationQualification;
