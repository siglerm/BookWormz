const mongoose = require('mongoose');

const { Schema } = mongoose;

const URI = process.env.URI || 'mongodb://localhost:27017/BookWormz';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.set('strictQuery', false);

try {
  mongoose.connect(URI, options);
  console.log('Db is running');
} catch (error) {
  console.error(error);
}

const thoughtSchema = new Schema({
  thought_target: String,
  thought_body: String,
  page: Number,
  mood: String,
  username: String,
  profilePic: String,
});

const bookSchema = new Schema({
  title: String,
  author: String,
  summary: String,
  coverImage: String,
});

const profileSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },
  profilePic: String,
  beverage: String,
  thoughts: [thoughtSchema],
  currentRead: bookSchema,
  alreadyRead: [bookSchema],
  toBeRead: [bookSchema],
});

const bookThoughtSchema = new Schema({
  username: String,
  thought_target: String,
  thought_body: String,
  page: Number,
  mood: String,
  date: Date,
});

const bookInfoSchema = new Schema({
  title: String,
  author: String,
  summary: String,
  coverImage: String,
  thoughts: [bookThoughtSchema],
});

const Profile = mongoose.model('Profile', profileSchema);
const BookInfo = mongoose.model('BookInfo', bookInfoSchema);

module.exports = {
  Profile,
  BookInfo,
};
