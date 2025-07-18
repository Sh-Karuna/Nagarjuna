console.log("SportsHub loaded successfully!");
document.querySelector('.dropdown > a').addEventListener('click', function(e) {
  e.preventDefault();
  const menu = this.nextElementSibling;
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('mouseover', () => {
    console.log(`Hovering over ${icon.id}`);
  });
});
