const CONFIG = {

  /*
   * Change these values to personalize the website.
   */

  person1: "Sushant Hadkhale",

  person2: "krisitina chapagain",

  // IMPORTANT:
  // Use YYYY-MM-DD format.
  anniversaryDate: "2025-12-22",

  heroMessage:
    "Every love story is beautiful, but ours is my favorite.",

  loveLetter:
    `I don't know exactly when you became such an important part of my life.

Maybe it was one of those ordinary moments that somehow became unforgettable. Maybe it was your smile, the way you listen, or the way being with you makes everything feel a little lighter.

What I do know is that every year with you has given me more reasons to be grateful.

Thank you for every laugh, every late-night conversation, every adventure, every quiet moment, and every memory we have created together.

If I could go back and start our story all over again, I would still choose you.

Today, tomorrow, and in every chapter that comes next.

I love you.`,

  anniversaryQuote:
    "In a world full of temporary things, you are my forever.",

  surpriseMessage:
    "If I had to choose one person to spend every tomorrow with, I would choose you. Again. And again. And again.",

  backgroundMusic:
    "",

  /*
   * Timeline
   */

  timeline: [
    {
      date: "The Beginning",
      title: "The Day We Met",
      description:
        "Somehow, two separate stories crossed paths and something beautiful began.",
      image:"https://img.sanishtech.com/u/381ff5e0ee29ff2db5f8a6695c5d10ba.jpeg"
    },

    {
      date: "Our First Adventure",
      title: "A Day to Remember",
      description:
        "It was one ordinary day that became one of the memories I never want to forget.",
      image:"https://img.sanishtech.com/u/08d47e58f205b9cce95ab7ab529e78f0.jpeg"
    },

    {
      date: "A Little More Us",
      title: "Growing Together",
      description:
        "We laughed, learned, explored and slowly built a world that belonged to both of us.",
      image:"https://img.sanishtech.com/u/9d326b3a7f4edc72e243754f75d7a217.png"
    },

    {
      date: "Today",
      title: "Still Choosing You"
    }
  ],

  /*
   * Reasons
   */

  reasons: [
    "Your eyes that light up my world",
    "Your smile",

    "Your kindness",

    "The way you understand me",

    "Your beautiful heart",

    "The way you make ordinary days special",

    "How you always make me laugh",

    "Every adventure with you",

    "Simply because you're you"
  ],

  /*
   * Gallery
   */

  gallery: [
    {
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=85",
      caption: "The beginning of something beautiful"
    },

    {
      image:
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=85",
      caption: "Adventures are better with you"
    },

    {
      image:
        "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=1200&q=85",
      caption: "Our favorite kind of happiness"
    },

    {
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
      caption: "A moment worth remembering"
    },

    {
      image:
        "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1200&q=85",
      caption: "Just you and me"
    },

    {
      image:
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=85",
      caption: "Forever starts with moments like these"
    }
  ]

}


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const loader = document.getElementById("loader");

const heroMessage = document.getElementById("heroMessage");
const heroDate = document.getElementById("heroDate");

const timeline = document.getElementById("timeline");
const gallery = document.getElementById("gallery");
const reasonsGrid = document.getElementById("reasonsGrid");

const loveLetter = document.getElementById("loveLetter");
const letterSignature = document.getElementById("letterSignature");

const coupleNames = document.getElementById("coupleNames");
const finalDate = document.getElementById("finalDate");
const anniversaryQuote = document.getElementById("anniversaryQuote");

const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

const floatingHearts = document.getElementById("floatingHearts");

const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
const backgroundMusic = document.getElementById("backgroundMusic");
const musicSource = document.getElementById("musicSource");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const previousPhoto = document.getElementById("previousPhoto");
const nextPhoto = document.getElementById("nextPhoto");

const confettiContainer =
  document.getElementById("confettiContainer");


/* =========================================================
   DATE FUNCTIONS
   ========================================================= */

function getAnniversaryDate() {
  const date = new Date(`${CONFIG.anniversaryDate}T00:00:00`);

  return date;
}


function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}


/*
 * Calculate calendar-aware elapsed time.
 *
 * This is more accurate for years/months than simply
 * dividing milliseconds by fixed durations.
 */

