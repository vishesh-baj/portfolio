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
const displayMovements = (movements, sort = false) => {
  // **reseting the static html in movements container

  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  // ** looping through movements array inside the account object and adding html to it
  movs.forEach((movement, index) => {
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
    .reduce((accumulator, outgoing) => accumulator + Math.abs(outgoing), 0);

  const interest = account.movements
    .filter((movement) => movement > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((interest) => interest >= 1)
    .reduce((accumulator, curr) => accumulator + curr, 0);

  // ** reflect values in DOM
  labelSumIn.textContent = `${incomes} €`;
  labelSumOut.textContent = `${outgoings} €`;
  labelSumInterest.textContent = `${interest} €`;
};

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

// ? UPDATE UI
const updateUI = (account) => {
  // Display movements
  displayMovements(account.movements);

  // Display balance
  calcDisplayBalance(account);

  // Display summary
  calcDisplaySummery(account);
};

createUsernames(accounts);

// ? EVENT HANDLERS
let currentAccount;

// ** LOGIN EVENT
btnLogin.addEventListener("click", (e) => {
  // ** Prevents page to reload
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
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
  const amount = Number(inputTransferAmount.value);
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

    updateUI(currentAccount);
  }
});

// ? GET LOAN
btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    console.log(currentAccount.movements);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

// ? CLOSE ACCOUNT
btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
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

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES
