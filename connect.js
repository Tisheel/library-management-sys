import mongoose from 'mongoose'

const connectToDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://webuilddd:notnpc@cluster0.csxdmcb.mongodb.net/?retryWrites=true&w=majority')
        console.log('Connected to MongoDB Successfully')
    } catch (error) {
        console.log(error)
    }
}

export default connectToDb