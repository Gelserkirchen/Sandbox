// const chalk = require('chalk');
// const text = require('./data');
// console.log(chalk.blue(text));

const http = require('http'); // в скобках библиотека
const fs = require('fs');
const path = require('path');

// обращаемся к модулю и вызываем метод
// req - получаем информацию которую отправляет клиент на сервер
// res - ответ сервера
const server = http.createServer((req, res)=> {

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath);
    let contentType = 'text/html'

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }

    if (!ext) { filePath += '.html' }

    fs.readFile(filePath, (err, content) => {
        if(err) {

        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content)
        }
    })



    // res.end(data);
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data)=>{
    //         if (err) {
    //             throw err
    //         } else {
    //             res.writeHead(200, {
    //                 'Content-Type': 'text/html'
    //             })
    //             res.end(data);
    //         }
    //     })
    // } else if (req.url === '/content') {
    //     fs.readFile(path.join(__dirname, 'public', 'content.html'), (err, data) => {
    //             if (err) {
    //                 throw err
    //             } else {
    //                 res.writeHead(200, {
    //                     'Content-Type': 'text/html'
    //                 })
    //                 res.end(data);
    //             }
    //         }
    //     )
    // }

})



const PORT = process.env.PORT || 3000

server.listen(PORT, ()=> {
    console.log(`server has been started on ${PORT}`)
})