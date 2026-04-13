# 💪 PowerGym - Gerenciamento de Treinos e Personal Trainers

O **PowerGym** é um sistema web desenvolvido para permitir que usuários registrem e acompanhem seus treinos de academia, além de visualizar e cadastrar **personal trainers**.

O sistema implementa funcionalidades completas, incluindo:

- gerenciamento de treinos (AC1)
- cadastro e visualização de personal trainers (AC2)

Projeto acadêmico desenvolvido para o curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **Faculdade Impacta**.

---

# 👨‍💻 Autor

**Lucas Ryan Lima Malmagro - RA 2401867**

Projeto desenvolvido para fins educacionais.

---

# 📌 Objetivo das Funcionalidades

O sistema foi desenvolvido com o objetivo de permitir que o usuário:

- registre e acompanhe seus treinos
- visualize sua evolução
- encontre e consulte personal trainers disponíveis

---

# 🚀 Funcionalidades Implementadas

---

## 🏋️ AC1 - Gerenciamento de Treinos

### ➕ Adicionar treino

O usuário pode registrar um novo treino através do formulário disponível no dashboard.

Campos disponíveis no cadastro:

- Data do treino
- Dia da semana
- Tipo de treino
- Foco do treino
- Exercício
- Carga
- Séries
- Repetições
- Tempo de descanso
- Peso corporal
- Altura
- Observações

Após o cadastro, o treino é salvo no banco de dados PostgreSQL.

---

### ✏ Editar treino

Treinos já cadastrados podem ser editados diretamente pelo dashboard.

O sistema permite:

- alterar qualquer informação
- atualizar o registro no banco
- registrar automaticamente a data de atualização

---

### 🗑 Excluir treino

Treinos cadastrados podem ser removidos do sistema com confirmação.

---

## 🧑‍🏫 AC2 - Cadastro de Personal Trainers

A funcionalidade de **Personal Trainer** foi desenvolvida para ampliar o sistema, permitindo o cadastro e visualização de profissionais da área fitness.

---

### ➕ Cadastrar personal trainer

O sistema permite cadastrar um novo personal trainer com as seguintes informações:

- Nome
- Especialização
- Valor da aula
- Telefone
- Localização de atendimento
- Foto do personal
- Descrição da experiência

Os dados são armazenados no banco de dados PostgreSQL.

---

### 👁 Visualizar personal trainers

Os profissionais cadastrados são exibidos em formato de **cards interativos**, contendo:

- foto
- nome
- especialização
- localização
- descrição
- valor da aula

---

### 📞 Contato

O usuário pode visualizar o telefone do personal trainer diretamente no sistema através do botão **Contato**.

---

### 🔐 Controle administrativo

A exclusão de personal trainers é restrita a usuários com acesso administrativo.

O sistema utiliza:

- autenticação via login administrativo
- liberação de botão de exclusão apenas em modo admin

---

# 🧩 Arquitetura do Sistema

O sistema segue a arquitetura em **3 camadas**.

---

## Front-end

Responsável pela interface do usuário.

Arquivos disponíveis em:

[frontend](frontend)

Tecnologias utilizadas:

- HTML
- CSS
- JavaScript

Funcionalidades da interface:

- cadastro e listagem de treinos
- cadastro de personal trainers
- exibição em cards
- interação com usuários
- controle de administrador

---

## Back-end

Responsável pela lógica da aplicação e comunicação com o banco de dados.

Arquivos disponíveis em:

[backend](backend)

Tecnologias utilizadas:

- Node.js
- Express

Responsabilidades:

- CRUD de treinos
- CRUD de personal trainers
- autenticação de usuário
- controle de acesso administrativo
- integração com PostgreSQL

---

## Banco de Dados

Responsável pelo armazenamento persistente das informações.

Scripts disponíveis em:

[banco](banco)

Tecnologia utilizada:

- PostgreSQL

---

# 🗄 Estrutura das Tabelas

## Treinos

Tabela:

```
treinos
```

---

## Personal Trainers

Tabela:

```
personal_trainers
```

Principais campos:

- id
- nome
- especializacao
- telefone
- localizacao
- valor_aula
- descricao
- foto
- created_at

---

# 🛠 Tecnologias Utilizadas

### Front-end
- HTML
- CSS
- JavaScript

### Back-end
- Node.js
- Express

### Banco de Dados
- PostgreSQL

### Ferramentas de Desenvolvimento
- VS Code
- Git
- GitHub
- Thunder Client
- pgAdmin

---

# 📁 Estrutura do Projeto

```
powergym
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── trainingController.js
│   │   │   └── personalTrainerController.js
│   │   │
│   │   ├── routes
│   │   │   ├── trainingRoutes.js
│   │   │   └── personalTrainerRoutes.js
│   │   │
│   │   └── server.js
│
├── frontend
│   ├── assets
│   │   └── logo-powergym.png
│   │
│   ├── css
│   │   └── style.css
│   │
│   ├── js
│   │   ├── dashboard.js
│   │   ├── trainings.js
│   │   └── personal-trainer.js
│   │
│   ├── dashboard.html
│   └── personal-trainer.html
│
├── banco
│   └── create_database.sql
│
├── README.md
└── LICENSE
```

---

# 📡 Rotas da API

## Treinos

```
POST /treinos
GET /treinos
PUT /treinos/:id
DELETE /treinos/:id
```

---

## Personal Trainers

```
POST /personal-trainers
GET /personal-trainers
DELETE /personal-trainers/:id
```

---

# 📚 Disciplina

Projeto desenvolvido para a disciplina:

**Software Product**

Curso:

**Análise e Desenvolvimento de Sistemas (ADS)**  
**Faculdade Impacta**

---

# 📄 Licença

Este projeto está sob a licença:

[MIT License](LICENSE)
