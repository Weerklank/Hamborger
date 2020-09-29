const orm = require("../config/orm.js")

var burger = {
    selectAll: function(fn) {
        orm.selectAll(function(result) {
            fn(result)
        })
    },
    insertOne: function(name, fn) {
        orm.insertOne(name, false, function(res){
            fn(res)
        })
    },
    updateOne: function(id, fn) {
        console.log("burger.js", id)
        orm.updateOne(id, true, function(res) {
            fn(res)
        })
    }
}

module.exports = burger