const mongoose = require('mongoose');
const DB = "mongodb+srv://abc:abc@assignment.6ybco.mongodb.net/Assignment?retryWrites=true&w=majority"

mongoose.set('debug', true);

mongoose
    .connect(DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true, 
    })
    .then(() => {
        console.log('Database is connected');
    })
    .catch(err => {
        console.log('Cannot connect to database -', err); 
        process.exit();
    })