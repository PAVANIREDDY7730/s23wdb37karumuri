const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
Gold_weight: Number,
Gold_shop: String,
Gold_cost: Number
})
module.exports = mongoose.model("Gold",
costumeSchema)