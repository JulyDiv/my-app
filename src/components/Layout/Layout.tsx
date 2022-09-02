import { FC } from "react";
import Footer from "../Footer/Footer";
import { LayoutBlock } from "./Layout.styled";
interface ILayoutProps {
  children?: React.ReactNode;
}
const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <LayoutBlock>
      {children}
      {/* <Footer /> */}
    </LayoutBlock>
  );
};

export default Layout;
