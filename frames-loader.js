/* load storyboard JPEG chunks into RF_FRAMES */
(async function () {
  const specs = [
    { urls: ["assets/chunks/01-branch.p0.txt","assets/chunks/01-branch.p1.txt","assets/chunks/01-branch.p2.txt"], alt: "A raven perched on a misty branch at dusk" },
    { urls: ["assets/chunks/02-eye.p0.txt","assets/chunks/02-eye.p1.txt","assets/chunks/02-eye.p2.txt"], alt: "Close-up of a raven eye reflecting the horizon" },
    { urls: ["assets/chunks/03-reflection.p0.txt","assets/chunks/03-reflection.p1.txt","assets/chunks/03-reflection.p2.txt"], alt: "Three ravens reflected in a raven's eye" },
    { urls: ["assets/chunks/04-logo.p0.txt","assets/chunks/04-logo.p1.txt","assets/chunks/04-logo.p2.txt"], alt: "Raven Flock logo — three ravens and wordmark" },
  ];
  window.RF_FRAMES = [];
  for (let i = 0; i < specs.length; i++) {
    const texts = await Promise.all(specs[i].urls.map(u => fetch(u).then(r => r.text())));
    window.RF_FRAMES[i] = { src: "data:image/jpeg;base64," + texts.join(""), alt: specs[i].alt };
  }
  window.dispatchEvent(new Event("rf-frames-ready"));
})();
