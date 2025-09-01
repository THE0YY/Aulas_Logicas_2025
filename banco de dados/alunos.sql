create table ALUNOS(
	id_aluno serial,
	nome varchar(100) NOT NULL,
	idade integer check (idade >= 0),
	email varchar(100) UNIQUE,
	primary key (id_aluno)
);