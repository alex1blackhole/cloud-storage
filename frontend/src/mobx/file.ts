import {autorun, makeAutoObservable} from "mobx";
import apiGetFiles from "../api/files/getFiles";
import apiCreateDir from "../api/files/createDir";
import {isArray, isObject, isString} from "../utils/isArray";
import {IFile} from "../ui/file/FileIU";

type IDir = null | string

class File {

    files: IFile[] = [];
    loading = true;

    currentDir: IDir = null

    constructor() {
        makeAutoObservable(this)
    }

    openDirectory = async () => {

        this.loading = true;

        const response = await apiGetFiles(this.currentDir);

        this.files = response as any;

        this.loading = false;
    }

    getFilesFromApi = async () => {
        const response = await apiGetFiles(this.currentDir);

        this.files = [];

        if (isArray(response)) this.updateFiles(response)

        this.loading = false;
    }

    createNewDirectory = async (name: string) => {
        this.loading = true;
        await apiCreateDir(this.currentDir, name)
            .then((r: any) => this.updateFiles(r?.data))
            .then(() => this.loading = false);
    }

    updateFiles = (files: any) => {

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

    setCurrentDir = (file: IFile) => {

        if (file.type === 'dir') {
            this.currentDir = file._id
        }
    }

    clear = async () => {
        this.currentDir = ''
        this.files = []

        await this.getFilesFromApi();
    }
}

export const FileStorage = new File();
// autorun(() => {
//      if (isString(FileStorage.currentDir)) {
//          FileStorage.openDirectory();
//      }
// })
