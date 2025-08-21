const tips = [
  "🚶 Take a 5-minute walk to reset your focus.",
  "📵 Turn off notifications for 1 hour and go deep on one task.",
  "💧 Drink a glass of water — hydration boosts energy.",
  "🧘 Do 3 minutes of mindful breathing.",
  "✍️ Write down your top 3 priorities for today.",
  "🎧 Put on focus music for a 25-minute work sprint."
];

let lastIndex = -1;
function getTip() {
  let i;
  do { i = Math.floor(Math.random() * tips.length); } while (i === lastIndex);
  lastIndex = i;
  document.getElementById("tipBox").innerText = tips[i];
}

function loadMeme() {
  fetch("https://api.imgflip.com/get_memes")
    .then(r => r.json())
    .then(d => {
      const memes = d?.data?.memes || [];
      const img = document.getElementById("memeImage") || document.querySelector("img:last-of-type");
      if (img && memes.length) {
        const m = memes[Math.floor(Math.random() * memes.length)];
        img.src = m.url; img.alt = m.name || "meme";
      }
    })
    .catch(() => {});
}

document.addEventListener("DOMContentLoaded", loadMeme);
