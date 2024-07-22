const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// temp routes
const { createTemp, updateTemp, deleteTemp, getTemp, getAllTemp } = require('../controllers/temp');
// 
router.post("/temp/create", checkAuthorizationHeaders,authorizeUser("createtemp") ,createTemp);
router.put("/temp/update/:id", checkAuthorizationHeaders,authorizeUser("updatetemp"), updateTemp);
router.delete("/temp/delete/:id", checkAuthorizationHeaders, authorizeUser("deletetemp"), deleteTemp);
router.get("/temp/get/:id", checkAuthorizationHeaders, authorizeUser("readtemp"), getTemp);
router.get("/temp/getAll", checkAuthorizationHeaders, authorizeUser("readtemp"), getAllTemp);

    
// temp routes
const { createTemp, updateTemp, deleteTemp, getTemp, getAllTemp } = require('../controllers/temp');
// 
router.post("/temp/create", checkAuthorizationHeaders,authorizeUser("createtemp") ,createTemp);
router.put("/temp/update/:id", checkAuthorizationHeaders,authorizeUser("updatetemp"), updateTemp);
router.delete("/temp/delete/:id", checkAuthorizationHeaders, authorizeUser("deletetemp"), deleteTemp);
router.get("/temp/get/:id", checkAuthorizationHeaders, authorizeUser("readtemp"), getTemp);
router.get("/temp/getAll", checkAuthorizationHeaders, authorizeUser("readtemp"), getAllTemp);

  
module.exports = router;
