


const stepOne = document.querySelector(".one");
const stepTwo = document.querySelector(".two");
const stepTree = document.querySelector(".tree");
const container = document.querySelector(".container");
const containe = document.querySelector(".containe");
const contain = document.querySelector(".contain");
const f = document.querySelector(".f");
const ff = document.querySelector(".ff");
const back = document.querySelector(".back");
const forw = document.querySelector(".forw");
const forw1 = document.querySelector(".forw1");
const stepUn = document.querySelector(".un");
const stepDeux = document.querySelector(".deux");
const stepTrois = document.querySelector(".trois");
const stepAb = document.querySelector(".ab");
const stepAv = document.querySelector(".av");
const stepAd = document.querySelector(".ad");

// faire revenir à la page 1

stepOne.addEventListener("click", () =>{
    container.style.display = "flex";
});
stepTwo.addEventListener("click", () => {
    containe.style.display = "flex";
    console.log("stepTwo");

    container.style.display = "none";
});

// container1.style.display = "none";
stepTree.addEventListener("click", () =>{
    contain.style.display = "flex";
    container.style.display = "none";
});

stepUn.addEventListener("click", () =>{
    container.style.display = "flex";
    containe.style.display = "none";
    contain.style.display = "none";
});
stepDeux.addEventListener("click", () => {
    containe.style.display = "flex";
    console.log("stepTwo");

    container.style.display = "none";
});

// container1.style.display = "none";
stepTrois.addEventListener("click", () =>{
    contain.style.display = "flex";
    container.style.display = "none";
    containe.style.display = "none";
});


stepAb.addEventListener("click", () =>{
    container.style.display = "flex";
    containe.style.display = "none";
    contain.style.display = "none";
});
stepAv.addEventListener("click", () => {
    containe.style.display = "flex";
    console.log("stepTwo");

    container.style.display = "none";
    contain.style.display = "none";
});

// container1.style.display = "none";
stepAd.addEventListener("click", () =>{
    contain.style.display = "flex";
    container.style.display = "none";
    containe.style.display = "none";
});

// btn.addEventListener("click", () =>{
//     contain.style.display = "flex";
//     container.style.display = "none";
// });

// bu.addEventListener("click", () =>{
//     container.style.display = "flex";
//     containe.style.display = "none";
// });
// but.addEventListener("click", () =>{
//     contain.style.display = "flex";
//     container.style.display = "none";
// });







ff.addEventListener("click", () =>{
    containe.style.display = "flex";
    container.style.display = "none";
    contain.style.display = "none";
    console.log("fkkk");
});


back.addEventListener("click", () =>{
    container.style.display = "flex";
    containe.style.display = "none";
    contain.style.display = "none";
    console.log("fkkk");
});

forw.addEventListener("click", () =>{
    containe.style.display = "flex";
    container.style.display = "none";
    contain.style.display = "none";
    console.log("fkkk");
});
forw1.addEventListener("click", () =>{
    contain.style.display = "flex";
    container.style.display = "none";
    containe.style.display = "none";
    console.log("fkkk");
});
