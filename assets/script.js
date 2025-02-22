
//Star Rating System
let stars = document.getElementsByClassName("stars");
let output = document.getElementById("output");
function color(n){
    for(let i = 0 ; i < 5 ; i++){
        stars[i].style.color = "#ffffff";
    }
    for(let i = 0 ; i < n ; i++){
        stars[i].style.color = "#189f0e";
    }
    output.innerText = "Rating is: " + n + "/5";
}


