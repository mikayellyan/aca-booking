import * as React from "react";
import Button from "@mui/material/Button";
import { useStyles } from "../App";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PushPinIcon from "@mui/icons-material/PushPin";

const Restaurant = () => {
  const classes = useStyles();

  return (
    <>
      <table className={classes.tableWithButtons}>
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
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>
            <p className={classes.thP}>7:00pm</p>
          </th>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>
            <p className={classes.thP}>8:00pm</p>
          </th>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>
            <p className={classes.thP}>9:00pm</p>
          </th>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>
            <p className={classes.thP}>10:00pm</p>
          </th>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th}>
            <p className={classes.thP}>11:00pm</p>
          </th>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
          <td align="center" className={classes.th}>
            <Button className={classes.bookButton} variant="contained">
              Book <PushPinIcon className={classes.bookIcon} />
            </Button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Restaurant;

// skzbic sax buttonner@ lineluen ashxatox u esorva amsativna linelu @ntrac henc amsativ @ntri user@ firebaseic objecta galu ira poqr objectnerov vortex guyner@ u disabled@ lineluen dranic kaxvac user@ stanaluya ashxatox u chashxatox buttonner u henc ashxatoxin sxmi darnaluya chashxatox u ira id i taki objecti guynern u disabled@ poxven amen amsativ @ntreluc ete nor amsativa et amsatvi tak pahveluya nor object ira sax buttonner@ ashxatox ete arten goyutyun unecox amsativa @ntrum arten goyutyun unecac objeqna es komponent@ get anum (onChange ov anem?)
