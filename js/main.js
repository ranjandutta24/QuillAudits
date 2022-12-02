// Colapsible

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(item =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach(dot => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

// Counting

const counting = (number, classId, sp) => {
  let value = 0;
  let endvalue = number;
  let counter = setInterval(() => {
    if (endvalue > 50) {
      value <= endvalue - Math.round(endvalue / 200)
        ? (value += Math.round(endvalue / 200))
        : (value += 1);
    } else {
      value += 1;
    }

    document.querySelector(`.${classId}`).textContent = `${value.toFixed(
      0
    )}${sp}`;

    if (value >= endvalue) {
      clearInterval(counter);
    }
  }, 1);
};
counting(600, "lines_of_code", `K`);
counting(12, "amount_lost", `.8B`);
counting(14, "amount_protected", `.6B`);

// Modal
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

const closedModal = () => {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
const openModal = () => {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
}

btnCloseModal.addEventListener(`click`, closedModal);
overlay.addEventListener(`click`, closedModal);
document.addEventListener(`keydown`, e => {
  console.log(`${e.key} was press`);
  if (e.key === `Escape` && !modal.classList.contains("hidden")) {
    closedModal();
  }
});

// smooth scroll

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const op = document.querySelector("#lan");
console.log(op);
