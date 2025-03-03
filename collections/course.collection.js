import Course from "../module/course.model.js";




export const createCourse = async (req, res) => {
   // Multer handles the file upload, so the image will be available in req.file
 
       const { name, level, description, startDate } = req.body;
       console.log(req.body)

       try {
           // Save the course with the uploaded image path
           const image = req.file ? `uploads/${req.file.filename}` : '';  // Save image path in the database

           const course = new Course({
               name,
               level,
               description,
               image, // Save the image path in the database
               startDate
           });

           await course.save();  // Save the course to the database

           // Respond with the created course
           res.status(200).json(course);
       } catch (error) {
           res.status(500).json({ message: 'Internal Server Error' });
       }
   
};

export const getAllCourses=async(req,res)=>{
   try {
    const course = await Course.find().populate('lectures')
    res.status(200).json(course)
   } catch (error) {
    res.status(500).json({message : 'Internal Sevrer Error'})
   }
}