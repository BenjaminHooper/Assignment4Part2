// Declare an array of image filenames
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Declare an object of alternative text for each image
const altTexts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'A tree at sunset',
  'pic3.jpg': 'A colorful beach umbrella',
  'pic4.jpg': 'A cat lounging in the sun',
  'pic5.jpg': 'A mountain landscape'
};

// Loop through the array of filenames
const thumbBar = document.querySelector('.thumb-bar');

imageFilenames.forEach(filename => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + filename);
  newImage.setAttribute('alt', altTexts[filename]);
  thumbBar.appendChild(newImage);

  // Add a click event listener to each thumbnail image
  newImage.addEventListener('click', function() {
    const src = this.getAttribute('src');
    const alt = this.getAttribute('alt');
    document.querySelector('.displayed-img').setAttribute('src', src);
    document.querySelector('.displayed-img').setAttribute('alt', alt);
  });
});

// Writing a handler that runs the darken/lighten button
const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', function() {
  const currentClass = btn.getAttribute('class');

  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
});
