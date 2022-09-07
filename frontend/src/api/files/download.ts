import {DOWNLOAD_FILE} from "../../constants/api";

/**
 *
 * download file from db
 *
 * @param fileId
 * @param fileName
 */
async function apiDownloadFile(fileId: string, fileName: string) {
    const response = await fetch(`${DOWNLOAD_FILE}?id=${fileId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });


    if (response.status === 200) {
        const blob = await response.blob();

        const downloadUrl = window.URL.createObjectURL(blob)


        /**
         * TODO вынести в ф-ю
         */
        const link = document.createElement('a')
        link.href = downloadUrl;
        link.download = fileName;
        document.body.appendChild(link)
        link.click();
        link.remove();


    }
}

export default apiDownloadFile;
