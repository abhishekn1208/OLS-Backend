import mongoose from "mongoose";

const  LectureSchema = new mongoose.Schema({
    courseId : {type : mongoose.Schema.Types.ObjectId, ref : 'Course'},
    instructorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' },
    date : {type : Date, required : true},
    time : {type : String, required : true}
})

const Lecture = mongoose.model('Lecture',LectureSchema)
export default Lecture 