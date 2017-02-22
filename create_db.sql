/* Database name = `galare`*/
CREATE TABLE `user` (
	`lastname` varchar(255) NOT NULL,
	`firstname` varchar(255) NOT NULL,
	`birthday` DATE NOT NULL,
	`sex`  enum('M','F') NOT NULL,
	`username` varchar(255) NOT NULL,
	`pass` varchar(255) NOT NULL,
	`user_id` int(8) NOT NULL AUTO_INCREMENT,
	`user_level` int(1) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`)
)