import React, {useState, useEffect} from "react";
import {default as ReactModal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseSVG from "../../assets/svg/CloseSVG";
import {Button} from "../button/Button";

type IModalSize = "medium";

export interface IModalProps {
    className?: string;
    children?: React.ReactNode;
    size?: IModalSize;
    isOpen: boolean;
    onCloseModal: () => void;
}

interface IModalHeaderProps {
    className?: string;
    align?: "start" | "center" | "end";
    children?: React.ReactNode;
}


interface IModalContentProps {
    className?: string;
    children?: React.ReactNode;
}

export const Modal = ({
                          className,
                          children,
                          size = "medium",
                          isOpen,
                          onCloseModal,
                      }: IModalProps): JSX.Element => {
    const defaultClassNames = {
        // modal: classNames("ModalDefault", className, {
        //     ModalDefault__medium: size === "medium",
        // }),
        //
        modal: `ModalDefault ${className} ${size === "medium" ? 'ModalDefault__medium' : ''}`,

        closeButton: "ModalDefaultCloseButton",
    };
    const [styles, setStyles] = useState({});

    useEffect(() => {
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;
        if (isOpen && scrollbarWidth) {
            const _styles = {
                modal: {marginRight: `${scrollbarWidth + 16}px`},
            };
            setStyles(_styles);
            document.body.classList.add("Modal__open");
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            setStyles({});
            document.body.style.removeProperty("padding-right");
            document.body.classList.remove("Modal__open");
        };
    }, [isOpen]);

    return (
        <ReactModal
            classNames={defaultClassNames}
            center
            closeIcon={<CloseSVG/>}
            styles={styles}
            open={isOpen}
            onClose={onCloseModal}
        >
            <div className="Modal">{children}</div>
        </ReactModal>
    );
};

Modal.Header = ({children}: IModalHeaderProps): JSX.Element => {
    return (
        <div
            className={'"ModalHeader"'}
        >
            {children}
        </div>
    );
};

Modal.Content = ({className = '', children}: IModalContentProps): JSX.Element => {
    return (
        <div className={`ModalContent ${className}`}>{children}</div>
    );
};

interface IModalFooterProps {
    className?: string;
    buttonSubmitText?: string;
    onSubmit?: () => void;
}

Modal.Footer = ({
                    className = '',
                    buttonSubmitText = "Выбрать",
                    onSubmit,
                }: IModalFooterProps): JSX.Element => {
    return (
        <div className={`ModalFooter ${className}`}>
            <Button
                onClick={onSubmit}
                text={buttonSubmitText}
            />
        </div>
    );
};
