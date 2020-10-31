import('lodash').then(_ =>{
   console.log('lodash', _.random(0, 42, true))
})

async function start() {
    return await Promise.resolve('async is working')
    // 'async is working'
}

start().then(console.log)

const unused = 42
console.log(unused);

class Util {
    static id = Date.now()
}

console.log('Util id', Util.id);