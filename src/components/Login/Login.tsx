import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  ButtonBlock,
  DialogModalBlock,
  Input,
  InputBlock,
  Overlay,
  Title,
} from "../DialogModal/DialogModal.styled";
import { useState } from "react";

const Login: FC = ({ }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const [logins, setLogins] = useState();
  const [passwords, setPasswords] = useState();
  const onSubmit: SubmitHandler<any> = (data) => {
    const { login, password } = data;
    reset();
  };
  return (
    <Overlay>
      <DialogModalBlock>
        <Title>Log In Blog</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBlock>
            <Input
              {...register("login", {
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
              placeholder="Login"
              style={{ border: errors.login && "1px solid red" }}
            />

            {errors?.login?.message && (
              <p style={{ color: "red" }}>
                {errors?.login?.message}</p>
            )}

            <Input
              {...register("password", {
                required: false,
                pattern: {
                  value: /[A-Za-z]+/i,
                  message: "Неверные символы",
                },
              })}
              placeholder="PassWord"
              style={{ border: errors.password && "1px solid red" }}
            />
            {errors?.password?.message && (
              <p style={{ color: "red" }}>
                {errors?.password?.message}</p>
            )}
          </InputBlock>
          <ButtonBlock>
            <Button type="submit">Go!</Button>
          </ButtonBlock>
        </form>
      </DialogModalBlock>
    </Overlay>
  );
};

export default Login;
