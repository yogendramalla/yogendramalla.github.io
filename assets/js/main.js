(function first() {
  // https://dashboard.emailjs.com/admin/account
  // emailjs.init('U7IEJsYG7n6kp4mwm');
})();

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 20;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    // speed: 1,
    // loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();

const recive = document.getElementById("call");

const recivedescription = document.getElementById("descriptionCall");

const recivebtn = document.getElementById("btnCall");

const numberFun = () => {
  recive.innerHTML = "Call Now : 9861760043";
  recivedescription.innerHTML =
    "We are waiting for your call. We are available for our valuable clients. We respect you and your  valuable time. We will clarifie all your queries. Thank you.";
};

recivebtn.addEventListener("click", numberFun);

// image change

const changeBg = (color) => {
  document.getElementById("imgAbout").src = color;
};

// using typed lib
// typing text animation script
var typed = new Typed(".typing", {
  strings: [
    "Bookkeeping",
    "Accounting",
    "Auditing",
    "Taxation",
    "other various legal services",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing-2", {
  strings: ["Designer", "Developer", "Blogger", "Athlete", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

function readMoreFun() {
  var portfolioDetails = document.getElementById("portfolioDetails");
  var showToggle = document.getElementById("showToggle");

  if (portfolioDetails.style.display === "none") {
    portfolioDetails.style.display = "inline";
    showToggle.innerHTML = "Read Less about us";
  } else {
    portfolioDetails.style.display = "none";
    showToggle.innerHTML = "Read more about us";
  }
}

readMoreFun();

//   function sendMail(){

//       var showMessage = document.getElementById('showMessage');

//       showMessage.innerHTML= "Sending your queries to the team..."

//       var params = {
//           form_firstname: document.getElementById('firstName').value,
//           form_lastname: document.getElementById('lastName').value,
//           email_id: document.getElementById('email').value,
//           phone: document.getElementById('phone').value,
//           message: document.getElementById('yourMessage').value
//       }

//       emailjs.send("service_7pbl3b2","template_7fny4c7",params).then(function(res){
//         showMessage.innerHTML = "Thank you for connecting with us. We will reply you ASAP!!"
//           // alert("Your Queries are successfully submitted ! Thank you");
//           // window.location.reload()
//           // document.getElementById("formAll").reset();
//           console.log(params);

//       },function(error){
//         showMessage.innerHTML = "Your Queries are not submitted !! Issue arised";
//         // document.getElementById("formAll").reset();
//         console.log(error);

//       })
//   }

// sendMail();
