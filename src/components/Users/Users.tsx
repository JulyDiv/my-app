import { FC } from "react";
import { IUserProps } from "./types";
import {
  User,
  UserAvatar,
  UserButton,
  UserInfo,
  UsersBlock,
  UserText,
} from "./Users.styled";
import { useState } from "react";
import DBUsers from "./../../../public/DBUsers.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Users: FC<IUserProps> = ({
  users,
  posts,
  setOpenPosts,
  setFiltered,
  isOpenPosts,
}) => {
  const [userAvatar, setUserAvatar] = useState(DBUsers);
  const onClick = (id: any) => {
    if (users) {
      let newPosts = [...posts].filter((item: any) => item.userId === id);
      setOpenPosts(true);
      setFiltered(newPosts);
      console.log(newPosts);
    }
    if (isOpenPosts) {
      setOpenPosts(false);
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {users.map(({ id, name, username, website }) => (
          <SwiperSlide key={id}>
            <UsersBlock>
              <div>
                {userAvatar.slice(0, 1).map(({ id, img }) => (
                  <UserAvatar key={id} img={img}></UserAvatar>
                ))}
              </div>
              <UserInfo>
                <User>{name}</User>
                <UserText>{username}</UserText>
                <UserText>{website}</UserText>
                <UserButton onClick={() => onClick(id)}>Read posts</UserButton>
              </UserInfo>
            </UsersBlock>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Users;
