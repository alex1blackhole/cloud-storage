const Router = require("express");

const router = new Router()

const authMiddleware = require('../middleware/auth.middleware')
const fileController = require('../controller/fileController')

router.post('', authMiddleware, fileController.createDir)
router.post('/upload', authMiddleware, fileController.uploadFiles)
router.get('/download', authMiddleware, fileController.downloadFile)
router.delete('/delete', authMiddleware, fileController.deleteFile)
router.get('', authMiddleware, fileController.getFiles)


module.exports = router
