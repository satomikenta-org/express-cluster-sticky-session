const express = require('express');
const router = express.Router();
const cluster = require('cluster'); // for testing.

router.get('/', (req, res) => {
    console.log('Worker No: ', cluster.worker.id);
    const userID = req.session.user_id
    res.send({msg: userID});
});


module.exports = router;