import { onAuthStateChanged } from "firebase/auth";
import { onValue, push, ref, set } from "firebase/database";
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
import { auth, dbref } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Certification() {
  const navigate = useNavigate();
  const [isLoading, SetisLoading] = useState(false);
  const [userUid, SetUserUid] = useState<string | undefined>("");
  const [qdata, Setqdata] = useState({
    showinprint: true,
    certificates: [],
  });
  const [singleCert, SetsingleCert] = useState<{
    name: string | undefined | null;
    institute: string | undefined | null;
    dateawarded: string | undefined;
    summary: string | undefined | null;
  }>({
    name: "",
    institute: "",
    dateawarded: "",
    summary: "",
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      SetUserUid(user?.uid);
      user !== null
        ? onValue(
            ref(dbref, `users/${userUid}/certificates`),
            (snapshot) => {
              console.log(snapshot);

              let temp: any = [];
              snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                temp.push(childData);
              });

              Setqdata({ ...qdata, certificates: temp });
            },
            {
              onlyOnce: true,
            }
          )
        : navigate("/");
    });
  });
  const addoneData = () => {
    SetisLoading(true);
    if (
      singleCert.name === "" ||
      singleCert.institute === "" ||
      singleCert.dateawarded === ""
    ) {
      toast.error("Fill the mandatory fields");
      SetisLoading(false);
      return false;
    }
    const postListRef = ref(dbref, `users/${userUid}/certificates`);
    const newPostRef = push(postListRef);
    set(newPostRef, {
      name: singleCert.name,
      institute: singleCert.institute,
      dateawarded: singleCert.dateawarded,
      summary: singleCert.summary,
    })
      .then(() => {
        toast.success("Updated");
        fetchFromFirebase();
        SetisLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.log(error);
        SetisLoading(false);
      });
  };
  const fetchFromFirebase = () => {
    userUid !== null
      ? onValue(
          ref(dbref, `users/${userUid}/certificates`),
          (snapshot) => {
            let temp: any = [];
            snapshot.forEach((childSnapshot) => {
              const childData = childSnapshot.val();
              temp.push(childData);
            });
            Setqdata({ ...qdata, certificates: temp });
          },
          {
            onlyOnce: true,
          }
        )
      : navigate("/");
  };
  return (
    <div className="container mx-auto">
      <ElementHeader title="Certification" triggerchange={() => {}} />
      <div className="w-full flex justify-around">
        <div className="w-1/3 pt-6 ">
          <AppInput
            label="Certificate Name"
            triggerchange={(e) => {
              SetsingleCert({ ...singleCert, name: e });
            }}
            loading={isLoading}
            value={singleCert.name}
            mandatory
          />
          <AppInput
            label="Institution Name"
            triggerchange={(e) => {
              SetsingleCert({ ...singleCert, institute: e });
            }}
            loading={isLoading}
            value={singleCert.institute}
            mandatory
          />
          <AppDate
            monthonly={true}
            label={"Date awareded"}
            value={singleCert.dateawarded}
            triggerChange={(e) => {
              SetsingleCert({ ...singleCert, dateawarded: e });
            }}
            mandatory
          />
          <AppTextArea
            label="Summary (if any)"
            loading={isLoading}
            value={singleCert.summary}
            triggerchange={(e) => {
              SetsingleCert({ ...singleCert, summary: e });
            }}
          />
          <AppBtn label="Save" triggerClick={addoneData} loading={isLoading} />
        </div>
        <div className="w-1/3">
          {qdata.certificates.length === 0 && <EmptyBlock />}
          {qdata.certificates.map(
            (
              obj: {
                name: string;
                institute: string;
                dateawarded: string;
                summary: string;
              },
              i
            ) => {
              return (
                <div className="py-3" key={i}>
                  <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{obj.name}</h2>
                      <div>
                        {obj.dateawarded} -{" "}
                        <span className="font-bold">{obj.institute}</span>
                      </div>
                      <p>{obj.summary}</p>
                      <div className="card-actions justify-end">
                        <span className="cursor-pointer">
                          <PenIcons />
                        </span>
                        <span className="cursor-pointer">
                          <TrashIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Certification;
