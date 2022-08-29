import styled from "styled-components";

export const HeaderBlock = styled.div`
  height: 100px;
  background-color: #437275;
  margin: 20px auto 0;
  width: 1000px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(0 0 0 / 50%);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 25px 0;
  width: 800px;
  height: 50px;
`;

export const Day = styled.span`
  padding: 15px 15px;
  width: 150px;
  text-align: center;
  font-size: 19px;
  font-weight: 700;
  line-height: 21px;
  color: black;
  background-color: #d2dce6;
  border: 3px solid white;
  border-radius: 25px;
`;

export const Name = styled.span`
  padding: 15px 15px;
  width: 200px;
  height: 35px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 37px;
  color: black;
  background-color: #d2dce6;
  border: 3px solid white;
  border-radius: 30px;
`;