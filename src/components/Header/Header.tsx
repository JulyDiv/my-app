import { FC } from "react";
import styled from "styled-components";
import moment from "moment";

const HeaderBlock = styled.div`
  margin-bottom: 5px;
  height: 150px;
  background-color: #437275;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 10px 0;
  width: 800px;
  height: 50px;
`;

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: 200px;
  height: 50px;
  background-color: #d2dce6;
  border-radius: 25px;
`;

const Tasks = styled.span`
  color: black;
`;

const TotalCount = styled.span`
  color: black;
`;

const Day = styled.span`
  padding: 15px 15px;
  color: black;
  background-color: #d2dce6;
  border-radius: 25px;
`;

const Header: FC = () => {
  const day = moment().format("LLL");
  return (
    <>
      <HeaderBlock>
        <Container>
          <Counter>
            <Tasks>fhuk</Tasks>
            <TotalCount>fyhuk</TotalCount>
          </Counter>
          <Day>{day}</Day>
        </Container>
      </HeaderBlock>
    </>
  );
};

export default Header;