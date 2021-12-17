# 🚀 Autenticação com Node.js e MongoDB com JWT - Login e Registro 

### Este é mais um repositório consolidando os meus estudos de NodeJs e MongoDB ao fazer autenticação, o foco aqui foi a autenticação.

<br>

# 🧠 Contexto

- Neste repositório foi criado para uma API simples de autenticação com: Node.js, #Express, #MongoDB (Mongoose) e que gerencia tokens por #JWT

- Criei rotas públicas e privadas, para poder validar a presença da autorização do token

- Vai impedir quem não possui token de acessar recursos privados, porém pode acessar endpoints públicos

- Além disso inserir os usuários no banco de dados MongoDB Atlas, com auxílio da ODM Mongoose

- A API é feita com base no Node.js, utilizando o framework Express

- As senhas dos usuários serão criptografadas com bcrypt, e realizei validações dos dados enviados para API pelas requisições

<br>


# ⚙️ Como rodar o projeto localmente

### Siga os passos e inclua as informações abaixo:

| Passo     | Comando/informação       |
| --------- | ----------- |
| Faça o fork  | `botão de forkar` |
| ou Faça o clone  | `git clone` |
| Instale as dependências   | `npm i` |
| Crie seu .env e inclua as variáveis e os valores     | `DB_USER` - `DB_PASS` - `SECRET` |
| utilize o script de start    | `npm start` |

### OBS.: As variáveis `DB_USER` e `DB_PASS` irão substituir o usuário e senha da sua URL gerada no mongoDB Atlas quando for conectar a aplicação ao banco. E o `SECRET` seria a chave para gerar o token.

### Você pode gerar uma chave `SECRET` para teste aqui: http://travistidwell.com/jsencrypt/demo/

<br>

# 🛠️ Tecnologias

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
| `MongoDb` | Banco de dados orientado a documentos para verificar se os dados foram persistidos|
| `Postman` | Interface gráfica para realizar os testes manuais das chamadas|
| `bcrypt` |  É um método de criptografia do tipo hash para senhas baseado no Blowfish |
| `jsonwebtoken` | É um método para realizar autenticação entre duas partes por meio de um token assinado que autentica uma requisição web |
  
<br> 

# 📁 Arquitetura

```
 📁 Autenticao-NodeJS
   |
   | - 📁 models
   |     |- 📑 User.js
   |
   | - 📑 .env
   | - 📑 .env.example
   | - 📑 .gitignore
   | - 📑 LICENSE
   | - 📑 app.js
   | - 📑 package-lock.json
   | - 📑 package.json

```

<br>

# 🔃 Requisitos, endpoints e operações


GET
-   **"/user/[id]"** Deverá retorna por ID uma pessoa cadastrada no banco, rota privada autenticação  
-   **"/"** Deverá retornar todas as vagas cadastradas

POST
-   **"/auth/register"** Deverá registrar um usuário
-   **"/auth/login"**  Deverá criar a rota de login do usuário cadastrado

<br>

#	📊 Dados requeridos

### 🙎‍♀️ USUÁRIO
- id: autogerado e obrigatório
- nome: texto e obrigatório
- email: texto e obrigatório
- password: texto e obrigatório
- confirmpassword: texto e obrigatório

✔️ RETORNO DA API
```
[
  {
    "_id": "61bb8f16f48a43dbd497f917",
    "name": "Elisabete Santos",
    "email": "eli@gmail.com",
    "password": "$2b$12$1DV4HP8JMR.ljJPxuuPV6.FjmAw8mDyaPVnQwuzalvaZKft9V36ye"
    "__v": 0
  }
]
```
<br>



### 📝 LOGIN
- nome: texto e obrigatório
- email: texto e obrigatório


✔️ RETORNO DA API
```
[
  {
    "_id": "61bb8f16f48a43dbd497f917",
    "name": "Elisabete Santos",
    "email": "eli@gmail.com",
    "__v": 0
  }
]
```
<br>

### OBS.: A senha não aparece pois coloquei uma validação para não mostrar a senha ao usuário, mas ela aparece no banco de dados codificada.

<br>

# 👋 Saudações da Eli!

_Caso queira contribuir com meu projeto, será totalmente bem-vindx!!!_
_Qualquer dúvida ou sugestão, chama no contatinho!_


 <img src="https://i.picasion.com/pic91/8dd880c47cfc761e805745c941097adb.gif" alt="Gif Yeah" width="200">

### Vamos nos conectar!

- [LinkedIn](https://www.linkedin.com/in/elisabete-a-santos/)
- [GitHub](https://github.com/elisabetealves)

<br>

### Feito com 💜 por Elisabete Alves

<br> 
    
# 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).