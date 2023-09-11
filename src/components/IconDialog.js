import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import { signOut } from "firebase/auth";

function IconDialog({ onClose }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const classes = useStyles();
  useEffect(() => {
    auth.currentUser
      ? setUsername(auth.currentUser.displayName)
      : setUsername("Guest");
  }, []);
  const handleSignOut = () => {
    if (auth) {
      signOut(auth)
        .then(() => {
          console.log("Signed out successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <Dialog open onClose={onClose} className={classes.dialog}>
      <DialogTitle
        style={{
          textAlign: "center",
          fontFamily: "Gill Sans",
          paddingBottom: 0,
        }}
      >
        Welcome {username}
      </DialogTitle>

      <DialogActions>
        {username === "Guest" && (
          <>
            <Button
              style={{ margin: "0 auto" }}
              onClick={() => {
                navigate("/signin");
                onClose();
              }}
            >
              Sign In
            </Button>
            <Button
              onClick={() => {
                navigate("/signup");
                onClose();
              }}
            >
              Sign Up
            </Button>
          </>
        )}
        {username !== "Guest" && (
          <Button
            onClick={() => {
              handleSignOut();
              onClose();
            }}
          >
            Sign out
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default IconDialog;
