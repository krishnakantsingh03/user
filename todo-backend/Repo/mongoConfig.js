const mongoose = require("mongoose");
const {MONGOURL} = require("../Config/prod");
class MongoConfig {
    constructor() {
        if(!MongoConfig.instance){
            this.connectDB();
        }
    }

    async connectDB(){
        try{
            console.log('I am here');
            const connection = await mongoose.connect(MONGOURL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            console.log(`MongoDB connected :  ${connection.connection.host} ${MONGOURL}`);

        }catch(err){
            console.log(err);
        }
}
}
const mongoConfig = new MongoConfig();
Object.freeze(mongoConfig);

module.exports = {mongoConfig};