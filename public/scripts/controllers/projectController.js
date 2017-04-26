'use strict';

(function(module) {
  const projectController = {};
  projectController.getProjects = () => {
   Project.fetchAll();

    $('#projects').show();
    $('.about').hide();
    console.log('porject controller says hi');
  };
  module.projectController = projectController;
})(window);
