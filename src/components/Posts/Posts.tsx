import { FC } from "react";
import { useState } from "react";
import DBPosts from "./../../../public/DBPosts.json"
import {
  PostAvatar,
  PostInfo,
  PostNews,
  PostsBlock,
  PostsTitle,
} from "./Posts.styled";
import { IPostsProps } from "./types";

const Posts: FC<IPostsProps> = ({ filtered }) => {
  const [postAvatar, setPostAvatar] = useState(DBPosts);
  return (
    <>
      {filtered.map(({ id, title, body }) => (
        <PostsBlock key={id}>
          <div>
            {postAvatar.slice(0, 1).map(({ id, img }) => (
              <PostAvatar key={id} img={img}></PostAvatar>
            ))}
          </div>
          <PostInfo>
            <PostsTitle>{title}</PostsTitle>
            <PostNews>{body}</PostNews>
          </PostInfo>
        </PostsBlock>
      ))}
    </>
  );
};

export default Posts;
