import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import MainContent from "./MainContent";

const PageRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
        </Routes>
      </Router>
    </>
  );
};

export default PageRoutes;
