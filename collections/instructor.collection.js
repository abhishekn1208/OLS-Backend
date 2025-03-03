import Instructor from "../module/instructor.model.js";
import Lecture from "../module/lecture.model.js";

export const addInstructor=async(req,res)=>{
    const {name,email,phone,qualifications} = req.body;
    try {
        const instructor = await Instructor.findOne({email})
        if(instructor) return res.status(400).json({message : 'Already Exists'})
    
            const newInstructor = new Instructor({name,email,phone,qualifications})
            await newInstructor.save()
            res.status(200).json(newInstructor)
    } catch (error) {
            res.status(500).json({message : 'Internal Server Error'})
    }       
}

export const updateInstructorDetails=async(req,res)=>{
    const {instructorId} = req.params;

    try {const instructor = await Instructor.findById(instructorId)

        if(!instructor) return res.status(404).json({message : 'Instructor not found'})
            
            const updatedDetails = await Instructor.findByIdAndUpdate(instructorId,{...req.body},{new : true})
          
            await updatedDetails.save()
            res.status(200).json({message : 'Updated Successfully',updatedDetails})
        
    } catch (error) {
        res.status(500).json({message : 'Internal Server Error'})
    }
}

export const getAllInstructor=async(req,res)=>{
 try {
    const instructors = await Instructor.find()
    res.status(200).json(instructors)
 } catch (error) {
    res.status(500).json({message : 'Internal Server Error'})
 }
}

