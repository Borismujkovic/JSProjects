const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];
const photon = document.getElementById("photon");
const quiz = document.getElementById("quiz");
const picker = document.getElementById("picker");

var aPhoton = document.createElement('a')
var imgPhoton = document.createElement("img")
var naslovPhoton = document.createElement('h2')

imgPhoton.setAttribute('src', "https://cdn-icons-png.flaticon.com/128/3781/3781609.png")
aPhoton.setAttribute('target', '_blank')
naslovPhoton.innerText = "Photon Project"

photon.append(aPhoton);
aPhoton.append(imgPhoton)
aPhoton.append(naslovPhoton)

var aQuiz = document.createElement('a')
var imgQuiz = document.createElement("img")
var naslovQuiz = document.createElement('h2')

imgQuiz.setAttribute('src', "https://cdn-icons-png.flaticon.com/128/3406/3406828.png")
aQuiz.setAttribute('target', '_blank')
naslovQuiz.innerText = "JS Quiz"

quiz.append(aQuiz);
aQuiz.append(imgQuiz)
aQuiz.append(naslovQuiz)

var aPicker = document.createElement('a')
var imgPicker = document.createElement("img")
var naslovPicker = document.createElement('h2')

imgPicker.setAttribute('src', "https://cdn-icons-png.flaticon.com/128/2415/2415054.png")
aPicker.setAttribute('target', '_blank')
naslovPicker.innerText = "Random Picker"

picker.append(aPicker);
aPicker.append(imgPicker)
aPicker.append(naslovPicker)


photon.addEventListener("click", openPhoton);
nav2.addEventListener("click", openPhoton);

function openPhoton() {
  aPhoton.setAttribute('href', "../Photos/photos.html") 
}

quiz.addEventListener("click", openQuiz);
nav3.addEventListener("click", openQuiz);

function openQuiz() {
  aQuiz.setAttribute('href', "../QuizApp/quiz.html") 
}

picker.addEventListener("click", openPicker);
nav4.addEventListener("click", openPicker);

function openPicker() {
  aPicker.setAttribute('href', "../Picker/picker.html") 
}

function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

function toggleNav() {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    navAnimation("out", "in");
  } else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    navAnimation("in", "out");
  }
}

menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});

nav5.addEventListener("click", toggleNav);
