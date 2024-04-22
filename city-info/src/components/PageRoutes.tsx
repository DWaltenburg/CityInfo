import { Routes, Route } from "react-router-dom";
import { Home, Cities, Languages, PointsOfInterest } from "./Pages/";  


const PageRoutes = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cities" element={<Cities />} />
          <Route path="/Languages" element={<Languages />} />
          <Route path="/PointsOfInterest" element={<PointsOfInterest />} />
        </Routes>
  );
};

export default PageRoutes;
