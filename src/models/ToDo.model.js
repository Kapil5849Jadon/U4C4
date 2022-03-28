const mongoose = require("mongoose")
const toDoSchema = new mongoose.Schema(
    {
        title  : {type: String, required:true},
        body:{type:String, required: true},
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

 
module.exports = mongoose.model("toDo",toDoSchema);