/* load storyboard stills into RF_FRAMES */
(function () {
  window.RF_FRAMES = [
    { src: "assets/storyboard/01-branch.jpg", alt: "A raven perched on a misty branch at dusk" },
    { src: "assets/storyboard/02-eye.jpg", alt: "Close-up of a raven eye reflecting the horizon" },
    { src: "assets/storyboard/03-reflection.jpg", alt: "Three ravens reflected in a raven's eye" },
    { src: "assets/storyboard/04-logo.jpg", alt: "Raven Flock logo — three ravens and wordmark" }
  ];
  window.dispatchEvent(new Event("rf-frames-ready"));
})();
