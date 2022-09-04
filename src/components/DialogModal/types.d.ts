export interface IDialogModalProps {
  todo: ITodoArr[];
  setTodo: (todoData: ITodoArr[]) => void;
  setIsOpenModal: (isOpen: boolean) => void;
  value: string;
  setValue?: (a: string) => void;
  noteValue: string;
  setNoteValue?: (a: string) => void;
  isChange: boolean;
  titleMain: string;
  currentId: any;
}

export interface ITodoArr {
  id: string;
  title: string;
  note: string;
}

type Inputs = {
  todos: string;
  note: string;
};

