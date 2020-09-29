var connection = require("./connection.js")

var orm = {
    selectAll: function (fn) {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) throw err;
            console.log(result);
            fn(result)
        });
    },
    insertOne: function (name, devoured, fn) {
        const query = `INSERT INTO burgers (burger_name, devoured) VALUES ("${name}",${devoured})`
        connection.query(query, function (err, result) {
            if (err) throw err;
            console.log(result, "orm");
            fn(result)
        });
    },
    updateOne: function (id, devoured, fn) {
        console.log("orm.js", id)
        connection.query(`SELECT * FROM burgers WHERE id=${id}`, function (err, result) {
            console.log(result[0])
            const query = `UPDATE burgers SET burger_name = "${result[0].burger_name}", devoured = ${devoured} WHERE id = ${id}`
            connection.query(query, function (err, result) {
                if (err) throw err;
                console.log(result);
                fn(result)
            });
        });
    }
}

module.exports = orm;