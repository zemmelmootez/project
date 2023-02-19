const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
    mongoose.connect("mongodb://127.0.0.1:27017/feedbackV2")
    .then(()=>console.log("data base connected.")).catch((err)=>console.error(err));
