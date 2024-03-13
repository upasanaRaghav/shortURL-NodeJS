const mongoose=require('mongoose')
mongoose.set("StrictQuery",true);
async function connectToMongoAtlas(url){
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, session: options && options.session });
}

module.exports={
    connectToMongoAtlas,
};