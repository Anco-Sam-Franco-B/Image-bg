const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = +counter.dataset.target;
  let count = 0;

  const update = () => {
    count += Math.ceil(target / 80);
    if (count > target) count = target;
    counter.innerText = count;
    if (count < target) requestAnimationFrame(update);
  };

  update();
});
