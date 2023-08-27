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
                Welcome to <b>Dine Today</b>, where culinary excellence meets a
                warm and inviting atmosphere. Nestled in the heart of{" "}
                <b>Yerevan</b>, our restaurant is a haven for food enthusiasts
                seeking a memorable dining experience.
              </p>
            </div>
            <div className={classes.AboutInfo}>
              <LocalDiningOutlinedIcon
                className={classes.AboutIcon}
                fontSize=""
              />
              <p className={classes.AboutInfoP}>
                Founded in <b>1997</b>, <b>Dine Today</b> was born out of a
                passion for exceptional cuisine and a desire to create a space
                where flavors, traditions, and innovation harmoniously coexist.
                What started as a vision has now blossomed into a beloved
                culinary destination, known for its dedication to quality and
                creativity.
              </p>
            </div>
          </div>
          <div className={classes.AboutInfosRight}>
            <div className={classes.AboutInfo}>
              <MenuBookOutlinedIcon className={classes.AboutIcon} fontSize="" />
              <p className={classes.AboutInfoP}>
                Step into a world of refined elegance and genuine hospitality
                when you dine with us. Our thoughtfully designed interior exudes
                a blend of modern sophistication and cozy charm, making it an
                ideal setting for romantic dinners, family gatherings, or
                celebrations with friends. Our attentive staff is dedicated to
                ensuring your visit is nothing short of exceptional, with
                impeccable service that complements the culinary journey.
              </p>
            </div>
            <div className={classes.AboutInfo}>
              <DeliveryDiningOutlinedIcon
                className={classes.AboutIcon}
                fontSize=""
              />
              <p className={classes.AboutInfoP}>
                At <b>Dine Today</b>, we understand that sometimes you want to
                enjoy our exceptional cuisine in the comfort of your own home.
                That's why we offer a convenient and reliable delivery service,
                bringing the same exquisite flavors from our kitchen straight to
                your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
