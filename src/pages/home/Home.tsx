import "./Home.scss";
import ss from "../../assets/screenshot.png";
function Home() {
  return (
    <div className="min-h-screen w-full Home py-20">
      <div className="h-40" />
      <div className="container mx-auto">
        <div className="text-center text-8xl font-bold">
          The easiest way to create a
        </div>
        <div className="text-center text-8xl font-bold">Resume</div>
        <div className="mt-10 text-center">
          Our simple editor allows you to create beutifull resume in minutes.
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#2cd9ff] px-6 py-3 font-semibold rounded-lg">
            create for Free
          </button>
        </div>
        <div className="mt-20 px-20">
          <img src={ss} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
