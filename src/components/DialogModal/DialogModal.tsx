import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled, { keyframes } from "styled-components";
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
  animation: dialogModal 0.2s ease-in 1 both;
  @keyframes dialogModal {
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
  padding: 5px 10px;
  height: 100px;
  font-size: 18px;
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
  setTodo: (a: string) => string;
  isOpenModal: boolean;
  setIsOpenModal: (a: boolean) => void;
  isOpenModalEdit: boolean;
  setIsOpenModalEdit: (a: boolean) => void;
  value: string;
  setValue: (a: string) => string;
  noteValue: string;
  setNoteValue: (a: string) => string;
  isChange: boolean;
  titleMain: string;
  currentId: any;
}

interface ITodoArr {
  id: string;
  title: string;
  note: string;
}

type Inputs = {
  todo: string;
  note: string;
};

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
  const {
    register,
    handleSubmit,
    reset,
    isValid,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });

  const onSubmits: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

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
      <form onSubmit={handleSubmit(onSubmits)}>
        <InputBlock>
          <InputTitle
            {...register("todo", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            placeholder="Todo"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          {errors?.todo?.type === "required" && (
            <p>Поле обязательно для заполнения</p>
          )}
          {errors?.todo?.type === "maxLength" && (
            <p>Количество символов до 20-ти</p>
          )}
          {errors?.todo?.type === "pattern" && <p>Неверные символы</p>}
          <InputMission
            {...register("note", { required: false, pattern: /^[A-Za-z]+$/i })}
            placeholder="Note"
            value={noteValue}
            onChange={(e) => {
              setNoteValue(e.target.value);
            }}
          />
          {errors?.note?.type === "pattern" && <p>Неверные символы</p>}
        </InputBlock>
        <ButtonBlock>
          <ButtonClose onClick={() => closeModal()}>Close</ButtonClose>
          <ButtonAdd type="submit" disabled={!isValid} onClick={() => onSubmit()}>
            {isChange ? "Save" : "Add"}
          </ButtonAdd>
        </ButtonBlock>
      </form>
    </DialogModalBlock>
  );
};

export default DialogModal;
