import type { NextPage } from "next";
import GlobalStyle from "../components/GlobalStyle/GlobalSyle";
import Todo from "../components/Todo/Todo";

const TodoPage: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Todo />
    </>
  );
};

export default TodoPage;