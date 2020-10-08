const express = require('express');
const router = express.Router();


// mutler object

const multer = require('multer');
const storage = multer.diskStorage({
    destination (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

/* GET home page. */

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Upload Videos' });
});

router.post('/', upload.single('videoFile'), (req, res) => {
    res.send('File uploaded sucessfully');
    res.end();
});


module.exports = router;
