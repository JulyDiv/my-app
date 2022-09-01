import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Header from "../components/Header/Header";

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  width: 1000px;
`;
const LinkItem = styled.a`
  display: inline-block;
  margin: 40px 40px;
  padding: 15px 15px;
  width: 200px;
  height: 20px;
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
const Main: NextPage = () => {
  return (
    <>
      <Head>
        <title>Main</title>
        <meta name="title" content="MyBlog" />
      </Head>
      <Header title="Application" />
        <Block>
          <Link href="/todo">
            <LinkItem>Todo</LinkItem>
          </Link>
          <Link href="/posts">
            <LinkItem>News</LinkItem>
          </Link>
          <Link href="/notfound">
            <LinkItem>404</LinkItem>
          </Link>
          <Link href="/review">
            <LinkItem>Review</LinkItem>
          </Link>
          <Link href="/about">
            <LinkItem>About</LinkItem>
          </Link>
          <Link href="#">
            <LinkItem>dtyj</LinkItem>
          </Link>
          <Link href="#">
            <LinkItem>huk</LinkItem>
          </Link>
        </Block>
    </>
  );
};

export default Main;
