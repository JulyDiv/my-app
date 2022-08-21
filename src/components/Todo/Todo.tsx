import { FC } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ButtonAdd } from "../ButtonAdd/ButtonAdd.styled";
import { Layout } from "../Layout/Layout.styled";
import Header from "../Header/Header";
import Render from "../Render/Render";
import { ITodoArr } from "../DialogModal/types";

const Todo: FC = ({}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [todo, setTodo] = useState<ITodoArr[]>([]);
  const [value, setValue] = useState("");
  const [noteValue, setNoteValue] = useState("");

  useEffect(() => {
    const todo = localStorage.todo ? JSON.parse(localStorage.todo) : [];
    if (todo !== null) {
      setTodo(todo);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.todo = JSON.stringify(todo);
    });
    return () => {
      window.removeEventListener("beforeunload", () => {
        localStorage.todo = JSON.stringify(todo);
      });
    };
  }, [todo]);

  return (
    <Layout>
      <Header />
      <Render
        todo={todo}
        setTodo={setTodo}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        isOpenModalEdit={isOpenModalEdit}
        setIsOpenModalEdit={setIsOpenModalEdit}
        value={value}
        setValue={setValue}
        noteValue={noteValue}
        setNoteValue={setNoteValue}
      />
      <ButtonAdd onClick={() => setIsOpenModal(true)}></ButtonAdd>
    </Layout>
  );
};

export default Todo;
