import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import MainContent from "./MainContent";
import ProjectsPage from "./Pages/ProjectsPage";
import { Routes, Route } from "react-router-dom";

const PageRoutes = () => {
  return (
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Projects" element={<ProjectsPage />} />
        </Routes>
  );
};

export default PageRoutes;
