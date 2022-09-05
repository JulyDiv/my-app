import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";

const AboutMePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="title" />
      </Head>
      <Header title="About Me" />
      <AboutMe />
    </>
  );
};

export default AboutMePage;
