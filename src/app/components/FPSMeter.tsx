export function initFPSMeter() {
  const el = document.createElement("div");

  el.style.position = "fixed";
  el.style.right = "8px";
  el.style.bottom = "8px";
  el.style.padding = "4px 8px";
  el.style.background = "rgba(0,0,0,0.7)";
  el.style.color = "#00ff00";
  el.style.fontSize = "12px";
  el.style.fontFamily = "monospace";
  el.style.borderRadius = "4px";
  el.style.zIndex = "999999";
  el.textContent = "FPS: ...";

  document.body.appendChild(el);

  let frames = 0;
  const lastTime = performance.now();
  let lastFPSUpdate = lastTime;

  function loop(now: number) {
    frames++;

    if (now - lastFPSUpdate >= 1000) {
      const fps = Math.round((frames * 1000) / (now - lastFPSUpdate));
      el.textContent = `FPS: ${fps}`;
      frames = 0;
      lastFPSUpdate = now;
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}
