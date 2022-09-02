import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import { Container, Line, MainGradient } from "../components/Main/Main.styled";
import {
  InfoBlock,
  MainBlock,
  MainText,
  MainTitle,
} from "../components/Main/Main.styled";
import MainPosts from "../components/MainPosts/MainPosts";

const Main: NextPage = () => {
  return (
    <>
      <Head>
        <title>Main</title>
        <meta name="title" content="MyBlog" />
      </Head>
      <Header title="MyApp" />
      <MainBlock>
        <MainGradient />
        <Container>
          <Line />
        </Container>
        <MainTitle>MyApp Application</MainTitle>
        <MainText>Welcome, admin!</MainText>
        <Container>
          <InfoBlock style={{ backgroundImage: 'url("img/post-4.jpg")' }} />
          <InfoBlock style={{ backgroundImage: 'url("img/post-8.jpg")' }} />
        </Container>
      </MainBlock>
      <MainBlock style={{ backgroundColor: "white" }}>
        <Container>
          <Line />
        </Container>
        <MainTitle style={{ color: "black" }}>NewS</MainTitle>
        <MainText style={{ color: "black" }}>New friends posts</MainText>
        <Container>
          <MainPosts />
        </Container>
      </MainBlock>
    </>
  );
};

export default Main;
