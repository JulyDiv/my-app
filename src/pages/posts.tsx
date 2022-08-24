import type { NextPage } from "next";
import { useEffect } from "react";
import { useState } from "react";
import Posts from "../components/Posts/Posts";
import axios from "axios";
import Users from "../components/Users/Users";
import { Block, Blocks } from "../components/Posts/Posts.styled";

const Post: NextPage = () => {
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
  }, []);

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <Blocks>
      <Block>
        <Users
          users={users}
          setUsers={setUsers}
          posts={posts}
          setPosts={setPosts}
          setOpenPosts={setOpenPosts}
          isOpenPosts={isOpenPosts}
          filtered={filtered}
          setFiltered={setFiltered}
        />
      </Block>
      {isOpenPosts && (
        <Block>
          <Posts
            posts={posts}
            setPosts={setPosts}
            setOpenPosts={setOpenPosts}
            filtered={filtered}
            setFiltered={setFiltered}
          />
        </Block>
      )}
    </Blocks>
  );
};

export default Post;
