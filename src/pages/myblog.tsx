import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import { Container, Line, MainTitle } from "../components/Main/Main.styled";
import { useEffect, useState } from "react";
import { ButtonAdd } from "../components/ButtonAdd/ButtonAdd.styled";
import MyBlogModal from "../components/MyBlogModal/MyBlogModal";
import MyPosts from "../components/MyPosts/MyPosts";

const MyBlog: NextPage = () => {
  const [isOpenModalBlog, setIsOpenModalBlog] = useState(false);
  const [isOpenModalBlogEdit, setIsOpenModalBlogEdit] = useState(false);
  const [myposts, setMyPosts] = useState([]);
  const [mypostsValue, setMyPostsValue] = useState('');
  const [mypostsNameValue, setMyPostsNameValue] = useState('');
  // const [myPhotos, setMyPhotos] = useState('');
  useEffect(() => {
    const myposts = localStorage.myposts
      ? JSON.parse(localStorage.myposts)
      : [];
    if (myposts !== null) {
      setMyPosts(myposts);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.myposts = JSON.stringify(myposts);
    });
    return () => {
      window.removeEventListener("beforeunload", () => {
        localStorage.myposts = JSON.stringify(myposts);
      });
    };
  }, [myposts]);
  return (
    <>
      <Head>
        <title>MyBlog</title>
        <meta name="title" />
      </Head>
      <Header title="MyBlog" />
      <Container>
        <MainTitle style={{ color: "#283a3b" }}>My Blog</MainTitle>
        <Line />
        <MyPosts
          myposts={myposts}
          setMyPosts={setMyPosts}
          setIsOpenModalBlogEdit={setIsOpenModalBlogEdit}
          setMyPostsValue={setMyPostsValue}
          setMyPostsNameValue={setMyPostsNameValue}
        />
        <ButtonAdd onClick={() => setIsOpenModalBlog(true)} />
      </Container>

      {(isOpenModalBlog || isOpenModalBlogEdit) && (
        <MyBlogModal
          titleMain={isOpenModalBlog ? "Add New Post" : "Edit Post"}
          setIsOpenModalBlog={
            isOpenModalBlog ? setIsOpenModalBlog : setIsOpenModalBlogEdit
          }
          isChangeBlog={isOpenModalBlogEdit}
          isOpenModalBlogEdit={isOpenModalBlogEdit}
          myposts={myposts}
          setMyPosts={setMyPosts}
          mypostsValue={isOpenModalBlog ? "" : mypostsValue}
          mypostsNameValue={isOpenModalBlog ? "" : mypostsNameValue}
          isOpenModalBlog={false}
        />
      )}
    </>
  );
};

export default MyBlog;
