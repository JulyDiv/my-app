import { FC } from "react";
import {
  PostBlock,
  PostNews,
  PostsBlock,
  PostsTitle,
} from "../Posts/Posts.styled";
import { ButtonMyPosts, ButtonMyPostsBlock, MyPostsAvatar, MyPostsInfo } from "./MyPosts.styled";
import { IMyPosts } from "./types";

const MyPosts: FC<IMyPosts> = ({
  myposts,
  setMyPosts,
  setMyPostsValue,
  setIsOpenModalBlogEdit,
  setMyPostsNameValue,
}) => {
  const deletePost = (id: string) => {
    let newPost = [...myposts].filter((item) => item.id != id);
    setMyPosts(newPost);
  };
  const editModal = (body: string, title: string, id: any) => {
    setIsOpenModalBlogEdit(true);
    setMyPostsValue?.(body);
    setMyPostsNameValue?.(title);
  };
  return (
    <>
      <>
        {myposts.map(({ id, title, body, img }) => (
          <PostsBlock key={id}>
            <MyPostsAvatar img={img}></MyPostsAvatar>
            <MyPostsInfo>
              <PostsTitle>{title}</PostsTitle>
              <PostNews>{body}</PostNews>
            </MyPostsInfo>
            <ButtonMyPostsBlock>
              <ButtonMyPosts onClick={() => editModal(body, title, id)}>
                Change
              </ButtonMyPosts>
              <ButtonMyPosts onClick={() => deletePost(id)}>
                Delete
              </ButtonMyPosts>
            </ButtonMyPostsBlock>
          </PostsBlock>
        ))}
      </>
    </>
  );
};

export default MyPosts;
