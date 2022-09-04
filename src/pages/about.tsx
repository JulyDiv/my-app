import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";

const AboutMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="title" />
      </Head>
      <Header title="About Me" />
    </>
  );
};

export default AboutMe;
