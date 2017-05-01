'use strict';

(function(module) {
  const repos = {};

  function Repos(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('/repos')
    .then(
      results => {
        console.log(results);
        repos.all = results.map(ele => new Repos(ele));
        console.log(repos.all);
        callback();
      });
  }

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
