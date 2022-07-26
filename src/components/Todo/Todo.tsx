import { FC } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ButtonAdd } from "../ButtonAdd/ButtonAdd.styled";
import Render from "../Render/Render";
import { ITodoArr } from "../DialogModal/types";
import { Empty } from "../Empty/Empty.styled";
import { Container } from "../Main/Main.styled";

const Todo: FC = () => {
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
    <>
    <Container>
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
      </Container>
    </>
  );
};

export default Todo;
