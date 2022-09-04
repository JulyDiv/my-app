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
  const [myPhotos, setMyPhotos] = useState('');
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
          myPhotos={myPhotos}
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
          myPhotos={myPhotos}
        />
      )}
      {/* <section className="LoaderPage">
        <img src="img/loaded.gif"/>
        <div className="LodInfo">
            <p id="LodInfo1">Cargando Datos...</p>
            <p id="LodInfo2">Buscando Posicion...</p>
        </div>
    </section>

    <i className="fas fa-bars" id="Menu"></i>
    <i className="fas fa-bars" id="MenuMobil"></i>

    <nav className="MenuMax">
        <div className="DatosFlex">

            <p>Datos Actuales</p>
            <hr/>
            <div className="DatosClima">
                <p>Velocidad Viento:</p>
                <p id="Velviento"></p>
            </div>
            <div className="DatosClima">
                <p>Humedad:</p>
                <p id="Humedad"></p>
            </div>
            <div className="DatosClima">
                <p>Nubosidad:</p>
                <p id="Nubosidad"></p>
            </div>
            <div className="DatosClima">
                <p>Visibilidad:</p>
                <p id="Visibilidad"></p>
            </div>
            <div className="DatosClima">
                <p>Direccion del Viento:</p>
                <p id="DireccionViento"></p>
            </div>
        </div>
        <div className="HoraActual">
            <p id="Hora"></p>
        </div>
        <div className="Copy">
            <p>Todos los derechos reservados(c)- Weater App</p>
        </div>
    </nav>

    <section className="MenuMobil">
        <div className="DatosFlex">
            <p>Datos Actuales</p>
            <hr/>
            <div className="DatosClima">
                <p>Velocidad Viento:</p>
                <p id="Velviento"></p>
            </div>
            <div className="DatosClima">
                <p>Humedad:</p>
                <p id="Humedad"></p>
            </div>
            <div className="DatosClima">
                <p>Nubosidad:</p>
                <p id="Nubosidad"></p>
            </div>
            <div className="DatosClima">
                <p>Visibilidad:</p>
                <p id="Visibilidad"></p>
            </div>
            <div className="DatosClima">
                <p>Direccion del Viento:</p>
                <p id="DireccionViento"></p>
            </div>
        </div>
        <div className="HoraActual">
            <p id="Hora"></p>
        </div>
        <div className="Copy">
            <p>Todos los derechos reservados(c)- Weater App</p>
        </div>
    </section>

    <header>
        <div className="PagHeader">
            <div className="Top">
                <p id="Posicion"></p>
                <p id="Fecha"></p>
            </div>

            <div className="ClimaActual">
                <div className="ClimaContainer"></div>
            </div>
            <div className="DiasClima">
                <div className="DiasContainer">
                    <li id="DiaMenos1"></li>
                    <li id="DiaMenos2"></li>
                    <li id="DiaMenos3"></li>
                    <li id="DiaMenos4"></li>
                </div>
            </div>
        </div>
    </header> */}
    </>
  );
};

export default MyBlog;
