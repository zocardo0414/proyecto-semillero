let currentModule = "orcid";
let currentLessonIndex = 0;
let currentSceneIndex = 0;
let playTimer = null;

const completedLessons = new Set(
  JSON.parse(localStorage.getItem("semillero_completed") || "[]")
);

const elLessonList = document.getElementById("lesson-list");
const elModulePill = document.getElementById("module-pill");
const elLessonTitle = document.getElementById("lesson-title");
const elLessonDuration = document.getElementById("lesson-duration");
const elLessonStatus = document.getElementById("lesson-status");
const elPlayerScreen = document.getElementById("player-screen");
const elSceneTimeline = document.getElementById("scene-timeline");
const elSceneCounter = document.getElementById("scene-counter");
const elLessonChallenge = document.getElementById("lesson-challenge");
const btnPrev = document.getElementById("btn-prev");
const btnPlay = document.getElementById("btn-play");
const btnNext = document.getElementById("btn-next");

function saveProgress() {
  localStorage.setItem("semillero_completed", JSON.stringify([...completedLessons]));
  updateGlobalProgress();
}

function updateGlobalProgress() {
  const total = 18;
  const done = completedLessons.size;
  document.getElementById("global-progress-text").textContent = `${done} / ${total}`;
  document.getElementById("global-progress-fill").style.width = `${(done / total) * 100}%`;
}

function setAccentColor(color) {
  document.documentElement.style.setProperty("--accent", color);
}

function renderSidebar() {
  const mod = COURSE_DATA[currentModule];
  elLessonList.innerHTML = "";

  mod.lessons.forEach((lesson, idx) => {
    const isDone = completedLessons.has(lesson.id);
    const btn = document.createElement("button");
    btn.className = `lesson-item ${idx === currentLessonIndex ? "active" : ""} ${isDone ? "done" : ""}`;
    btn.innerHTML = `
      <span class="lesson-num">${isDone ? "✓" : idx + 1}</span>
      <span class="lesson-item-title">${lesson.title}</span>
    `;
    btn.onclick = () => {
      stopAutoPlay();
      currentLessonIndex = idx;
      currentSceneIndex = 0;
      const imageModal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const modalClose = document.getElementById("modal-close");

function openImageModal(src, alt) {
  modalImg.src = src;
  modalImg.alt = alt;
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
}

function closeImageModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
}

modalClose.onclick = closeImageModal;
imageModal.onclick = (e) => {
  if (e.target === imageModal) closeImageModal();
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeImageModal();
});

const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarContent = document.getElementById("sidebar-content");

sidebarToggle.onclick = () => {
  const isCollapsed = sidebarContent.classList.toggle("collapsed");
  sidebarToggle.textContent = isCollapsed ? "▸" : "▾";
  sidebarToggle.setAttribute("aria-expanded", String(!isCollapsed));
};

renderAll();
    };
    elLessonList.appendChild(btn);
  });
}

function renderScene() {
  const mod = COURSE_DATA[currentModule];
  const lesson = mod.lessons[currentLessonIndex];
  const scene = lesson.scenes[currentSceneIndex];

  elModulePill.textContent = mod.name;
  elLessonTitle.textContent = lesson.title;
  elLessonDuration.textContent = `⏱ ${lesson.duration}`;
  elLessonChallenge.textContent = lesson.challenge;

  const isDone = completedLessons.has(lesson.id);
  elLessonStatus.textContent = isDone ? "Completado" : "Pendiente";
  elLessonStatus.className = `status-badge ${isDone ? "done" : ""}`;

  // Timeline
  elSceneTimeline.innerHTML = "";
  lesson.scenes.forEach((_, idx) => {
    const dot = document.createElement("div");
    dot.className = `timeline-dot ${idx <= currentSceneIndex ? "active" : ""}`;
    dot.onclick = () => {
      stopAutoPlay();
      currentSceneIndex = idx;
      renderScene();
    };
    elSceneTimeline.appendChild(dot);
  });

  elSceneCounter.textContent = `Escena ${currentSceneIndex + 1} / ${lesson.scenes.length}`;
  btnPrev.disabled = currentSceneIndex === 0;
  btnNext.disabled = currentSceneIndex === lesson.scenes.length - 1;

  if (scene.type === "quiz") {
    stopAutoPlay();
    elPlayerScreen.innerHTML = `
      <span class="scene-tag">${scene.tag}</span>
      <h3 class="scene-heading">${scene.question}</h3>
      <div class="quiz-options" id="quiz-options"></div>
      <div class="quiz-feedback" id="quiz-feedback"></div>
    `;

    const optsContainer = document.getElementById("quiz-options");
    const feedback = document.getElementById("quiz-feedback");

    scene.options.forEach((optText, idx) => {
      const optBtn = document.createElement("button");
      optBtn.className = "quiz-option";
      optBtn.textContent = optText;
      optBtn.onclick = () => {
        const allBtns = optsContainer.querySelectorAll(".quiz-option");
        allBtns.forEach((b) => (b.disabled = true));

        if (idx === scene.correct) {
          optBtn.classList.add("correct");
          feedback.className = "quiz-feedback show ok";
          feedback.textContent = scene.explanation;
          completedLessons.add(lesson.id);
          saveProgress();
          renderSidebar();
          elLessonStatus.textContent = "Completado";
          elLessonStatus.className = "status-badge done";
        } else {
          optBtn.classList.add("wrong");
          allBtns[scene.correct].classList.add("correct");
          feedback.className = "quiz-feedback show err";
          feedback.textContent = `No exactamente. ${scene.explanation}`;
        }
      };
      optsContainer.appendChild(optBtn);
    });
  } else {
    const moduleImages = {
      orcid: "assets/orcid_ui.svg",
      cvlac: "assets/cvlac_ui.svg",
      scholar: "assets/scholar_ui.svg"
    };
    const imgSrc = scene.image || moduleImages[currentModule];
    elPlayerScreen.innerHTML = `
      <span class="scene-tag">${scene.tag}</span>
      <h3 class="scene-heading">${scene.heading}</h3>
      <p class="scene-body">${scene.body}</p>
      <div class="scene-tip">💡 <strong>Clave:</strong> ${scene.tip}</div>
      <div class="scene-visual" id="scene-visual" title="Clic para ampliar">
        <img src="${imgSrc}" alt="Interfaz de ${mod.name}" />
        <span class="zoom-hint">🔍 Clic para ampliar</span>
      </div>
    `;
    document.getElementById("scene-visual").onclick = () => openImageModal(imgSrc, `Interfaz de ${mod.name}`);
  }
}

