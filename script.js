const image = document.querySelector('.scroll-image');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Translate the image from right to left as the user scrolls up
    if (scrollTop < lastScrollTop) {
        const translateX = Math.min(scrollTop / 2, window.innerWidth); // Adjust the divisor for speed
        image.style.transform = `translateY(-50%) translateX(-${translateX}px)`;
    } else {
        // Fade out the image as the user scrolls down
        const opacity = Math.max(1 - (scrollTop / 500), 0); // Adjust the divisor for fade speed
        image.style.opacity = opacity;
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
function updateCountdowns() {
    const now = new Date();

    // New Year Countdown
    const nextYear = new Date().getFullYear() + 1;
    const newYearDate = new Date(nextYear, 0, 1); // January 1st
    const timeRemainingNewYear = newYearDate - now;

    if (timeRemainingNewYear <= 0) {
      document.getElementById("countdown").innerHTML = "Happy New Year! 🎉";
    } else {
      const newYearDays = Math.floor(timeRemainingNewYear / (1000 * 60 * 60 * 24));
      const newYearHours = Math.floor((timeRemainingNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const newYearMinutes = Math.floor((timeRemainingNewYear % (1000 * 60 * 60)) / (1000 * 60));
      const newYearSeconds = Math.floor((timeRemainingNewYear % (1000 * 60)) / 1000);

      document.getElementById("new-year-days").textContent = String(newYearDays).padStart(2, "0");
      document.getElementById("new-year-hours").textContent = String(newYearHours).padStart(2, "0");
      document.getElementById("new-year-minutes").textContent = String(newYearMinutes).padStart(2, "0");
      document.getElementById("new-year-seconds").textContent = String(newYearSeconds).padStart(2, "0");
    }

    // Christmas Countdown
    const christmasDate = new Date(new Date().getFullYear(), 11, 25); // December 25
    const timeRemainingChristmas = christmasDate - now;

    if (timeRemainingChristmas <= 0) {
      document.getElementById("christmas-countdown").innerHTML = "Merry Christmas! 🎄";
    } else {
      const christmasDays = Math.floor(timeRemainingChristmas / (1000 * 60 * 60 * 24));
      const christmasHours = Math.floor((timeRemainingChristmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const christmasMinutes = Math.floor((timeRemainingChristmas % (1000 * 60 * 60)) / (1000 * 60));
      const christmasSeconds = Math.floor((timeRemainingChristmas % (1000 * 60)) / 1000);

      document.getElementById("christmas-days").textContent = String(christmasDays).padStart(2, "0");
      document.getElementById("christmas-hours").textContent = String(christmasHours).padStart(2, "0");
      document.getElementById("christmas-minutes").textContent = String(christmasMinutes).padStart(2, "0");
      document.getElementById("christmas-seconds").textContent = String(christmasSeconds).padStart(2, "0");
    }
  }

  setInterval(updateCountdowns, 1000);
  updateCountdowns();
  function generateCard() {
    const name = document.getElementById('name').value.trim();
    const gender = document.getElementById('gender').value;

    if (!name || !gender) {
      alert('Please provide both name and gender.');
      return;
    }

    const card = document.getElementById('card');
    const messageEl = document.getElementById('message');
    const recipientEl = document.getElementById('recipientName');

    let message = '';
    if (gender === 'male') {
      message = 'Wishing you a Christmas filled with joy and warmth. May all your dreams come true!';
    } else if (gender === 'female') {
      message = 'May your Christmas sparkle with love, laughter, and joy. Have a magical holiday season!';
    } else {
      message = 'Sending you warm wishes for a holiday season full of happiness and cheer!';
    }

    const additionalMessages = [
      'Here’s to a holiday season full of good times and even better memories.',
      'May the magic of Christmas fill your heart with hope and happiness.',
      'Wishing you love, peace, and endless blessings this Christmas.',
    ];

    const randomIndex = Math.floor(Math.random() * additionalMessages.length);
    message += ' ' + additionalMessages[randomIndex];

    recipientEl.textContent = name;
    messageEl.textContent = message;
    card.style.display = 'block';

    document.getElementById('downloadBtn').style.display = 'inline-block';
  }

  function downloadCard() {
    const card = document.getElementById('card');
    const canvas = document.createElement('canvas');
    const scale = 2;
    canvas.width = card.offsetWidth * scale;
    canvas.height = card.offsetHeight * scale;
    const context = canvas.getContext('2d');
    context.scale(scale, scale);

    html2canvas(card, { canvas: canvas }).then(canvas => {
      const link = document.createElement('a');
      link.download = 'Christmas_Card.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  }