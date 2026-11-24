// Set false to disable sequential appearance.
const animateLogs = true;
const delayMs = 180;
document.querySelectorAll('.heading img').forEach(img => {
  const hide = () => { img.style.visibility = 'hidden'; };
  img.addEventListener('error', hide);
  if (img.complete && !img.naturalWidth) hide();
});
if (animateLogs) {
  document.querySelectorAll('.logs p').forEach((p,i) => p.style.setProperty('--delay', `${i * delayMs}ms`));
  document.querySelector('.access-card').classList.add('animate');
}
