import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 50px auto;
  padding: 20px;
  width: 500px;
  height: 300px;
  border-radius: 5px;
  border: 2px solid #283a3b;
`;

export const TitleMain = styled.h1`
  font-weight: 500;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 37px;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 37px;
`;

export const LinkItem = styled.a`
  font-size: 24px;
  font-weight: 600;
  line-height: 37px;
  color: #437275;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;