var intros = [
  "Its amazing how we can express our excitement by repeating letters in words.. Learnt from you only.... Anyways... Finally the less awaited(unlike last year) day has arrived.. Although I am as excited as last one or maybe more.. Today is the AZKA(divine) day for me... I believe that even a change of schedule by one day can change the fate of a person. And so if you were not born on this day you would not have been in my life.. So yes its a special day for me...",
  "Soooo.. Ya I prepared this surprise for you.. And no I didn't plan to make this until three weeks ago.. And sorry bro but the idea of your birthday to be a regular day makes me 'kjasviskuyvauyev'.. As you know how I love to make you smile and make your day special and I have always tried to do my best. And so I cannot let your birthday pass like regular birthdays duhhh!!!.. And that so after knowing that it might be your last bday with me.. Soo I prepared this suprise for you. And Its really a simple surprise but you like simple and 'sober' so.. And I always wanted to do something for this birthday, I just didn't know what.. And then as I said this idea struck me only three weeks ago.. So here it goes...",
  "First of all I wud love to apologize for all the trouble I have caused you this year, for making your life like hell, for making you cry so much, for not being there when you needed me the most, for being an a**hole to everyone, and for every other thing which made u upset, sad or cry in anyway. And even after all these things you have never let me go and held on to me for which I am truly really glad. THANK YOU!! a big one that too.. But anyway this is not the day for being sad.. This is the only day of the year for me where I get excited like it is a festival for me.. So lets start!!!",
  "Scroll Nowww. DDUUHHH!!"
];
var introindex=-1;
var introinterval;

function introPrintLetterByLetter(destination, message, speed){
    var i = 0;
    introinterval = setInterval(function(){
        var d = document.getElementById(destination);
        d.innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(introinterval);
        }
    }, speed);
};

//introPrintLetterByLetter("intro", intros[0], 50);

function introNext() {
  clearInterval(introinterval);
  introindex++;
  if(introindex === intros.length) {
    introindex = intros.length - 1;
    document.getElementById('intro').innerHTML = intros[introindex];
  }
  else {
    document.getElementById('intro').innerHTML = "";
    introPrintLetterByLetter("intro", intros[introindex], 50);
  }
}

function introPrev() {
  clearInterval(introinterval);
  introindex--;
  if(introindex < 0) {
    introindex = 0;
  }
  document.getElementById('intro').innerHTML = intros[introindex];
}
