import express from 'express'
import CanAccess from '../middleware/CanAccess.js'
const router = express.Router()
import auth from '../middleware/auth.js'
import {addInstructor,updateInstructorDetails,getAllInstructor} from '../collections/instructor.collection.js'

router.post('/add',auth,CanAccess('admin'),addInstructor)

router.patch('/update/:instructorId',auth,CanAccess('admin'),updateInstructorDetails)

router.get('/allinstructor',auth,CanAccess('admin'),getAllInstructor)

export default router