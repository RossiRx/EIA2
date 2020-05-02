var openCardsDOMElement;
//EventListener
window.addEventListener("load", function () {
    document.querySelector("#own").addEventListener("click", function () { chooseWord(true); });
    document.querySelector("#predefined").addEventListener("click", function () { chooseWord(false); });
    document.querySelector("#mTimeButton").addEventListener("click", function () { chooseMTime(); });
    document.querySelector("#startButton").addEventListener("click", function () { setTimer(); });
    openCardsDOMElement = document.querySelector(".tamplate");
});
//choose Settings
function chooseWord(_value) {
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
function chooseMTime() {
    console.log("memorizetime selected");
}
function setTimer() {
    console.log("playtime selected");
}
//add Settings
function addTamplateInput() {
    var newWord = document.querySelector("#ownWordInput").value;
    addTamplate(newWord);
}
function addTamplate(_newWord) {
    var tamplate = document.createElement("div");
    tamplate.innerHTML = "<p>" + _newWord + "</p>";
    openCardsDOMElement.appendChild(tamplate);
    console.log(_newWord);
}
//# sourceMappingURL=memory.js.map