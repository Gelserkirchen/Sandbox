// const array = [1, 2, 3, 4, 5, 6, 7]
// for (var i = 1; i < array.length; i++) {
//   ((j) => {
//     j = i
//     return setTimeout(() => {
//       console.log(`Value of i: ${j}: ${array[j]}`)
//     }, 1500)
//   })(i)
// }


var a = 15;

function foo() {
  var a = 25;

  var result = function() {
    console.log(a)
  }

  result.a = 35;

  return result
}

var bar = foo().bind({a: 45})

bar()