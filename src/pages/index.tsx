import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import { useIsLogin } from "../hooks/useIsLogin";

const Home: NextPage = () => {
  const isLogin = useIsLogin();
  return (
    <>
      <Head>
        <title>Main</title>
        <meta name="title" content="MyBlog" />
      </Head>
      <Header title="Application" />
        <Login {...isLogin} />
    </>
  );
};

export default Home;
