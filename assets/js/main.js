/*var valor = "texto";
var nome = null;
console.log(nome);
console.log(valor);
console.log(typeof(valor));

valor = 10;
console.log(valor);
console.log(typeof(valor));

valor = "20";
console.log(typeof(valor));
console.log(valor + 10);

valor = true;
console.log(valor);
console.log(typeof(valor));

console.log(valor + 10);*/


/*var nomes = ["Welton", "Marcela","Mariana","Juliana"];  Criar Vetor
console.log(nomes[3]);*/

/*Var => Variável local
let=> Variável local */

// Forma menos idicada

/*var pessoa = {}; // Cria uma váriável que é um objeto.

pessoa.Nome = "Welton";// Cria propriedades para variáveis.
pessoa.Sobrenome = "Castoldi";
pessoa.Nascimento = "01/01/2000";
pessoa.CoresPreferenciais = ["Azul","Amarelo","Vermelho"];
pessoa.Filho = {};
pessoa.Filho.Sobrenome = "Castoldi";

console.log(pessoa);

//Forma recomendada pelo Welton

var carro = {
    Modelo:"Fusca",
    Placa: "MGP-1586",
    Cor: "Vermelho",
    Proprietario:{
        Nome:  "Alan",
        Sobrenome: "Monte"
    },
    Ano: 2019
}
console.log(carro);
console.log(pessoa)*/
//#region Objeto Pessoa
var pessoa = {
    Nome: ['Welton', 'Castoldi'],
    Idade: 32,
    Sexo: 'masculino',
    Interesses: ['músicas', 'esquiar'],
    Bio: function () {
        alert(this.nome[0] + ' ' + this.nome[1] +
            ' tem ' + this.idade + 'anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');

    },
    Saudacao: function () {
        alert('oi! Eu sou' + this.nome[0] + '.');
    }
    
    
};

/*function camelCase(){ /*  não sei o que é, pesquisar.*/

 console.log(pessoa)
 alert(pessoa.Sexo)
    
    //#endregion
