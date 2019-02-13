class Person {

  constructor(name = "Anonymous", age=0) {
    this.name = name;
    this.age = age;
  }

  getGretting() {
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

const me = new Person("Fernando", 19);
console.log(me.getDescription());