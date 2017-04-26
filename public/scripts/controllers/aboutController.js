'use strict';

(function(module) {
  const aboutController = {};
  aboutController.hideProjects = () => {
    $('#projects').hide();
    $('.about').show();
    console.log('about controller working now!');
  };


  module.aboutController = aboutController;
})(window);
