import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import MyList from "./pages/MyList";
import PorkCutlet from "./pages/Menu/PorkCutlet";
import Chinesefood from "./pages/Menu/Chinesefood";
import Chicken from "./pages/Menu/Chicken";
import Rice from "./pages/Menu/Rice";
import Cafe from "./pages/Menu/Cafe";
import Schoolfood from "./pages/Menu/Schoolfood";
import Stew from "./pages/Menu/Stew";
import Pizza from "./pages/Menu/Pizza";
import Westernfood from "./pages/Menu/Westernfood";
import Grilledmeat from "./pages/Menu/Grilledmeat";
import Jokvalandbossam from "./pages/Menu/Jokvalandbossam";
import Asian from "./pages/Menu/Asian";
import Fastfood from "./pages/Menu/Fastfood";
import Midnightmeal from "./pages/Menu/Midnightmeal";
import Lunchbox from "./pages/Menu/Lunchbox";
import Membership from "./pages/Membership";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* --------------------------------------------------- */}
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/mylistpage" element={<MyList />} />
      {/* --------------------------------------------------- */}
      <Route path="/porkcutlet" element={<PorkCutlet />} />
      <Route path="/chinesefood" element={<Chinesefood />} />
      <Route path="/chicken" element={<Chicken />} />
      <Route path="/rice" element={<Rice />} />
      <Route path="/cafe" element={<Cafe />} />
      <Route path="/schoolfood" element={<Schoolfood />} />
      <Route path="/stew" element={<Stew />} />
      <Route path="/pizza" element={<Pizza />} />
      <Route path="/westernfood" element={<Westernfood />} />
      <Route path="/grilledmeat" element={<Grilledmeat />} />
      <Route path="/jokvalandbossam" element={<Jokvalandbossam />} />
      <Route path="/asian" element={<Asian />} />
      <Route path="/fastfood" element={<Fastfood />} />
      <Route path="/midnightmeal" element={<Midnightmeal />} />
      <Route path="/lunchbox" element={<Lunchbox />} />
      <Route path="/membership" element={<Membership />} />
    </Routes>
  );
}

export default App;
