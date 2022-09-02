import { FC } from "react";
import { IUserProps } from "./types";
import { User, UserAvatar, UserInfo, UsersBlock, UserText } from "./Users.styled";
import { useState } from "react";
import DBUsers from "./../../../public/DBUsers.json";

const Users: FC<IUserProps> = ({
  users,
  posts,
  setOpenPosts,
  setFiltered,
  isOpenPosts
}) => {
  const [userAvatar, setUserAvatar] = useState(DBUsers);
  const onClick = (id: any) => {
    if (users) {
      let newPosts = [...posts].filter((item: any) => item.userId === id);
      setOpenPosts(true);
      setFiltered(newPosts);
    } if (isOpenPosts) {
        setOpenPosts(false);
    }
  };
  return (
    <>
      {users.slice(0, 9).map(({ id, name, username, website }) => (
        <UsersBlock key={id} onClick={() => onClick(id)}>
          <div>
            {userAvatar.slice(0, 1).map(({ id, img }) => (
              <UserAvatar key={id} img={img}></UserAvatar>
            ))}
          </div>
          <UserInfo>
            <User>{name}</User>
            <UserText>{username}</UserText>
            <UserText>{website}</UserText>
          </UserInfo>
        </UsersBlock>
      ))}
    </>
  );
};

export default Users;
