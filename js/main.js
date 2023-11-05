let menu = document.querySelector(".menu");
let menuItems = document.querySelectorAll(".menuItem");
let hamburger = document.querySelector(".hamburger");
let menuIcon = document.querySelector(".menuIcon");
let mainHeader = document.querySelector("#main-header");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    hamburger.classList.remove("expanded");
    mainHeader.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
    hamburger.classList.add("expanded");
    mainHeader.classList.add("showMenu");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

let lightbox = document.querySelector("#lightbox");

(() => {
  gsap.registerPlugin(ScrollTrigger);

  let tlImages = gsap.timeline();
  tlImages.from("#hero-image", {
    duration: 3,
    autoAlpha: 0,
    x: -200,
  });
})();

(() => {
  console.log("IIFE Fired");
  
  // variables
  const model = document.querySelector("#model");
  const hotSpots = document.querySelectorAll(".Hotspot");

  // const hotspotContent = [
  //   {
  //     title: "Comfortable Rubber",
  //     description:
  //       "Comfortable Rubber is a silicone material that helps to keep the earbuds in the ear and at the same time it feels very comfortable and prevents them from falling.",
  //   },
  //   {
  //     title: "Silver Plating",
  //     description:
  //       "Silver Plating is a shiny Silver plate surface that places around the earbuds and protects the earbuds body from damage.",
  //   },
  //   {
  //     title: "Green Body",
  //     description:
  //       "Green Body is the other part of the earbuds surface which the color reminds us of nature. Because nature is the first source for hearing beautiful and incredible sounds.",
  //   },
  //   {
  //     title: "Speaker",
  //     description:
  //       "Speaker part places around the earbuds surface and with its high technology, it creates a three-dimensional listening experience.",
  //   },
  //   {
  //     title: "Charging Port",
  //     description:
  //       "Charging Port is a part of earbuds that charges them by placing them in their box.",
  //   },
  //   {
  //     title: "Finger Holder",
  //     description:
  //       "Finger Holder is at the upper part of the earbuds, which helps to hold and place them in the ear more easily with its indentation.",
  //   },
  // ];


  // functions
  function loaded () {
    // console.log(hotSpots);
    hotSpots.forEach(hotSpot => {
      hotSpot.style.display = "block";
    })
  }

  function showInfoOnMouseOver(e) {
    console.log(e.currentTarget.slot);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div `);
    gsap.to(selected, 1, {autoAlpha:1});
  }

  function hideInfoOnMouseOut(e) {
    console.log(e.currentTarget.slot);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div `);
    gsap.to(selected, 1, {autoAlpha:0});
  }

  // event listeners
  model.addEventListener("load", loaded);
  hotSpots.forEach(hotSpot => {
    hotSpot.addEventListener("mouseover", showInfoOnMouseOver);
    hotSpot.addEventListener("mouseout", hideInfoOnMouseOut);
  })

})();

//variables X-ray
let dragging = false;
let min = 0;
let max;
// let imageCon = document.querySelector(`#imageCon`);
// let drag = document.querySelector(`.image-drag`);
// let left = document.querySelector(`.image-left`);
// dragging = false;
// min = 0;
// max = imageCon.offsetWidth;

 //functions X-ray
 function onDown() {
  dragging = true;
  console.log("set to true");
}

function onUp() {
  dragging = false;
  console.log("set to false");
}

function onMove(event) {
  if (dragging) {
    max = imageCon.offsetWidth; // Update max based on the current width
    let x = event.clientX - imageCon.getBoundingClientRect().left;
    console.log(x);

    if (x < min) {
      x = min;
    } else if (x > max) {
      x = max;
    }

    drag.style.left = x + 'px';
    left.style.width = x + 'px';
  }
}

// event listeners X-ray

drag.addEventListener('mousedown', onDown);
document.body.addEventListener('mouseup', onUp);
document.body.addEventListener('mousemove', onMove);





// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.
