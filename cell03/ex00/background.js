function getRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }
  
  document.getElementById('colorButton').addEventListener('click', function () {
    document.body.style.backgroundColor = getRandomColor();
  });
  