'use strict';

var rawData = [
  {
    title:  'Salmon Cookies',
    author: 'David Lim',
    date:   '2015-11-05',
    myUrl:  'http://www.google.com',
    body:   '<img src="http://www.placehold.it/200>"'

  },
  {
    title:  'Bus Mall',
    author: 'David Lim',
    date:   '2017-11-05',
    myUrl:  'http://www.google.com',
    body:   '<img src="http://www.placehold.it/200>"'

  },
  {
    title:  'Portfolio',
    author: 'David Lim',
    date:   '2016-11-05',
    myUrl:  'http://www.google.com',
    body:   '<img src="http://www.placehold.it/200>"'

  },

];

var articles = [];

function Article (rawDataObj) {

  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');
  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.data('category', this.category);

  /* TODO: Now use jQuery traversal and setter methods to fill in the rest
  of the current template clone with properties from this particular Article instance.
  We need to fill in:
    1. author name,

    2. author url,
    3. article title,

    4. article body, and
    5. publication date.
*/
  // $newArticle.attr()
  // $('.author-title').text(this.title);
  // $('.raw-url').attr("href", this.authorUrl);
  // $('.raw-url').text(this.author);
  // $('time').text(this.publishedOn);
  // $('.article-body').append(this.body);

  $newArticle.attr('data-author', this.author);
  $newArticle.find('.byline a').text(this.author);
  $newArticle.find('.byline a').attr('href', this.authorUrl);
  $newArticle.find('h2:first').text(this.title);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('time[pubdate]').attr('datetime', this.publishedOn);

  // Display the date as a relative number of 'days ago'
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};



rawData.sort(function(a,b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(articleObject) {
  // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
  articles.push(new Article(articleObject));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());

});
