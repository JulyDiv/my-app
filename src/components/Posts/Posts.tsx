import { FC } from "react";
import {
  Block,
  PostAvatar,
  PostBlock,
  PostInfo,
  PostNews,
  PostsBlock,
  PostsTitle,
} from "./Posts.styled";
import { IPostsProps } from "./types";

const Posts: FC<IPostsProps> = ({ filtered }) => {

  return (
    <>
      <PostBlock>
        {filtered.map(({ id, title, body }) => (
          <PostsBlock>
            <PostInfo key={id}>
              <PostsTitle>{title}</PostsTitle>
              <PostNews>{body}</PostNews>
            </PostInfo>
          </PostsBlock>
        ))}
      </PostBlock>
    </>
  );
};

export default Posts;
