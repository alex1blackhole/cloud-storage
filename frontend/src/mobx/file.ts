import {makeAutoObservable} from "mobx";
import apiGetFiles from "../api/files/getFiles";
import {isArray} from "../utils/isArray";

class FileStorage {

    files = [];
    loading = true;

    currentDir = ''

    constructor() {
        makeAutoObservable(this)
    }

    getFilesFromApi = async () => {
        const response = await apiGetFiles(this.currentDir);

        if(isArray(response?.data)) this.setFiles(response?.data)

        this.loading = false;
    }

    setFiles = (files: any) => {
        this.files = files;
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
