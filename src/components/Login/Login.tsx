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
import { useRouter } from "next/router";

interface ILoginProps {
  isLogin: any;
  setIsLogin: any;
}

type Inputs = {
  login: string;
  password: string;
};

const Login: FC<ILoginProps> = ({ isLogin, setIsLogin }) => {
    const [logins, setLogins] = useState("");
    const [passwords, setPasswords] = useState("");
    const [valueLogin, setValueLogin] = useState("");
    const [valuePassword, setValuePassword] = useState("");
    const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: { login: valueLogin, password: valuePassword },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { login, password } = data;
    console.log(data);
    if (login === "admin" && password === "a") {
      setIsLogin(true);
    }
    // setIsLogin(true);
    router.push("/");
    reset();
  };
  return (
    <Overlay>
      <DialogModalBlock>
        <Title>LogIn</Title>
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
              placeholder="Login: admin"
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
              placeholder="PassWord: a"
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
