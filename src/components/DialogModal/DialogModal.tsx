import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
//@ts-ignore
import uuid from "react-uuid";
import { IDialogModalProps } from "./types";
import { Button, ButtonBlock, DialogModalBlock, Input, InputBlock, Title } from "./DialogModal.styled";

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

  const onSubmit: SubmitHandler<Inputs> = () => {
    onSubmits();
    reset();
  };

  const onSubmits = () => {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBlock>
          <Input
            {...register("todo", {
              required: {
                value: true,
                message: "Поле обязательно для заполнения",
              },
              maxLength: { value: 20, message: "Количество символов до 20-ти" },
              pattern: {
                value: /[A-Za-z]+/i,
                message: "Неверные символы",
              },
            })}
            defaultValue={value}
            placeholder="Todo"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            style={{ border: errors.todo && "1px solid red" }}
          />

          {errors?.todo?.message && (
            <p style={{ color: "red" }}>{errors?.todo?.message}</p>
          )}

          <Input
            {...register("note", {
              required: false,
              pattern: {
                value: /[A-Za-z]+/i,
                message: "Неверные символы",
              },
            })}
            placeholder="Note"
            defaultValue={noteValue}
            onChange={(e) => {
              setNoteValue(e.target.value);
            }}
            style={{ border: errors.note && "1px solid red" }}
          />
          {errors?.note?.message && (
            <p style={{ color: "red" }}>{errors?.note?.message}</p>
          )}
        </InputBlock>
        <ButtonBlock>
          {/**не забыть про useCallback */}
          <Button onClick={() => closeModal()}>Close</Button>
          <Button type="submit">{isChange ? "Save" : "Add"}</Button>
        </ButtonBlock>
      </form>
    </DialogModalBlock>
  );
};

export default DialogModal;
