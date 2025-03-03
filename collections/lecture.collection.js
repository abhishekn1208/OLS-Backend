import Course from "../module/course.model.js";
import Lecture from "../module/lecture.model.js";

export const scheduleLecture=async(req,res)=>{
    const {courseId,instructorId,date,time} = req.body;
    

   try {
    const existingLecture = await Lecture.findOne({instructorId, date})

    if(existingLecture){
        return res.status(400).json({message : 'Instructor has already a lecture on this date'})
    }

    const lecture = new Lecture({courseId,instructorId,date,time})
    await lecture.save()

    const course = await Course.findById(courseId)
    course.lectures.push(lecture._id)
    await course.save()

    res.status(200).json({message : 'Lecture has been scheduled'})
   } catch (error) {
    res.status(500).json({message : 'Internal Server Error'})
   }
}

export const updateLecture=async(req,res)=>{
    const {lectureId} = req.params;
    const {instructorId,date,courseId} = req.body

   try {
    const existingLecture = await Lecture.findOne({instructorId,date, _id : {$ne : lectureId}})

    if(existingLecture) return res.status(400).json({ message: 'Instructor already has a lecture scheduled on this date' });

    const updatedlecture = await Lecture.findByIdAndUpdate(lectureId,{...req.body},{new : true})

    const course = await Course.findById(courseId)
    if(course){
        const lectureIndex = course.lectures.indexOf(lectureId)
        if(lectureIndex !== -1){
            course.lectures[lectureIndex] = updateLecture._id
            await course.save()
        }
    }
    res.status(200).json({ message: 'Lecture updated successfully', updatedLecture });
   } catch (error) {
    res.status(500).json({message : 'Internal Server Error'})
   }
}

export const getLectureByInstructor=async(req,res)=>{
    try {
     const {instructorId} = req.params;
 
     const lectures = await Lecture.find({instructorId}).populate('courseId')
     res.status(200).json(lectures)
    } catch (error) {
     res.status(500).json({message : 'Internal Server Error'})
    }
 }
 
 export const getAllLectures=async(req,res)=>{
   try {
    const lectures = await Lecture.find().populate('courseId').populate('instructorId')
    res.status(200).json(lectures)
   } catch (error) {
    res.status(500).json({message : 'Internal Server Error'})
   }
 }