const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router()

router.get("/", function(req, res) {
    res.redirect("/burgers");
  });
  
  router.get("/burgers", function(req, res) {
    burger.selectAll(function(burgerInfo) {
      res.render("index", { burger_info: burgerInfo });
    });
  });
  
  router.post("/burgers/create", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
      res.redirect("/");
    });
  });
  
  router.put("/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
      res.sendStatus(200);
    });
  });
  
  module.exports = router;