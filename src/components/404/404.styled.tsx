import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 50px auto;
  padding: 20px;
  width: 500px;
  height: 200px;
  border-radius: 5px;
  border: 5px solid #437275;
`;

export const TitleMain = styled.h1`
    
`

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 37px;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 37px;
`;

export const LinkItem = styled.a`
  font-size: 24px;
  font-weight: 700;
  line-height: 37px;
  color: #437275;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;