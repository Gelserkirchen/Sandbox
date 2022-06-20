const person = {
    name: 'Ivan',
    age: 28,
    somePureFunction: function() {
        console.log(`${this.name} + ${this.age}`)
    }
}

person.somePureFunction()