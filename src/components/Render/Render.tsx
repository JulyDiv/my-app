import { FC } from "react";
import styled from "styled-components";
import { useState } from "react";
import moment from "moment";
import DialogModal from "../DialogModal/DialogModal";

const TodoRenderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
  background-color: #c5d6d1;
  animation: renderBlock 0.2s ease-in 1 both;
  @keyframes renderBlock {
    0% {
      opacity: 0;
      transform: translateX(0px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

const Name = styled.span`
  margin-left: 15px;
  padding: 5px 0;
  width: 120px;
  color: black;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: start;
  word-break: break-all;
  hyphens: auto;
`;

const Note = styled.span`
  display: flex;
  padding: 5px 0;
  width: 120px;
  min-height: 50px;
  color: black;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  align-items: center;
  word-break: break-all;
`;

const Date = styled.span`
  color: black;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
  width: 410px;
  height: 50px;
`;

const ButtonChange = styled.button`
  width: 200px;
  height: 25px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
`;

const ButtonDelete = styled.button`
  width: 200px;
  height: 25px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
`;

interface IRenderProps {
  todo: ITodoArr[];
  setTodo: any;
  isOpenModal: boolean;
  setIsOpenModal: (a: boolean) => void;
  isOpenModalEdit: boolean;
  setIsOpenModalEdit: (a: boolean) => void;
  value: string;
  setValue: any;
  noteValue: string;
  setNoteValue: any;
  // isChange: boolean;
  // currentId: any;
}

interface ITodoArr {
  id: string;
  title: string;
  note: string;
  item?: string;
}

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
    setValue(title);
    setNoteValue(note);
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
            <ButtonChange onClick={() => editModal(title, note, id)}>
              Change
            </ButtonChange>
            <ButtonDelete onClick={() => deleteTodo(id)}>Delete</ButtonDelete>
          </ButtonBlock>
        </TodoRenderBlock>
      ))}
      {(isOpenModal || isOpenModalEdit) && (
        <DialogModal
          titleMain={isOpenModal ? "Add New Todo" : "Edit Todo"}
          setIsOpenModal={isOpenModal ? setIsOpenModal : setIsOpenModalEdit}
          isChange={isOpenModalEdit}
          value={value}
          setValue={setValue}
          todo={todo}
          setTodo={setTodo}
          noteValue={noteValue}
          currentId={currentId}
          setNoteValue={setNoteValue}
        />
      )}
    </>
  );
};

export default Render;
