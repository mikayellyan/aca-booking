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
  const [restaurants, setRestaurants] = useState([]);
  const fetchData = async () => {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      setRestaurants(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          name: doc,
        }))
      );
    });
  };
  useEffect(() => {
    fetchData();
    console.log(restaurants);
  }, []);
  return (
    <>
      <Navbar />
      <section className={classes.images}>
        {restaurants.map(({ id, name }) => {
          return (
            <div
              key={id}
              onClick={() => {
                navigate(`/restaurant/${id}`);
              }}
              style={{ position: "relative" }}
              className="imageCover"
            >
              <p className={classes.imgP}>
                {id === 0
                  ? "Atlas"
                  : id === 1
                  ? "Eightbar"
                  : id === 2
                  ? "S & M"
                  : "C & D"}
              </p>
              <div className={classes[`img${id}`]}></div>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
}
export default Home;
