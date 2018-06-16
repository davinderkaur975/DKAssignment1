/* File name: header.ejs
     Author's name: Davinder Kaur
     Website name: dkassignment1.azurewebsites.net
     File Description: This file is rendering the view of all the pages. */

//It is rendering the view of homepage.
exports.homePage = (req, res, next) => {
    res.render('index', { title: 'Davinder Kaur' });
  };

  //It is rendering the view of about page.
exports.aboutMe = (req, res, next) => {
    res.render('aboutMe',{
      title: 'About Me',
      message: ''
    });
  };

//It is rendering the view of project page.
exports.projectPage = (req, res, next) => {
    res.render('projectPage',{
      title: 'Project',
      message: ''
    });
  };

//It is rendering the view of service page.
exports.servicePage = (req, res, next) => {
    res.render('servicePage',{
      title: 'Service Page',
      message: ''
    });
  };

//It is rendering the view of contact page.
exports.contactMe = (req, res, next) => {
    res.render('contactMe',{
      title: 'Contact',
      message: ''
    });
  };


