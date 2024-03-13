const express = require("express");
const {handleGenerateNewShortURL} = require("../Controller/url");

const router=express.Router();

router.post('/',handleGenerateNewShortURL);



module.exports = router;
