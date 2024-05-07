import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import AboutMe from "./pages/AboutMe/AboutMe";
// import Projects from "./pages/ProjectsOld/Projects";
import Foodood from "./pages/ProjectPages/Foodood";
import KeyLogger from "./pages/ProjectPages/KeyLogger";
import ReactProjects from "./pages/ProjectPages/ReactProjects";
import Stick from "./pages/ProjectPages/Stick";
import Extracurriculars from "./pages/YourBoiPages/Extracurriculars";
import Schooling from "./pages/YourBoiPages/Schooling";
import HomeTown from "./pages/YourBoiPages/HomeTown";
import ASI from "./pages/ExperiencePages/ASI";
import Essentia from "./pages/ExperiencePages/Essentia";
import MicroCenter from "./pages/ExperiencePages/MicroCenter";
import TestCanvas from "./pages/Testing/TestCanvas";
import { useEffect } from "react";



export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutMe />} />
          {/* <Route path="projects" element={<Projects />} /> */}
          <Route path="foodood" element={<Foodood />} />
          <Route path="keylogger" element={<KeyLogger />} />
          <Route path="stick" element={<Stick />} />
          <Route path="reactprojects" element={<ReactProjects />} />
          <Route path="extracurriculars" element={<Extracurriculars />} />
          <Route path="hometown" element={<HomeTown />} />
          <Route path="schooling" element={<Schooling />} />
          <Route path="asi" element={<ASI />} />
          <Route path="microcenter" element={<MicroCenter />} />
          <Route path="essentia" element={<Essentia />} />
          <Route path="testcanvas" element={<TestCanvas />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);