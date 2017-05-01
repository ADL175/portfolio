'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $repos = $('#repos');
    $repos.find('ul').empty();
    $repos.show();
  };

  let render = Handlebars.compile($('#repo-template').text());

  repoView.index = () => {
    ui();
    $('#repos ul').append(
      repos.with('name').map(render)
    );
  };

  repos.requestRepos(repoView.index);
  
  module.repoView = repoView;
})(window);
