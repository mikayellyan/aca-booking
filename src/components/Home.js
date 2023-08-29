import * as React from "react";
import { useStyles } from "../App";
import Restaurant from "./Restaurant";
import Navbar from "./Navbar";

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
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
    </>
  );
};

export default Home;
