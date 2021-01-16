//Select elements
const balanceEl = document.querySelector(".balance .value");
const incomeTotalEl = document.querySelector(".income-total");
const outcomeTotalEl = document.querySelector(".outcome-total");
const incomeEl = document.querySelector("#income");
const expenseEl = document.querySelector("#expense");
const allEl = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#outcome .list");
const allList = document.querySelector("#all .list");
const chartEl = document.querySelector(".chart");

//SELECT BUTTONS
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

//INPUT BUTTONS
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");


const addIncome = document.querySelector(".add-expense");
const incomeTitle = document.getElementById("expense-title-input");
const incomeAmount = document.getElementById("expense-amount-input");

//VARIABLES
let ENTRY_LIST = [];
let balance = 0, income = 0, outcome = 0;

const DELETE = "delete", EDIT = "edit";


//EVENT LISTE.addEventListenersNERS
expenseBtn.addEventListener('click', function(){
    show(expenseEl);
    hide( [incomeEl, allEl] );
    active( expenseBtn);
    inactive( [incomeBtn, allBtn]);
});
incomeBtn.addEventListener('click', function(){
    show(incomeEl);
    hide( [expenseEl, allEl] );
    active( incomeBtn);
    inactive( [expenseBtn, allBtn]);
});
allBtn.addEventListener('click', function(){
    show(allEl);
    hide( [expenseEl, incomeEl] );
    active( allBtn);
    inactive( [expenseBtn, incomeBtn]);
});
//HELPERS(FUNCTIONS)

function show(element) {
    element.classList.remove("hide");
}

function hide(elements) {
   elements.forEach(element => {
       element.classList.add("hide");
   });
        
}
function active(element) {
    element.classList.add("active");
}

function inactive(elements) {
   elements.forEach(element => {
       element.classList.remove("active");
   });
        
}

