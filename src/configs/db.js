const mongoose = require("mongoose");
const connect = ()=>{
    return mongoose.connect("mongodb+srv://Kapil_Jadon:jadonkp1221@cluster0.54jxz.mongodb.net/U4C4?retryWrites=true&w=majority")
}

module.exports = connect;