import React from "react";
import { useStyles } from "./Styles";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.forFlex}>
        <div className={classes.facebook}>
          <FaFacebook />
        </div>
        <div className={classes.twitter}>
          <AiFillTwitterCircle />
        </div>
        <div className={classes.google}>
          <AiFillGooglePlusCircle />
        </div>
        <div className={classes.telegram}>
          <FaTelegram />
        </div>
      </div>
      <div className={classes.copyright}>Copyright. All rights reserved</div>
    </footer>
  );
}

export default Footer;
