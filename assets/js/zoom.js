<<<<<<< HEAD
$(document).ready(function(){medium_zoom=mediumZoom("[data-zoomable]",{background:getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color")+"ee"})});
=======
// Initialize medium zoom.
$(document).ready(function() {
  medium_zoom = mediumZoom('[data-zoomable]', {
    background: getComputedStyle(document.documentElement)
        .getPropertyValue('--global-bg-color') + 'ee',  // + 'ee' for trasparency.
  })
});
>>>>>>> 454cef0 (Initial commit)
