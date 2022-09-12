import React, {useRef} from 'react';
import {Input} from "../../ui/input/Input";
import {useLocation} from "react-router-dom";
import FileUploadSVG from "../../assets/svg/FileUploadSVG";
import {observer} from "mobx-react-lite";
import {FileStorage} from "../../mobx/FileStorage";
import {isNumber} from '../../utils/definitions';
import {DropTargetMonitor, useDrop} from "react-dnd";
import {NativeTypes} from "react-dnd-html5-backend";

import styles from './uploadFile.module.css';
import {Button} from 'src/ui/button/Button';


const UploadFile = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    let location = useLocation();

    const [{canDrop, isOver}, drop] = useDrop(
        () => ({
            accept: [NativeTypes.FILE],
            drop(item: { files: any[] }) {
                console.log(item)
            },
            collect: (monitor: DropTargetMonitor) => {
                const item = monitor.getItem() as any

                if (item) {
                    FileStorage.uploadFiles(item.files, location.pathname)
                }

                return {
                    isOver: monitor.isOver(),
                    canDrop: monitor.canDrop(),
                }
            },
        }),
        [],
    )

    const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>): void => {

        const files = event.target.files;

        if (files) FileStorage.uploadFiles([files], location.pathname)

    };

    function getProgressText() {

        if (FileStorage.fileUploadingStatus) {
            return FileStorage.fileUploadingStatus
        }

        if (FileStorage.fileUploadingProgress && isNumber(FileStorage.fileUploadingProgress)) {

            if (FileStorage.fileUploadingProgress < 100) {
                return `Loading: ${FileStorage.fileUploadingProgress}`
            }


            if (FileStorage.fileUploadingProgress === 100) {
                return `File was successful uploaded, choose another file`
            }

        }

        return ''
    }

    function handleButtonClick() {
        inputRef.current?.click();
    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.inner} ref={drop}>

                <div className={styles.loading}
                     style={{width: `${Number(FileStorage.fileUploadingProgress) ?? 0}%`}}>
                    {getProgressText()}
                </div>

                <div className={styles.row}>
                    <FileUploadSVG className={styles.svg}/>
                    <div className={styles.text}>Drag & Drop your files here</div>
                </div>

                <Input
                    ref={inputRef}
                    className={styles.input}
                    type='file'
                    multiple
                    onChange={handleFileInput}
                />

            </div>

            <Button
                text={'Upload files'}
                className={styles.button}
                onClick={handleButtonClick}
                textStyle={styles.buttonText}
                icon={<FileUploadSVG  className={styles.buttonIcon}/>}
            />

        </div>
    );
};

export default observer(UploadFile);
