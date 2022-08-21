import { FC, memo, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
//@ts-ignore
import uuid from "react-uuid";
import { IDialogModalProps } from "./types";
import {
  Button,
  ButtonBlock,
  DialogModalBlock,
  Input,
  InputBlock,
  Overlay,
  Title,
} from "./DialogModal.styled";

type Inputs = {
  todos: string;
  note: string;
};

const DialogModal: FC<IDialogModalProps> = ({
  setIsOpenModal,
  isChange,
  todo,
  value,
  noteValue,
  setTodo,
  titleMain,
  currentId
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
    defaultValues: { note: noteValue, todos: value },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { note, todos } = data;
    console.log(data);
    let newTodo = [];
    if (isChange) {
      newTodo = [...todo].filter((item) => {
        if (item.id === currentId) {
          item.title = data.todos;
          item.note = data.note;
        }
        return item;
      });
    } else {
      newTodo = [
        ...todo,
        {
          id: uuid(),
          title: todos,
          note: note,
        },
      ];
    }
    setTodo(newTodo);
    setIsOpenModal(false);
    reset();
  };

  const onClick = useCallback(() => setIsOpenModal(false), []);

  return (
    <Overlay>
      <DialogModalBlock>
        <Title>{titleMain}</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBlock>
            <Input
              {...register("todos", {
                required: {
                  value: true,
                  message: "Поле обязательно для заполнения",
                },
                maxLength: {
                  value: 20,
                  message: "Количество символов до 20-ти",
                },
                pattern: {
                  value: /[A-Za-z]+/i,
                  message: "Неверные символы",
                },
              })}
              placeholder="Todo"
              style={{ border: errors.todos && "1px solid red" }}
            />

            {errors?.todos?.message && (
              <p style={{ color: "red" }}>{errors?.todos?.message}</p>
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
              style={{ border: errors.note && "1px solid red" }}
            />
            {errors?.note?.message && (
              <p style={{ color: "red" }}>{errors?.note?.message}</p>
            )}
          </InputBlock>
          <ButtonBlock>
            <Button onClick={onClick}>Close</Button>
            <Button type="submit">{isChange ? "Save" : "Add"}</Button>
          </ButtonBlock>
        </form>
      </DialogModalBlock>
    </Overlay>
  );
};

export default memo(DialogModal);
