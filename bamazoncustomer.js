var inquirer = require('inquirer');
var mysql = require('mysql');

// Define the MySQL connection parameters
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: 'La12King14',
    database: 'bamazon_db'
});

// validateInput makes sure that the user is supplying only positive integers for their inputs
function validateInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return 'Please enter a whole non-zero number.';
    }
}

function start() {
    inquirer
        .prompt([
            {
                name: "product",
                type: "input",
                message: "What item would you like to purchase?",
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like?",
            }
        ])
        .then(function (answers) {
            connection.query(
                "SELECT * FROM products WHERE ?",
                {
                    item_id: answers.product
                },
                function (error, res) {
                    if (error) throw error;
                    console.log(res);
                    if (answers.quantity <= res[0].stock_quantity) {
                        let newQuantity = res[0].stock_quantity - answers.quantity
                        let item_id = res[0].item_id
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: newQuantity
                                },
                                {
                                    item_id: item_id
                                }
                            ],
                            function (error, res) {
                                if (error) throw error;
                                console.log(res);
                            }
                        )

                    } else {
                        console.log("insufficient quatity");
                    }
                }










            )
        })
}
start()
