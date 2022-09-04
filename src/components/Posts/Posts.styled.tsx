import styled from "styled-components";

export const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
  box-shadow: 0 0 5px rgb(0 0 0 / 50%);
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PostBlock = styled.div`
  margin: 20px 5px;
  padding: 10px;
  border: 2px solid #437275;
  border-radius: 5px;
  animation: postsBlock 0.2s ease-in 1 both;
  @keyframes postsBlock {
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

export const PostsBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 5px;
  border: 2px solid #437275;
  border-radius: 5px;
`;

export const PostAvatar = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 5px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ img }) => `url(${img})`};
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
  height: 260px;
`;

export const PostsTitle = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`;

export const PostNews = styled.p`
  padding: 0 10px;
  text-align: center;
  word-break: break-all;
`;

export const PostName = styled.span`
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
