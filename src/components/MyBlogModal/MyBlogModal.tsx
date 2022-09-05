import { FC, memo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  ButtonBlock,
  Input,
  InputBlock,
  InputFile,
  MyBlogBlock,
  Textarea,
  Title,
} from "../MyBlogModal/MyBlogModal.styled";
//@ts-ignore
import uuid from "react-uuid";
import { IMyBlogModalProps, Inputs } from "./types";
import { Overlay } from "../DialogModal/DialogModal.styled";

const MyBlogModal: FC<IMyBlogModalProps> = ({
  isChangeBlog,
  myposts,
  setMyPosts,
  setIsOpenModalBlog,
  mypostsNameValue,
  mypostsValue,
  titleMain,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
    defaultValues: {
      mypostName: mypostsNameValue,
      mypost: mypostsValue
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data, id) => {
    const { mypostName, mypost } = data;
    let newPost = [];
    if (isChangeBlog) {
      newPost = [...myposts].filter((item) => {
        if (item.id === id) {
          item.title = data.mypostName;
          item.body = data.mypost;
        }
        return item;
      });
    } else {
      newPost = [
        ...myposts,
        {
          id: uuid(),
          title: mypostName,
          body: mypost,
        },
      ];
    }
    setMyPosts(newPost);
    setIsOpenModalBlog(false);
    reset();
  };

  return (
    <>
      <Overlay />
      <MyBlogBlock>
        <Title>{titleMain}</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBlock>
            <Input
              {...register("mypostName", {
                required: {
                  value: true,
                  message: "Поле обязательно для заполнения",
                },
                pattern: {
                  value: /[A-Za-z]+/i,
                  message: "Неверные символы",
                },
              })}
              placeholder="Post"
              style={{ border: errors.mypostName && "1px solid red" }}
            />
            {errors?.mypostName?.message && (
              <p style={{ color: "red" }}>{errors?.mypostName?.message}</p>
            )}
            <Textarea
              {...register("mypost", {
                required: false,
              })}
              placeholder="Text Post"
            />
          </InputBlock>
          <ButtonBlock>
            <Button onClick={() => setIsOpenModalBlog(false)}>Close</Button>
            <Button type="submit">{isChangeBlog ? "Save" : "Add"}</Button>
          </ButtonBlock>
        </form>
      </MyBlogBlock>
    </>
  );
};

export default memo(MyBlogModal);
