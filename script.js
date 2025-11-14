const cars = [
    {
      image: "images/BMW.jpg",
      name: "BMW",
      rating: {
         star: "ratings/rating-40.png",
        count: 400,
      },
      price: 12000,
    },
    {
      image: "images/Ford (1).jpg",
      name: "FORD ",
      rating: {
        star: "ratings/rating-50.png",
        count: 350,
      },
      price: 8000,
    },
    {
      image: "images/Honda.jpg",
      name: "HONDA",
      rating: {
        star: "ratings/rating-50.png",
        count: 300,
      },
      price: 10000,
    },
    {
      image: "images/Hyundai.jpg",
      name: "HYUNDAI",
      rating: {
         star: "ratings/rating-35.png",
        count: 450,
      },
      price: 90000,
    },
    {
      image: "images/Nissan2.jpg",
      name: "NISSAN",
      rating: {
        star: "ratings/rating-40.png",
        count: 100,
      },
      price: 13000,
    },
    {
      image: "images/toyota1.jpg",
      name: "TOYOTA",
      rating: {
        star: "ratings/rating-50.png",
        count: 200,
      },
      price: 16000,
    },
  ];
  
  const carContainer = document.querySelector(".main-section-col");
  cars.forEach((car) => {
    let html = `
    <div class="main-section-row">
      <img src="${car.image}" alt="" />
      <h3>${car.name}</h3>
      <div class="rating-row">
        <img src="${car.rating.star}" alt="" />
        <span>${car.rating.count}</span>
      </div>
      <div class="car-detail">
        <div><i class="fa-solid fa-chair"></i> <span>6 seat</span></div>
        <div>
          <i class="fa-solid fa-shield-halved"></i> <span>2020</span>
        </div>
        <div><i class="fa-solid fa-gas-pump"></i> <span>Petrol</span></div>
        <div><i class="fa-solid fa-door-open"></i> <span>2 Door</span></div>
        <div>
        <i class="fa-solid fa-circle-user"></i> <span>5 Person</span>
        </div>
        <div><i class="fa-solid fa-gauge-high"></i> <span>80Km</span></div>
      </div>
      <hr color="#2596be" />
      <div class="rent-car-row">
        <p><b>${car.price} Birr/</b> <span> DAY</span></p>
        <button>Rent Car</button>
      </div>
    </div>
    `;
    carContainer.insertAdjacentHTML("beforeend", html);
  });
  const testiSliders = document.querySelectorAll(".js-testimonial-slider");
  const rightArrow = document.querySelector(".js-right-arrow");
  const leftArrow = document.querySelector(".js-left-arrow");
  //testimonial slider
  let currentSlide = 0;
  testiSliders.forEach((s, i) => {
    s.style.transform = `translateX(${100 * i}%)`;
  });
  rightArrow.addEventListener("click", () => {
    if (currentSlide === testiSliders.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    testiSliders.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
    });
  });
  
  leftArrow.addEventListener("click", () => {
    if (currentSlide === 0) {
      currentSlide = testiSliders.length - 1;
    } else {
      currentSlide--;
    }
    testiSliders.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
    });
  });
  
  
 let menu = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');

 menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
 }

 window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
 }

 const sr = ScrollReveal ({
   distance: '60px',
   duration: 2500,
   delay: 400,
   reset: true
 })

 sr.reveal('.hero-section-description',{ delay: 200, origin: 'top'})
 sr.reveal('.schedule',{ delay: 800, origin: 'left'})
 sr.reveal('.heading',{ delay: 800, origin: 'top'})
 sr.reveal('.ride-container .box',{ delay: 600, origin: 'top'})
 sr.reveal('.main-section',{ delay: 600, origin: 'top'})
 sr.reveal('.main-section-col',{ delay: 800, origin: 'top'})
 sr.reveal('.why-choose-us',{ delay: 800, origin: 'top'})
 sr.reveal('.about-container',{ delay: 800, origin: 'top'})
 sr.reveal('.our-achievement',{ delay: 800, origin: 'top'})
 sr.reveal('.our-achievement-col-2',{ delay: 800, origin: 'left'})
 sr.reveal('.testimonial-section',{ delay: 800, origin: 'top'})
 sr.reveal('.container-get-started',{ delay: 800, origin: 'top'})
 sr.reveal('.get-started-car-image',{ delay: 1200, origin: 'left'})






