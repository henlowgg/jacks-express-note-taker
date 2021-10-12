const router = require("express").Router();
const fs = require('fs');
const path = require('path');

// when trying to do a get request it should return notes from the database
router.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", function (err, data) {
        const parsedData = JSON.parse(data)
        res.json(parsedData)
    })
})

// the post request is going to add notes to the database hopefully if the stars align
router.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", function (err, data) {
        const parsedData = JSON.parse(data)
        const newData = req.body
        parsedData.push(newData)
        fs.writeFile("./db/db.json", JSON.stringify(parsedData), function (err) {
            res.json(parsedData)
        })
    })
})

module.exports = router