const app = require ('./app')

const port = 3000

app.listen(port, '127.0.0.1', function(){
 console.log(`Сервер запущен на хосте http://localhost:%s`, port)
})