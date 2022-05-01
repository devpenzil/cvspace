/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import AppBtn from "../../../components/appbtn/AppBtn";
import AppInput from "../../../components/appinput/AppInput";
import AppTextArea from "../../../components/apptextarea/AppTextArea";
import ElementHeader from "../../../components/elementheader/ElementHeader";
import { auth, db, dbref, bucket } from "../../../firebase/firebase";
import { child, get, set, ref } from "firebase/database";
import { toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import userPlaceholder from "../../../assets/placeholder.png";
import {
  getDownloadURL,
  ref as bucketref,
  uploadBytes,
} from "firebase/storage";

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
  }>({
    name: "",
    email: "",
    phone: "",
    website: "",
    jobtitle: "",
    bio: "",
  });
  const [profilepic, SetProfilePic] = useState<string | undefined>(
    userPlaceholder
  );
  const [userUid, SetuseUid] = useState<any>();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      SetuseUid(user?.uid);
      user !== null
        ? get(child(db, `users/${user.uid}/personalinfo`))
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
  useEffect(() => {
    userUid && fetchImg();
  });
  const updateFirebase = () => {
    SetisLoading(true);
    set(ref(dbref, `users/${userUid}/personalinfo`), {
      name: profiledata.name,
      email: profiledata.email,
      phone: profiledata.phone,
      website: profiledata.website,
      jobtitle: profiledata.jobtitle,
      bio: profiledata.bio,
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
  const triggerImg = () => {
    let filepic = document.getElementById("profilepic");
    filepic?.click();
  };
  const uploadImg = (event: any) => {
    if (event.size > 4194304) {
      toast.error("Image size is more than 4 mb");
      return false;
    }

    if (event) {
      toast.loading("uploading");
      const storageRef = bucketref(bucket, userUid);
      uploadBytes(storageRef, event)
        .then((snapshot) => {
          toast.dismiss();
          toast.success("New picture updated");
          fetchImg();
        })
        .catch((Error) => {
          toast.error("Upload failed");
          console.log(Error);
        });
    }
  };
  const fetchImg = () => {
    getDownloadURL(bucketref(bucket, userUid))
      .then((url: any) => {
        SetProfilePic(url);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  return (
    <div className="container mx-auto">
      <ElementHeader title="Personal Info" />
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-around">
        <div className="md:w-1/2  lg:w-1/3 pt-6 ">
          <div>
            <div
              className="avatar cursor-pointer  flex justify-center "
              onClick={triggerImg}
            >
              <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto ">
                <img
                  src={profilepic}
                  className="mx-auto hover:opacity-60 "
                  alt="user"
                />
              </div>
            </div>
          </div>
          <input
            type="file"
            name=""
            id="profilepic"
            hidden
            onChange={(e: any) => {
              uploadImg(e.target.files[0]);
            }}
            accept="image/png, image/jpeg"
          />
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
        <div className="md:w-1/2  lg:w-1/3 ">
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
