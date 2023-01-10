const mongoose = require('mongoose');

const { Schema } = mongoose;

const URI = process.env.URI || 'mongodb://localhost:27017';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

try {
  await mongoose.connect(URI, options);
  console.log('');
} catch (error) {
  console.error(error);
}

const thoughtSchema = new Schema({
  thought_body: String,
  page: Number,
  mood: String,
  date: Date,
});

const bookSchema = new Schema({
  title: String,
  author: String,
  summary: String,
  coverImage: String,
});

const librarySchema = new Schema({
  currentRead: [bookSchema],
  alreadyRead: [bookSchema],
  toBeRead: [bookSchema],
});

const profileSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },
  profilePic: String,
  beverage: String,
  thoughts: [thoughtSchema],
  library: [librarySchema],
});

mongoose.model('Profile', profileSchema);
