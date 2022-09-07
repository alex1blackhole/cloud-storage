import React, {ButtonHTMLAttributes, DetailedHTMLProps, memo} from "react";
import styles from "./button.module.css";

export interface IButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement> {
    className?: string;
    text?: string;
    textStyle?: string;
    isDisabled?: boolean;
    onClick?: (event: React.MouseEvent) => void;
}

const ButtonComponent = (
    {
        className,
        text = '',
        isDisabled = false,
        onClick,
        textStyle = '',
        ...rest
    }: IButtonProps) => {
    return (
        <button
            className={`${styles.wrapper} ${className}`}
            disabled={isDisabled}
            onClick={onClick}
            {...rest}
        >
            <span className={`${styles.text} ${textStyle}`}>{text}</span>
        </button>
    );
};

export const Button = memo(ButtonComponent);
