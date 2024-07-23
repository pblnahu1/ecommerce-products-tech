CREATE DATABASE ecommerce-notebooks;

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
	nombre_producto VARCHAR(255) NOT NULL,
	imagen_producto VARCHAR(255) NOT NULL,
	precio_producto INT NOT NULL,
	CONSTRAINT pk_id_productos PRIMARY KEY(id_productos)
);

CREATE TABLE favoritos(
	id_favorito INT NOT NULL AUTO_INCREMENT,
	id_usuario INT,
	id_productos INT,
	CONSTRAINT pk_id_favorito PRIMARY KEY(id_favorito),
	CONSTRAINT fk_favoritos_id_usuario FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario),
	CONSTRAINT fk_favoritos_id_producto FOREIGN KEY(id_productos) REFERENCES productos(id_productos)
);

CREATE TABLE carrito_producto(
	id_carrito INT,
	id_productos INT,
	CONSTRAINT fk_id_carrito FOREIGN KEY(id_carrito) REFERENCES carrito(id_carrito),
	CONSTRAINT fk_id_producto FOREIGN KEY(id_productos) REFERENCES productos(id_productos),
	CONSTRAINT pk_id_carrito_id_producto PRIMARY KEY(id_carrito, id_productos)
);

/*
La tabla Usuarios almacena la información de los usuarios.

La tabla Carritos contiene los carritos de cada usuario y tiene una clave 
externa que se relaciona con la tabla de Usuarios.

La tabla Productos almacena los detalles de los productos.

La tabla Favoritos gestiona la relación entre los productos y los usuarios 
para los favoritos.

La tabla Carrito_Producto es la tabla intermedia que maneja la relación muchos a muchos entre 
Carritos y Productos. Aquí, cada registro representa la asociación de un producto con 
un carrito específico.
*/

SELECT * FROM productos;
SELECT * FROM usuarios;
TRUNCATE TABLE usuarios;
TRUNCATE TABLE productos;