import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import About from "../../pages/About";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Menu from "../../pages/Menu";
import Services from "../../pages/Services";
import AllergyAdvice from "../../pages/AllergyAdvice";
import PageNotFound from "../../pages/PageNotFound";
import Profile from "../../pages/Profile";
function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/allergyAdvice" element={<AllergyAdvice />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
