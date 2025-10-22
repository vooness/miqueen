// benefit-slider.js
document.addEventListener('DOMContentLoaded', function() {
  var head = document.head || document.getElementsByTagName('head')[0];

  // 1) Přidáme Tiny-slider CSS
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css';
  head.appendChild(link);

  // 2) Přidáme vlastní CSS override (margin, overflow, pozice kontrol)
  var style = document.createElement('style');
  style.innerHTML = `
    .benefitBanner.position--benefitHomepage { overflow: hidden; position: relative; }
    .benefitBanner.position--benefitHomepage .benefitBanner__item { margin: 0; }
    .tns-controls { position: absolute; top: 50%; width: 100%; transform: translateY(-50%); pointer-events: none; }
    .tns-controls button { pointer-events: all; background: transparent; border: none; font-size: 2em; line-height: 1; }
  `;
  head.appendChild(style);

  // 3) Načteme Tiny-slider JS
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js';
  script.onload = function() {
    // 4) Inicializace carouselu
    if (typeof tns !== 'undefined') {
      tns({
        container: '.benefitBanner.position--benefitHomepage',
        items: 4,
        slideBy: 1,
        gutter: 10,
        nav: false,
        controls: true,
        controlsText: ['‹','›'],
        loop: true,
        responsive: {
          0:    { items: 1 },
          480:  { items: 2 },
          768:  { items: 3 },
          1024: { items: 4 }
        }
      });
    } else {
      console.error('Tiny-slider se nenačetl.');
    }
  };
  head.appendChild(script);
});
