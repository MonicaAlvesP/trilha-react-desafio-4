import { ButtonContainer } from "../../styles/modules/_button";
import { IButtonProps } from "./types";

export const Button = ({ title, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};
