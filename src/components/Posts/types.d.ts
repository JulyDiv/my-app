export interface IPostsProps {
  filtered: IPostsArr[];
}

export interface IPostsArr {
  id: any;
  userId: any;
  title: string;
  body: string;
}