function calculateElapsedTime(startDate, endDate) {

  let years = endDate.getFullYear() - startDate.getFullYear();

  let candidate = new Date(startDate);

  candidate.setFullYear(
    startDate.getFullYear() + years
  );

  if (candidate > endDate) {
    years--;
    candidate = new Date(startDate);

    candidate.setFullYear(
      startDate.getFullYear() + years
    );
  }

  let months =
    endDate.getMonth() - candidate.getMonth();

  if (months < 0) {
    months += 12;
  }

  let monthCandidate = new Date(candidate);

  monthCandidate.setMonth(
    candidate.getMonth() + months
  );

  if (monthCandidate > endDate) {
    months--;

    monthCandidate = new Date(candidate);

    monthCandidate.setMonth(
      candidate.getMonth() + months
    );
  }

  const remainingMilliseconds =
    endDate.getTime() -
    monthCandidate.getTime();

  const totalSeconds =
    Math.floor(remainingMilliseconds / 1000);

  const secondsInDay = 86400;

  const days = Math.floor(
    totalSeconds / secondsInDay
  );

  const remainingAfterDays =
    totalSeconds % secondsInDay;

  const hours = Math.floor(
    remainingAfterDays / 3600
  );

  const minutes = Math.floor(
    (remainingAfterDays % 3600) / 60
  );

  const seconds =
    remainingAfterDays % 60;

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  };
}


/* =========================================================
   INITIAL CONTENT
   ========================================================= */

function initializeContent() {

  const anniversary = getAnniversaryDate();

  heroMessage.textContent =
    CONFIG.heroMessage;

  heroDate.textContent =
    formatDate(anniversary);

  coupleNames.textContent =
    `${CONFIG.person1} & ${CONFIG.person2}`;

  finalDate.textContent =
    formatDate(anniversary);

  anniversaryQuote.textContent =
    `"${CONFIG.anniversaryQuote}"`;

  letterSignature.textContent =
    `Forever yours, ${CONFIG.person1}`;

}


/* =========================================================
   TIMELINE
   ========================================================= */

function createTimeline() {

  timeline.innerHTML = "";

  CONFIG.timeline.forEach((item, index) => {

    const article =
      document.createElement("article");

    article.className =
      "timeline-item reveal";

    article.innerHTML = `
      <div class="timeline-dot" aria-hidden="true"></div>

      <div class="timeline-card">

        <img
          src="${item.image}"
          alt="${item.title}"
          loading="lazy"
        >

        <span class="timeline-date">
          ${item.date}
        </span>

        <h3>${item.title}</h3>

        <p>${item.description}</p>

      </div>
    `;

    timeline.appendChild(article);
  });

}


/* =========================================================
   GALLERY
   ========================================================= */

let currentPhoto = 0;


function createGallery() {

  gallery.innerHTML = "";

  CONFIG.gallery.forEach((item, index) => {

    const article =
      document.createElement("article");

    article.className =
      "gallery-item reveal";

    article.setAttribute(
      "tabindex",
      "0"
    );

    article.setAttribute(
      "role",
      "button"
    );

    article.setAttribute(
      "aria-label",
      `Open photo: ${item.caption}`
    );

    article.innerHTML = `
      <img
        src="${item.image}"
        alt="${item.caption}"
        loading="lazy"
      >

      <span class="gallery-caption">
        ${item.caption}
      </span>
    `;

    article.addEventListener(
      "click",
      () => openLightbox(index)
    );

    article.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();

          openLightbox(index);
        }

      }
    );

    gallery.appendChild(article);
  });

}


/* =========================================================
   LIGHTBOX
   ========================================================= */

function openLightbox(index) {

  currentPhoto = index;

  updateLightbox();

  lightbox.classList.add("open");

  lightbox.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("no-scroll");

  lightboxClose.focus();
}


function closeLightbox() {

  lightbox.classList.remove("open");

  lightbox.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove("no-scroll");
}


function updateLightbox() {

  const item =
    CONFIG.gallery[currentPhoto];

  lightboxImage.src =
    item.image;

  lightboxImage.alt =
    item.caption;

  lightboxCaption.textContent =
    item.caption;
}


function showNextPhoto() {

  currentPhoto =
    (currentPhoto + 1) %
    CONFIG.gallery.length;

  updateLightbox();
}


function showPreviousPhoto() {

  currentPhoto =
    (
      currentPhoto -
      1 +
      CONFIG.gallery.length
    ) %
    CONFIG.gallery.length;

  updateLightbox();
}


