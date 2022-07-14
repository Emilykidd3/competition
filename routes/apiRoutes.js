const router = require('exoress').Router();
const fs = require('fs');
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const util = require('util');
const path = require('path');
const dbPath = path.join(__dirname, '../db/db.json');

function writeDb(res, req) {
    fs.writeFile(dbPath, JSON.stringify(db, null, 2, (err, data) => {
        if (err){
            return res.status(500).send('failed')
        }
        return res.json(req.body)
    }))
}

module.exports = router;