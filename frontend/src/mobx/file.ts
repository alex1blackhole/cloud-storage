import {makeAutoObservable} from "mobx";
import apiGetFiles from "../api/files/getFiles";
import apiCreateDir from "../api/files/createDir";
import {isArray, isObject} from "../utils/isArray";
import {IFile} from "../ui/file/FileIU";

type IDir = null | string

interface IFileClass {
    getFilesFromApi(pathName?: string): void;

    createNewDirectory(name: string): void;

    updateFiles(files: any): void;

    setCurrentDir(file: IFile): void;

    clear(): void;
}

class File implements IFileClass {

    files: IFile[] = [];
    loading = true;

    currentDir: IDir = null

    constructor() {
        makeAutoObservable(this)
    }

    getFilesFromApi = async (pathName = '') => {
        const response = await apiGetFiles(pathName ?? this.currentDir);

        this.files = [];

        if (isArray(response)) this.updateFiles(response)

        this.loading = false;
    }

    createNewDirectory = async (name: string) => {
        this.loading = true;
        await apiCreateDir(this.currentDir, name)
            .then((res: any) => this.updateFiles(res))
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
