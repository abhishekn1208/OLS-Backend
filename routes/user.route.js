import express from 'express'
const router = express.Router()
import {LoginUser,RegisterUser} from '../collections/user.collection.js'

//user registarion
router.post('/register',RegisterUser)

//user login
router.post('/login',LoginUser)

export default router