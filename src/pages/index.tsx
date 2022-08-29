import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle/GlobalSyle";
import Header from "../components/Header/Header";
import { Container } from "../components/Header/Header.styled";

const Block = styled.div`
  margin: auto;
  width: 1000px;
  min-height: 500px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(0 0 0 / 50%);
`;
const LinkItem = styled.a`
  display: inline-block;
  margin: 40px 40px;
  padding: 15px 15px;
  width: 200px;
  text-align: center;
  font-size: 19px;
  font-weight: 700;
  line-height: 21px;
  color: black;
  background-color: #d2dce6;
  border: 3px solid #437275;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: #437275;
    color: white;
  }
`;
const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
        <Header title="Welcome"/>
        <Block>
          <Container>
          <Link href="/login">
          <LinkItem>Login</LinkItem>
        </Link>
        <Link href="/todo">
          <LinkItem>Todo</LinkItem>
        </Link>
        <Link href="/posts">
          <LinkItem>News</LinkItem>
        </Link>
        </Container>
        </Block>
        
    </>
  );
};

export default Home;
