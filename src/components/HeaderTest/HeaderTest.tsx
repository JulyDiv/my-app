import { FC } from "react";

interface IHeaderProps {
  title: string;
  number?: number;
  func: (text: string) => void;
  isNumber?: boolean;
}

interface IItemArr {
  title: string;
  descr: string;
  id: number;
}

const Header: FC<IHeaderProps> = ({
  title,
  number,
  func,
  isNumber = false,
}) => {
  const test = number ? 10 * number : 100;

  const arr = [
    { title: "123", descr: "4353", id: 0 },
    { title: "123", descr: "4353", id: 1 },
    { title: "123", descr: "4353", id: 0 },
    { title: "123", descr: "4353", id: 1 },
    { title: "123", descr: "4353", id: 0 },
    { title: "123", descr: "4353", id: 1 },
    { title: "123", descr: "4353", id: 0 },
    { title: "123", descr: "4353", id: 1 },
  ];

  arr.map((item) => {
    const { id, title, descr } = item;
  });

  return (
    <div>
      <h1>{title}</h1>
      {isNumber && <span>{number}</span>}
      <button onClick={() => func(`${test}`)}>нажми меня</button>
    </div>
  );
};

export default Header;
