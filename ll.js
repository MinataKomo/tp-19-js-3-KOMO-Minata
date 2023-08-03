// DOM Element
const circles = document.querySelectorAll("circle"),
progressBar = document.querySelector(".indicator"),
buttons = document.querySelectorAll("button");

let currentStep = 1;

// function that updates the current step and updates the DOM
const updateSteps = (e) => {
    // update current step based on the button clicked
    currentStep = e.target.id === "next" ? ++currentStep : --currentStep;
    console.log("currentSteps")
    // loop through all circles and add/remove "active" class based on their index and current step
    circles.forEach((circle, index) => {
        circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
    });
    
    // update progress bar with based on current step
    
    progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100%}%`;
    
};

// add click Event listners to all button
buttons.forEach(button => {
    button.addEventListener("click", updateSteps);
})