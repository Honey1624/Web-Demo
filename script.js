// Enable smooth drag scrolling for all .swiper containers
document.addEventListener("DOMContentLoaded", function () {
  const swipers = document.querySelectorAll(".swiper");

  swipers.forEach((container) => {
    let isDown = false;
    let startX, scrollLeft;

    container.addEventListener("mousedown", (e) => {
      isDown = true;
      container.classList.add("active");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener("mouseleave", () => {
      isDown = false;
      container.classList.remove("active");
    });

    container.addEventListener("mouseup", () => {
      isDown = false;
      container.classList.remove("active");
    });

    container.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      container.scrollLeft = scrollLeft - walk;
    });
  });
});
