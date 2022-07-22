import { FC } from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Layout } from "../Layout/Layout.styled";
import Header from "../Header/Header";
import Render from "../Render/Render";
import { ITodoArr } from "../DialogModal/types";

const ButtonAdd = styled.button`
  margin-top: 400px;
  margin-bottom: 50px;
  margin-left: 900px;
  width: 50px;
  height: 50px;
  border: transparent;
  background-image: url("img/plus.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
`;

const Todo: FC = ({}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [todo, setTodo] = useState<ITodoArr[]>([]);
  const [value, setValue] = useState("");
  const [noteValue, setNoteValue] = useState("");

  useEffect(() => {
    const todo = JSON.parse(localStorage.todo);
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
