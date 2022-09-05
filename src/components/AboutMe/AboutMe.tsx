import { FC } from "react";
import {
  Container,
  Line,
  MainBlock,
  MainGradient,
  MainTitle,
} from "../Main/Main.styled";
import MainSwiper from "../MainSwiper/MainSwiper";
import { AboutMeBlock } from "./AboutMe.styled";

const AboutMe: FC = () => {
  return (
    <>
      <MainBlock>
        <MainGradient />
        <Container>
          <Line />
        </Container>
        <MainTitle>About Me</MainTitle>
        <Container>
          <AboutMeBlock>
            <MainSwiper />
          </AboutMeBlock>
        </Container>
      </MainBlock>
      <MainBlock style={{ backgroundColor: "white" }}>
        <Container>
          <Line />
        </Container>
      </MainBlock>
    </>
  );
};

export default AboutMe;
