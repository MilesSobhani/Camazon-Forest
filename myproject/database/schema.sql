DROP DATABASE IF EXISTS pictures;
CREATE DATABASE pictures;
USE pictures;

CREATE TABLE productPicture
(
  productID int (11) NOT NULL,
  pictureID VARCHAR(255) NOT NULL,
  PRIMARY KEY (productID)

);
