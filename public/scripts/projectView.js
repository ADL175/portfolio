'use strict';

// ******************************************
// ******
// ******************************************

const projectView = {};

projectView.populateFilters = function() {
  $('project').each(function() {
    if (!$(this).hasClass('template')) {
      let val = $(this).find('address a').text();
      let optionTag = `<option value="${val}">${val}</option>`;

      if ($(`#author-filter option[value="${val}"]`).length === 0) {
        $('#author-filter').append(optionTag);
      }

      val = $(this).attr('data-category');
      optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#category-filter option[value="${val}"]`).length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

// ******************************************
// ******
// ******************************************

projectView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('project').hide();
      $(`project[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('project').fadeIn();
      $('project.template').hide();
    }
    $('#category-filter').val('');
  });
};

// ******************************************
// ******
// ******************************************

projectView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('project').hide();
      $(`project[data-category="${$(this).val()}"]`).fadeIn();
    } else {
      $('project').fadeIn();
      $('project.template').hide();
    }
    $('#author-filter').val('');
  });
};

// ******************************************
// ******
// ******************************************

projectView.initNewArticlePage = function() {
  $('.tab-content').show();
  $('#export-field').hide();
  $('#project-json').on('focus', function(){
    this.select();
  });

  $('#new-form').on('change', 'input, textarea', projectView.create);
};

// ******************************************
// ******
// ******************************************

projectView.initIndexPage = function() {
  Project.all.forEach(function(project) {
    $('#projects').append(project.toHtml())
  });

  projectView.populateFilters();
  projectView.handleCategoryFilter();
  projectView.handleAuthorFilter();

};
