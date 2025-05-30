
// ***********************************Hamburger menu icon**********************************

let hamburger = document.getElementById("hamburger");
let line = document.getElementsByClassName("line");
let tikki = 0;
hamburger.addEventListener("click", () => {
  if (tikki == 0) {
    line[0].style.transform =
      "rotate(45deg)" + "translateY(9px)" + "translateX(9px)";
    line[2].style.transform =
      "rotate(-45deg)" + "translateY(-9px)" + "translateX(9px)";
    line[1].style.transform = "scale(0)";
    tikki = 1;
  } else {
    line[0].style.transform = "none";
    line[2].style.transform = "none";
    line[1].style.transform = "scale(1)";
    tikki = 0;
  }
});

// *********************navbar************************

let navtext = document.querySelectorAll(".navcompo a");

let navbar = document.querySelector(".navbar");
let navflag = 0;
hamburger.addEventListener("click", () => {
  if (navflag == 0) {
    navbar.style.transform = "translate(0)";
    navbar.style.animationName = "full";
    navbar.style.zIndex = "9999";
    document.body.style.overflow = "hidden";
    navtext.forEach((box) => {
      box.style.color = "var(--yellow)";
    });
    navflag = 1;
  } else {
    navbar.style.transform = "translateY(100%)";
    navflag = 0;
    document.body.style.overflow = "auto";

    setTimeout(() => {
      navbar.style.zIndex = "-9";
      navbar.style.clipPath = "polygon(0 0, 100% 0%, 100% 50%, 0% 50%)";
      navbar.style.animationName = "null";
      navbar.style.transform = "translateY(-100%)";
      navtext.forEach((box) => {
        box.style.color = "transparent";
      });
    }, 650);
  }
});

let down = 0;

const logo = document.querySelector(".logo");
window.addEventListener("scroll", (e) => {
  if (pageYOffset > 600) {
    logo.style.background = "black";
  } else if (pageYOffset < 600) {
    logo.style.background = "transparent";
  }
});

// *******************************about us animation *******************

let abAniamtion = document.querySelectorAll(".about-content p");
let whatsappIcon = document.querySelector(".whatsapp-icon");

abAniamtion.forEach((ab) => {
  window.addEventListener("scroll", () => {
    if (pageYOffset > ab.offsetTop - ab.offsetHeight - 450) {
      ab.className = "about-animation";
      whatsappIcon.style.display = "block";
    } else if (pageYOffset < ab.offsetTop - ab.offsetHeight - 450) {
      ab.className = " ";
      whatsappIcon.style.display = "none";
    }
  });
});

console.log(abAniamtion[0].offsetHeight);
console.log(abAniamtion[0].offsetTop);

// **************************footer******************************

cloneFooter = document.querySelector(".footer").cloneNode(true);
addFooter = (pageName) => {
  pageName.append(cloneFooter);
};

// **************************************counter up************************************

let countbox = document.querySelector(".count");

console.log(countbox.offsetTop);
console.log(countbox.offsetHeight);
let flag = 0;

window.addEventListener("scroll", () => {
  if (
    pageYOffset > countbox.offsetTop - countbox.offsetHeight - 350 &&
    flag == 0
  ) {
    updateCount();
    flag++;
  }
});

updateCount = () => {
  let count = document.querySelectorAll(".count");
  count.forEach((box) => {
    let gap = 25;
    let target = box.dataset.target;
    let countnum = 0;
    gap = parseInt(target / gap);
    updatebox = () => {
      let interval = setInterval(() => {
        countnum += gap;
        box.innerHTML = countnum;
        if (box.innerHTML == target) {
          box.innerHTML = countnum + "+";
          clearInterval(interval);
        }
      }, 100);
    };

    updatebox();
  });
};

// *********************************************Menu section*************************************************

const menuBox = document.querySelectorAll(".dishes");
window.addEventListener("scroll", () => {
  menuBox.forEach((box) => {
    if (pageYOffset > box.offsetTop - box.offsetHeight - 200) {
      box.style.animationName = "scroll-menu";
    }
  });
});
