import mongoose from 'mongoose'

const propertySchema = new mongoose.Schema({
    street: {
        type: String,
        required: true,
        unique: true
    },
    exteriorNumber: {
        type: String,
        required: true
    },
    interiorNumber: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    typeOffer: [{
        type: String,
        required: true
    }],
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    numberRooms: {
        type: Number,
        required: true
    },    
    pictures: [{
        type: String,
        required: true
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
 
})

export default mongoose.model('Property', propertySchema)