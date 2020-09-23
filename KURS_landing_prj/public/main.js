// import device from './device.js';
// import particlesJS from './particles.min.js';
// import WOW from './wow.min.js';
// import Just_parallax from './Just_paralax.js';
// import QRCode from './qrcode.min.js';


(function () {
  // var qrcodeIos = new QRCode(document.getElementById("qrios"), {
  //   width : 121,
  //   height : 121,
  //   correctLevel : QRCode.CorrectLevel.L
  // });

  // var qrcodeAndroid = new QRCode(document.getElementById("qrandroid"), {
  //   width : 122,
  //   height : 122,
  //   correctLevel : QRCode.CorrectLevel.L
  // });

  // qrcodeIos.makeCode("itms-services://?action=download-manifest&url=https://a01j1e839f7f.ru1.hana.ondemand.com/sberbank/sf/distr_storage/mfp6.plist");
  // qrcodeAndroid.makeCode('https://a01j1e839f7f.ru1.hana.ondemand.com/sberbank/sf/distr_storage/app-kurs.apk');

  var qrcode = new QRCode(document.getElementById("qr"), {
    width: 200,
    height: 200,
    correctLevel: QRCode.CorrectLevel.L
  });
  qrcode.makeCode("http://kurs.sberbank.ru");

  if ((device.os === "ios" || device.os === "android") && device.type === 'mobile') {
    window.location.href = "index.html"
  }

  const instructionsLink = document.querySelector(".header__linkInstructions a");
  switch (device.os) {
    case "ios":
      instructionsLink.href = "https://a01j1e839f7f.ru1.hana.ondemand.com/sberbank/sf/distr_storage/kurs_guide_iOS.pdf";
      instructionsLink.target = "_blank";
      break;
    case "android":
      instructionsLink.href = "https://a01j1e839f7f.ru1.hana.ondemand.com/sberbank/sf/distr_storage/kurs_guide_Android.pdf";
      instructionsLink.target = "_blank";
      break;

    default:
      instructionsLink.href = "#instructions";
      break;
  }
  // function activePhone(pos) {
  //   var phone = document.querySelector(".header__phoneImage");

  //   if (pos === "left") {
  //     phone.classList.toggle("active__l");
  //   } else {
  //     phone.classList.toggle("active__r");
  //   }
  // }

  // var btnLeft = document.querySelector(".header__content_left .header__download");
  // var btnRight = document.querySelector(".header__content_right .header__download");

  // btnLeft.onmouseenter = function () {
  //   activePhone("left");
  // };
  // btnLeft.onmouseout = function () {
  //   activePhone("left");
  // };
  // btnRight.onmouseenter = function () {
  //   activePhone("right");
  // };
  // btnRight.onmouseout = function () {
  //   activePhone("right");
  // };

  // function downloadClick(el, target) {
  //   el.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     var elm = document.querySelector(target);

  //     elm.classList.add("active");

  //     setTimeout(function () {
  //       elm.classList.remove("active");
  //     }, 300)
  //   });
  // }

  // if (device.type === 'desktop') {
  //   downloadClick(btnLeft, ".header__qr-left");
  //   downloadClick(btnRight, ".header__qr-right");
  // }

  // if (device.type === 'tablet' && device.os === "ios") {
  //   downloadClick(btnRight, ".header__qr-right");
  // }

  // if (device.type === 'tablet' && device.os === "android") {
  //   downloadClick(btnLeft, ".header__qr-left");
  // }

  window.onscroll = function () {
    new Just_parallax(".header").render();
    new Just_parallax(".layout-bottom").render();
  };

  new WOW().init();

  particlesJS('header', {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#2f8d9b"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 4,
          "duration": 2,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

})();