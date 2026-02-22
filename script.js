// to count total job
let total = document.getElementById("total");
let total2 = document.getElementById("total2");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const allCardSection = document.getElementById("allCards");

// function for count total job
function calculateCount() {
    total.innerText = allCardSection.children.length;
}
calculateCount();

// function for count total job
function calculateCount2() {
    total2.innerText = allCardSection.children.length;
}
calculateCount2();