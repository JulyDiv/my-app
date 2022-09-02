import styled from "styled-components";

export const TodoRenderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px auto;
  width: 99%;
  border-radius: 5px;
  background-color: #c5d6d1;
  animation: renderBlock 0.2s ease-in 1 both;
  @keyframes renderBlock {
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

export const Name = styled.span`
  margin-left: 15px;
  padding: 5px 0;
  width: 120px;
  color: black;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: start;
  word-break: break-all;
  hyphens: auto;
`;

export const Note = styled.span`
  padding: 5px 0;
  width: 600px;
  color: black;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  word-break: break-all;
  /* overflow: hidden; */
  /* white-space: nowrap; */
  /* text-overflow: ellipsis; */
`;

export const Date = styled.span`
  color: black;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
  width: 410px;
  height: 50px;
`;

export const Button = styled.button`
  width: 200px;
  height: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  border: 1px solid #437275;
  border-radius: 5px;
  background-color: white;
  color: white;
  background-color: #283a3b;
  border: 2px solid #d2dce6;
  cursor: pointer;
  &:hover {
    color: #283a3b;
    background-color: white;
    border: 2px solid #283a3b;
    border-radius: 20px;
  }
`;
