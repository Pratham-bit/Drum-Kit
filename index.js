var numofclicks = document.querySelector(".drum").clientHeight;
for(i=0;i<numofclicks;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //var audio = new Audio("/sounds/tom-1.mp3");
    //audio.play();
    var buttoninner = this.innerHTML;
    makesound(buttoninner);
    makeanimation(buttoninner);
    
});
}
document.addEventListener("keydown",function (event){
    makesound(event.key);
    makeanimation(event.key);
});
function makesound(key){
    switch(key){
        case "w":
        var tom1 = new Audio("/sounds/tom-1.mp3");
        tom1.play();
        brea;
        case "a":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
        case "s":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
        case "d":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case "j":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case "k" :
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case "l" :
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
        default : console.log(key);
    }
}

function makeanimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
     setTimeout(function(){
        activeButton.classList.remove("pressed");
     },100)
}