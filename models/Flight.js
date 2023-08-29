const { Schema, model, default: mongoose } = require("mongoose")

const flightInfoSchema = new mongoose.Schema({
  airline: {type: String, enum: ['American' , 'Southwest' , 'United'] , required: true},
  flightNo: { type: Number, min: 10, max: 9999 },
  departs: {type: Date, default: () => new Date(Date().getFullYear() + 1, 0, 1 )},
})

//applies this schema to the Flight(.js: name of file) model
const Flight = model('Flight' , flightInfoSchema)


// departs: { type: Date, default: () => new Date(new Date().getFullYear() + 1, 0, 1) },

// The values 1, 0, 1 represent the parameters passed to the Date constructor to set the default value for the departs field to January 1st of next year. Here's what each value represents:

// 1: Represents the month. In JavaScript's Date object, months are zero-based, so 0 represents January, 1 represents February, and so on.

// 0: Represents the day. This value sets the day of the month to the 1st.

// 1: Represents the year. This value adds 1 to the current year, effectively representing the next year.

//this because this data is reading the default from left to right. the last date is the day, the second to last is the month minus 1 (this is computer counting) and the year is first. 