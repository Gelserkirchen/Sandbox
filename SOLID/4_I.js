// // Interface segregaition principle
//
//
// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//
//   walk() {
//     console.log(`${this.name} can walk`)
//   }
//
//   fly() {
//     console.log(`${this.name} can fly`)
//   }
// }
//
// class Dog extends Animal {
//   constructor(name) {
//     super();
//     this.name = name
//   }
//
//   fly() {
//     return null
//   }
// }
//
// const dog = new Dog("Recks")
// const whale = new Animal("Willi")
//
// dog.walk()
// dog.fly()
//


class Animal {
  constructor(name) {
    this.name = name
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} can swim`)
  }
}

const flyer = {
  fly() {
    console.log(`${this.name} can fly`)
  }
}

const walker = {
  walk() {
    console.log(`${this.name} can walk`)
  }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flyer, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog("Richard")
const whale = new Whale("Willy")
const eagle = new Eagle("Little bird")

dog.walk()
dog.swim()

whale.swim()

eagle.fly()