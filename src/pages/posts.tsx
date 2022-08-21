import type { NextPage } from "next";
import { useEffect } from "react";
import axios from "axios";

const Post: NextPage = () => {
  const getData = async () => {
    
    return await axios
      .get("https://jsonplaceholder.typicode.com/posts",{

      })
      .then(({data}) => {
        console.log(data);
        document.write(data[2].title);
      })
      .catch((error: any) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return <>{/*компонент постов*/}</>;
};

export default Post;
