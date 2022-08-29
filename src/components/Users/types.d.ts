export interface IUserProps {
  users: IUserArr[];
  posts: IPostsArr[];
  isOpenPosts: boolean;
  setOpenPosts: (isOpen: boolean) => void;
  setFiltered: any;
}

export interface IUserArr {
  id: any;
  name: string;
  username: string;
  email: string;
}
