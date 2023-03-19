import React, {ButtonHTMLAttributes, DetailedHTMLProps, memo} from "react";
import styles from "./button.module.css";

/**
 * Props for the Button component.
 */
export interface IButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement> {
    /**
     * Additional class name for the button.
     */
    className?: string;
    /**
     * Text to display on the button.
     */
    text?: string;
    /**
     * Additional class name for the button text.
     */
    textStyle?: string;
    /**
     * Icon to display on the button.
     */
    icon?: JSX.Element;
    /**
     * Whether the button is disabled.
     */
    isDisabled?: boolean;
    /**
     * Function to call when the button is clicked.
     */
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
        ...buttonProps
    }: IButtonProps) => {
    return (
        <button
            className={`${styles.wrapper} ${className}`}
            disabled={isDisabled}
            onClick={onClick}
            {...buttonProps}
        >
            {icon && <span>{icon}</span>}
            <span className={`${styles.text} ${textStyle}`}>{text}</span>
        </button>
    );
};

/**
 * A customizable button component.
 */
export const Button = memo(ButtonComponent);
