import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header/Header";
import { Block, ButtonOut, LinkItem } from "../components/Main/Main.styled";
import { useRouter } from "next/router";

const Main: NextPage = () => {
    const router = useRouter();
    const logOut = () => {
      router.push('/')
    }
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
        <ButtonOut onClick={() => logOut()}>LogOut</ButtonOut>
    </>
  );
};

export default Main;
