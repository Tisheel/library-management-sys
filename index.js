import express from 'express'
import connectToDb from './connect.js'
import Book from './schema.js'

const app = express()

// constants
const PORT = 3000

// middleware
app.use(express.json())

await connectToDb()

app.get('/ping', (req, res) => {
    res.json({
        "ping": "pong"
    })
})

app.post('/book/create', async (req, res) => {
    try {
        const { title, author, description } = req.body

        const newBook = new Book({ title, author, description })

        await newBook.save()

        res.status(200).json({
            message: 'ok',
            newBook
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

app.get('/book/all', async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.get('/book/:id', async (req, res) => {
    try {
        const id = req.params.id
        const books = await Book.find({ _id: id })
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.post('/book/update/:id', async (req, res) => {
    try {
        const updateProperties = req.body
        const id = req.params.id

        const updatedBook = await Book.findByIdAndUpdate(id, updateProperties)

        res.status(200).json(updatedBook)

    } catch (error) {
        res.status(500).json(error)
    }
})

app.delete('/book/delete/:id', async (req, res) => {
    try {
        const id = req.params.id

        const deletedBook = await Book.findByIdAndDelete(id)

        res.status(200).json(deletedBook)

    } catch (error) {
        res.status(500).json(error)
    }
})

app.listen(PORT, () => {
    console.log('Server running on PORT:' + PORT)
})