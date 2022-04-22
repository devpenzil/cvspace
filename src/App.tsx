import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Editor from "./pages/editor/Editor";
import Preview from "./pages/preview/Preview";

function App() {
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
