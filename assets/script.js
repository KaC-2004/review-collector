let stars = document.querySelectorAll(".stars");
let selectedRating = 0;

function color(n) {
    selectedRating = n;
    stars.forEach((star, i) => {
        star.style.color = i < n ? "#189f0e" : "#ffffff";
    });
}
let nameElement = document.getElementById("user-box");
let reviewElement = document.getElementById("review-box");
let ulElement = document.getElementById("reviews");

nameElement.value = "";
reviewElement.value = "";
selectedRating = 0;
stars.forEach((star) => (star.style.color = "#ffffff"));

function createReview() {
    let nameValue = nameElement.value.trim();
    let reviewValue = reviewElement.value.trim();

    if (nameValue === "" || reviewValue === "" || selectedRating === 0) {
        alert("Please enter the required details and select a rating.");
        return;
    }

    let date = new Date();
    let day = date.getDate().toString().padStart(2, "0");
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let year = date.getFullYear();
    let thisDay = `${day}/${month}/${year}`;

    let li = document.createElement("li");

    let nameSpan = document.createElement("span");
    nameSpan.innerText = nameValue;
    nameSpan.classList.add("nameSpan");
    li.appendChild(nameSpan);

    let starsSpan = document.createElement("span");
    starsSpan.innerHTML = "★".repeat(selectedRating) + "☆".repeat(5 - selectedRating);
    starsSpan.classList.add("starsSpan");
    li.appendChild(starsSpan);

    let reviewPara = document.createElement("p");
    reviewPara.innerText = reviewValue;

    li.appendChild(reviewPara);

    let dateDiv = document.createElement("div");
    dateDiv.innerText = thisDay;
    dateDiv.id = "date";
    li.appendChild(dateDiv);

    ulElement.appendChild(li);

    nameElement.value = "";
    reviewElement.value = "";
    selectedRating = 0;
    stars.forEach((star) => (star.style.color = "#ffffff"));
}
