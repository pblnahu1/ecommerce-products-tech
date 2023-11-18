CREATE DATABASE ecommerce;

CREATE TABLE usuarios(
	id_usuario INT NOT NULL AUTO_INCREMENT,
	nombre_usuario VARCHAR(50) NOT NULL,
	apellido_usuario VARCHAR(50) NOT NULL,
	edad_usuario INT NOT NULL,
	email_usuario VARCHAR(60) NOT NULL,
	clave_usuario VARCHAR(15) NOT NULL,
	metodo_pago VARCHAR(60) NOT NULL,
	CONSTRAINT pk_id_usuario PRIMARY KEY(id_usuario),
	CONSTRAINT ck_edad_usuario CHECK(edad_usuario BETWEEN 18 AND 99),
	CONSTRAINT ck_metodo_pago CHECK(metodo_pago IN('Tarjeta de Crédito', 'Tarjeta de Débito', 'Efectivo (Pago Fácil)'))
);

CREATE TABLE carrito(
	id_carrito INT NOT NULL AUTO_INCREMENT,
	id_usuario INT,
	CONSTRAINT pk_id_carrito PRIMARY KEY(id_carrito),
	CONSTRAINT fk_id_usuario FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE productos(
	id_productos INT NOT NULL AUTO_INCREMENT,
	info_productos JSON NOT NULL
);

CREATE TABLE favoritos(

);

CREATE TABLE carrito_producto(

);
