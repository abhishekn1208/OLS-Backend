import mongoose from "mongoose";

const  InstructorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    qualifications: { type: String },
})

const Instructor = mongoose.model('Instructor',InstructorSchema)
export default Instructor 