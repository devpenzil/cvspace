import React, { useEffect, useState } from "react";
import AppBtn from "../../../components/appbtn/AppBtn";
import AppInput from "../../../components/appinput/AppInput";
import AppTextArea from "../../../components/apptextarea/AppTextArea";
import ElementHeader from "../../../components/elementheader/ElementHeader";
import { auth, db, dbref } from "../../../firebase/firebase";
import { child, get, set, ref } from "firebase/database";
import { toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function PersonalInfo() {
  const navigate = useNavigate();
  const [isLoading, SetisLoading] = useState(false);
  const [profiledata, SetProfileData] = useState<{
    name: string | null | undefined;
    email: string | null | undefined;
    phone: string | null | undefined;
    website: string | null | undefined;
    jobtitle: string | null | undefined;
    bio: string | null | undefined;
    showinPrint: boolean;
  }>({
    name: "",
    email: "",
    phone: "",
    website: "",
    jobtitle: "",
    bio: "",
    showinPrint: true,
  });
  const [userUid, SetuseUid] = useState<any>();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      SetuseUid(user?.uid);
      user !== null
        ? get(child(db, `users/${user.uid}/personal-info`))
            .then((snapshot) => {
              if (snapshot.exists()) {
                SetProfileData({
                  ...profiledata,
                  name: snapshot.val().name,
                  email: snapshot.val().email,
                  phone: snapshot.val().phone,
                  jobtitle: snapshot.val().jobtitle,
                  website: snapshot.val().website,
                  bio: snapshot.val().bio,
                  showinPrint: snapshot.val().showinPrint,
                });
              } else {
                console.log("no data");
              }
            })
            .catch((error) => {
              toast.error("Something went wrong. Restart the App");
            })
        : navigate("/");
    });
  }, []);
  const updateFirebase = () => {
    SetisLoading(true);
    set(ref(dbref, `users/${userUid}/personal-info`), {
      name: profiledata.name,
      email: profiledata.email,
      phone: profiledata.phone,
      website: profiledata.website,
      jobtitle: profiledata.jobtitle,
      bio: profiledata.bio,
      showinPrint: profiledata.showinPrint,
    })
      .then(() => {
        toast.success("Updated");
        SetisLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.log(error);
        SetisLoading(false);
      });
  };
  return (
    <div className="container mx-auto">
      <ElementHeader
        title="Personal Info"
        triggerchange={(e) => {
          SetProfileData({ ...profiledata, showinPrint: !e });
        }}
        value={profiledata.showinPrint}
      />
      <div className="w-full flex justify-around">
        <div className="w-1/2 lg:w-1/3 pt-6 ">
          <div>
            <div className="avatar cursor-pointer  flex justify-center">
              <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                <img
                  src="https://api.lorem.space/image/face?hash=3174"
                  className="mx-auto"
                  alt="user"
                />
              </div>
            </div>
          </div>
          <AppInput
            label="Name"
            triggerchange={(e) => {
              SetProfileData({ ...profiledata, name: e });
            }}
            value={profiledata.name}
            loading={isLoading}
          />
          <AppInput
            label="Email"
            triggerchange={(e) => {
              SetProfileData({ ...profiledata, email: e });
            }}
            value={profiledata.email}
            loading={isLoading}
          />
          <AppInput
            label="Phone"
            triggerchange={(e) => {
              SetProfileData({ ...profiledata, phone: e });
            }}
            value={profiledata.phone}
            loading={isLoading}
          />
          <AppInput
            label="Website"
            triggerchange={(e) => {
              SetProfileData({ ...profiledata, website: e });
            }}
            value={profiledata.website}
            loading={isLoading}
          />
        </div>
        <div className="w-1/3">
          <AppInput
            label="Job Title"
            triggerchange={(e) => {
              SetProfileData({ ...profiledata, jobtitle: e });
            }}
            value={profiledata.jobtitle}
            loading={isLoading}
          />
          <AppTextArea
            label="your Bio"
            triggerchange={(e) => {
              SetProfileData({ ...profiledata, bio: e });
            }}
            value={profiledata.bio}
            loading={isLoading}
          />
          <AppBtn
            label="Save"
            triggerClick={updateFirebase}
            loading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
