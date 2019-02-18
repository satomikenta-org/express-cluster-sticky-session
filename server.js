const http = require('http');
const cluster = require('cluster'); 
const sticky = require('sticky-session');
const express = require('express');
const session =require('express-session');

const app = express();

app.use(session({
            secret: 'mysupersecret',
            httpOnly: true
         // secure: true,              
         // domain: 'mydomain.com'
         // expires: ....
}));
    
const sessionAuth = (req, res, next) => {
    if (req.session.user_id) {
        console.log('session', req.session);
        next();
    } else {
        res.redirect('/login');
    }
}; 
app.use("/login", require('./routes/login'));
app.use(sessionAuth); // sessionAuth from here.
app.use("/private", require('./routes/private.js'));

const server = http.createServer(app);
sticky.listen(server, 8080); 



