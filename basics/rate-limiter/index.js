/*

Rate limiter:

1. Per user serve only 10 requests
2. If more than 10 requests received, then block the user for next 2 mins

Questions:
1. How to identify different set of users

*/

const express = require('express');

const app = express();

app.use(express.json());

const ip_count_map = new Map();

app.get('/', (req, res) => {
    res.send("Hello from server");
});

app.get('/profile', (req, res) => {
    if(!ip_count_map.has(req.ip)){
        ip_count_map.set(req.ip, {count: 1, date: null});
    } else {
        ip_count_map.set(req.ip, {count: ip_count_map.get(req.ip).count+1, date:  ip_count_map.get(req.ip).date});
    }

    // console.log(req.ip, " => ", ip_count_map.get(req.ip));

    const {count, date} = ip_count_map.get(req.ip);
    // console.log("count = ",JSON.stringify(count), " date = ", date);
    if(count > 10){
        if(!date){
            const barredTime = new Date();
            // console.log("barredTime...", barredTime);
            ip_count_map.set(req.ip, {count: count, date: barredTime});
            return  res.status(403).send("Barred from using this endpoint");
        } else {
            const now = new Date();
            // console.log("The difference....", (now - date));

            if((now - date) > 1000 * 10){
                ip_count_map.set(req.ip, {count: 1, date: null});
                return res.send("Profile page");
            } else {
                return  res.status(403).send("Barred from using this endpoint");
            }
        }
    } else {
        return res.send("Profile page");
    }

})

app.listen(8080, () => {
    console.log("Server started and listening in port 8080");
})