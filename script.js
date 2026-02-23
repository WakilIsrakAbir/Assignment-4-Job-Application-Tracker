// for empty part
const emptyState = document.getElementById("emptyState");

// for last work
let currentStatus = "all";
// -----

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
//--------


// get from html file - for button toggoling
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// function for button toggoling
function toggleStyle(id){
    // button toggling start
    allFilterBtn.classList.remove("bg-blue-500", "text-white");
    interviewFilterBtn.classList.remove("bg-blue-500", "text-white");
    rejectedFilterBtn.classList.remove("bg-blue-500", "text-white");


    allFilterBtn.classList.add("bg-white", "text-black");
    interviewFilterBtn.classList.add("bg-white", "text-black");
    rejectedFilterBtn.classList.add("bg-white", "text-black");

    const selected = document.getElementById(id);
    selected.classList.add("bg-blue-500", "text-white");
    selected.classList.remove("bg-white", "text-black");
    // button toggleing done

    // for last work
    currentStatus = id;

    // logic for => when i clicked a button another two is hidden
    if (id == "interview-filter-btn") {
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderInterview();

        // for empty part
        emptyState.classList.toggle("hidden", interviewList.length !== 0);
        total2.innerText = interviewList.length;
    }
    else if (id == "all-filter-btn") {
        allCardSection.classList.remove("hidden");
        filterSection.classList.add("hidden");

        // for empty part
        const totalJobs = allCardSection.children.length;
        emptyState.classList.toggle("hidden", totalJobs !== 0);
        total2.innerText = totalJobs;
    }
    else if (id == "rejected-filter-btn") {
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderRejected();

        // for empty part
        emptyState.classList.toggle("hidden", rejectedList.length !== 0);
        total2.innerText = rejectedList.length;
    }
}
// ----------

// ----Daligation Part----
const mainContainer = document.querySelector("main");
// here we add new object
const filterSection = document.getElementById("filtered-section");

// intervier function after click the button
mainContainer.addEventListener("click", function (event){

    // what happens after click in Interview button
    if(event.target.classList.contains("interview-btn")){

        const parentNode = event.target.parentNode.parentNode;

        const company = parentNode.querySelector(".company").innerText;
        const role = parentNode.querySelector(".role").innerText;
        const location = parentNode.querySelector(".location").innerText;
        const time = parentNode.querySelector(".time").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        const notes = parentNode.querySelector(".notes").innerText;

        parentNode.querySelector(".status").innerText = "Interview";

        const info = { 
        company, 
        role, 
        location, 
        time, 
        salary, 
        status: "Interview", 
        notes 
        };
        
        const exist = interviewList.find(item => item.company == info.company);

        if (!exist){
            interviewList.push(info);
        } 

        // jokhon interview button e click korbo reject list theke ber kore dibo
        rejectedList = rejectedList.filter(item => item.company != info.company);

        calculateCount();


        // for last work
        if (currentStatus == "rejected-filter-btn"){
            renderRejected();
        }
    }
    // what happens after click in Rejected button
    else if (event.target.classList.contains("rejected-btn")) {

        const parentNode = event.target.parentNode.parentNode;

        const company = parentNode.querySelector(".company").innerText;
        const role = parentNode.querySelector(".role").innerText;
        const location = parentNode.querySelector(".location").innerText;
        const time = parentNode.querySelector(".time").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        const notes = parentNode.querySelector(".notes").innerText;

        parentNode.querySelector(".status").innerText = "Rejected";

        const info = { 
        company, 
        role, 
        location, 
        time, 
        salary, 
        status: "Rejected", 
        notes 
        };
        
        const exist = rejectedList.find(item => item.company == info.company);

        if (!exist){
            rejectedList.push(info);
        }
         
        // jokhon reject button e click korbo interview list theke ber kore dibo
        interviewList = interviewList.filter(item => item.company != info.company);

        calculateCount();


        // for last work
        if (currentStatus == "interview-filter-btn") {
            renderInterview();
        }
    }

    // what happens after click in delete button
    else if (event.target.classList.contains("btn-delete")) {

        const parentNode = event.target.parentNode.parentNode;

        const company = parentNode.querySelector(".company").innerText;

        interviewList = interviewList.filter(item => item.company != company);
        rejectedList = rejectedList.filter(item => item.company != company);

        parentNode.remove();
        calculateCount();
        calculateCount2();

        if (currentStatus == "all-filter-btn") {
            const totalJobs = allCardSection.children.length;
            emptyState.classList.toggle("hidden", totalJobs !== 0);
            total2.innerText = totalJobs;
        }

        if (currentStatus == "interview-filter-btn"){
            emptyState.classList.toggle("hidden", interviewList.length !== 0);
             total2.innerText = interviewList.length;
            renderInterview();
        }
            
        if (currentStatus == "rejected-filter-btn"){ 
            emptyState.classList.toggle("hidden", rejectedList.length !== 0);
            total2.innerText = rejectedList.length;
            renderRejected();
            return;
        }
    }
});




