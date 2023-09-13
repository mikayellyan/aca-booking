import Home from "./components/Home";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Restaurant from "./components/Restaurant";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
