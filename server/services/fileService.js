const fs = require('fs')
const path = require("path");

class FileService {

    createDir(req, file) {

        const filePath = this.getPath(req,file)

        return new Promise((resolve, reject) => {
            try {
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath)
                    return resolve({message: 'File was created'})
                } else {
                    return reject({message: "File already exists"})
                }
            } catch (e) {
                return reject({message: "File error"})
            }
        })

    }


    getPath(req, file) {
        return req.filePath + '\\' + file.user + '\\' + file.path
    }


}


module.exports = new FileService();


