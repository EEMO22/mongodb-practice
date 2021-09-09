const express = require("express");
const router = express.Router();
const { ObjectId } = require('mongodb');

function APIRouterOne(app) {
    router.get("/friends/:id.json", (req, resp) => {
        let id = req.params.id;
        let db = app.get("db");
        db.collection("friends").findOne({_id: ObjectId(id)})
        .then(result => {
            resp.status(200)
            .header({"Content-Type": "text/json;charset=UTF-8"})
            .json(result);
        })
    })

    return router;
}

module.exports = APIRouterOne;