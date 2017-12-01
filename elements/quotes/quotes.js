var quotes = [
  "Do you remember how sometimes we just write little sentences like quotes to express what we feel.. Here are some of them..",
  "Some people just are in world to hurt you.. but it is you who decides to let them hurt u..... so think again and decide what is right",
  "Believe it or not diwali bhale tune jyada dekhi h but phatake phod phod ke hath mere terese jyada jale h...",
  "You: And nowww what i  wantt is....u to be right nxt to me... me bending into u...u holding me...nd i want to hit ur chest nd call u a dumbo!!!!",
  "Me: That wud be like a dream But i wud surely enjoy it.. Hoping that time stops rihht there.. For me to enjoy that moment",
  "U are realllyt realllyy rraalllyyy miserablee andd u areee bad bad bad bbad bad....never there where u shud be nd everywhere else where it's okay not to be...u are bad u  are stupid u are a foool u areee everything badd...u know nothing nd u do nothing u don't want  to ddo anything u are bbad just bad and miserable ndddd i hatteeee uuuu",
  "Hope that last one made you smile!!.. So lets move onto next section.. Shall we..? Below are some of the things I have learnt recently and created while just keeping you in mind.. PS.. dont press next plzzz.. Or you may have to refresh the whole page.."
];

var quoteindex = -1;
var quoteinterval;

function quotePrintLetterByLetter(destination, message, speed){
    var i = 0;
    quoteinterval = setInterval(function(){
        var d = document.getElementById(destination);
        d.innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(quoteinterval);
        }
    }, speed);
};

//quotePrintLetterByLetter("quotes", quotes[0], 50);

function quoteNext() {
  clearInterval(quoteinterval);
  quoteindex++;
  if(quoteindex === quotes.length) {
    quoteindex = quotes.length - 1;
    document.getElementById('quotes').innerHTML = '"'+quotes[quoteindex]+'"';
  }
  else {
    document.getElementById('quotes').innerHTML = "";
    quotePrintLetterByLetter("quotes", '"'+quotes[quoteindex]+'"', 50);
  }
  if(quoteindex === quotes.length-1) {
    moonStart();
  }
}

function quotePrev() {
  clearInterval(quoteinterval);
  quoteindex--;
  if(quoteindex < 0) {
    quoteindex = 0;
  }
  document.getElementById('quotes').innerHTML = '"'+quotes[quoteindex]+'"';
}
