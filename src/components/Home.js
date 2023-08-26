import * as React from "react";
import Button from "@mui/material/Button";
import { useStyles } from "../App";
import styled from "styled-components";
import Restaurant from "./Restaurant";
import AboutUs from "./AboutUs";
import restaurant1 from "../restaurant1.webp";
import restaurant2 from "../restaurant2.jpeg";
import restaurant3 from "../restaurant3.png";
import restaurant4 from "../restaurant4.webp";
import restaurant5 from "../restaurant5.jpeg";

const Images = styled.section`
  width: 100vw;
  padding: 0px 10px 10px 10px;
  margin-top: 11.5vh;
  display: flex;
  column-gap: 10px;
  row-gap: 10px;
  opacity: 0.75;
`;

const Navbar = styled.nav`
  display: flex;
  width: 100vw;
  height: 10vh;
  background-color: #757067;
  column-gap: 10px;
  row-gap: 10px;
  padding: 10px;
  opacity: 0.75;
  position: fixed;
  top: 0;
  z-index: 10000;
`;

const ImagesLeft = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-bottom: 0px;
`;

const Img1 = styled.div`
  height: 100px;
  width: calc(25vw - (50px / 4));
  height: calc(42.5vh - 15px);
  background: white;
  background-image: url(${restaurant1});
  background-size: cover;
  background-position: center;
`;

const Img2 = styled.div`
  height: 100px;
  width: calc(25vw - (50px / 4));
  height: calc(42.5vh - 15px);
  background: red;
  background-image: url(${restaurant2});
  background-size: cover;
  background-position: center;
`;

const Img3 = styled.div`
  height: 100px;
  width: calc(50vw - (15px));
  height: calc(85vh - 20px);
  background: red;
  background-image: url(${restaurant4});
  background-size: cover;
  background-position: center;
`;

const Img4 = styled.div`
  height: 100px;
  width: calc(25vw - (50px / 4));
  height: calc(42.5vh - 15px);
  background: white;
  background-image: url(${restaurant3});
  background-size: cover;
  background-position: center;
`;

const Img5 = styled.div`
  height: 100px;
  width: calc(25vw - (50px / 4));
  height: calc(42.5vh - 15px);
  background: red;
  background-image: url(${restaurant5});
  background-size: cover;
  background-position: center;
`;

const ImagesRight = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  column-gap: 10px;
`;

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar>
        <Button className={classes.navbarButton} variant="contained">
          Home
        </Button>
        <Button className={classes.navbarButton} variant="contained">
          Contained
        </Button>
        <Button className={classes.navbarButton} variant="contained">
          About us
        </Button>
        <Button className={classes.navbarButton} variant="contained">
          Contained
        </Button>
      </Navbar>
      <Images>
        <ImagesLeft>
          <Img1 />
          <Img2 />
        </ImagesLeft>
        <Img3 />
        <ImagesRight>
          <Img4 />
          <Img5 />
        </ImagesRight>
      </Images>
      <Restaurant />
      <AboutUs />
    </>
  );
};

export default Home;
