"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////

// ? DISPLAY MOVEMENTS IN MOVEMENTS CONTAINER
const displayMovements = (movements) => {
  // **reseting the static html in movements container

  containerMovements.innerHTML = "";
  // ** looping through movements array inside the account object and adding html to it
  movements.forEach((movement, index) => {
    // ** checking if type of movement is deposit or withdrawal
    const type = movement > 0 ? "deposit" : "withdrawal";

    // ** HTML to be added
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${movement}</div>
        </div>`;

    // ** Method on movements container to add the html
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

// ? CALCULATE AND PRINT BALANCE

const calcDisplayBalance = (movements) => {
  const balance = movements.reduce((cur, mov) => cur + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

// ? CREATE SUMMERY

const calcDisplaySummery = (movements) => {
  const incomes = movements
    .filter((movement) => movement > 0)
    .reduce((accumulator, deposit) => accumulator + deposit, 0);

  const outgoings = movements
    .filter((movement) => movement < 0)
    .reduce((accumulator, outgoing) => accumulator + Math.abs(outgoing), 0);

  const interest = movements
    .filter((movement) => movement > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((interest, i, arr) => interest >= 1)
    .reduce((accumulator, curr) => accumulator + curr, 0);

  labelSumIn.textContent = `${incomes} €`;
  labelSumOut.textContent = `${outgoings} €`;
  labelSumInterest.textContent = `${interest} €`;
};

calcDisplaySummery(account1.movements);

// ? CREATE USERNAMES

const createUsernames = (accounts) => {
  accounts.forEach((account) => {
    const username = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => {
        return name[0];
      })
      .join("");
    account.username = username;
  });
};

createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eoruToUsd = 1.1;

const usd = movements.map((mov) => eoruToUsd * mov);

const deposits = movements.filter((mov) => mov > 0);
const withdrawls = movements.filter((mov) => mov < 0);

console.log(deposits, withdrawls);
const balance = movements.reduce((acc, curr, idx, arr) => {
  return acc + curr;
}, 0);
console.log(balance);
