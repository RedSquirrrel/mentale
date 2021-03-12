const toggleSwitchImage = document.querySelector('input[type="checkbox"]');
const image1 = document.querySelector('.img_1');

const imageMode = color => {
  image1.src = `./images/window_${color}.svg`;
};

const toggleThemeImage = isDark => {
  isDark ? imageMode('dark') : imageMode('light');
};

const switchThemeImage = event => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleThemeImage(true);
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleThemeImage(false);
    localStorage.setItem('theme', 'light');
  }
};

const currentThemeImage = localStorage.getItem('theme');

if (currentThemeImage) {
  document.documentElement.setAttribute('data-theme', currentThemeImage);
  if (currentThemeImage === 'dark') {
    toggleSwitchImage.checked = true;
    toggleThemeImage('dark');
  }
}

toggleSwitch.addEventListener('change', switchThemeImage);
