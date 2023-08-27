import * as React from "react";
import { useStyles } from "../App";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import LocalDiningOutlinedIcon from "@mui/icons-material/LocalDiningOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import { styled } from "styled-components";

const AboutBox = styled.footer`
  width: 100vw;
  height: 85vh;
  display: flex;
  flex-direction: column-reverse;
`;

const AboutInfos = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 10px;
  column-gap: 10px;
`;

const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e3e1d7;
  width: calc(25vw - (50px / 4));
`;

const AboutInfoP = styled.div`
  text-align: center;
  font-size: 1.6vw;
`;
const AboutUs = () => {
  let classes = useStyles();
  return (
    <>
      <AboutBox>
        <AboutInfos>
          <AboutInfo>
            <LiquorOutlinedIcon className={classes.AboutIcon} />
            <AboutInfoP>
              Welcome to <b>Dine Today</b>, where culinary excellence meets a
              warm and inviting atmosphere. Nestled in the heart of{" "}
              <b>Yerevan</b>, our restaurant is a haven for food enthusiasts
              seeking a memorable dining experience.
            </AboutInfoP>
          </AboutInfo>
          <AboutInfo>
            <LocalDiningOutlinedIcon className={classes.AboutIcon} />
            <AboutInfoP>
              Founded in <b>1997</b>, <b>Dine Today</b> was born out of a
              passion for exceptional cuisine and a desire to create a space
              where flavors, traditions, and innovation harmoniously coexist.
              What started as a vision has now blossomed into a beloved culinary
              destination, known for its dedication to quality and creativity.
            </AboutInfoP>
          </AboutInfo>
          <AboutInfo>
            <MenuBookOutlinedIcon className={classes.AboutIcon} fontSize="" />
            <AboutInfoP>
              Step into a world of refined elegance and genuine hospitality when
              you dine with us. Our thoughtfully designed interior exudes a
              blend of modern sophistication and cozy charm, making it an ideal
              setting for romantic dinners, family gatherings, or celebrations
              with friends. Our attentive staff is dedicated to ensuring your
              visit is nothing short of exceptional, with impeccable service
              that complements the culinary journey.
            </AboutInfoP>
          </AboutInfo>
          <AboutInfo>
            <DeliveryDiningOutlinedIcon className={classes.AboutIcon} />
            <AboutInfoP>
              At <b>Dine Today</b>, we understand that sometimes you want to
              enjoy our exceptional cuisine in the comfort of your own home.
              That's why we offer a convenient and reliable delivery service,
              bringing the same exquisite flavors from our kitchen straight to
              your doorstep.
            </AboutInfoP>
          </AboutInfo>
        </AboutInfos>
      </AboutBox>
    </>
  );
};

export default AboutUs;
