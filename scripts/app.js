'use strict';

var rawData = [
  {
    title:  'Salmon Cookies',
    author: 'David Lim',
    publishedOn:   '2015-11-05',
    authorUrl:  'http://www.google.com',
    body:   '<img src="http://www.placehold.it/200">',
    category: 'Code Fellows 201 Project'

  },
  {
    title:  'Bus Mall',
    author: 'David Lim',
    date:   '2017-11-05',
    authorUrl:  'http://www.google.com',
    body:   '<img src="http://www.placehold.it/200">',
    category: 'Code Fellows 201 Project'


  },
  {
    title:  'Portfolio',
    author: 'David Lim',
    date:   '2016-11-05',
    authorUrl:  'http://www.google.com',
    body:   '<img src="http://www.placehold.it/200">',
    category: 'Code Fellows 201 Project'


  },

];


// TEMPLATE EXAMPLE:

var projects = [];

function Project (rawDataObj) {

  this.title = rawDataObj.title;
  this.author = rawDataObj.author;
  this.publishedOn = rawDataObj.publishedOn;
  this.category = rawDataObj.category;
  this.authorUrl = rawDataObj.authorUrl;
  this.body = rawDataObj.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  if (!this.publishedOn) $newProject.addClass('draft');
  $newProject.data('category', this.category);
  $newProject.attr('data-author', this.author);
  $newProject.find('.byline a').text(this.author);
  $newProject.find('.byline a').attr('href', this.authorUrl);
  $newProject.find('h2:first').text(this.title);
  $newProject.find('.project-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.publishedOn);

  return $newProject;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
