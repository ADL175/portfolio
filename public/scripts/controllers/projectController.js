'use strict';

(function(module) {
  const projectController = {};
  projectController.getProjects = () => {
   Project.fetchAll();
    $('#projects').show();
    $('#repos').hide();
    $('.about').hide();
  };
  module.projectController = projectController;
})(window);
