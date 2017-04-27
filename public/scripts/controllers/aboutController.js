'use strict';

(function(module) {
  const aboutController = {};
  aboutController.hideProjects = () => {
    $('#projects').hide();
    $('#repos').hide();
    $('.about').show();
  };


  module.aboutController = aboutController;
})(window);
