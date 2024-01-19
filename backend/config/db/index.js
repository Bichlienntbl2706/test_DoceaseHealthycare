const mongoose = require('mongoose')
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/docease_healthycare',{
            useNewUrlParser: true,
            useUnifiedTopology: true

        });
        console.log('Connected successfully');
    }catch(error){
        console.log('Connect failed!');
    }
}
module.exports = {connect}