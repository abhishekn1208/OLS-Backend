import mongoose from "mongoose";

const  CourseSchema = new mongoose.Schema({
    name : {type : String, required : true},
    level: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }],
    startDate : {type : Date, required : true}
})

const Course = mongoose.model('Course',CourseSchema)
export default Course 