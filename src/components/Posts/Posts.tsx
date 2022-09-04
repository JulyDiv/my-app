import { FC } from "react";
import { useState } from "react";
import DBPosts from "./../../../public/DBPosts.json";
import PostsAvatar from "./PostAvatar";
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

const Posts: FC<IPostsProps> = ({
  filtered,
  postFiltered,
}) => {
  return (
    <>
      <PostBlock>
        {filtered.map(({ id, title, body }) => (
          <PostsBlock>
            <PostsAvatar
              postFiltered={postFiltered}
            />
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
