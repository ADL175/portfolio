'use strict';

page('/', aboutController.hideProjects);
page('/projects', projectController.getProjects);
page('/repos', repoController.getProjects);
page();