lightboxClose.addEventListener(
  "click",
  closeLightbox
);

nextPhoto.addEventListener(
  "click",
  showNextPhoto
);

previousPhoto.addEventListener(
  "click",
  showPreviousPhoto
);


lightbox.addEventListener(
  "click",
  (event) => {

    if (event.target === lightbox) {
      closeLightbox();
    }

  }
);


document.addEventListener(
  "keydown",
  (event) => {

    if (!lightbox.classList.contains("open")) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowRight") {
      showNextPhoto();
    }

    if (event.key === "ArrowLeft") {
      showPreviousPhoto();
    }

  }
);


/* =========================================================
   REASONS
   ========================================================= */

function createReasons() {

  reasonsGrid.innerHTML = "";

  CONFIG.reasons.forEach(
    (reason, index) => {

      const card =
        document.createElement("article");

      card.className =
        "reason-card reveal";

      card.innerHTML = `
        <div
          class="reason-icon"
          aria-hidden="true"
        >
          ♥️
        </div>

        <h3>${reason}</h3>
      `;

      reasonsGrid.appendChild(card);
    }
  );

}


/* =========================================================
   LOVE LETTER TYPING EFFECT
   ========================================================= */

let typingStarted = false;


function startTypingEffect() {

  if (typingStarted) {
    return;
  }

  typingStarted = true;

  loveLetter.textContent = "";

  let index = 0;

  const text = CONFIG.loveLetter;

  const speed = 22;

  function typeCharacter() {

    if (index >= text.length) {

      document.getElementById(
        "typingCursor"
      ).style.display = "none";

      return;
    }

    loveLetter.textContent +=
      text[index];

    index++;

    setTimeout(
      typeCharacter,
      speed
    );
  }

  typeCharacter();
}


/* =========================================================
   ANNIVERSARY COUNTER
   ========================================================= */

function updateCounter() {

  const startDate =
    getAnniversaryDate();

  const now =
    new Date();

  if (now < startDate) {
    return;
  }

  const elapsed =
    calculateElapsedTime(
      startDate,
      now
    );

  document.getElementById(
    "years"
  ).textContent = elapsed.years;

  document.getElementById(
    "months"
  ).textContent = elapsed.months;

  document.getElementById(
    "days"
  ).textContent = elapsed.days;

  document.getElementById(
    "hours"
  ).textContent = elapsed.hours;

  document.getElementById(
    "minutes"
  ).textContent = elapsed.minutes;

  document.getElementById(
    "seconds"
  ).textContent = elapsed.seconds;
}


/* =========================================================
   SURPRISE
   ========================================================= */

let surpriseShown = false;


function showSurprise() {

  if (surpriseShown) {
    return;
  }

  surpriseShown = true;

  surpriseMessage.textContent =
    CONFIG.surpriseMessage;

  surpriseMessage.classList.add("show");

  surpriseButton.innerHTML =
    `Our Secret ♥️`;

  createConfetti();

  createHeartBurst();
}


surpriseButton.addEventListener(
  "click",
  showSurprise
);


/* =========================================================
   CONFETTI
   ========================================================= */

function createConfetti() {

  const pieces = 90;

  for (let i = 0; i < pieces; i++) {

    const piece =
      document.createElement("span");

    piece.className =
      "confetti";

    piece.style.left =
      `${Math.random() * 100}%`;

    piece.style.animationDuration =
      `${2 + Math.random() * 3}s`;

    piece.style.animationDelay =
      `${Math.random() * 0.8}s`;

    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    piece.style.background =
      [
        "#c85c73",
        "#e8a0ad",
        "#c49a5a",
        "#fff8f0",
        "#8b263d"
      ][
        Math.floor(
          Math.random() * 5
        )
      ];

    confettiContainer.appendChild(
      piece
    );

    setTimeout(
      () => piece.remove(),
      5500
    );
  }
}


/* =========================================================
   HEART BURST
   ========================================================= */

