"use strict";
window.addEventListener("load", handleload);
function handleload(_event) {
    console.log("init");
    /* let priceBread: number = 3;
    let priceApples: number = 0.3;
    let priceWater: number = 0.4;
    let priceShopping: number = 10;
    let priceMowing: number = 5;
    let priceSquare: number = 0.1; */
    let fieldsets = document.querySelectorAll("fieldset");
    for (let i = 0; i < fieldsets.length; i++) {
        let fieldset = fieldsets[i];
        fieldset.addEventListener("change", handleChange);
    }
}
function handleChange(_event) {
    console.log("handle change");
    drawUnits(_event);
    abc();
}
function drawUnits(_event) {
    let formData = new FormData(document.forms[0]);
    console.log(formData);
    for (let entry of formData) {
        console.log(entry);
    }
    //     let target: HTMLInputElement = <HTMLInputElement>_event.target;
    //     console.log();
    //     if (_event.type == "change")
    //         console.warn("Change: " + target.name + " = " + target.value, _event);
    //     else
    //         console.log("Input: " + target.name + " = " + target.value, _event);
}
//# sourceMappingURL=haushaltshilfe.js.map