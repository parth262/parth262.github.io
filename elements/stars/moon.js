var moon = [
  "I miss you at nights.",
  "I see the moon and think about you.",
  "And I think how beautiful it would look",
  "if you would have been the face of the moon.. ",
  "Hope you liked it.. Now lets celebrate your bday with some fireworks"
];

var moonindex = 0;

var mooninterval;

function moonStart() {
  clearInterval(mooninterval);
  setTimeout(function() {
    mooninterval = setInterval(function() {
      $('#moon').html(moon[moonindex])
      .fadeIn(2000).delay(3000);
      moonindex++;
      if(moonindex < moon.length ) {
        $('#moon').fadeOut(2000);
      }
      if(moonindex === moon.length) {
        clearInterval(mooninterval);
      }
    },7000);
  },12000);
};
