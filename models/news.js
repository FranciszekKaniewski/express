var mongoose = require('mongoose')
const { Schema } = mongoose;

const newsSchema = new Schema({
  title:  {type: String, required: [true, 'Tytuł Wymagany!']},
  description:   {type: String, required:[true, 'Opis Wymagany!']},
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("News", newsSchema)