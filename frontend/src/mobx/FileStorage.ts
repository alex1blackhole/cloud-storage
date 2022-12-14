import {makeAutoObservable} from "mobx";
import apiGetFiles from "../api/files/getFiles";
import apiCreateDir from "../api/files/createDir";
import {isArray, isObject} from "../utils/definitions";
import {IFile} from "../ui/file/FileIU";
import apiUploadFiles from "../api/files/uploadFiles";
import getFolderPathname from "../utils/getFolderPathname";
import apiDownloadFile from "../api/files/download";
import {log} from "util";
import apiDeleteFile from "../api/files/delete";

type IDir = null | string

interface IFileClass {
    getFilesFromApi(pathName?: string): Promise<void>;

    createNewDirectory(name: string): void;

    updateFiles(files: any): void;

    setCurrentDir(file: IFile): void;

    uploadFiles(files: any, pathname: string): void;

    clear(): void;
}

class Store implements IFileClass {

    files: IFile[] = [];
    loading = true;
    fileUploadingProgress: null | number = null;
    fileUploadingStatus: null | string = null;

    currentDir: IDir = null

    constructor() {
        makeAutoObservable(this)
    }

    updateFileUploadingProgress = (progress: number | null) => {
        this.fileUploadingProgress = progress;
    }

    setFileUploadingStatus = (message: string | null) => {
        this.fileUploadingStatus = message;
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


    //TODO this.updateFileUploadingProgress(null)

    uploadFiles = async (files: any, pathname: string) => {
        await files.forEach((file: any) => {
            apiUploadFiles(getFolderPathname(pathname), file)
                .then(() => {
                    console.log('finish')
                    this.setFileUploadingStatus(null)
                })
                .catch((e) => {
                    this.setFileUploadingStatus(e.response.data.message)
                })
        })
    }

    downloadFile = (fileId: string, fileName: string) => {
        apiDownloadFile(fileId, fileName)
            .then(r => console.log(r))
            .catch(e => console.log(e))
    }

    deleteFile = (file: IFile) => {
        console.log('delete',file._id)
        apiDeleteFile(file)
            .then(r => console.log(r))
            .catch(e => console.log(e))
    }

    clear = async () => {
        this.currentDir = ''
        this.files = []

        await this.getFilesFromApi();
    }
}

export const FileStorage = new Store();
