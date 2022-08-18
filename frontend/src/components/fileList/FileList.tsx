import React from 'react';
import {FileStorage} from '../../mobx/FileStorage'
import FileIU, {IFile} from "../../ui/file/FileIU";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import FileListHeader from "./FileListHeader";

const FileList = observer(() => {
    let navigate = useNavigate();

    function handleFileClick(directory: IFile) {
        FileStorage.setCurrentDir(directory);
        navigate(`/drive/folders/${directory._id}`);
    }

    const filesRender = FileStorage?.files.map((file: IFile) =>
        <FileIU
            key={file._id}
            callback={() => handleFileClick(file)}
            {...file}
        />
    )

    const isEmpty = FileStorage?.files.length === 0;

    if (isEmpty) {
        return (
            <div>
                <FileListHeader/>
                You don't have any files and folders
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
