/* Raven Flock — intro storyboard gallery */
(function () {
  function boot(frames) {
    const stage = document.getElementById("storyboard-stage");
    const dots = document.getElementById("storyboard-dots");
    const prevBtn = document.getElementById("storyboard-prev");
    const nextBtn = document.getElementById("storyboard-next");
    const pauseBtn = document.getElementById("storyboard-pause");
    if (!stage || !dots || !frames || !frames.length) return;
    let index = 0, timer = null, playing = true;
    const INTERVAL = 4200;
    frames.forEach((f, i) => {
      const fig = document.createElement("figure");
      fig.className = "storyboard-frame" + (i === 0 ? " is-active" : "");
      fig.setAttribute("aria-hidden", i === 0 ? "false" : "true");
      const img = document.createElement("img");
      img.src = f.src; img.alt = f.alt; img.loading = i === 0 ? "eager" : "lazy";
      img.width = 480; img.height = 270;
      fig.appendChild(img); stage.appendChild(fig);
      const dot = document.createElement("button");
      dot.type = "button"; dot.className = "dot";
      dot.setAttribute("aria-label", "Show frame " + (i + 1));
      if (i === 0) dot.setAttribute("aria-current", "true");
      dot.addEventListener("click", () => go(i, true));
      dots.appendChild(dot);
    });
    function go(i, user) {
      index = (i + frames.length) % frames.length;
      stage.querySelectorAll(".storyboard-frame").forEach((el, j) => {
        const on = j === index;
        el.classList.toggle("is-active", on);
        el.setAttribute("aria-hidden", on ? "false" : "true");
      });
      dots.querySelectorAll(".dot").forEach((el, j) => {
        if (j === index) el.setAttribute("aria-current", "true");
        else el.removeAttribute("aria-current");
      });
      if (user) restart();
    }
    function next() { go(index + 1, false); }
    function restart() { stop(); if (playing) start(); }
    function start() { stop(); timer = setInterval(next, INTERVAL); }
    function stop() { if (timer) clearInterval(timer); timer = null; }
    if (prevBtn) prevBtn.addEventListener("click", () => go(index - 1, true));
    if (nextBtn) nextBtn.addEventListener("click", () => go(index + 1, true));
    if (pauseBtn) pauseBtn.addEventListener("click", () => {
      playing = !playing;
      pauseBtn.setAttribute("aria-pressed", playing ? "false" : "true");
      pauseBtn.textContent = playing ? "❚❚" : "▶";
      pauseBtn.setAttribute("aria-label", playing ? "Pause slideshow" : "Play slideshow");
      if (playing) start(); else stop();
    });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      playing = false;
      if (pauseBtn) { pauseBtn.setAttribute("aria-pressed", "true"); pauseBtn.textContent = "▶"; pauseBtn.setAttribute("aria-label", "Play slideshow"); }
    } else start();
  }
  function startWhenReady() {
    if (window.RF_FRAMES && window.RF_FRAMES.length) boot(window.RF_FRAMES);
    else window.addEventListener("rf-frames-ready", function () { boot(window.RF_FRAMES); }, { once: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", startWhenReady);
  else startWhenReady();
})();
