const express = require('express');
const router = express.Router();

const receiveImage = require('../middlewares/multerMiddleware');
const { uploadImage } = require('../utils/cloudinaryUtil');

router.post('/upload', (req, res) => {
    receiveImage(req, res, async (err) => {
        //handling errors from multer
        if (err) {
            return res.json({ error: err.message });
        }

        try {
            const imageStream = req.file.buffer;
            const imageName = new Date().getTime().toString();

            const uploadResult = await uploadImage(imageStream, imageName);

            const uploadedUrl = uploadResult.url;
            return res.json({ url: uploadedUrl });
        } catch (error) {
            return res.json({ error: 'Failed to upload' });
        }
    })
});

module.exports = router;