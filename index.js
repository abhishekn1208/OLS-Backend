import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import MongoConnect from './config/db.js'
import UserRouter from './routes/user.route.js'
import CourseRouter from './routes/course.route.js'
import InstructorRouter from './routes/instructor.route.js'
import LectureRouter from './routes/lecture.route.js'
const app = express()
app.use(express.json())

app.use(cors())

app.use('/api',UserRouter)
app.use('/api',CourseRouter)
app.use('/api',InstructorRouter)
app.use('/api',LectureRouter)

app.get('/health',(_,res)=>{
    res.send('OK')
})

app.listen(process.env.PORT,async()=>{
    await MongoConnect()
    console.log(`App is listening on the port : ${process.env.PORT}`)
})