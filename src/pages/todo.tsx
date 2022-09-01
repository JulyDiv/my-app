import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Todo from "../components/Todo/Todo";

const TodoPage: NextPage = () => {
  return (
    <>
      <Header title="ToDo" />
      <Todo />
    </>
  );
};

export default TodoPage;