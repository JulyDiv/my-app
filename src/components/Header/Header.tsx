import { FC } from "react";
import moment from "moment";
import { HeaderBlock, HeaderContainer, HeaderGradient, HeaderItem } from "./Header.styled";
import { Block, ButtonOut, LinkItem } from "../Header/Header.styled";
import Link from "next/link";
import { useRouter } from "next/router";
interface IHeaderProps {
  title: string;
}

const Header: FC<IHeaderProps> = ({ title }) => {
  const week = moment().format("dddd");
  const day = moment().format("LL");
    const router = useRouter();
    const logOut = () => {
      router.push('/')
    }
  return (
    <>
      <HeaderBlock>
        <HeaderGradient />
        <HeaderContainer>
          <Block>
            <HeaderItem>{title}</HeaderItem>
            <HeaderItem>{week}</HeaderItem>
            <HeaderItem>{day}</HeaderItem>
          </Block>
          <Block>
            <Link href="/main">
              <LinkItem>Main</LinkItem>
            </Link>
            <Link href="/about">
              <LinkItem>About Me</LinkItem>
            </Link>
            <Link href="/todo">
              <LinkItem>Todo</LinkItem>
            </Link>
            <Link href="/myblog">
              <LinkItem>MyBlog</LinkItem>
            </Link>
            <Link href="/review">
              <LinkItem>Review</LinkItem>
            </Link>
            <Link href="/notfound">
              <LinkItem>404</LinkItem>
            </Link>
          </Block>
          <ButtonOut onClick={() => logOut()}>LogOut</ButtonOut>
        </HeaderContainer>
      </HeaderBlock>
    </>
  );
};

export default Header;
