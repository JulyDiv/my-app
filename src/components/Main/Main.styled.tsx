import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  padding: 25px 0;
  width: 1200px;
`;

export const Line = styled.div`
  width: 1200px;
  height: 1px;
  background-color: #c2cbcc5a;
`;

export const MainBlock = styled.div`
  padding: 50px 0;
  height: 500px;
  background-color: #283a3b;
`;

export const MainGradient = styled.div`
  position: absolute;
  width: 358.9px;
  height: 293.05px;
  left: 161.08px;
  top: 365.24px;
  background: #c7ebe2;
  filter: blur(250px);
  transform: rotate(41.6deg);
`;

export const InfoBlock = styled.div`
  display: inline-block;
  margin: auto 50px;
  width: 500px;
  height: 350px;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* box-shadow: 0 0 5px rgb(0 0 0 / 50%); */
`;

export const MainTitle = styled.h1`
  margin: 10px 0;
  text-align: center;
  color: white;
`;

export const MainText = styled.p`
  margin: 10px 0;
  color: white;
  text-align: center;
  font-size: 20px;
`;
