import {DOWNLOAD_FILE} from "../../constants/api";
import {api} from "../api";
import {IFile} from "../../ui/file/FileIU";

/**
 *
 * download file from db
 *
 * @param file
 */
async function apiDeleteFile(file: IFile) {
    const response =  await fetch(`${DOWNLOAD_FILE}?id=${file._id}` ,{
        headers :{
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });


    if(response.status === 200) {

    }
}

export default apiDeleteFile;
