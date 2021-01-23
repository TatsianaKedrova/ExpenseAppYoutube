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


const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

//VARIABLESadd-income
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

addExpense.addEventListener('click', function() {
    //IF ONE OF THE INPUTS IS EMPTY => EXIT
    if(!expenseTitle.value || !expenseAmount.value) return;
        //SAVE THE ENTRY TO ENTRY LIST
        let expense = {
            type: 'expense',
            title: expenseTitle.value,
            amount: expenseAmount.value
        };
        ENTRY_LIST.push(expense);

        updateUI();
        clearInput([expenseTitle.value, expenseAmount.value]);
    
});
addIncome.addEventListener('click', function() {
    //IF ONE OF THE INPUTS IS EMPTY => EXIT
    if(!incomeTitle.value || !incomeAmount.value) return;
        //SAVE THE ENTRY TO ENTRY LIST
        let income = {
            type: 'income',
            title: incomeTitle.value,
            amount: incomeAmount.value
        };
        ENTRY_LIST.push(income);

        updateUI();
        clearInput([incomeTitle.value, incomeAmount.value]);

});

//HELPERS(FUNCTIONS)
function updateUI() {
    income = calculateTotal("income", ENTRY_LIST);
    outcome = calculateTotal("expense", ENTRY_LIST);
    balance = calculateBalance(income,outcome);

    //UPDATE UI
    clearElement( [expenseList, incomeList, allList] );

    //DETERMINE SIGN ( + or - ) OF BALANCE
    let sign = (income >= outcome) ? "$" : "-$";

    ENTRY_LIST.forEach( entry => {
        if( entry.type === "expense" ) {
            showEntry(expenseList, entry.type, entry.title, entry.amount, index);
        }else if( entry.type === "income" ) {
            showEntry(incomeList, entry.type, entry.title, entry.amount, index);
            } 
            showEntry(allList, entry.type, entry.title, entry.amount, index);
    });
}

function showEntry(list, type, title, amount, id) {
    
}

function clearElement(elements) {
    elements.forEach( element => {
        element.innerHTML = "";
    });
}

function calculateTotal(type, list) {
    let sum = 0;

    list.forEach(entry => {
        if(entry.type === type) {
            sum += entry.amount;
        }
    });
    return sum;
}

function calculateBalance(income, outcome) {
    return income - outcome;
}

function clearInput(inputs) {
    inputs.forEach(input => {
        input.value = '';
    });
}


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

