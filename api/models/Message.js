import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
  },
  name: {
    type: String,
      required: true,
  },
  email: {
    type: String,
      required: true,
  },
  phone: {
    type: String,
      required: true,
  },
  message: {
    type: String,
      required: true,
  },
  
});

export default mongoose.model('Message', messageSchema);