// Rendering Part
function renderInterview() {
    filterSection.innerHTML = "";
    for (let job of interviewList){
        let div = document.createElement("div");
        // to confirm where we add
        div.className = "card bg-slate-100 flex justify-between border p-5 rounded-lg";

        div.innerHTML = `
      <div class="space-y-6">
        <div>
          <p class="company text-4xl font-semibold">${job.company}</p>
          <p class="role text-lg text-gray-700">${job.role}</p>
        </div>

        <div class="flex gap-5 flex-wrap">
          <p class="location bg-gray-100 p-1 rounded-sm px-3">${job.location}</p>
          <p class="time bg-gray-100 p-1 rounded-sm px-3">${job.time}</p>
          <p class="salary bg-gray-100 p-1 rounded-sm px-3">${job.salary}</p>
        </div>

        <p class="status font-semibold w-fit px-2.5 py-1 bg-blue-100">${job.status}</p>
        <p class="notes text-gray-700">${job.notes}</p>

        <div class="flex gap-4 flex-wrap">
            <button class="interview-btn bg-slate-100 font-bold px-5 py-2 text-green-500 rounded-md cursor-pointer border-2 border-green-500">Interview</button>
            <button class="rejected-btn bg-slate-100 px-5 py-2 text-red-500 font-bold rounded-md cursor-pointer border-2 border-red-500">Rejected</button>
        </div>
      </div>

      <div>
        <i class="btn-delete cursor-pointer fa-solid fa-trash-can"></i>
      </div>
    `;

    filterSection.appendChild(div);

    }
}

function renderRejected() {
    filterSection.innerHTML = "";
    for (let struggle of rejectedList){
        let div = document.createElement("div");
        // to confirm where we add
        div.className = "card bg-slate-100 flex justify-between border p-5 rounded-lg";

        div.innerHTML = `
      <div class="space-y-6">
        <div>
          <p class="company text-4xl font-semibold">${struggle.company}</p>
          <p class="role text-lg text-gray-700">${struggle.role}</p>
        </div>

        <div class="flex gap-5 flex-wrap">
          <p class="location bg-gray-100 p-1 rounded-sm px-3">${struggle.location}</p>
          <p class="time bg-gray-100 p-1 rounded-sm px-3">${struggle.time}</p>
          <p class="salary bg-gray-100 p-1 rounded-sm px-3">${struggle.salary}</p>
        </div>

        <p class="status font-semibold w-fit px-2.5 py-1 bg-blue-100">${struggle.status}</p>
        <p class="notes text-gray-700">${struggle.notes}</p>

        <div class="flex gap-4 flex-wrap">
            <button class="interview-btn bg-slate-100 font-bold px-5 py-2 text-green-500 rounded-md cursor-pointer border-2 border-green-500">Interview</button>
            <button class="rejected-btn bg-slate-100 px-5 py-2 text-red-500 font-bold rounded-md cursor-pointer border-2 border-red-500">Rejected</button>
        </div>
      </div>

      <div>
        <i class="btn-delete cursor-pointer fa-solid fa-trash-can"></i>
      </div>
    `;

    filterSection.appendChild(div);

    }
}