create table CARROS(
	id_carro serial,
	placa varchar(10) NOT NULL UNIQUE,
	km_rodado integer,
	marca varchar(30) NOT NULL,
	modelo varchar(20) NOT NULL,
	combustivel varchar(10),
	chassi varchar(40) UNIQUE,
	cor varchar(15),
	categoria varchar(20),
	valor decimal(10,2),
	nr_portas integer,
	ano integer
	)