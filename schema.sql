DROP DATABASE IF EXISTS gracefabrics;

CREATE DATABASE gracefabrics;

CREATE TABLE Products (
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY ,
name VARCHAR(50),
type VARCHAR(50),
img1 VARCHAR(1000) NOT NULL,
img2 VARCHAR(1000),
img3 VARCHAR(1000),
description VARCHAR(1000),
price DECIMAL(10,2) NOT NULL,
createdAt TIMESTAMP,
updatedAt TIMESTAMP
) ;

INSERT INTO Products(name, type, img1, description, price, createdAt, updatedAt) VALUES ("Rainbow Stole","Stole", "Image Link Here", "Rainbow stole done in tie-dye", 56.99, now(), now());
INSERT INTO Products(name, type, img1, description, price, createdAt, updatedAt) VALUES ("Easter Stole", "Stole", "Image Link Here", "Easter stole done in tie-dye", 42.99, now(), now());
INSERT INTO Products(name, type, img1, description, price, createdAt, updatedAt) VALUES ("Christmas Stole", "Stole", "Image Link Here", "Christmas stole done in tie-dye", 99.99, now(), now());
INSERT INTO Products(name, type, img1, description, price, createdAt, updatedAt) VALUES ("Tie-dye Banner", "Banner", "Image Link Here", "Banner done in tie-dye", 99.99, now(), now());