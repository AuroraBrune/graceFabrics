DROP DATABASE IF EXISTS gracefabrics;

CREATE DATABASE gracefabrics;

INSERT INTO Products(name, type, img1, description, price, createdAt, updatedAt) VALUES ("Rainbow Stole","Stole", "Image Link Here", "Rainbow stole done in tie-dye", 56.99, now(), now());
INSERT INTO Products(name, type, img1, description, price, createdAt, updatedAt) VALUES ("Easter Stole", "Stole", "Image Link Here", "Easter stole done in tie-dye", 42.99, now(), now());
INSERT INTO Products(name, type, img1, description, price, createdAt, updatedAt) VALUES ("Christmas Stole", "Stole", "Image Link Here", "Christmas stole done in tie-dye", 99.99, now(), now());
INSERT INTO Products(name, type, img1, description, price, createdAt, updatedAt) VALUES ("Tie-dye Banner", "Banner", "Image Link Here", "Banner done in tie-dye", 99.99, now(), now());


INSERT INTO Users(username, password,createdAt,updatedAt) VALUES ("user","$2a$10$BJgt.G7qtJ.4hOG7uIppPOvTMYHBFDVu8nWmnjgWGvQ.M7LGC/Nm.", now(), now());