const express = require('express');
const cors = require('cors');

// const NodeCache = require("node-cache");
// const cache = new NodeCache({ stdTTL: 100, checkperiod: 100 });
module.exports = async (app) => {
    app.get("/", (req, res) => {
        return res.status(200)
    });
    app.use(express.json());

    app.use(cors());
    // error handling
    // app.use(HandleErrors);

}

