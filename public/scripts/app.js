'use strict';
// ******************************************
// ******   Object constructor
// ******************************************

function Project (rawDataObj) {
  this.title = rawDataObj.title;
  this.author = rawDataObj.author;
  this.publishedOn = rawDataObj.publishedOn;
  this.category = rawDataObj.category;
  this.authorUrl = rawDataObj.authorUrl;
  this.body = rawDataObj.body;
}

Project.all = [];

// ******************************************
// ******   Handlebars
// ******************************************

Project.prototype.toHtml = function() {
  console.log('project html prooto');
  let template = Handlebars.compile($('#project-template').text());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';

  return template(this);
};

// ******************************************
// ******   Load and push projects into array
// ******************************************

Project.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.date)) - (new Date(a.date));
  });

  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
}

// ******************************************
// ******   Method to run all functions
// ******************************************

Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    console.log(Project.all);
    projectView.initIndexPage();

  } else {

  $.getJSON('list.json').then(function(rawData){
    Project.loadAll(rawData);
    projectView.initIndexPage();
    localStorage.rawData = JSON.stringify(rawData);
  });
}
}
