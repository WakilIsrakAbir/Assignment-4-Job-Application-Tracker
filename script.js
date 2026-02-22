// if i click interview or rejected object push in those array
let interviewList = [];
let rejectedList = [];
// -------

// get from html file - to count total job
let total = document.getElementById("total");
let total2 = document.getElementById("total2");
// get from html file - to count ttal interview, total rejected 
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
// -------

// get total children from all cards section
const allCardSection = document.getElementById("allCards");

// function for count total job, interview count, rejected count
function calculateCount() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}
calculateCount();

// function for count total job
function calculateCount2() {
    total2.innerText = allCardSection.children.length;
}
calculateCount2();
// --------

const mainContainer = document.querySelector("main");

// here we add new object
const filterSection = document.getElementById("filtered-section");


//--------
// get from html file - for button toggoling
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// function for button toggoling
function toggleStyle(id){
    // button tuggling start
    allFilterBtn.classList.remove("bg-blue-500", "text-white");
    interviewFilterBtn.classList.remove("bg-blue-500", "text-white");
    rejectedFilterBtn.classList.remove("bg-blue-500", "text-white");


    allFilterBtn.classList.add("bg-white", "text-black");
    interviewFilterBtn.classList.add("bg-white", "text-black");
    rejectedFilterBtn.classList.add("bg-white", "text-black");

    const selected = document.getElementById(id);
    selected.classList.add("bg-blue-500", "text-white");
    selected.classList.remove("bg-white", "text-black");
    // button tuggleing done
}