import { FC } from "react";
import styled from "styled-components";

const LayoutBlock = styled.div`
  margin: 20px auto;
  width: 1000px;
  min-height: 500px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(0 0 0 / 50%);
`;

const ButtonAdd = styled.button`
  margin-top: 400px;
  margin-bottom: 50px;
  margin-left: 900px;
  width: 50px;
  height: 50px;
  border: transparent;
  background-image: url("img/plus.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
`;

interface ILayoutProps {
  setIsOpenModal: (isOpen: boolean) => void;
}
const Layout: FC<ILayoutProps> = () => {
  return (
    <LayoutBlock>
      <ButtonAdd onClick={() => setIsOpenModal(true)}></ButtonAdd>
    </LayoutBlock>
  );
};

export default Layout;
