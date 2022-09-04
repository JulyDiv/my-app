import styled from "styled-components";

export const MyPostsAvatar = styled.div`
  width: 400px;
  height: 250px;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-image: ${({ img }) => `url(${img})`}; */
  background-image: url("img/user-1.jpg");
`;

export const MyPostsInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 10px 0;
  width: 50%;
  height: 250px;
`;

export const ButtonMyPostsBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-top: 160px;
padding: 0 20px;
height: 60px;
`;

export const ButtonMyPosts = styled.button`
  width: 100%;
  height: 25px;
  color: white;
  background-color: #283a3b;
  border-radius: 4px;
  border: none;
  &:hover {
    color: #c2cbcc5a;
  }
`;