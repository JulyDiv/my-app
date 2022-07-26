import { IDialogModalProps } from "../DialogModal/types";
export interface IRenderProps
  extends Omit<IDialogModalProps, "isChange" | "titleMain" | "currentId"> {
  isOpenModal: boolean;
  isOpenModalEdit: boolean;
  setIsOpenModalEdit: (isOpen: boolean) => void;
}
