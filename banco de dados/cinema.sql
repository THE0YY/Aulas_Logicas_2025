create table ator (
	id_ator serial,
	nome_ator varchar(100) not null,
	nacionalidade varchar(50),
	primary key (id_ator)
)

create table genero (
	id_genero serial,
	nome_genero varchar(50) not null,
	primary key (id_genero)
)

create table filme (
	id_filme serial,
	nome_filme varchar(50) not null,
	id_genero integer not null,
	primary key (id_filme),
	foreign key (id_genero) references genero (id_genero)
)

create table ator_filme (
	id_ator integer not null,
	id_filme integer not null,
	papel varchar(40)not null,
	foreign key (id_filme) references filme (id_filme),
	foreign key (id_ator) references ator (id_ator)
)