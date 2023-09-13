import Button from "@mui/material/Button";
import { useStyles } from "./Styles";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PushPinIcon from "@mui/icons-material/PushPin";
import SearchIcon from "@mui/icons-material/Search";
import { auth, db } from "../firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "./Navbar";

const Restaurant = () => {
  const [currentDate, setCurrentDate] = useState("");
  let books = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
    16: true,
    17: true,
    18: true,
  };

  const { id } = useParams();
  const [restaurants, setRestaurants] = useState([]);
  const fethPost = async () => {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setRestaurants(newData);
      console.log(restaurants);
    });
  };
  useEffect(() => {
    fethPost();
  }, []);
  let [currentBooks, setCurrentBooks] = useState(
    currentDate === ""
      ? {
          1: true,
          2: true,
          3: true,
          4: true,
          5: true,
          6: true,
          7: true,
          8: true,
          9: true,
          10: true,
          11: true,
          12: true,
          13: true,
          14: true,
          15: true,
          16: true,
          17: true,
          18: true,
        }
      : restaurants[id].booking[currentDate]
  );
  let currentBooksCopy = { ...currentBooks };
  let restaurantsCopy = { ...restaurants[id] };

  const classes = useStyles();
  // let date = new Date();
  // let year = date.getFullYear();
  // let month = date.getMonth() + 1;
  // let day = date.getDate();
  const [value, setValue] = useState("");
  const inputOnChange = (e) => {
    setValue(e.target.value);
  };
  const f = async (value) => {
    await setDoc(doc(db, "users", id), value);
  };
  const [user, setUser] = useState(auth.currentUser);

  const buttonOnClick = (buttonId) => {
    if (user) {
      currentBooksCopy[buttonId] = false;
      restaurantsCopy.booking[currentDate] = currentBooksCopy;
      setCurrentBooks(currentBooksCopy);
      f(restaurantsCopy);
    } else {
      setUser(null);
    }
  };

  return (
    <>
      <Navbar />
      <table className={classes.tableWithButtons}>
        <tr className={classes.tr}>
          <th className={classes.th}>
            <p className={classes.thP}>Book a Table</p>
          </th>
          <th className={classes.th}>
            <input
              value={value}
              onChange={inputOnChange}
              type="date"
              className={classes.tableInput}
            ></input>
          </th>
          <th className={classes.th}>
            <Button
              onClick={() => {
                if (value.length > 3 && restaurantsCopy.booking[value]) {
                  setCurrentDate(value);
                  setCurrentBooks(restaurantsCopy.booking[value]);
                } else {
                  restaurantsCopy.booking[value] = books;
                  setCurrentDate(value);
                  setCurrentBooks(restaurantsCopy.booking[value]);
                  f(restaurantsCopy);
                }
              }}
              className={classes.bookButton}
              variant="contained"
            >
              Search <SearchIcon className={classes.bookIcon} />
            </Button>
          </th>
          <th className={classes.th}>
            <p className={classes.thP}>Book a Table</p>
          </th>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>
            <p className={classes.thP}>
              <i className={classes.thI}>
                <AccessTimeIcon fontSize="" />
              </i>
            </p>
          </th>
          <th className={classes.th}>
            <p className={classes.thP}>
              2{" "}
              <i className={classes.thI}>
                <PermIdentityIcon fontSize="" />
              </i>
            </p>
          </th>
          <th className={classes.th}>
            <p className={classes.thP}>
              3 - 4{" "}
              <i className={classes.thI}>
                <PermIdentityIcon fontSize="" />
              </i>
            </p>
          </th>
          <th className={classes.th}>
            <p className={classes.thP}>
              5 - 6{" "}
              <i className={classes.thI}>
                <PermIdentityIcon fontSize="" />
              </i>
            </p>
          </th>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>
            <p className={classes.thP}>6:00pm</p>
          </th>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(1);
              }}
              id={1}
              disabled={currentDate === "" ? true : currentBooks[1] !== true}
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(2);
              }}
              id={2}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[2] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(3);
              }}
              id={3}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[3] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>
            <p className={classes.thP}>7:00pm</p>
          </th>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(4);
              }}
              id={4}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[4] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(5);
              }}
              id={5}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[5] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(6);
              }}
              id={6}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[6] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>
            <p className={classes.thP}>8:00pm</p>
          </th>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(7);
              }}
              id={7}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[7] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(8);
              }}
              id={8}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[8] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(9);
              }}
              id={9}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[9] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>
            <p className={classes.thP}>9:00pm</p>
          </th>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(10);
              }}
              id={10}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[10] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(11);
              }}
              id={11}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[11] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(12);
              }}
              id={12}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[12] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>
            <p className={classes.thP}>10:00pm</p>
          </th>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(13);
              }}
              id={13}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[13] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(14);
              }}
              id={14}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[14] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(15);
              }}
              id={15}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[15] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>
            <p className={classes.thP}>11:00pm</p>
          </th>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(16);
              }}
              id={16}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[16] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(17);
              }}
              id={17}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[17] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button
              onClick={() => {
                buttonOnClick(18);
              }}
              id={18}
              disabled={
                currentDate === ""
                  ? true
                  : currentBooks[18] === true
                  ? false
                  : true
              }
              className={classes.bookButton}
              variant="contained"
            >
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Restaurant;
