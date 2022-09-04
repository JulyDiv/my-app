export interface IMyBlogModalProps {
  isChangeBlog: boolean;
  myposts: IPostArr[];
  setMyPosts: any;
  setIsOpenModalBlog: (isOpen: boolean) => void;
  isOpenModalBlogEdit: any;
  mypostsNameValue: any;
  mypostsValue: any;
  titleMain: string;
  isOpenModalBlog: boolean;
};
export interface IPostArr {
  id: any;
  title: string;
  body: string;
  img: any;
};
export type Inputs = {
  mypostName: any;
  mypost: any;
  photo: any;
};
