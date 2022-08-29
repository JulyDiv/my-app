import { FC } from "react";
import moment from "moment";
import { Container, Day, HeaderBlock, Name } from "./Header.styled";
interface IHeaderProps {
  title: string;
}

const Header: FC<IHeaderProps> = ({ title }) => {
  const week = moment().format("dddd");
  const day = moment().format("LL");
  return (
    <>
      <HeaderBlock>
        <Container>
          <Day>{week}</Day>
          <Name>{title}</Name>
          <Day>{day}</Day>
        </Container>
      </HeaderBlock>
    </>
  );
};

export default Header;
