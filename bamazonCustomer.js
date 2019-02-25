const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Your password here",
    database: "bamazon"
});

// Connecting to our mysql server and database
connection.connect((err)=> {
    if (err) throw err;
    // running our application functions within our connection to the database

    start(); 

});


function start() {
    console.log(`Welcome to Bamazon! Please have a look at our stock below.
-----------------------------------------------`);
    connection.query("SELECT * FROM products", (err, results) => {
        if (err) throw err;
        for (let i = 0; i < results.length; i++){
        console.log( `Item ID: ${results[i].item_id}, ${results[i].product_name} for $${results[i].price}`);}
    inquirer
        .prompt([
        {
            name: "buy",
            type: "rawlist",
            choices: function() {
                let choiceArray = [];
                for (let i = 0; i < results.length; i++){
                    choiceArray.push(results[i].product_name );
                }
                return choiceArray;
            },
            message: `Which item would you like to purchase?
            `
        },
        {
            name: "amount",
            type: "input",
            message: "How many would you like to buy?",
            validate: function(value){
                if(isNaN(value)=== false){
                    return true;
                }
                return false;
            }
        }
        ])
        .then(function(answer)  {
            // Determining the chosen item in our database
            let chosenItem;
            for(let i = 0; i < results.length; i++){
                if( answer.buy === results[i].product_name){
                chosenItem = results[i];
                }
            };
            if (chosenItem.stock_quantity > parseInt(answer.amount)){
                let total = chosenItem.price * parseInt(answer.amount);
                let newQuantity = chosenItem.stock_quantity - parseInt(answer.amount);
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity:newQuantity
                        },
                        {
                            item_id:chosenItem.item_id
                        }
                    ],
                    function(error){
                        if (error) throw error;
                        console.log(`Your order has been placed. The total price is $${total}`);
                        end();
                    });
            } else {
                console.log("There is insufficient quantity to fulfill your order")
                end();
                };
        });
    })
};



function end() {
    inquirer
    .prompt([
        {
            name: "restart",
            type: "confirm",
            message: "Would you like to continue shopping?"
        },
    ])
    .then((answer)=>{
        if(answer.restart){
            start();
        } else {
            console.log("Thank you for shopping with Bamazon!");
            connection.end();
        }
    })
}

