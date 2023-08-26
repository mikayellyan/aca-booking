import * as React from "react";
import { useStyles } from "../App";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import LocalDiningOutlinedIcon from "@mui/icons-material/LocalDiningOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";

const AboutUs = () => {
  let classes = useStyles();
  return (
    <>
      <section className={classes.AboutBox}>
        <div className={classes.AboutInfos}>
          <div className={classes.AboutInfosLeft}>
            <div className={classes.AboutInfo}>
              <LiquorOutlinedIcon className={classes.AboutIcon} fontSize="" />
              <p className={classes.AboutInfoP}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a{" "}
              </p>
            </div>
            <div className={classes.AboutInfo}>
              <LocalDiningOutlinedIcon
                className={classes.AboutIcon}
                fontSize=""
              />
              <p className={classes.AboutInfoP}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a{" "}
              </p>
            </div>
          </div>
          <div className={classes.AboutInfosRight}>
            <div className={classes.AboutInfo}>
              <MenuBookOutlinedIcon className={classes.AboutIcon} fontSize="" />
              <p className={classes.AboutInfoP}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a{" "}
              </p>
            </div>
            <div className={classes.AboutInfo}>
              <DeliveryDiningOutlinedIcon
                className={classes.AboutIcon}
                fontSize=""
              />
              <p className={classes.AboutInfoP}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
