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
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'file';
    error?: string;
    multiple?: boolean;
}

export const Input = forwardRef(
    (
        {className = '', autoComplete, name, type, error,multiple, ...rest}: IInputProps,
        ref: ForwardedRef<HTMLInputElement>
    ): JSX.Element => {
        return (
            <input
                multiple={multiple}
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
