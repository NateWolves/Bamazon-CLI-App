CREATE database bamazon;

use bamazon; 
CREATE TABLE products(
	item_id integer auto_increment,
    product_name VARCHAR(40),
    department_name VARCHAR(40),
    price decimal(15,2),
    stock_quantity integer(10),
    PRIMARY KEY (item_id)
	);
    
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("AA Batteries", "Electronics", 4.25, 250);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Tennis Shoes", "Apparel", 52.50, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Toothbrush", "Personal Care", 2.25, 150);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Shampoo", "Personal Care", 4.75, 80);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Tablet", "Electronics", 189.99, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Lord of the Rings", "Books", 8.90, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Rolex Watch", "Apparel", 1500.00, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Picture Frame", "Household Goods", 6.70, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Broom", "Household Goods", 12.99, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("American Gods", "Books", 8.99, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Gloves", "Apparel", 12.00, 60);

SELECT * FROM products;