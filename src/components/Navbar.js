import { useCallback, useState } from "react";
import { useStyles } from "./Styles";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconDialog from "./IconDialog";

function Navbar() {
  const classes = useStyles();
  const [openDialog, setIsOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    openDialog === false ? setIsOpenDialog(true) : setIsOpenDialog(false);
  };

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };
  return (
    <section className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#4d4237", borderRadius: "30px" } : {}
          }
        >
          <Button
            className={classes.navbarButton}
            variant="contained"
            onClick={useCallback(() => {
              setIsOpenDialog(false);
            }, [])}
          >
            Home
          </Button>
        </NavLink>
        <NavLink
          to="/contained" // pordznakan
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#4d4237", borderRadius: "30px" } : {}
          }
        >
          <Button
            className={classes.navbarButton}
            variant="contained"
            onClick={useCallback(() => {
              setIsOpenDialog(false);
            }, [])}
          >
            Contained
          </Button>
        </NavLink>
      </div>
      <div className={classes.navbarRight}>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#4d4237", borderRadius: "30px" } : {}
          }
        >
          <Button
            className={classes.navbarButton}
            variant="contained"
            onClick={useCallback(() => {
              setIsOpenDialog(false);
            }, [])}
          >
            About Us
          </Button>
        </NavLink>

        <div className={classes.iconDiv} onClick={handleOpenDialog}>
          <AccountCircleIcon className={classes.navbarIcon} />
        </div>

        {openDialog && (
          <IconDialog open={openDialog} onClose={handleCloseDialog} />
        )}
      </div>
    </section>
  );
}

export default Navbar;
