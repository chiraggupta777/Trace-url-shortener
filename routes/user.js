const express= require('express');
const router= express.Router();
const {CreateUser,LoginUser}= require("../controllers/user");

router.post("/",CreateUser);
router.post("/login",LoginUser);

module.exports= router;