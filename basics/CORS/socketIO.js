const http = require('http');
const {Server} = require('socket.io');

const httpServer = http.createServer((req, res) => {
    res.end("Hello from Socket IO");
});

const io = new Server(httpServer, {
    cors: {
        origin: '*',
       methods: ['GET', 'POST'],
       allowedHeaders: ['Content-Type', 'Authorization']
    }
});

httpServer.listen(8080, () => {
    console.log("Server listening in port 8080");
})