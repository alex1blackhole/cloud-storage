import {makeAutoObservable} from "mobx";
import apiGetFiles from "../api/files/getFiles";
import {isArray, isObject} from "../utils/isArray";
import apiCreateDir from "../api/files/createDir";

class FileStorage {

    files = [];
    loading = true;

    currentDir = ''

    constructor() {
        makeAutoObservable(this)
    }

    getFilesFromApi = async () => {
        const response = await apiGetFiles(this.currentDir);

        if (isArray(response?.data)) this.setFiles(response?.data)

        this.loading = false;
    }

    createNewDirectory = async (name: string) => {
        this.loading = true;
        await apiCreateDir(this.currentDir, name)
            .then((r: any) => this.setFiles(r?.data))
            .then(() => this.loading = false);
    }

    setFiles = (files: any) => {

        if (isArray(files)) {
            // @ts-ignore
            this.files = [...this.files, ...files];
        }

        if (isObject(files)) {
            // @ts-ignore
            this.files = [...this.files, files];
        }
    }

    setDir = (dir: any) => {
        this.currentDir = dir;
    }

    clear = () => {
        this.files = [];

        this.currentDir = ''
    }

}


export default new FileStorage();
