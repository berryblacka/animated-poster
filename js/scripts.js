const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

if (window.anime) {
  const trigger1 = document.getElementById("trigger-1");
  const trigger2 = document.getElementById("trigger-2");
  const trigger3 = document.getElementById("trigger-3");
  const trigger4 = document.getElementById("trigger-4");
  const trigger5 = document.getElementById("trigger-5");

  function AnimateOnScroll(div, speed = 100, offset = 0) {
    const ScrollPercent = window.pageYOffset - div.offsetTop;
    return (ScrollPercent + offset) / speed;
  }
  const animationStar1_1 = anime({
    targets: "#star-1-container",
    translateX: "20vw",
    duration: 5000,
    // easing: "linear",
    autoplay: false,
  });
  const animationStar1_2 = anime({
    targets: "#star-1-container",
    translateX: ["20vw", "33vw"],
    duration: 5000,
    // easing: "linear",
    autoplay: false,
  });
  const animationStar1_3 = anime({
    targets: "#star-1-container",
    translateX: ["33vw", "90vw"],
    duration: 5000,
    // easing: "linear",
    autoplay: false,
  });

  const animationStar2_1 = anime({
    targets: "#star-2-container",
    translateX: "26.4vw",
    duration: 5000,
    // easing: "linear",
    autoplay: false,
  });
  const animationStar2_2 = anime({
    targets: "#star-2-container",
    translateX: ["26.4vw", "44vw"],
    duration: 5000,
    // easing: "linear",
    autoplay: false,
  });
  const animationStar2_3 = anime({
    targets: "#star-2-container",
    translateX: ["44vw", "60vw"],
    duration: 5000,
    // easing: "linear",
    autoplay: false,
  });

  const animationStar3_1 = anime({
    targets: "#star-3-container",
    translateX: "26.4vw",
    duration: 5000,
    // easing: "linear",
    autoplay: false,
  });
  const animationStar3_2 = anime({
    targets: "#star-3-container",
    translateX: ["26.4vw", "44vw"],
    duration: 5000,
    // easing: "linear",
    autoplay: false,
  });

  const animationStar4_1 = anime({
    targets: "#star-4-container",
    translateX: "26.4vw",
    duration: 5000,
    // easing: "linear",
    autoplay: false,
  });
  const animationTextRight = anime({
    targets: "#text-right-container",
    translateX: "68.4vw",
    duration: 5000,
    // easing: "linear",
    autoplay: false,
  });
  const animationTextRight2 = anime({
    targets: "#text-right-container",
    translateX: ["68.4vw", "106.4vw"],
    duration: 5000,
    // easing: "linear",
    autoplay: false,
  });
  const animationTextLeft = anime({
    targets: "#text-left-container",
    translateX: "65.4vw",
    duration: 5000,
    // easing: "linear",
    autoplay: false,
  });

  window.onscroll = () => {
    animationStar1_1.seek(
      AnimateOnScroll(trigger1, 800, 400) * animationStar1_1.duration,
    );

    animationStar2_1.seek(
      AnimateOnScroll(trigger1, 800, 400) * animationStar2_1.duration,
    );
    animationStar1_2.seek(
      AnimateOnScroll(trigger2, 800, 400) * animationStar1_2.duration,
    );
    animationStar2_2.seek(
      AnimateOnScroll(trigger2, 800, 400) * animationStar2_2.duration,
    );
    animationStar3_1.seek(
      AnimateOnScroll(trigger2, 800, 400) * animationStar3_1.duration,
    );
    animationStar1_3.seek(
      AnimateOnScroll(trigger3, 800, 400) * animationStar1_3.duration,
    );
    animationStar2_3.seek(
      AnimateOnScroll(trigger3, 800, 400) * animationStar2_3.duration,
    );
    animationStar3_2.seek(
      AnimateOnScroll(trigger3, 800, 400) * animationStar3_2.duration,
    );
    animationStar4_1.seek(
      AnimateOnScroll(trigger3, 800, 400) * animationStar4_1.duration,
    );
    animationTextRight.seek(
      AnimateOnScroll(trigger4, 500, 400) * animationTextRight.duration,
    );
    animationTextLeft.seek(
      AnimateOnScroll(trigger5, 500, 400) * animationTextLeft.duration,
    );
    animationTextRight2.seek(
      AnimateOnScroll(trigger5, 500, 400) * animationTextRight2.duration,
    );
  };

  const targets = ["#star-1", "#star-2", "#star-3", "#star-4"];
  anime({
    targets: targets,
    rotateZ: "+=360",
    duration: 1000,
    delay: 1000,
    easing: "easeInQuad",
    begin: function (anim) {
      anime.set("#star-1-container", {
        translateX: "0",
      });
      anime.set("#star-2-container", {
        translateX: "0",
      });
      anime.set("#star-3-container", {
        translateX: "0",
      });
      anime.set("#star-4-container", {
        translateX: "0",
      });
      anime.set("#text-right-container", {
        translateX: "0",
      });
    },

    complete: () => {
      // Вторая анимация без задержки, но с циклом
      anime({
        targets: targets,
        rotateZ: "+=360",
        duration: 500,
        loop: true,
        easing: "linear",
      });
    },
  });
}
