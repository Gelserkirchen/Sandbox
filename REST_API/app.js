const express = require('express');
const path = require('path');
const app = express(); //создаем объект приложения

app.use(express.static(path.resolve()));
app.listen(3000, () => console.log('Server has been started on port 3000...'));
