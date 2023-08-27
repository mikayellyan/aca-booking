import * as React from "react";
import { useStyles } from "../App";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import LocalDiningOutlinedIcon from "@mui/icons-material/LocalDiningOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import { styled } from "styled-components";
import about1image from "../image001.jpg";
import about2image from "../image002.jpg";
import about3image from "../image003.jpg";
import about4image from "../image004.webp";
import Navbar from "./Navbar";

const AboutBox = styled.section`
  width: 100vw;
  height: 185vh;
`;

const AboutTitle = styled.h1`
  font-size: 2.6vw;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 125px;
`;

const Line = styled.div`
  width: 10vw;
  height: 0.5vh;
  background-color: #fff;
  margin: 0 auto;
`;

const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e3e1d7;
  width: calc(25vw - (50px / 4));
`;

const AboutInfoP = styled.p`
  text-align: center;
  font-size: 1.2vw;
`;

const AboutFlex = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const AboutImg1 = styled.div`
  height: 100px;
  width: calc(25vw - (50px / 4));
  height: calc(42.5vh - 15px);
  background: white;
  background-image: url(${about2image});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
`;

const AboutImg2 = styled.div`
  height: 100px;
  width: calc(25vw - (50px / 4));
  height: calc(42.5vh - 15px);
  background: white;
  background-image: url(${about1image});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
`;

const AboutImg3 = styled.div`
  height: 100px;
  width: calc(25vw - (50px / 4));
  height: calc(42.5vh - 15px);
  background: white;
  background-image: url(${about3image});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
`;

const AboutImg4 = styled.div`
  height: 100px;
  width: calc(25vw - (50px / 4));
  height: calc(42.5vh - 15px);
  background: white;
  background-image: url(${about4image});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
`;

const AboutUs = () => {
  let classes = useStyles();
  return (
    <>
      <Navbar />
      <AboutBox>
        <AboutTitle>GET TO KNOW US</AboutTitle>
        <Line></Line>
        <AboutFlex>
          <AboutInfo>
            <LiquorOutlinedIcon className={classes.AboutIcon} />
            <AboutInfoP>
              Welcome to <b>Dine Today</b>, where culinary excellence meets a
              warm and inviting atmosphere. Nestled in the heart of{" "}
              <b>Yerevan</b>, our restaurant is a haven for food enthusiasts
              seeking a memorable dining experience.
            </AboutInfoP>
          </AboutInfo>
          <AboutImg1></AboutImg1>
        </AboutFlex>

        <AboutFlex>
          <AboutImg1></AboutImg1>
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
        </AboutFlex>

        <AboutFlex>
          <AboutInfo>
            <MenuBookOutlinedIcon className={classes.AboutIcon} fontSize="" />
            <AboutInfoP>
              Step into a world of refined elegance and genuine hospitality when
              you dine with us.Our attentive staff is dedicated to ensuring your
              visit is nothing short of exceptional, with impeccable service
              that complements the culinary journey.
            </AboutInfoP>
          </AboutInfo>
          <AboutImg3></AboutImg3>
        </AboutFlex>

        <AboutFlex>
          <AboutImg4></AboutImg4>
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
        </AboutFlex>
      </AboutBox>
    </>
  );
};

export default AboutUs;
