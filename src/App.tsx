import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Editor from "./pages/editor/Editor";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Editor />} path="/editor/*" />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
