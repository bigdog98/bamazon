-- Create a database called 'Bamazon' and switch into it for this activity --
CREATE DATABASE Bamazon;
USE Bamazon;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Inserted a set of records into the table
  INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
  VALUES(6490, "Pentatonix: Greatest Hits", "Music", 8.50, 10),
        (2670, "Suave Shampoo", "Cosmetics", 3.70, 25),
        (2672, "Suave Conditioner", "Cosmetics", 4.50, 20),
        (8240, "Blue Bell Moolenium Crunch", "Grocery", 7.50, 30),
        (3907, "Nexcare Bandages", "Pharmacy", 2.75, 50),
        (4790, "Alka Seltzer Cold and Flu", "Pharmacy", 6.75, 40),
        (3428, "Louisville Slugger", "Sport", 35.64, 15),
        (9430, "Temptations Cat Treats", "Pet", 4.65, 24),
        (2856, "Mobil 1 Synthetic Motor Oil", "Automotive", 11.20, 26),
        (7418, "George Strait: 50 Number Ones", "Music", 7.50, 36);

        