function stopAutoPlay() {
  if (playTimer) {
    clearInterval(playTimer);
    playTimer = null;
  }
  btnPlay.textContent = "▶ Reproducir";
}

function toggleAutoPlay() {
  if (playTimer) {
    stopAutoPlay();
    return;
  }
  btnPlay.textContent = "⏸ Pausar";
  playTimer = setInterval(() => {
    const lesson = COURSE_DATA[currentModule].lessons[currentLessonIndex];
    if (currentSceneIndex < lesson.scenes.length - 1) {
      currentSceneIndex++;
      renderScene();
    } else {
      stopAutoPlay();
    }
  }, 4500);
}

function renderAll() {
  setAccentColor(COURSE_DATA[currentModule].accent);
  renderSidebar();
  renderScene();
  updateGlobalProgress();
}

// Eventos
document.querySelectorAll(".module-tab").forEach((tab) => {
  tab.onclick = () => {
    stopAutoPlay();
    document.querySelectorAll(".module-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    currentModule = tab.dataset.module;
    currentLessonIndex = 0;
    currentSceneIndex = 0;
    const imageModal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const modalClose = document.getElementById("modal-close");

function openImageModal(src, alt) {
  modalImg.src = src;
  modalImg.alt = alt;
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
}

function closeImageModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
}

modalClose.onclick = closeImageModal;
imageModal.onclick = (e) => {
  if (e.target === imageModal) closeImageModal();
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeImageModal();
});

const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarContent = document.getElementById("sidebar-content");

sidebarToggle.onclick = () => {
  const isCollapsed = sidebarContent.classList.toggle("collapsed");
  sidebarToggle.textContent = isCollapsed ? "▸" : "▾";
  sidebarToggle.setAttribute("aria-expanded", String(!isCollapsed));
};

renderAll();
  };
});

btnPrev.onclick = () => {
  stopAutoPlay();
  if (currentSceneIndex > 0) {
    currentSceneIndex--;
    renderScene();
  }
};

btnNext.onclick = () => {
  stopAutoPlay();
  const lesson = COURSE_DATA[currentModule].lessons[currentLessonIndex];
  if (currentSceneIndex < lesson.scenes.length - 1) {
    currentSceneIndex++;
    renderScene();
  }
};

btnPlay.onclick = toggleAutoPlay;

const imageModal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const modalClose = document.getElementById("modal-close");

function openImageModal(src, alt) {
  modalImg.src = src;
  modalImg.alt = alt;
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
}

function closeImageModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
}

modalClose.onclick = closeImageModal;
imageModal.onclick = (e) => {
  if (e.target === imageModal) closeImageModal();
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeImageModal();
});

const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarContent = document.getElementById("sidebar-content");

sidebarToggle.onclick = () => {
  const isCollapsed = sidebarContent.classList.toggle("collapsed");
  sidebarToggle.textContent = isCollapsed ? "▸" : "▾";
  sidebarToggle.setAttribute("aria-expanded", String(!isCollapsed));
};

renderAll();
