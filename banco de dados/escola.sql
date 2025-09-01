create table exemplo_2_pk (
	id_estudante INT,
	id_curso INT,
	data_inscricao date not null,
	primary key (id_estudante, id_curso)
);

drop table exemplo_2_pk


create table professores (
	id_professor serial,
	nome_professor varchar(100) not null,
	telefone varchar(20) not null,
	formacao varchar(50),
	primary key (id_professor)
);

create table disciplina (
	id_disciplina serial,
	nome_disciplina varchar(100),
	id_professor integer not null,
	primary key (id_disciplina),
	foreign key (id_professor) references professores (id_professor)
);

create table alunos(
	id_aluno serial,
	nome_aluno varchar(100) not null,
	idade integer not null,
	email varchar(100) unique,
	primary key (id_aluno)
);

create table alunos_disciplinas (
	id_aluno integer not null,
	id_disciplina integer not null,
	media decimal (10,2) null,
	nr_faltas integer not null,
	foreign key (id_aluno) references alunos (id_aluno),
	foreign key (id_disciplina) references disciplina (id_disciplina)
);
-- select * from alunos_disciplinas

create table disciplinas (
	id_professor integer not null,
	id_disciplina serial,
	nome_disciplina varchar(30),
	foreign key (id_professor) references professores (id_professor)
);

alter table turmas add ano integer;

alter table turmas alter ano type smallint
alter table turmas drop ano
alter table turmas rename nome_turma TO nome_turmas
alter table alunos add cpf varchar(18);
alter table alunos add foreign key (id_turma) references turmas
	add id_turma integer not null;

-- atividade 
alter table alunos add sexo boolean

ALTER TABLE alunos
ALTER COLUMN SEXO SET DEFAULT TRUE;

ALTER TABLE DISCIPLINAS
ADD ATIVO BOOLEAN NOT NULL DEFAULT TRUE;

ALTER TABLE PROFESSORES
ADD ATIVO BOOLEAN NOT NULL DEFAULT TRUE;

ALTER TABLE TURMAS
ADD ATIVO BOOLEAN NOT NULL DEFAULT TRUE;