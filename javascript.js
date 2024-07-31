const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.array('files[]'), (req, res) => {
    // Process uploaded files
    console.log(req.files);
    res.json({ message: 'Files uploaded successfully!' });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
