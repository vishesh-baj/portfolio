class Person {
  constructor(userName, age, country) {
    this.userName = userName;
    this.age = age;
    this.country = country;
  }

  greetUser = () => console.log(`${this.userName}, Welcome!`);
  checkEligiblity = () => (this.age >= 18 ? true : false);

  get countryStr() {
    return `${this.country} is selected`;
  }
}


