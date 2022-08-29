export interface IPostsProps {
  filtered: IPostsArr[];
  isOpenPosts: boolean;
}

export interface IPostsArr {
  id: any;
  userId: any;
  title: string;
  body: string;
}
