import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(169, 223, 205, 0.589);
`;

export const DialogModalBlock = styled.div`
  position: fixed;
  top: 200px;
  z-index: 2;
  right: 600px;
  padding: 20px 0;
  width: 500px;
  height: 350px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(0 0 0 / 50%);
  animation: dialogModal 0.2s ease-in 1 both;
  @keyframes dialogModal {
    0% {
      opacity: 0;
      transform: translateX(0px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export const Title = styled.h2`
  margin-top: 8px;
  color: black;
  text-align: center;
`;

export const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 50px auto;
  width: 400px;
  height: 130px;
`;

export const Input = styled.input`
  padding-left: 10px;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  &:hover {
    border: 4px solid #437275;
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