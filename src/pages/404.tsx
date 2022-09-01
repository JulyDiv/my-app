import { NextPage } from "next";
import Link from "next/link";
import { Block, LinkItem, Text, Title, TitleMain } from "../components/404/404.styled";
import Header from "../components/Header/Header";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, []);
    return (
      <>
        <Header title="Not Found '404'" />
        <Block>
          <TitleMain>Ooops!</TitleMain>
          <Title>Page not found</Title>
          <Text>
            Go to
            <Link href="/">
              <LinkItem> Home page </LinkItem>
            </Link>
             after 5 seconds...
          </Text>
        </Block>
      </>
    );
}

export default NotFound;
