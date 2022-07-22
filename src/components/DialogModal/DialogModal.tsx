import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled, { keyframes } from "styled-components";
//@ts-ignore
import uuid from "react-uuid";
import { IDialogModalProps } from "./types";

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
  //border-bottom: error ? 1px solid red : initial;
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
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });

  const onSubmits: SubmitHandler<Inputs> = ({ todo, note }) => {
    console.log(todo, note);
    reset();
  };

  const onSubmit = () => {
    let newTodo = [];
    //заюзать коллекию new Map() класть обновленную задачу по ключу
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
        {/* <InputBlock error={errors.todo} > */}
        <InputBlock>
          <InputTitle
            {...register("todo", {
              required: {
                value: true,
                message: "Поле обязательно для заполнения",
              },
              maxLength: { value: 20, message: "Количество символов до 20-ти" },
              pattern: { value: /^[A-Za-z]+$/i, message: "твой язык хуета" },
            
            })}
            defaultValue={value}
            placeholder="Todo"
          />
          {errors?.todo?.message && <p>{errors?.todo?.message}</p>}

          <InputMission
            {...register("note", { required: false, pattern: /^[A-Za-z]+$/i })}
            placeholder="Note"
            defaultValue={noteValue}
          />
          {errors?.note?.type === "pattern" && <p>Неверные символы</p>}
        </InputBlock>
        <ButtonBlock>
          {/**не забыть про useCallback */}
          <ButtonClose onClick={() => closeModal()}>Close</ButtonClose>
          <ButtonAdd type="submit" onClick={onSubmit}>{isChange ? "Save" : "Add"}</ButtonAdd>
        </ButtonBlock>
      </form>
    </DialogModalBlock>
  );
};

export default DialogModal;
