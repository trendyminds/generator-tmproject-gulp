var globals = {
  appPath: './app',
  distPath: './dist',

  <% if (projectTypeEE) { %>
    wrapper: 'templates/default_site/{,*/}*.html'
  <% } else if (projectTypeCraft) { %>
    wrapper: 'craft/templates/{,*/}*.html'
  <% } else { %>
    wrapper: '{,*/}*.html'
  <% } %>
};

module.exports = globals;
