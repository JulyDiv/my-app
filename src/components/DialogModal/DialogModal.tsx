import { FC } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const DialogModalBlock = styled.div`
  position: absolute;
  top: 200px;
  right: 600px;
  padding: 20px 0;
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(0 0 0 / 50%);
  /* animation: dialogModal duration timing-function delay iteration-count direction fill-mode; */
`;

const Title = styled.h2`
  color: black;
  text-align: center;
`;

const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 20px auto;
  width: 400px;
  height: 190px;
`;

const InputTitle = styled.input`
  padding-left: 10px;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  &:hover {
    border: 4px solid #437275;
  }
`;

const InputMission = styled.input`
  display: block;
  padding-left: 10px;
  height: 100px;
  font-size: 16px;
  border-radius: 5px;
  &:hover {
    border: 4px solid #437275;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  width: 400px;
`;

const ButtonClose = styled.button`
  width: 180px;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  &:hover {
    border: 4px solid #437275;
  }
`;

const ButtonAdd = styled.button`
  width: 180px;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  &:hover {
    border: 4px solid #437275;
  }
`;

interface IDialogModalProps {
  todo: ITodoArr[];
  setTodo?: (text: string) => void;
  isOpenModal?: boolean;
  setIsOpenModal?: (text: string) => boolean;
  isOpenModalEdit?: boolean;
  setIsOpenModalEdit?: (text: string) => boolean;
  value?: string;
  setValue?: (text: string) => string;
  noteValue?: string;
  setNoteValue?: (text: string) => string;
  isChange?: (text: boolean) => boolean;
  titleMain?: string;
  currentId?: string;
}

interface ITodoArr {
  id: string;
  title: string;
  note: string;
}

const DialogModal: FC<IDialogModalProps> = ({
  setIsOpenModal,
  isChange,
  value,
  setValue,
  todo,
  setTodo,
  noteValue,
  setNoteValue,
  titleMain,
  currentId,
}) => {
  const onSubmit = () => {
    let newTodo = [];
    if (isChange) {
      newTodo = [...todo].filter((item) => {
        if (item.id === currentId) {
          item.title = value;
          item.note = noteValue;
        }
        return item;
      });
    } else {
      newTodo = [
        ...todo,
        {
          id: uuid(),
          title: value,
          note: noteValue,
        },
      ];
    }
    setTodo(newTodo);
    closeModal();
  };

  const closeModal = () => {
    setValue("");
    setNoteValue("");
    setIsOpenModal(false);
  };

  return (
    <DialogModalBlock>
      <Title>{titleMain}</Title>
      <InputBlock>
        <InputTitle
          placeholder="Todo"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <InputMission
          placeholder="Note"
          value={noteValue}
          onChange={(e) => {
            setNoteValue(e.target.value);
          }}
        />
      </InputBlock>
      <ButtonBlock>
        <ButtonClose onClick={() => closeModal()}>Close</ButtonClose>
        <ButtonAdd onClick={() => onSubmit()}>
          {isChange ? "Save" : "Add"}
        </ButtonAdd>
      </ButtonBlock>
    </DialogModalBlock>
  );
};

export default DialogModal;