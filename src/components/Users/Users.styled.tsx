import styled from "styled-components";

export const UsersBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px auto;
  padding: 0 20px;
  width: 300px;
  height: 180px;
  border: 2px solid #283a3b;
  border-radius: 5px;
  &:hover {
    background-color: rgba(169, 223, 205, 0.589);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: 190px;
`;

export const UserAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ img }) => `url(${img})`};
`;

export const User = styled.h3`
  margin-bottom: 10px;
`

export const UserText = styled.span`
  margin-bottom: 5px;
`;



