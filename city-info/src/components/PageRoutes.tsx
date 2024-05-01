import { Routes, Route } from "react-router-dom";
import { Home, Countries, Cities, Languages, PointsOfInterest, NotFound } from "./Pages/";  
import City from "./Pages/Cities/City";
import NewCity from "./Pages/Cities/NewCity";

const PageRoutes = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Countries" element={<Countries />} />
          <Route path="/Cities" element={<Cities />} />
          <Route path="/Cities/:cityId" element={<City/>} />
          <Route path="/Cities/New" element={<NewCity />} />
          <Route path="/Languages" element={<Languages />} />
          <Route path="/PointsOfInterest" element={<PointsOfInterest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
  );
};

export default PageRoutes;
