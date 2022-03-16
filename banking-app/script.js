"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

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
const displayMovements = (account, sort = false) => {
  // **reseting the static html in movements container

  containerMovements.innerHTML = "";

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;
  // ** looping through movements array inside the account object and adding html to it

  movs.forEach((movement, index) => {
    // ** checking if type of movement is deposit or withdrawal
    const type = movement > 0 ? "deposit" : "withdrawal";
    const date = new Date(account.movementsDates[index]);
    const _month = date.getMonth() + 1;
    const _date = date.getDate();
    const _year = date.getFullYear();

    const dateStr = `${_date}/${_month}/${_year}`;

    // ** HTML to be added
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__date">${dateStr}</div>
          <div class="movements__value">${movement}</div>
        </div>`;

    // ** Method on movements container to add the html
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// ? CALCULATE AND PRINT BALANCE
const calcDisplayBalance = (account) => {
  account.balance = account.movements.reduce((cur, mov) => cur + mov, 0);

  labelBalance.textContent = `${account.balance} EUR`;
};

// ? CREATE SUMMERY
const calcDisplaySummery = (account) => {
  const incomes = account.movements
    .filter((movement) => movement > 0)
    .reduce((accumulator, deposit) => accumulator + deposit, 0);

  const outgoings = account.movements
    .filter((movement) => movement < 0)
    .reduce(
      (accumulator, outgoing) => Math.trunc(accumulator + Math.abs(outgoing)),
      0
    );

  const interest = account.movements
    .filter((movement) => movement > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((interest) => interest >= 1)
    .reduce((accumulator, curr) => Math.trunc(accumulator + curr), 0);

  // ** reflect values in DOM
  labelSumIn.textContent = `${incomes} €`;
  labelSumOut.textContent = `${outgoings} €`;
  labelSumInterest.textContent = `${interest} €`;
};

// ? CREATE USERNAMES
const createUsernames = (accounts) => {
  accounts.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => {
        return name[0];
      })
      .join("");
  });
};

const displayDate = () => {
  const currentDate = new Date();
  const dateStr = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}, ${currentDate.getHours()}:${currentDate.getMinutes()}`;
  labelDate.textContent = dateStr;
};

// ? UPDATE UI
const updateUI = (account) => {
  // Display movements
  displayMovements(account);

  // Display balance
  calcDisplayBalance(account);

  // Display summary
  calcDisplaySummery(account);

  // Display Date
  displayDate();
};

createUsernames(accounts);

// ? EVENT HANDLERS
let currentAccount;

// ! FAKE ALWAYS LOGIN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 1;

// ** LOGIN EVENT
btnLogin.addEventListener("click", (e) => {
  // ** Prevents page to reload
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and a welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = "1";

    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = "";

    updateUI(currentAccount);
  }
});

// ? TRANSFER MONEY
btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  inputTransferTo.value = inputTransferAmount.value = "";
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);
  }
});

// ? GET LOAN
btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = +inputLoanAmount.value;
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    console.log(currentAccount.movements);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

// ? CLOSE ACCOUNT
btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (account) => account.username === currentAccount.username
    );

    accounts.splice(index, 1);
    // Reset UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

// ? SORTING
let sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

//  ? WORKING WITH NUMBERS
// Conversion short hand
// console.log(+"23");

// // Parsing

// console.log(Number.parseInt("92px", 10));
// console.log(Number.parseFloat("0.23px"));

// console.log(Number.isNaN(+"20X"));

// // ** Best way to check if something is a number
// console.log(Number.isFinite("20"));
// console.log(Number.isFinite(Infinity));

// // _____________________BIGINT_____________________

// // ? BIG INT
// const biggestNum = console.log(2 ** 53 - 1);
// // Maximum number js can represent accurately
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(393848173498130493284093489043092334234243n);
// // use only for smaller numbers
// console.log(BigInt(324234234));
// // Can do operations with same bigInt values
// console.log(4893902840932409823094n * 1002100n);

// // ** Cannot mix binInt and other number types
// const huge = 2093203918230912931n;
// const num = 23;
// console.log(huge + BigInt(huge));

// // ? Divisions
// // ** Returns closest bigInt with no decimal part
// console.log(10n / 3n); //3n

// _____________________DATES-TIME_____________________

// Create Date
// const now = new Date();
// console.log(now);

// console.log(new Date("Mar 15 2022 23:57:43"));
// // Not good idea, unreliable unless string is created by js
// console.log(new Date("December 24,2025"));

// //
// console.log(new Date(account1.movementsDates[0]));

// //  Y/M/DT/HR/MN/SC
// console.log(new Date(2037, 10, 19, 23, 5));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// DATE METHODS

// const future = new Date(2037, 10, 19, 23);
// // To get year of date
// console.log(future.getFullYear());
// // To get month - 0 based
// console.log(future.getMonth());
// // To get Date
// console.log(future.getDate());
// // To get Day of week, 0 based
// console.log(future.getDay());

// // Other methods
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());

// // nicely formatted string
// console.log(future.toISOString());

// // Time stamp
// console.log(future.getTime());

// console.log(new Date(Date.now()));

// future.setFullYear(2040);
// console.log(future);

const future = new Date(2037, 10, 19, 23);
console.log(+future);

const daysPased = (date1, date2) => date2 - (date1 / 1000) * 60 * 60 * 24;

console.log(daysPased(new Date(2037, 10, 19, 23), new Date(2023, 10, 19, 23)));
