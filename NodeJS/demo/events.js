const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('anything', data => {
    console.log('ON: anything', data);
})

// Эмитим событие - то есть эмулируем событие
emitter.emit('anything', {a: 1});

// Делаем что то с задержкой
setTimeout(() => {
    emitter.emit('anything', {c: 3})
    }, 1500 )


class Dispatcher extends EventEmitter {
    // тут хотелось показать что методы .on и .emit
    // доступны по подписке на EventEmitter

    // создадим метод подписки на событие
    subscribe(eventName, cb) {
        console.log('Subscribe')
        this.on(eventName, cb);
    }

    // выполняем и выводим событие
    dispatch(eventName, data) {
        console.log('Dispatchng...')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe('aa', data => {
    console.log('ON: aa', data);
})

dis.dispatch('aa', {a: 22})

