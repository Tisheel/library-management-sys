import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String  
})

const book = mongoose.model('book', bookSchema)

export default book