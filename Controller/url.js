const shortid = require('shortid');

async function handleGenerateNewShortURL(req,res){
const body=req.body;
if(!body.url){
    return res.status(400).json({err:"Url is required"})
}

const shortID=shortid();

await URL.create({
    shortID:shortID,
    redirectURL:body.url,
    visitHistory:[],

});
return res.json({id:shortID});
}
module.exports={
    handleGenerateNewShortURL,
};