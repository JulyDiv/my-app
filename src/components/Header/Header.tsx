import { FC } from "react";
import moment from "moment";
import { Container, Day, HeaderBlock, Name } from "./Header.styled";

const Header: FC = () => {
  const week = moment().format("dddd");
  const day = moment().format("LL");
  return (
    <>
      <HeaderBlock>
        <Container>
          <Day>{week}</Day>
          <Name>TODO List</Name>
          <Day>{day}</Day>
        </Container>
      </HeaderBlock>
    </>
  );
};

export default Header;
