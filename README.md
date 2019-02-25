# Bamazon-CLI-App
This app demonstrates how through a command line Node.js interface you can Create, Read, Update and Delete a MySQL database. 

First, ensure you have the bamazonCustomer.js and package.json is saved to your local repository. Open your command line and run "npm install" to install our dependencies(mysql and inquirer). Next, you will need to connect to your MySQL database. Provide the host, port, user, password, and database where you wish to setup the products table. See here for first time setup of [MySQL](https://www.mysql.com/downloads/) and [MySQL Workbench](https://dev.mysql.com/downloads/workbench/).

![database-setup](assets/images/setup.png)

Included in the repository is bamazon_db.sql file which will provide us the table structure and some sample data. Now we are ready to launch our file. 

![launch-customer](assets/images/launch.png)

Once in the file every item in our products table is listed for the user to choose from. 

![welcome page](assets/images/welcome.png)

Once the user selects an item. The database quantities are updated and a total is provided.

![purchase page](assets/images/purchase.png)

If there isn't enough stock we ensure the purchase can't be completed.
![controls](assets/images/toomany.png)


Thank you for reading and happy coding!