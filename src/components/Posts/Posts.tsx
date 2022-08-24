import { FC } from "react";
import { PostNews, PostsBlock, PostsTitle } from "./Posts.styled";
import { IPostsProps } from "./types";

const Posts: FC<IPostsProps> = ({ filtered }) => {
  return (
    <>
      {filtered.map(({ id, userId, title, body }) => (
        <PostsBlock key={id} userId={userId}>
          <PostsTitle>{title}</PostsTitle>
          <PostNews>{body}</PostNews>
        </PostsBlock>
      ))}
    </>
  );
};

export default Posts;
