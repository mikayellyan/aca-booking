import * as React from "react";
import { createUseStyles } from "react-jss";
import Home from "./components/Home";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import restaurant4 from "./restaurant4.webp";
import restaurant1 from "./restaurant1.webp";
import restaurant2 from "./restaurant2.jpeg";
import restaurant3 from "./restaurant3.png";
import restaurant5 from "./restaurant5.jpeg";

export const useStyles = createUseStyles({
  tableWithButtons: {
    width: "calc(100vw - 20px)",
    marginLeft: "auto",
    marginRight: "auto",
    opacity: 0.75,
    backgroundColor: "#757067",
    borderCollapse: "collapse",
    marginTop: "10px",
    marginBottom: "10px",
  },
  bookButton: {
    width: "calc(20vw - (20px/4))",
    height: "8vh",
    fontSize: "2.5vw",
    backgroundColor: "#4d4237",
    color: "#cfb6a2",
    "&:hover": {
      backgroundColor: "#003000",
    },
  },
  bookIcon: {
    fontSize: "2.5vw",
  },

  th: {
    width: "calc(25vw - (20px/4))",
    borderBottom: "1px solid #cfb6a2",
    height: "12vh",
  },
  thP: {
    fontSize: "2.5vw",
    display: "flex",
    justifyContent: "center",
    color: "#cfb6a2",
  },
  thI: {
    display: "flex",
    alignItems: "center",
  },
  imagesRight: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    columnGap: "10px",
  },
  imagesLeft: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    columnGap: "10px",
  },
  images: {
    width: "100vw",
    padding: "10px",
    marginTop: "15vh",
    display: "flex",
    columnGap: "10px",
    rowGap: "10px",
    opacity: 0.75,
  },
  img1: {
    height: "100px",
    width: "calc(25vw - (50px/4))",
    height: "calc(42.5vh - 15px)",
    background: "white",
    backgroundImage: `url(${restaurant1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  img2: {
    height: "100px",
    width: "calc(25vw - (50px/4))",
    height: "calc(42.5vh - 15px)",
    background: "red",
    backgroundImage: `url(${restaurant2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  img3: {
    height: "100px",
    width: "calc(50vw - (15px))",
    height: "calc(85vh - 20px)",
    background: "red",
    backgroundImage: `url(${restaurant4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  img4: {
    height: "100px",
    width: "calc(25vw - (50px/4))",
    height: "calc(42.5vh - 15px)",
    background: "white",
    backgroundImage: `url(${restaurant3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  img5: {
    height: "100px",
    width: "calc(25vw - (50px/4))",
    height: "calc(42.5vh - 15px)",
    background: "red",
    backgroundImage: `url(${restaurant5})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  navbar: {
    display: "flex",
    width: "100vw",
    height: "15vh",
    backgroundColor: "#757067",
    columnGap: "10px",
    rowGap: "10px",
    padding: "10px",
    opacity: 0.75,
    position: "fixed",
    top: 0,
    zIndex: 10000,
  },
  navbarLeft: {
    display: "flex",
    columnGap: "10px",
    rowGap: "10px",
  },
  navbarRight: {
    display: "flex",
    columnGap: "10px",
    rowGap: "10px",
  },
  navbarButton: {
    width: "calc(25vw - (50px / 4))",
    borderRadius: "0px",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#4d4237",
    },
    fontSize: "2.5vw",
    height: "calc(15vh - 20px)",
  },
  navbarLogOut: {
    width: "calc(25vw - (50px / 4))",
    backgroundColor: "transparent",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "#4d4237",
    },
    fontSize: "2.5vw",
    height: "calc(15vh - 20px)",
  },
  AboutIcon: {
    fontSize: "6vw",
  },
});

function App() {
  return (
    <>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
