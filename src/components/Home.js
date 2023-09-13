import { useStyles } from "./Styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  const classes = useStyles();
  const navigate = useNavigate();

  const restaurants = [
    { id: 0, image: classes.img1, restaurantName: "HotPub" },
    { id: 1, image: classes.img2, restaurantName: "FlavorLane" },
    { id: 2, image: classes.img3, restaurantName: "TasteWave" },
    { id: 3, image: classes.img4, restaurantName: "CrispCafé" },
  ];
  return (
    <>
      <Navbar />
      <section className={classes.images}>
        {restaurants.map(({ id, image }) => {
          return (
            <div
              key={id}
              onClick={() => navigate(`/restaurant/${id}`)}
              className={classes.imageCover}
            >
              <div className={image}></div>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
}

export default Home;
