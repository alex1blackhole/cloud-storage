import React, {ButtonHTMLAttributes, DetailedHTMLProps, memo} from "react";
import styles from "./button.module.css";

export interface IButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement> {
    className?: string;
    text?: string;
    textStyle?: string;
    icon?: JSX.Element;
    isDisabled?: boolean;
    onClick?: (event: React.MouseEvent) => void;
}

const ButtonComponent = (
    {
        className,
        text = '',
        icon,
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
            {icon}
            <span className={`${styles.text} ${textStyle}`}>{text}</span>
        </button>
    );
};

export const Button = memo(ButtonComponent);
