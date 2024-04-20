import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import ProjectPage from "./Pages/ProjectsPage";
import MainContent from "./MainContent";
import ProjectsPage from "./Pages/ProjectsPage";

const PageRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default PageRoutes;
