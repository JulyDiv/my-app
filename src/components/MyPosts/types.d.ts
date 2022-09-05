export interface IMyPosts {
  myposts: IPostArr[];
  setMyPosts;
  setMyPostsValue;
  setIsOpenModalBlogEdit;
  setMyPostsNameValue;
}

export interface IPostArr {
  id: any;
  title: string;
  body: string;
  img: any;
}