const { request, response } = require("express");
const express = require("express");
const exphbs = require("express-handlebars");
const mysql2 = require("mysql2");
const port = 3003;



const app = express(); // utilizando express boy

// configurando a template engine handlebars 
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'})); 
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.get("/", (request, response) => {
    // ao acessar a rota principal vai ser retornada a pagina home.
    return response.render("home")
});

const connection = mysql2.createConnection({

    host: "localhost",
    user: "aluno_medio",
    password: "@lunoSenai23.",
    database: "system_books"
});


    // verificando algum erro que possa a ver
connection.connect((error) => {
    if(error) {
        return console.log(error);
    }

        // caso nenhum erro seja encontrado vai ser retornado essa mensagem no console(terminal).
    console.log("Mysql está conetado");

    app.listen(port, () => console.log(`Server running on port ${port}`));
});

