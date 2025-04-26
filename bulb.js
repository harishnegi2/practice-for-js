//  bulb on and off

function clickMe(state){
    if(state == 'on'){
        document.body.style.backgroundColor = "black";
        document.getElementById("profile").setAttribute("src","img/2.png");
    }else{
        document.body.style.backgroundColor = "white";
        document.getElementById("profile").setAttribute("src","img/1.png");

    }
}
 

// <img id="profile" width="250" src="img/1.png">
// <br>
// <button onclick="clickMe('on')">on</button>
// <button onclick="clickMe('off')">off</button>




// parseInt() is a built-in JavaScript function that parses a string and returns an integer. It takes two arguments: the string to parse and an optional radix (base) specifying the number system to use. If the radix is not specified, parseInt() defaults to base 10. If the string cannot be parsed as an integer, parseInt() returns NaN. 



