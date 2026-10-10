// ---------- Saved progress (best stars for each story) ----------
function loadProgress() {
  try { return JSON.parse(localStorage.getItem("readingProgress")) || {}; }
  catch (e) { return {}; }
}
function saveProgress(progress) {
  try { localStorage.setItem("readingProgress", JSON.stringify(progress)); }
  catch (e) { /* ignore */ }
}
let progress = loadProgress();

// ---------- Speaking (uses the browser's built-in voice) ----------
// iPad Safari throws away an utterance that nothing points to, and then its
// "onend" never fires (so "Read to me" would stop after one sentence).
// Keeping it in this variable stops that.
let currentUtterance = null;

function stopSpeaking() {
  if (!("speechSynthesis" in window)) return;
  if (currentUtterance) currentUtterance.onend = null;
  speechSynthesis.cancel();
}

function speak(text, onDone) {
  if (!("speechSynthesis" in window)) return;
  stopSpeaking();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-GB";
  u.rate = 0.8; // a bit slower for young readers
  if (onDone) u.onend = onDone;
  currentUtterance = u;
  speechSynthesis.speak(u);
}

// ---------- Screens ----------
const homeScreen = document.getElementById("home-screen");
const storyScreen = document.getElementById("story-screen");
const homeBtn = document.getElementById("home-btn");

function updateStarTotal() {
  const total = Object.values(progress).reduce((a, b) => a + b, 0);
  document.getElementById("star-total").textContent = total;
}

function showHome() {
  stopSpeaking();
  storyScreen.hidden = true;
  homeScreen.hidden = false;
  homeBtn.hidden = true;

  const list = document.getElementById("story-list");
  list.innerHTML = "";
  STORIES.forEach(story => {
    const best = progress[story.id] || 0;
    const tile = document.createElement("button");
    tile.className = "story-tile";
    tile.innerHTML =
      `<span class="pic">${story.picture}</span>${story.title}` +
      `<span class="stars">${"⭐".repeat(best)}</span>`;
    tile.onclick = () => showStory(story);
    list.appendChild(tile);
  });
  updateStarTotal();
  window.scrollTo(0, 0);
}

function showStory(story) {
  homeScreen.hidden = true;
  storyScreen.hidden = false;
  homeBtn.hidden = false;
  document.getElementById("result").hidden = true;

  document.getElementById("story-picture").textContent = story.picture;
  document.getElementById("story-title").textContent = story.title;

  // Story text: each word is tappable
  const textBox = document.getElementById("story-text");
  textBox.innerHTML = "";
  const sentenceEls = [];
  story.text.forEach(sentence => {
    const p = document.createElement("p");
    sentence.split(" ").forEach((word, i) => {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = word;
      span.onclick = () => speak(word.replace(/[^A-Za-z']/g, ""));
      p.appendChild(span);
      p.appendChild(document.createTextNode(" "));
    });
    textBox.appendChild(p);
    sentenceEls.push(p);
  });

  // Read the whole story, highlighting one sentence at a time
  document.getElementById("read-btn").onclick = () => {
    let i = 0;
    const next = () => {
      sentenceEls.forEach(el => el.querySelectorAll(".word").forEach(w => w.classList.remove("speaking")));
      if (i >= story.text.length) return;
      sentenceEls[i].querySelectorAll(".word").forEach(w => w.classList.add("speaking"));
      speak(story.text[i], () => { i++; next(); });
    };
    next();
  };

  buildQuiz(story);
  window.scrollTo(0, 0);
}

// ---------- Questions ----------
const cheers = ["Well done! 🎉", "Great job! 🌟", "Super! 👍", "Excellent! 🥳"];

function buildQuiz(story) {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";
  let answered = 0;
  let firstTryCorrect = 0;

  story.questions.forEach((item, qi) => {
    const box = document.createElement("div");
    box.className = "question";

    const h3 = document.createElement("h3");
    const sayBtn = document.createElement("button");
    sayBtn.className = "say-btn";
    sayBtn.textContent = "🔊";
    sayBtn.title = "Read the question";
    sayBtn.onclick = () => speak(item.q);
    h3.appendChild(sayBtn);
    h3.appendChild(document.createTextNode(`${qi + 1}. ${item.q}`));
    box.appendChild(h3);

    const choicesEl = document.createElement("div");
    choicesEl.className = "choices";
    const feedback = document.createElement("div");
    feedback.className = "feedback";
    let tries = 0;

    item.choices.forEach((choice, ci) => {
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.textContent = choice;
      btn.onclick = () => {
        tries++;
        if (ci === item.answer) {
          btn.classList.add("correct");
          choicesEl.querySelectorAll("button").forEach(b => b.disabled = true);
          const cheer = cheers[Math.floor(Math.random() * cheers.length)];
          feedback.textContent = cheer;
          speak(cheer.replace(/[^A-Za-z! ]/g, ""));
          if (tries === 1) firstTryCorrect++;
          answered++;
          if (answered === story.questions.length) showResult(story, firstTryCorrect);
        } else {
          btn.classList.add("wrong");
          btn.disabled = true;
          feedback.textContent = "Try again! You can do it! 💪";
          speak("Try again!");
        }
      };
      choicesEl.appendChild(btn);
    });

    box.appendChild(choicesEl);
    box.appendChild(feedback);
    quiz.appendChild(box);
  });
}

function showResult(story, stars) {
  if (stars > (progress[story.id] || 0)) {
    progress[story.id] = stars;
    saveProgress(progress);
    updateStarTotal();
  }
  const result = document.getElementById("result");
  const message = stars === story.questions.length ? "Perfect! You are a super reader!" : "Good reading! Keep going!";
  result.innerHTML =
    `<div class="big-stars">${"⭐".repeat(stars)}${"☆".repeat(story.questions.length - stars)}</div>` +
    `<p>${message}</p>` +
    `<button class="big-btn" id="again-btn">🔁 Try again</button> ` +
    `<button class="big-btn" id="more-btn">📚 More stories</button>`;
  result.hidden = false;
  document.getElementById("again-btn").onclick = () => showStory(story);
  document.getElementById("more-btn").onclick = showHome;
  setTimeout(() => speak(message), 1200);
  result.scrollIntoView({ behavior: "smooth" });
}

homeBtn.onclick = showHome;
showHome();
