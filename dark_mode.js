const toggleSwitch = document.querySelector('input[type="checkbox"]');
const image1 = document.querySelector('.img_1');

const imageMode = color => {
  image1.src = `./images/window_${color}.svg`;
};

const toggleTheme = isDark => {
  isDark ? imageMode('dark') : imageMode('light');
};

const switchTheme = event => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    // darkMode();
    toggleTheme(true);
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    // lightMode();
    toggleTheme(false);
    localStorage.setItem('theme', 'light');
  }
};

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleTheme(true);
  }
}

toggleSwitch.addEventListener('change', switchTheme);
