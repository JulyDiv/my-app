import { FC } from "react";
import { LayoutBlock } from "./Layout.styled";
interface ILayoutProps {
  children?: React.ReactNode;
}
const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <LayoutBlock>
      {children}
    </LayoutBlock>
  );
};

export default Layout;
