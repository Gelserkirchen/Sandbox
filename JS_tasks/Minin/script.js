const MyNumber = 55
console.log(localStorage.getItem('number'));

// localStorage.setItem('number', MyNumber)
// console.log(localStorage.getItem('number'));


// let requestUrl = 'https://jsonplaceholder.typicode.com/users';

// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.responseType = 'json';
//     xhr.setRequestHeader('Content-Type', 'application/json');
    
//     xhr.onload = () => {
//         if (xhr.status >= 400) {
//             console.error(xhr.response);
//         } else {
//             console.log(xhr.response);
//         }
//     }
    
//     xhr.onerror = () => {console.log('error')}
//     xhr.send(JSON.stringify(body));

//     })
// }

// // sendRequest('GET', requestUrl)
// // .then(data => console.log(data))
// // .catch(err => console.log(err))

// sendRequest('POST', requestUrl, {
//     name: 'Andrei', 
//     age: 23
// })
// .then(data => console.log(data))
// .catch(err => console.log(err))


// const people = [
//     {name: 'Andrew', age: 28, budget: 34500},
//     {name: 'Egor', age: 29, budget: 34500},
//     {name: 'Sergei', age: 30, budget: 34500},
//     {name: 'Kostya', age: 31, budget: 34500},
//     {name: 'Radmir', age: 32, budget: 34500},
//     {name: 'Igor', age: 33, budget: 34500}
// ];


// For of
// for (let people of people) {
//     console.log(people)
// }

// forEach
// people.forEach(people => console.log(people.name))

// Map
// let arrayOfNames = people.map(people => `The array is ${people.name}`)
// console.log(arrayOfNames)

// Filter
// let finalArray = people.filter(people => people.age >= 30)
// console.log(finalArray)

// Reduce
// let finalResult = people.reduce((sum, people) => sum + people.budget, 0)
// console.log(finalResult)

// Find
// let find = people.find(people => people.budget === 34500)
// console.log(find)

// Find index
// let find = people.findIndex(people => people.budget === 34500)
// console.log(find)



// const withDefaultValue = (target, defaltValue = 0) => {
//     return new Proxy(target, {
//         get: (obj, prop) => (prop in obj ? obj[prop] : defaltValue)
//     })
// }


// const position = withDefaultValue({
//     x: 24,
//     y: 42
// }, 0)


// // Hidden properties
// const withHiddenProps = (target, prefix = '_') => {
//     return new Proxy(target, {
//         has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
//         ownkeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)), 
//         get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
//     })
// }

// const data = withHiddenProps({
//     name: 'Andrei',
//     age: 25,
//     _uid: '123123'
// })

// const IndexedArray = new Proxy(Array, {
//     construct(target, [args]){
//         const index = {}
//         args.forEach(item => (index[item.id] = item))
//         return new Proxy(new target(...args), {
//             get(arr, prop){
//                 switch (prop) {
//                     case 'push': 
//                         return item => {
//                             index[item.id] = item
//                             arr[prop].call(arr, item)
//                         }
//                     case 'findById':
//                         return id => index[id]
//                     default: return arr[prop]
//                 }
//             }
//         })
//     }
// })

// const users = new IndexedArray([
//     {id: 11, name: 'Andrew', job: 'Fullstack', age: 25},
//     {id: 22, name: 'Andrew', job: 'Student', age: 25},
//     {id: 33, name: 'Andrew', job: 'Backend', age: 23},
//     {id: 44, name: 'Andrew', job: 'Teacher', age: 24}
// ])




// const person = {
//     name: 'Andrew',
//     age: 25,
//     job: 'Fullstack'
// }

// const op = new Proxy(person, {
//     // prop - ключ для target (person)
//     get(target, prop) {
//         console.log(`Target ${target}`);
//         console.log(`Prop ${prop}`);
//         console.log(`Getting prop ${prop}`)
//         return target[prop]
//     },
//     set(target, prop, value) {
//         if (prop in target) {
//             target[prop] = value
//         } else {
//             throw new Error(`No ${prop} field in target`)
//         }
//     },
//     has(target, prop){
//         return ['age', 'name', 'job'].includes(prop)
//     },
//     deleteProperty(target, prop){
//         console.log(`deleting ... ${prop}`)
//         delete target[prop];
//         return true
//     }
// })

// const log = text => `Log: ${text}`;

// const fp = new Proxy(log, {
//     apply(target, thisArg, args) {
//         console.log('calling fp...');
//         return target.apply(thisArg, args).toUpperCase();
//     }
// })

// //
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }

// const PersonProxy = new Proxy(Person, {
//     construct(target, args){
//         console.log('Construct...')
//         return new Proxy(new target(...args), {
//             get(t, prop){
//                 console.log(`Getting prop ${prop}`);
//                 return t[prop]
//             }
//         });
//     }
// });

// const p = new PersonProxy('Maxim', 30);



// class Shape {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }

//     hide() {
//         this.$el.style.display = 'none';
//     }

//     show(){
//         this.$el.style.display = 'block';
//     } 
// }

// class Square extends Shape {
//     constructor(options) {
//         super(options.selector);
//         this.$el.style.width = this.$el.style.height = options.size + 'px';
//         this.$el.style.background = options.color;
//     }
// }


// const box1 = new Square(
//     {
//         selector: '#box1',
//         size: 50,
//         color: 'red'
//     }
// )





// const array = [1, 2, 3, 4, 5, 6, 7];

// function multiply(array, numberThatMultiplyArray) {
//     return array.map(function(i){
//         return i * numberThatMultiplyArray;
//     })
// }

// Array.prototype.multiplyThroughPrototype = function(numberMultArray) {
//     return this.map(function(elementOfThis){
//         return elementOfThis * numberMultArray;
//     })
// }


// function logPerson() {
//     return `name: ${this.name}, age: ${this.age}`
// }

// const person1 = {name: "Michail", age: 26, sex: 'male'};
// const person2 = {name: "Irina", age: 29, sex: 'female'};

// function bind(person, logPerson){
//     return function(...args) {
//         return logPerson.apply(person, args)
//     }
// }

// bind(person1, logPerson)();
// bind(person2, logPerson)();

