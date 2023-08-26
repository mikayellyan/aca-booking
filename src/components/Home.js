import * as React from "react";
import Button from "@mui/material/Button";
import { useStyles } from "../App";
import styled from "styled-components";
import Restaurant from "./Restaurant";
import AboutUs from "./AboutUs";

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
          Sign out
        </Button>
      </Navbar>
      <Images>
        <ImagesLeft>
          <div className={classes.img1}></div>
          <div className={classes.img2}></div>
        </ImagesLeft>
        <div>
          <div className={classes.bigImageCover}>
            <div className={classes.img3}></div>
          </div>
        </div>
        <div className={classes.imagesRight}>
          <div className={classes.imageCover}>
            <div className={classes.img4}></div>
          </div>
          <div className={classes.imageCover}>
            <div className={classes.img5}></div>
          </div>
        </div>
      </Images>
      <Restaurant />
      <AboutUs />
    </>
  );
};

export default Home;
