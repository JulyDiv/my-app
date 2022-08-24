import { FC } from "react";
import { PostNews, PostsBlock, PostsTitle } from "./Posts.styled";

const Posts: FC = ({ posts, setPosts, setOpenPosts, filtered }) => {
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
