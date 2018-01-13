class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    this.call = function() {
      if (name === "jimmy") {
        return this.addPhone()
      } else {
        return `${this.name} has no phone number saved`
      }

    }

    this.addPhone = function() {
      return `Calling ${this.name} at 55551234..`
    };
    this.birthday = function() {
      return `Wishing Jimmy a happy ${this.age}th birthday!`
    }

  }
};

// remember to write a constructor function
let jimmy = new Person("jimmy", 28);



console.log(jimmy.addPhone("55551234"));
console.log(jimmy.call());
// should say "Calling Jimmy at 55551234..."
console.log(jimmy.birthday());
// should say "Wishing Jimmy a happy 29th birthday!"

let jill = new Person("Jill");
console.log(jill.call());
// should say "Jill has no phone number saved."*/
