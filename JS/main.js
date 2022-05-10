
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
let dateNow = new Date().getTime();

let dateDiff = countDownDate - dateNow;

let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

if (dateDiff < 0) {
    clearInterval(counter);
}
}, 1000);



let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No


window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 250) {
        progressSpans.forEach((span) => {
        span.style.width = span.dataset.width;
        });
    }
    
    if (window.scrollY >= statsSection.offsetTop - 50) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};


function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
        clearInterval(count);
    }
    }, 2000 / goal);
};






mybutton = document.getElementById("myBtn");



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


