import styled from "styled-components";

export const HeaderBlock = styled.div`
  height: 100px;
  background-color: #283a3b;
  margin: auto;
  width: 100%;
`;

export const HeaderGradient = styled.div`
  position: absolute;
  width: 200px;
  height: 100px;
  left: 1283px;
  top: 50px;
  background: #c7ebe2;
  filter: blur(200px);
  transform: rotate(41.6deg);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 25px 0;
  width: 1200px;
`;

export const HeaderItem = styled.span`
  margin-right: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 37px;
  color: white;
  border-bottom: 1px solid #c2cbcc5a;
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LinkItem = styled.a`
  margin-right: 20px;
  text-align: center;
  font-size: 21px;
  font-weight: 400;
  line-height: 37px;
  color: white;
  cursor: pointer;
  &:hover {
    color: #c2cbcc5a;
  }
`;
export const ButtonOut = styled.button`
  width: 100px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 37px;
  color: white;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #c2cbcc5a;
  &:hover {
    color: #c2cbcc5a;
  }
`;