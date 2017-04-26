'use strict';

// ******************************************
// ******
// ******************************************

const projectView = {};

projectView.initNewArticlePage = function() {
  $('#project-json').on('focus', function(){
    this.select();
  });

  $('#new-form').on('change', 'input, textarea', projectView.create);
};

// ******************************************
// ******
// ******************************************

projectView.initIndexPage = function() {
  $('#projects').html('');
  Project.all.forEach(function(project) {
    $('#projects').append(project.toHtml())
  });
};
