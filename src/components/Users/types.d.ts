export interface IUserProps {
  users: IUserArr[];
  posts: IPostsArr[];
  isOpenPosts: boolean;
  setOpenPosts: (isOpen: boolean) => void;
  setFiltered: any;
  postAvatar;
  filtered;
  setPostFiltered;
}

export interface IUserArr {
  id: any;
  name: string;
  username: string;
  website: string;
}
