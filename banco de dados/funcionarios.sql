create table dados_cadastrais_funcionario(
	id_funcionario serial,
	matriculas varchar(100) null,
	nome varchar(100) not null,
	data_nasc integer not null,
	est_civil varchar(20) not null,
	nacionalidade varchar(25) not null,
	sexo boolean not null,
	cic integer not null,
	rg integer not null,
	telef integer not null,
	data_admissao integer not null,
	primary key (id_funcionario)
)

create table cargos_ocupados(
	cargo varchar(50) not null,
	data_inicio integer not null,
	data_fim integer not null
)

create table dependentes(
	nome integer not null,
	data_nasc integer not null,
	foreign key (nome) references dados_cadastrais_funcionario (nome),
	foreign key (data_nasc) references dados_cadastrais_funcionario (data_nasc)
)