import type { NextPage } from "next";
import { useCallback } from "react";
import Header from "../../components/HeaderTest/HeaderTest";

const Home: NextPage = () => {
  const funct = useCallback((text: string) => {
    alert("привет " + text);
  }, []);
  return (
    <div>
      <Header title="заголовок" func={funct} number={20} />
      <Header title="заголовок" func={funct} />
    </div>
  );
};

export default Home;
