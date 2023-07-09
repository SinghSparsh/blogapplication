const { errorMonitor } = require('events');
const mongoose=require('mongoose');
const connectdb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('db connected'.bgMagenta.white);
    } catch (error) {
        console.log(' connection error');
    }
}
module.exports = connectdb;