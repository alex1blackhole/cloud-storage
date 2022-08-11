import {toast} from "react-toastify";

interface IMessage {
    type?: 'error' | 'warning' | 'success',
    message: string
}

interface INotifications {
    showMessage(message: IMessage): void;
    hideMessage(): void;
}

class Notifications implements INotifications {

    isShow: boolean = false

    message: IMessage = {
        type: 'warning',
        message: '',
    }

    showMessage(message: IMessage): void {
        this.isShow = true;
        this.message = message;
        toast(message.message,{
            type:message.type
        });
    }

    hideMessage(): void {
        this.isShow = false;
        this.message = {
            type: 'warning',
            message: '',
        }
    }

}

/**
 * app notifications service which  use toas notifications
 */
export const NotificationsStore = new Notifications();
