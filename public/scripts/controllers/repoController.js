'use strict';

(function(module) {
  const repoController = {};

  repoController.getProjects = () => {
    $('#repos').show();
    $('.about').hide();
    $('#projects').hide();
    repos.requestRepos(repoView.index);
  };

  module.repoController = repoController;
})(window);
