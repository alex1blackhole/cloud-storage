import React from 'react';
import {FileStorage} from '../../mobx/FileStorage'
import FileIU, {IFile} from "../../ui/file/FileIU";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import FileListHeader from "./FileListHeader";
import styles from "./fileList.module.css";

const FileList = observer(() => {
    let navigate = useNavigate();

    function handleFileClick(directory: IFile) {
        FileStorage.setCurrentDir(directory);
        navigate(`/drive/folders/${directory._id}`);
    }

    function handleDelete(event: React.MouseEvent) {
        event.stopPropagation();
        FileStorage.delete();
    }

    function handleDownload(event: React.MouseEvent,fileId: string, fileName: string) {
        event.stopPropagation();
        FileStorage.downloadFile(fileId,fileName);
    }

    const filesRender = FileStorage?.files.map((file: IFile) =>
        <FileIU
            key={file._id}
            {...file}
            callback={() => handleFileClick(file)}
            handleDelete={ handleDelete}
            handleDownload={handleDownload}
        />
    )

    const isEmpty = FileStorage?.files.length === 0;

    if (isEmpty) {
        return (
            <div>
                <FileListHeader/>
                <div className={styles.textListEmpty}>
                    You don't have any files and folders
                </div>
            </div>
        )
    }

    return (
        <div>

            <FileListHeader/>

            {filesRender}

        </div>
    );
});

export default FileList;
