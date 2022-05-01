import "./Home.scss";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Home() {
  const navigation = useNavigate();
  const [userData, Setuserdata] = useState<any>(null);
  const provider = new GoogleAuthProvider();
  const loginWithpopup = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Login success");
        navigation("/editor");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  onAuthStateChanged(auth, (user) => {
    user !== null ? Setuserdata(user) : Setuserdata(null);
  });
  return (
    <div className="min-h-screen w-full py-20">
      <div className="h-10" />
      <div className="container mx-auto">
        <div className="text-center md:text-8xl text-3xl font-bold">
          The easiest way to create a
        </div>
        <div className="text-center md:text-8xl text-3xl font-bold">Resume</div>
        <div className="mt-10 text-center w-1/2 mx-auto">
          Our simple editor allows you to create beutifull resume in minutes.
        </div>
        <div className="text-center mt-12">
          {userData !== null ? (
            <Link
              to={"/editor"}
              className="bg-[#2cd9ff] px-6 py-3 font-semibold rounded-lg"
            >
              Open Editor
            </Link>
          ) : (
            <button
              className="bg-[#2cd9ff] px-6 py-3 font-semibold rounded-lg"
              onClick={loginWithpopup}
            >
              Start with Google
            </button>
          )}
        </div>
        <div className="mt-20 flex justify-center"></div>
      </div>
    </div>
  );
}

export default Home;
