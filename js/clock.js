$(document).ready(function() {
  let clock;

  // Grab the current date
  let currentDate = new Date();

  // Target future date/24 hour time/Timezone
  let targetDate = moment.tz("2025-12-02 10:00", "Europe/Rome");

  // Calculate the difference in seconds between the future and current date
  let diff = targetDate / 1000 - currentDate.getTime() / 1000;

  if (diff <= 0) {
    // If remaining countdown is 0
    clock = $(".clock").FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: true,
      autostart: false
    });
    console.log("Date has already passed!")
    
  } else {
    // Run countdown timer
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      callbacks: {
        stop: function() {
          console.log("Timer has ended!")
        }
      }
    });
    
    // Check when timer reaches 0, then stop at 0
    setTimeout(function() {
      checktime();
    }, 1000);
    
    function checktime() {
      t = clock.getTime();
      if (t <= 0) {
        clock.setTime(0);
      }
      setTimeout(function() {
        checktime();
      }, 1000);
    }
  }
});

  // --- CENTRAGGIO E SPAZIATURA NUMERI --- //
  // Centra il container principale
  $('.flipTimebox').css({
      'width': 'fit-content',
      'margin': '50px auto 100px auto',
      'text-align': 'center'
  });

  // Centra la clock-wrapper
  $('.flipTimebox .flip-clock-wrapper').css({
      'display': 'block',
      'margin': '0 auto'
  });

  // Ripristina spaziatura tra i numeri e tra i due punti
  $('.flipTimebox .flip-clock-wrapper ul.flip li').css({
      'margin-left': '3px',
      'margin-right': '3px'
  });

  $('.flipTimebox .flip-clock-dot').css({
      'margin-left': '3px'
  });
});
