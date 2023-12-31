import { createUseStyles } from "react-jss";
import restaurant1 from "./images/image1.webp";
import restaurant2 from "./images/image2.jpeg";
import restaurant3 from "./images/image3.jpeg";
import restaurant4 from "./images/image4.jpeg";

export const useStyles = createUseStyles({
  tableWithButtons: {
    width: "calc(100vw - 20px)",
    marginLeft: "auto",
    marginRight: "auto",
    opacity: 0.9,
    backgroundColor: "#757067",
    borderCollapse: "collapse",
    marginTop: "10px",
    marginBottom: "10px",
    marginTop: "calc(15vh + 10px)",
  },
  tableInput: {
    width: "calc(20vw - (20px/4))",
    boxShadow: "13px 13px 30px 0px rgba(0,0,0,0.75)",
    height: "8vh",
    fontSize: "2.5vw",
    backgroundColor: "#4D4237",
    color: "#CFB6A2",
    borderRadius: "5px",
    border: "none",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  bookButton: {
    width: "calc(20vw - (20px/4))",
    height: "8vh",
    fontSize: "2.5vw",
    backgroundColor: "#4D4237",
    color: "#CFB6A2",
    borderRadius: "5px",
    boxShadow: "13px 13px 30px 0px rgba(0,0,0,0.75)",
    "&:hover": {
      backgroundColor: "#003000",
    },
  },
  bookIcon: {
    fontSize: "2.5vw",
  },
  th: {
    width: "calc(25vw - (20px/4))",
    borderBottom: "1px solid #CFB6A2",
    height: "12vh",
  },
  thP: {
    fontSize: "2.5vw",
    display: "flex",
    justifyContent: "center",
    color: "#CFB6A2",
  },
  thI: {
    display: "flex",
    alignItems: "center",
  },
  imagesRight: {
    display: "flex",
    flexDirection: "column-reverse",
    rowGap: "5vw",
    columnGap: "5vw",
  },
  imagesLeft: {
    display: "flex",
    flexDirection: "column-reverse",
    rowGap: "5vw",
    columnGap: "5vw",
  },
  images: {
    width: "100vw",
    padding: "2.5vw",
    marginTop: "15vh",
    display: "flex",
    flexWrap: "wrap",
    columnGap: "5vw",
    rowGap: "5vw",
    opacity: 0.9,
  },
  img0: {
    height: "100px",
    width: "calc(50vw - (10vw/2))",
    height: "calc(85vh - (5vw))",
    backgroundImage: `url(${restaurant1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  img1: {
    height: "100px",
    width: "calc(50vw - (10vw/2))",
    height: "calc(85vh - (5vw))",
    backgroundImage: `url(${restaurant2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  img2: {
    height: "100px",
    width: "calc(50vw - (10vw/2))",
    height: "calc(85vh - (5vw))",
    backgroundImage: `url(${restaurant3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  img3: {
    height: "100px",
    width: "calc(50vw - (10vw/2))",
    height: "calc(85vh - (5vw))",
    backgroundImage: `url(${restaurant4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  imageCover: {
    borderRadius: "10%",
    boxShadow: "1px 13px 18px 0px rgba(0,0,0,0.75)",
    overflow: "hidden",
  },
  navbar: {
    display: "flex",
    width: "100vw",
    height: "15vh",
    boxShadow: "1px 13px 18px 0px rgba(0,0,0,0.75)",
    columnGap: "10px",
    rowGap: "10px",
    padding: "10px",
    opacity: 0.9,
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
    width: "calc(30vw - (50px / 4))",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#4D4237",
    },
    fontSize: "2.5vw",
    height: "calc(15vh - 20px)",
    borderRadius: "30px",
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "calc(10vw - (50px / 4))",
  },
  navbarIcon: {
    fontSize: "5vw",
    color: "#fff",
    "&:hover": {
      color: "black",
      cursor: "pointer",
    },
  },
  dialog: {
    right: "-70vw",
    top: "-26.1vw",
  },
  footer: {
    backgroundColor: "#664229",
    color: "#fff",
    padding: "20px",
  },
  forFlex: {
    width: "15vw",
    display: "flex",
    justifyContent: "space-around",
    margin: "0 auto",
  },
  facebook: {
    fontSize: "1.6vw",
  },
  twitter: {
    fontSize: "1.9vw",
  },
  google: {
    fontSize: "1.8vw",
  },
  telegram: {
    fontSize: "1.7vw",
  },
  copyright: {
    textAlign: "center",
    fontSize: "1vw",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  imgP: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 5,
    color: "#FFF1DE",
    fontSize: "0vw",
  },
  AboutIcon: {
    fontSize: "4vw",
  },
});
