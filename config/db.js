import mongoose from 'mongoose'

const connect = async()=>{
   try {
    await mongoose.connect(process.env.MONGOURI)
    console.log('Db is connected')
   } catch (error) {
    console.log('Error in connecting to db')
   }
}

export default connect