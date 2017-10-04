function getRandomArbitary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var randomA = getRandomArbitary(6, 10);
var randomB;
if (randomA === 6) {
    randomB = 5;
} else if (randomA === 7) {
    randomB = getRandomArbitary(4, 6);
} else if (randomA === 8) {
    randomB = getRandomArbitary(3, 6);
} else {
    randomB = getRandomArbitary(2, 6)
}
getRandomArbitary(3, 5);

var answerC = randomA + randomB;

document.getElementById("figureA");
figureA.innerHTML = figureAAboveArrow.innerHTML = randomA;

document.getElementById("figureB");
figureB.innerHTML = figureBAboveArrow.innerHTML = randomB;

document.getElementById("figureC");
figureC.innerHTML = answerC;

document.getElementById("figureAAboveArrow");
document.getElementById("figureBAboveArrow");

document.getElementById("firstArrow");
firstArrow.style.width = 27 * randomA + "px";

document.getElementById("secondArrow");
secondArrow.style.width = 26.5 * randomB + "px";

var inputAVar = document.getElementById("inputA");
inputAVar.oninput = function () {
    if (inputAVar.value == randomA) {
        document.getElementById("secondArrowBlock").style.display = "block";
        inputAVar.style.display = "none";
        figureAAboveArrow.style.display = "block"
        figureA.style.backgroundColor = "#fff";
    }
    else {
        inputAVar.style.color = "red";
        figureA.style.backgroundColor = "orange";
    }
};

var inputBVar = document.getElementById("inputB");
inputBVar.oninput = function () {
    if (inputBVar.value == randomB) {
        inputCVar.style.display = "block";
        figureC.style.display = "none"
        inputBVar.style.display = "none";
        figureBAboveArrow.style.display = "block"
        figureB.style.backgroundColor = "#fff";
        document.getElementById("question").style.display = "none";
    } else {
        inputBVar.style.color = "red";
        figureB.style.backgroundColor = "orange";
    }
};
answerC = randomA + randomB;

var inputCVar = document.getElementById("inputC");
inputCVar.oninput = function () {
    if (inputCVar.value == answerC) {
        inputCVar.style.display = "none";
        figureC.style.display = "block";
        figureC.style.backgroundColor = "#fff";
    } else {
        inputCVar.style.color = "red";
    }
};
