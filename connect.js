import mongoose from 'mongoose'

const connectToDb = async () => {
    try {
        await mongoose.connect('your url')
    } catch (error) {
        console.log(error)
    }
}

export default connectToDb
