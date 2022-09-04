import styled from "styled-components";

export const Title = styled.h2`
  margin-top: 20px;
  color: black;
  text-align: center;
`;

export const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 40px auto;
  width: 400px;
  height: 130px;
`;

export const Input = styled.input`
  padding-left: 10px;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  &:hover {
    border: 4px solid #283a3b;
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  width: 400px;
`;

export const Button = styled.button`
  display: block;
  margin: auto;
  padding: 5px 5px;
  width: 180px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 37px;
  color: white;
  background-color: #283a3b;
  border: 2px solid #d2dce6;
  border-radius: 5px;
  &:hover {
    color: #283a3b;
    background-color: #d2dce6;
    border: 2px solid #283a3b;
    border-radius: 20px;
  }
`;