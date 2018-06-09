exports.homePage = (req, res, next) => {
    res.render('index', { title: 'Davinder Kaur' });
  };

exports.aboutMe = (req, res, next) => {
    res.render('aboutMe',{
      title: 'About Me',
      message: ''
    });
  };

exports.projectPage = (req, res, next) => {
    res.render('projectPage',{
      title: 'Project',
      message: ''
    });
  };

exports.servicePage = (req, res, next) => {
    res.render('servicePage',{
      title: 'Service Page',
      message: ''
    });
  };

exports.contactMe = (req, res, next) => {
    res.render('contactMe',{
      title: 'Contact',
      message: ''
    });
  };


