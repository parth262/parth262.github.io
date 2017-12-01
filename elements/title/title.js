function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        var d = document.getElementById(destination);
        d.innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

printLetterByLetter("heading", "HHHHHAAAAAAPPPPPPY BBBBBIIIIIIIIIIRRRRRRTTTTTHHHHHDDDDDAAAAAAYYYYYY!! WWWWEEEEEIIIIIRRRRRDDDDOOOOO (JJJJAAAAAAAAANNNNNNNNNN!!!!)", 100);
