import { ButtonContainer } from "../../styles/modules/_button";
import { IButtonProps } from "./types";

export const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={disabled}>{title}</ButtonContainer>;
};
