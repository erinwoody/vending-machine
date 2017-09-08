var express = require("express");
var itemRouter = express.Router();
var Item = require("../models/items");

itemRouter
    .route("/tmp")
    .get(function (req, res, next) {
        console.log("GOT HERE");
        Item.find()
            .then(function (foundItems) {
                console.log('foundItems: ', foundItems);

                res.send(foundItems);
            })
            .catch(function (err) {
                res.status(500).send(err);
            });
    })

    .post(function (req, res) {
        let newItem = new Item(req.body);
        newItem.save()
            .then(function (savedItem) {
                res.json(savedItem);
            })
            .catch(function (err) {
                res.status(500).send(err);
            })
    });



module.exports = itemRouter;