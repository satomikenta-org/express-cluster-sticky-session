const express = require('express');
const router = express.Router();
const cluster = require('cluster'); // for testing.


router.get('/', (req, res) => {
    // some auth logic here.
    console.log('Worker No: ', cluster.worker.id);
    req.session.user_id = "12345";
    res.json({msg: "You are Authenticated!"});
});


module.exports = router;