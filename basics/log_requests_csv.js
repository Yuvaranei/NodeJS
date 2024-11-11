const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    try{
        const date = new Date();
        const logLine = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}, ${req.method}, ${req.url}\n`;

        if(!fs.existsSync("logs.csv")){
            const heading = `Date, Time, Method, URL\n`
            fs.writeFileSync("logs.csv", heading);
        }
        fs.appendFileSync("logs.csv", logLine);
    
        //Handle all the incoming requests.
        switch(req.url){
            case "/": return res.end("Home page");
            case "/about": return res.end("About page");
            case "/contact": return res.end("Contact page");
            case "/logs": {
                const logs = fs.readFileSync('logs.csv', 'utf-8');
                console.log(logs);
                return res.end(logs);
            }
            default: {
                res.statusCode = 404;
                return res.end("No Page found!");
            }
        }
    } catch(err){
        res.statusCode = 500;
        return res.end("Something went Wrong!");
    }
});

server.listen(8000,() => {
    console.log("Server started and listening in port 8000");
})