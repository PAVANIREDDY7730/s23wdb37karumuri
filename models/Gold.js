const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
Gold_weight: Number,
Gold_shop: {
   type: String,
   required: true,
   match : /^[a-zA-Z]+$/
},
Gold_cost:{
    type: Number,
    min :1,
    max:10000000000
} 
})
module.exports = mongoose.model("Gold",
costumeSchema)