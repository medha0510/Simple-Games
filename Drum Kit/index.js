
function handleClick(){
    alert("I got clicked!!");
} 

//in the querySelectorAll we can use .drum class instead of button kyuki future mein agar kahi aur bhi button add krna hoga toh yeh code use bhi select krlega

// for(var i=0;i<7;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
// }


//alternate code of the above
//for detecting the button press
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

//for detecting keypress
document.addEventListener("keypress",function(event){

    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "W":
        case "w": var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;

        case "A":
        case "a": var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;

        case "S":
        case "s": var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;

        case "D":
        case "d": var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;

        case "J":
        case "j": var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;

        case "K":
        case "k": var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;

        case "L":
        case "l": var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;

        default: console.log();

    }
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    //setTimeout(function,milliseconds,parameter1,parameter2,...)
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 300);
}
















