import { FC } from "react";
import { useState } from "react";
import DBPosts from "./../../../public/DBPosts.json";
import { PostAvatar } from "./Posts.styled";

const PostsAvatar: FC = ({ postFiltered }) => {
  // const [postAvatar, setPostAvatar] = useState(DBPosts);
  return (
    <>
      {postFiltered.map(({ id, img }) => (
        <PostAvatar
          key={id}
          img={img}
        ></PostAvatar>
      ))}
    </>
  );
};

export default PostsAvatar;
