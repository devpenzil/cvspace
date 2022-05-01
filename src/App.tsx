import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Editor from "./pages/editor/Editor";
import Preview from "./pages/preview/Preview";
import { useEffect } from "react";
import { toast } from "react-toastify";

function App() {
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      toast.info(
        "you are on mobile. You cant see preview or print on your device"
      );
    }
  });
  return (
    <>
      <Layout>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Editor />} path="/editor/*" />
          <Route element={<Preview />} path="/preview/*" />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
