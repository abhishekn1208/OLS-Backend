import express from 'express'
import CanAccess from '../middleware/CanAccess.js'
const router = express.Router()
import auth from '../middleware/auth.js'
import {scheduleLecture,getLectureByInstructor,updateLecture,getAllLectures} from '../collections/lecture.collection.js'

router.post('/schedule',auth,CanAccess('admin'),scheduleLecture)

router.patch('/lecture/:lectureId',auth,CanAccess('admin'),updateLecture)

router.get('/lecture/instructor/:instructorId',auth,getLectureByInstructor)

router.get('/lecture',auth,CanAccess('admin'),getAllLectures)

export default router