const mongoose = require('mongoose')
const path = require('path')

const coverImageBasePath = 'uploads/bookCovers'

const bookShema = new mongoose.Schema({
    tite: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    publishedDate: {
        type: Date,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    coverImageName: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }

})
// virtual property for Image
bookShema.virtual('coverImagePath').get(function() {
    if(this.coverImageName =! null) {
        return path.join('/', coverImageBasePath, this.coverImageName)
    }
})

module.exports = mongoose.model('Book', bookShema)
module.exports.coverImageBasePath = coverImageBasePath