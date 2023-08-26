import * as React from "react";
import Button from "@mui/material/Button";
import { useStyles } from "../App";
import Restaurant from "./Restaurant";
import AboutUs from "./AboutUs";
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navbarLeft}>
          <Button className={classes.navbarButton} variant="contained">
            Home
          </Button>
          <Button className={classes.navbarButton} variant="contained">
            Contained
          </Button>
        </div>
        <div className={classes.navbarRight}>
          <Button className={classes.navbarButton} variant="contained">
            Contained
          </Button>
          <Button className={classes.navbarLogOut} variant="contained">
            Contained
          </Button>
        </div>
      </nav>
      <section className={classes.images}>
        <div className={classes.imagesLeft}>
          <div className={classes.imageCover}>
            <div className={classes.img1}></div>
          </div>
          <div className={classes.imageCover}>
            <div className={classes.img2}></div>
          </div>
        </div>
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
      </section>
      <Restaurant />
      <AboutUs />
    </>
  );
};

export default Home;
