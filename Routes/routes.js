import express from 'express'
import { uploadImage } from '../Controller/imageController.js';
import upload from '../utils/upload.js';
import { downloadImage } from '../Controller/imageController.js';

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', downloadImage);


export default router;