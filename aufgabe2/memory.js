"use strict";
/* var openCardsDOMElement: HTMLElement;

//EventListener

window.addEventListener("load", function (): void {
    document.querySelector("#own").addEventListener("click", function (): void { chooseWord(true); });
    document.querySelector("#predefined").addEventListener("click", function (): void { chooseWord(false); });
    document.querySelector("#mTimeButton").addEventListener("click", function (): void { chooseMTime(); });
    document.querySelector("#startButton").addEventListener("click", function (): void { setTimer(); });
    openCardsDOMElement = document.querySelector(".tamplate");
});

//choose Settings

function chooseWord(_value: boolean): void {
    if (_value == true) {
        addTamplateInput();
        console.log("own word selected");
    }
    else if (_value == false) {
        console.log("predefined word selected");
    }
    else {
        alert("Fehler bei Festlegung der Einstellungen");
    }
}

function chooseMTime(): void {
    console.log("memorizetime selected");
}

function setTimer(): void {
    console.log("playtime selected");
}

//add Settings

function addTamplateInput (): void {
    var newWord: string = (<HTMLInputElement>document.querySelector("#ownWordInput")).value;
    addTamplate(newWord);

}

function addTamplate (_newWord: string): void {
    let tamplate: HTMLElement = document.createElement("div");
    tamplate.innerHTML = "<p>" + _newWord + "</p>";

    openCardsDOMElement.appendChild(tamplate);

    console.log(_newWord);
}

 */ 
//# sourceMappingURL=memory.js.map