function createHeartBurst() {

  const count = 25;

  for (let i = 0; i < count; i++) {

    const heart =
      document.createElement("span");

    heart.textContent = "♥️";

    heart.style.position =
      "fixed";

    heart.style.left =
      "50%";

    heart.style.top =
      "65%";

    heart.style.zIndex =
      "7000";

    heart.style.pointerEvents =
      "none";

    heart.style.color =
      [
        "#c85c73",
        "#e8a0ad",
        "#c49a5a"
      ][
        Math.floor(
          Math.random() * 3
        )
      ];

    heart.style.fontSize =
      `${12 + Math.random() * 20}px`;

    const angle =
      Math.random() * Math.PI * 2;

    const distance =
      100 + Math.random() * 300;

    const x =
      Math.cos(angle) * distance;

    const y =
      Math.sin(angle) * distance;

    heart.animate(
      [
        {
          transform:
            "translate(-50%, -50%) scale(0)",
          opacity: 1
        },

        {
          transform:
            `translate(
              calc(-50% + ${x}px),
              calc(-50% + ${y}px)
            )
            scale(1.2)`,
          opacity: 0
        }
      ],
      {
        duration:
          1000 + Math.random() * 800,

        easing:
          "cubic-bezier(.2,.8,.3,1)"
      }
    );

    document.body.appendChild(
      heart
    );

    setTimeout(
      () => heart.remove(),
      2000
    );
  }
}


/* =========================================================
   FLOATING HEARTS
   ========================================================= */

function createFloatingHeart() {

  const heart =
    document.createElement("span");

  heart.className =
    "floating-heart";

  heart.textContent =
    Math.random() > 0.4
      ? "♥️"
      : "♡";

  heart.style.left =
    `${Math.random() * 100}%`;

  heart.style.fontSize =
    `${10 + Math.random() * 20}px`;

  heart.style.animationDuration =
    `${8 + Math.random() * 12}s`;

  heart.style.animationDelay =
    `${Math.random() * 3}s`;

  floatingHearts.appendChild(
    heart
  );

  setTimeout(
    () => heart.remove(),
    22000
  );
}


setInterval(
  createFloatingHeart,
  1800
);


/* =========================================================
   MUSIC
   ========================================================= */

function initializeMusic() {

  if (!CONFIG.backgroundMusic) {

    musicToggle.style.display =
      "none";

    return;
  }

  musicSource.src =
    CONFIG.backgroundMusic;

  backgroundMusic.load();
}


async function toggleMusic() {

  if (!CONFIG.backgroundMusic) {
    return;
  }

  if (backgroundMusic.paused) {

    try {

      await backgroundMusic.play();

      musicIcon.textContent =
        "Ⅱ";

      musicToggle.setAttribute(
        "aria-label",
        "Pause background music"
      );

      musicToggle.setAttribute(
        "aria-pressed",
        "true"
      );

    } catch (error) {

      console.warn(
        "Music could not be played:",
        error
      );

    }

  } else {

    backgroundMusic.pause();

    musicIcon.textContent =
      "♫";

    musicToggle.setAttribute(
      "aria-label",
      "Play background music"
    );

    musicToggle.setAttribute(
      "aria-pressed",
      "false"
    );
  }
}


musicToggle.addEventListener(
  "click",
  toggleMusic
);


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function setupRevealAnimations() {

  const elements =
    document.querySelectorAll(
      ".reveal"
    );

  if (
    !("IntersectionObserver" in window)
  ) {

    elements.forEach(
      element =>
        element.classList.add(
          "visible"
        )
    );

    startTypingEffect();

    return;
  }

  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add(
              "visible"
            );

            if (
              entry.target.closest(
                ".letter-section"
              )
            ) {
              startTypingEffect();
            }

            observer.unobserve(
              entry.target
            );
          }
        );

      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

  elements.forEach(
    element =>
      observer.observe(element)
  );
}


/* =========================================================
   PAGE INITIALIZATION
   ========================================================= */

function initializeWebsite() {

  initializeContent();

  createTimeline();

  createGallery();

  createReasons();

  initializeMusic();

  updateCounter();

  setInterval(
    updateCounter,
    1000
  );

  /*
   * Timeline/gallery/reason elements are created
   * dynamically, so reveal observers are initialized
   * after they exist.
   */
  setupRevealAnimations();
}


/* =========================================================
   LOADING SCREEN
   ========================================================= */

window.addEventListener(
  "load",
  () => {

    initializeWebsite();

    setTimeout(
      () => {
        loader.classList.add(
          "hidden"
        );
      },
      900
    );

  }
);


/* =========================================================
   FALLBACK
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /*
     * In case the load event is delayed,
     * initialize basic content immediately.
     */
    if (
      !timeline.children.length
    ) {
      initializeWebsite();
    }

  }
);
