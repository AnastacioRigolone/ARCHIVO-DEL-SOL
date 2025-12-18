const box = document.querySelector('.box');
const box2 = document.querySelector('.box2');

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;

  const maxScroll = docHeight - viewportHeight;

  let progress = scrollTop / maxScroll;
  progress = Math.min(Math.max(progress, 0), 1);

  const maxX = window.innerWidth - 240 - 40;

  const x1 = Math.round(progress * maxX);
  const x2 = Math.round((1 - progress) * maxX);

  box.style.transform = `translate(${x1}px, -50%)`;
  box2.style.transform = `translate(${x2}px, -50%)`;
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);
window.addEventListener('resize', onScroll);
