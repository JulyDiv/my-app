import { FC } from "react";
import { useState } from "react";
import moment from "moment";
import DialogModal from "../DialogModal/DialogModal";
// import { IDialogModalProps } from "../DialogModal/types";
import { IRenderProps } from "./types";
import {
  ButtonBlock,
  Name,
  Note,
  TodoRenderBlock,
  Date,
  Button,
} from "./Render.styled";

const Render: FC<IRenderProps> = ({
  todo,
  setTodo,
  isOpenModal,
  setIsOpenModal,
  isOpenModalEdit,
  setIsOpenModalEdit,
  value,
  setValue,
  noteValue,
  setNoteValue,
}) => {
  const data = moment().format("l");

  const [currentId, setCurrentId] = useState();

  const deleteTodo = (id: string) => {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  };
  const editModal = (title: string, note: string, id: any) => {
    setIsOpenModalEdit(true);
    setValue?.(title);
    setNoteValue?.(note);
    setCurrentId(id);
  };
  return (
    <>
      {todo.map(({ id, title, note }) => (
        <TodoRenderBlock key={id}>
          <Name>{title}</Name>
          <Note>{note}</Note>
          <Date>Create {data}</Date>
          <ButtonBlock>
            <Button onClick={() => editModal(title, note, id)}>Change</Button>
            <Button onClick={() => deleteTodo(id)}>Delete</Button>
          </ButtonBlock>
        </TodoRenderBlock>
      ))}
      {(isOpenModal || isOpenModalEdit) && (
        <DialogModal
          titleMain={isOpenModal ? "Add New Todo" : "Edit Todo"}
          setIsOpenModal={isOpenModal ? setIsOpenModal : setIsOpenModalEdit}
          isChange={isOpenModalEdit}
          value={isOpenModal ? "" : value}
          todo={todo}
          setTodo={setTodo}
          noteValue={isOpenModal ? "" : noteValue}
          currentId={currentId}
        />
      )}
    </>
  );
};

export default Render;
