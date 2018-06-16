/* File name: index.ejs
     Author's name: Davinder Kaur
     Website name: dkassignment1.azurewebsites.net
     File Description: This file has the routes to get all the pages. */

var express = require('express');

const indexController = require('../controllers/indexController')

var router = express.Router();

/* GET all the page. */
router.get('/', indexController.homePage);

router.get('/aboutMe', indexController.aboutMe);

router.get('/projectPage', indexController.projectPage);

router.get('/servicePage', indexController.servicePage);

router.get('/contactMe', indexController.contactMe);

module.exports = router;
