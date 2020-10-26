// File system
const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err) {
//         throw err
//     }
//
//     console.log('Папка создана')
//
// })

const filePath = path.join(__dirname, 'test', 'text.txt')
fs.writeFile(filePath, 'Hello NodeJS', err => {
    if (err) {
        throw err
    }
    console.log('File is created')
})

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
    console.log(content)
    // Старый способ чтения из файла - если без указания 'utf-8'
    // const data = Buffer.from(content); // Content тут просто бинарник
    // console.log('Content:', data.toString());
    }
)