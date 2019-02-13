class Person {

  constructor(name = "Anonymous", age=0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.getName()}`;
  }

  getDescription() {
    return `${this.getName()} is ${this.age} years old!`;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    return this.name = name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    return this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  // Override
  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += ` And his major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, location){
    super(name, age);
    this.location = location;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if(this.location) {
      greeting += ` and I'm visiting from ${this.location}.`;
    }

    return greeting;
  }
}

const me = new Student("Fernando", 19, 'Computer Science');
console.log(me.getDescription());

const other = new Traveler("João", 16, "Maceió");
console.log(other.getGreeting());

const girl = new Traveler("Gui", 18);
console.log(girl.getGreeting());