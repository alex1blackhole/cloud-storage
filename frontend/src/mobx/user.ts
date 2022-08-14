import {makeAutoObservable} from "mobx"
import apiLogin from "../api/auth/login";
import apiAuth from "../api/auth/auth";

interface IUser {
    diskSpace: number
    email: string
    firstName: string
    id: string
    lastName: string
    usedSpace: number
}

const emptyUser = {
    diskSpace: 0,
    email: '',
    firstName: '',
    id: '',
    lastName: '',
    usedSpace: 0,
}


interface IUserClass {
    logOut(): void;
    auth(): void;
    login(email: string, password: string): void;
}

class User implements IUserClass{
    isAuth: boolean = false;

    currentUser: IUser = emptyUser

    constructor() {
        makeAutoObservable(this)
    }

    public logOut = async () => {
        this.userChangeAuth(false)
        this.currentUser = emptyUser
        localStorage.removeItem('token')
    }

    public auth = async () => {
        await apiAuth()
            .then((response: any) => {

                if (response?.token && response?.user) {
                    localStorage.setItem('token', response.token)
                    this.userChangeAuth(true)
                    this.currentUser = response?.user
                }

            })
            .catch(e => console.log(e.message))
    }

    public login = async (email: string, password: string) => {

        await apiLogin(email, password)
            .then((response: any) => {
                if (response?.token && response?.user) {
                    localStorage.setItem('token', response.token)
                    this.userChangeAuth(true)
                    this.currentUser = response?.user
                }
            })
            .catch(e => console.log(e.message))
    }

    private userChangeAuth = (authStatus: boolean) => {
        this.isAuth = authStatus;
    }

}


export default new User();
