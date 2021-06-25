//for mouse click
var all_buttons = document.querySelectorAll("button");
var no_of_elements = all_buttons.length;

for (var i=0; i<no_of_elements; ++i){

    all_buttons[i].addEventListener("click", function(){
        var buttonClicked = this.innerHTML;
        createSoundOnChar(buttonClicked);
        buttonAnimation(buttonClicked);
    });
}

//for key pressing
document.addEventListener("keydown",function (keyPressed){
    createSoundOnChar(keyPressed.key);
    buttonAnimation(keyPressed.key);
    
});

//create a sound 
function createSoundOnChar(character){
    var elementSound;
    switch(character){
        case "w" : 
                elementSound = "sounds/tom-1.mp3";
                break;
            
        case "a": 
            elementSound = "sounds/tom-2.mp3";
            break;
        
        case "s": 
            elementSound = "sounds/tom-3.mp3";
            break;
        
        case "d": 
            elementSound = "sounds/tom-4.mp3";
            break;
        
        case "j": 
            elementSound = "sounds/crash.mp3";
            break;
        
        case "k": 
            elementSound = "sounds/kick-bass.mp3";
            break;
        
        case "l": 
            elementSound = "sounds/snare.mp3";
            break;
        
        default:
            console.log(character);
    }
        var drumSound = new Audio(elementSound);
        drumSound.play();
}

function buttonAnimation(character){
    var chooseButton = "." + character;
    document.querySelector(chooseButton).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(chooseButton).classList.remove("pressed");
    },100);
}
        
