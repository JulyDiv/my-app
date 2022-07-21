import type { NextPage } from "next";
import GlobalStyle from "../components/GlobalStyle/GlobalSyle";
import Todo from "../components/Todo/Todo";

const Home: NextPage = () => {
  return (
    <>
    <GlobalStyle/>
    <Todo/>
    </>
  );
};

export default Home;
