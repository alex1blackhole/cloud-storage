import React, {
    DetailedHTMLProps,
    ForwardedRef,
    forwardRef,
    HTMLAttributes,
} from "react";
import styles from './input.module.css'

export interface IInputProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>,
        HTMLInputElement> {
    className?: string;
    autoComplete?: string;
    name?: string;
    type?: string;
    error?: string;
}

export const Input = forwardRef(
    (
        {className = '', autoComplete, name, type, error, ...rest}: IInputProps,
        ref: ForwardedRef<HTMLInputElement>
    ): JSX.Element => {
        return (
            <input
                className={`${styles.wrapper} ${className}`}
                autoComplete={autoComplete}
                data-testid="test-input"
                name={name}
                type={type}
                ref={ref}
                {...rest}
            />
        );
    }
);

Input.displayName = "Input";
