const change = document.getElementById("rabbit");

change.addEventListener("click", (event) => {
    event.target.style.background = "red";
    event.target.style.color = "white";
});

const change2 = document.getElementById("city");
change2.addEventListener("click", (event) => {
    event.target.style.background = "purple";
    event.target.style.color = "black";
});

const change3 = document.getElementById("creeper");
change3.addEventListener("click",(event) => {
    event.target.style.background = "green";
    event.target.style.color = "white";
});

const change4 = document.getElementById("kayaking");
change4.addEventListener("click", (event) =>{
    event.target.style.background = "yellow";
    event.target.style.color = "grey";
});