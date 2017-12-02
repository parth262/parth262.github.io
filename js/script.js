var audio = [new Audio("audio/Just The Way You Are.mp3"), new Audio("audio/Marvin Gaye.mp3"), new Audio("audio/see you again.mp3"), new Audio("audio/talking to the moon.mp3"), new Audio("audio/Vanilla Twilight.mp3"), new Audio("audio/Thinking Out Loud.mp3"), new Audio("audio/i wanna grow old with you.mp3"), new Audio("audio/when you say nothing at all.mp3")];
var index = 0;


function playNext(index){
  audio[index].volume = 0.5;
  audio[index].play(); //this will play the element
  $(audio[index]).bind('ended', function(){ //this will bind a function to the "ended" event
    //increment the index to target the next element
    index++;
    if(index < audio.length){
      //plays the next song and binds the function to the ended event again until the queue is empty
      playNext(index);
    }
  });
}
playNext(index);
