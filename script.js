const img = document.getElementById('illustration');
let direction = 1;

setInterval(() => {
  if (direction === 1) {
    img.style.transform = 'translateY(-10px)';
    direction = -1;
  } else {
    img.style.transform = 'translateY(0)';
    direction = 1;
  }
}, 1000);
