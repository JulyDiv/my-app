import { FC, useEffect } from "react";
import { useState } from "react";
import Posts from "../Posts/Posts";
import axios from "axios";
import Users from "../Users/Users";
import { Block, Blocks } from "../Posts/Posts.styled";
import UserSwiper from "../UserSwiper/UserSwiper";

const Post: FC = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState(posts);
  const [isOpenPosts, setOpenPosts] = useState(false);
  const getData = async () => {
    return await axios
      .get("https://jsonplaceholder.typicode.com/posts", {})
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((error: any) => {
        console.error(error.message);
      });
  };

  const getDatas = async () => {
    return await axios
      .get("https://jsonplaceholder.typicode.com/users", {})
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error: any) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    getData();
    getDatas();
  }, []);

//   useEffect(() => {
//     getDatas();
//   }, []);

  return (
    <>
      <Blocks>
          <Users
            users={users}
            posts={posts}
            setOpenPosts={setOpenPosts}
            setFiltered={setFiltered}
            isOpenPosts={isOpenPosts}
          />
        {isOpenPosts && (
          <Block>
            <Posts filtered={filtered} isOpenPosts={isOpenPosts} />
          </Block>
        )}
      </Blocks>
    </>
  );
};

export default Post;
