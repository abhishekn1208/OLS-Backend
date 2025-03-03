import express from 'express'
import CanAccess from '../middleware/CanAccess.js'
const router = express.Router()
import auth from '../middleware/auth.js'
import {createCourse,getAllCourses} from '../collections/course.collection.js'
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Image file destination
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name based on timestamp
    }
});

const upload = multer({ storage: storage });

router.post('/create', auth, CanAccess('admin'), upload.single('image'), createCourse);

router.get('/',auth,getAllCourses)

export default router