import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  width: 1000px;
`;
export const LinkItem = styled.a`
  display: inline-block;
  margin: 40px 40px;
  padding: 15px 15px;
  width: 200px;
  height: 20px;
  text-align: center;
  font-size: 19px;
  font-weight: 700;
  line-height: 21px;
  color: black;
  background-color: #d2dce6;
  border: 3px solid #437275;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: #437275;
    color: white;
  }
`;
export const ButtonOut = styled.button`
  display: block;
  margin: auto;
  padding: 15px 15px;
  width: 200px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 37px;
  color: white;
  background-color: #437275;
  border: 3px solid #d2dce6;
  border-radius: 5px;
  &:hover {
    color: black;
    background-color: #d2dce6;
    border: 3px solid #437275;
    border-radius: 35px;
  }
`;