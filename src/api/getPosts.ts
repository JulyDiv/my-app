import { instance } from ".";

//описа get запрос для постов
export const getPosts = async ():Promise<any> => {
  const { data } = await instance.get("/posts");
  return data;

};
