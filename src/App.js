import * as React from "react";
import { createUseStyles } from "react-jss";
import Home from "./components/Home";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import "./App.css";

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

  navbarButton: {
    width: "calc(25vw - (50px / 4))",
    borderRadius: "0px",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#4d4237",
    },
    fontSize: "2.5vw",
    boxShadow: "none",
  },
  AboutIcon: {
    fontSize: "8vw",
  },
  AboutBox: {
    width: "100vw",
    height: "85vh",
    display: "flex",
    flexDirection: "column-reverse",
  },
  AboutInfos: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    columnGap: "10px",
  },
  AboutInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#e3e1d7",
    width: "calc(25vw - (50px / 4))",
  },
  AboutInfoP: {
    textAlign: "center",
    fontSize: "1.6vw",
  },
  AboutInfosLeft: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    columnGap: "10px",
  },
  AboutInfosRight: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    columnGap: "10px",
  },
});

function App() {
  return (
    <>
      <Home />
      <SignIn />
      <SignUp />
    </>
  );
}

export default App;
