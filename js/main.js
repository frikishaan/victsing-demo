$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".materialboxed").materialbox();
  $(".modal").modal({
    opacity: 1.0
  });
  $('.fixed-action-btn').floatingActionButton();

  particlesJS.load("particles-js", "/js/particlesjs-config.json", function() {
    console.log("callback - particles.js config loaded");
  });
});
