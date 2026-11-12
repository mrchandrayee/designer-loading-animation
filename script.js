/*
 * The screen recording shows a Compass/Sass box-shadow generator:
 * make($multiplier) loops through 250 points and positions them with
 * sine/cosine. This JavaScript recreates that generated particle cloud
 * without requiring Sass or Compass at runtime.
 */
const loader = document.querySelector("#loader");
const toggle = document.querySelector("#toggle");
const replay = document.querySelector("#replay");
const app = document.querySelector(".app");

const PARTICLE_COUNT = 250;
const MULTIPLIER = 0.19;
const shadows = [];

for (let i = 1; i <= PARTICLE_COUNT; i += 1) {
  const angle = i * MULTIPLIER;
  const radius = i * 0.42;
  const x = Math.sin(angle) * radius;
  const y = Math.cos(angle) * radius;
  const alpha = Math.max(0.18, 0.78 - i / 390);
  shadows.push(`${x.toFixed(2)}em ${y.toFixed(2)}em 0 rgba(255,255,255,${alpha.toFixed(2)})`);
}

loader.style.boxShadow = shadows.join(",\n  ");

toggle.addEventListener("click", () => {
  const paused = app.classList.toggle("paused");
  toggle.textContent = paused ? "Play animation" : "Pause animation";
  toggle.setAttribute("aria-pressed", String(paused));
});

replay.addEventListener("click", () => {
  loader.style.animation = "none";
  void loader.offsetWidth;
  loader.style.animation = "";
});
