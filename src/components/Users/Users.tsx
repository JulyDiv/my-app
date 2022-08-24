import { FC } from "react";
import { IUserProps } from "./types";
import { User, UsersBlock, UsersMail, UsersName } from "./Users.styled";

const Users: FC<IUserProps> = ({
  users,
  posts,
  setOpenPosts,
  setFiltered
}) => {
  // const onClick = (id: any) => {
  //   let newPosts = [];
  //   if (id === 1) {
  //     newPosts = [...posts].filter((item: any) => item.userId === 1);
  //     console.log(newPosts);
  //     setPosts(newPosts);
  //   } else if (id === 2) {
  //     newPosts = [...posts].filter((item: any) => item.userId === 2);
  //     console.log(newPosts);
  //     setPosts(newPosts);
  //   } else if (id === 3) {
  //     newPosts = [...posts].filter((item: any) => item.userId === 3);
  //     console.log(newPosts);
  //     setPosts(newPosts);
  //   }
  //   setOpenPosts(true);
  // };

    const onClick = (id: any) => {
      let newPosts = [...posts].filter((item: any) => item.userId === id);
     for(let i = 0; i < 1; i++) {
      console.log(newPosts);
     }
     setOpenPosts(true);
     setFiltered(newPosts);
    };
  return (
    <>
      {users.map(({ id, name, username, email }) => (
        <UsersBlock key={id}>
          <User onClick={() => onClick(id)}>{name}</User>
          <UsersName>{username}</UsersName>
          <UsersMail>{email}</UsersMail>
        </UsersBlock>
      ))}
    </>
  );
};

export default Users;
