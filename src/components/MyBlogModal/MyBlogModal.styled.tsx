import styled from "styled-components";

export const MyBlogBlock = styled.div`
  position: absolute;
  top: 100px;
  z-index: 2;
  right: 0;
  padding: 20px 0;
  width: 1000px;
  min-height: 85%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(0 0 0 / 50%);
  animation: myBlogBlock 0.4s ease-in 1 both;
  @keyframes myBlogBlock {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export const Title = styled.h2`
  margin-top: 20px;
  color: black;
  text-align: center;
`;

export const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 20px auto;
  width: 90%;
  height: 80%;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding-left: 10px;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  word-break: break-all;
  &:hover {
    border: 4px solid #283a3b;
  }
`;

export const Textarea = styled.textarea`
  margin-bottom: 20px;
  padding-left: 10px;
  min-height: 280px;
  font-size: 18px;
  border-radius: 5px;
  &:hover {
    border: 4px solid #283a3b;
  }
`;

export const InputFile = styled.input`
  width: 50%;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
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
  line-height: 20px;
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