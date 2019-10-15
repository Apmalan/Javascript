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
/*var pessoa = {
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

 /*console.log(pessoa)
 alert(pessoa.Sexo)
    
    //#endregion*/

    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    //ESTRUTURA CONDICIONAIS OU DECISÃO OU SELEÇÃO
    //Se seNao seNao se = Portugol
    //Escolha/Caso = Portugol

    //If Else Else If = JavaScript
    //Switch / Case = JavaScript

    //Verificar se é menor de idade..
    /*var idade = 21;


    if (idade <= 18) {
        console.log("Menor de idade");

       
        } 
        else{
            console.log("Maior de idade");
        }
        
        var dia = 2;
        function diaSemana (valor);{
            switch (valor) {
                case 1:{
                    console.log("Segunda");
                    break;
                }
                case 2:{
                    console.log("Segunda");
                    break;
                }
    
                case value:{
                    console.log("Maior de idade");
                }
                        
            }
        }*/
        
    //1 -Um passo é equivalente a 0,82 metros. Crie um programa que leia uma distância em quilômetros e calcule e exiba quanto é essa distância em passos
    //Console

    //Qual a distância em KM?Distância em KM = 3030 km é equivalente a 36585 passos.
    
        const VALOR_UM_PASSO = 0.82;
                
        function converterPassosEmKM (){
            var KmInformado = prompt("Qual a distancia dem KM ?");
            console.log("Qual a distancia dem KM ?");
            console.log("Distancia em KM:" + KmInformado);
            var quantidadedePassos = (KmInformado * 1000) / VALOR_UM_PASSO;
            console.log(KmInformado + "Km é equivalente a " + quantidadedePassos, "passos");
        
        }

        //2 -Na construção civil, sabe-se que 8 pedreiros levam 72 horas para construir um muro. 
        //Faça um programa que leia a quantidade de pedreiros disponíveis e informe quantas horas eles demorarão para terminar o muro.

        //Console
        
        //Qual pedreiros estão disponíveis? Os 2 pedreiros levam 288 horas para terminar o muro.

        const BASE_HORA = 72;
        const BASE_PEDREIRO = 8;

        function converterTempoPedreiros (){
            var pedreirosDisponiveis = prompt ("Quantos pedreiro estão disponiveis?");
            console.log("Quantos pedreiro estão disponiveis?");
            console.log("pedreiro disponiveis:" + pedreirosDisponiveis);
            var resultado = (BASE_HORA * BASE_PEDREIRO) / pedreirosDisponiveis;

            if (pedreirosDisponiveis > 2) {
                console.log("Os ",pedreirosDisponiveis," pedreiros levam ",resultado," horas para terminar o muro.");

            } else {
                console.log(" O pedreiro leva ",resultado," horas para terminar o muro.");
            }
        }

        //3 -Escreva um programa que leia duas notas de um aluno, calcule e exiba a média que ele obteve e informe se o aluno foi aprovado ou não na disciplina.

        //Console
        
        //Qual sua primeira nota?
        //Qual sua segunda nota?
        //Sua média foi 7,5.Parabéns você foi aprovado.
        
        
        
        

        function CalcularMediaAluno (){
            var nota1 = prompt ("Digite a primeira nota: ");
            console.log("Digite a primeira nota: ");
            console.log("Nota Aluno 1: "  + nota1);

            var nota2 = prompt ("Digite a segunda nota: ");
            console.log("Digite a segunda nota: ");
            console.log("Nota aluno 2: "  + nota2);

            var resultadoMedia = (nota1 + nota2) / 2;

            if (resultadoMedia => 60) {
                console.log("Sua média foi",resultadoMedia,"você foi aprovado");
            } 
            
            else if(resultadoMedia = 60){
                console.log("Sua média foi",resultadoMedia,"você está de recuperação");
            }

            else {
                console.log("Sua média foi",resultadoMedia,"você está reprovado");
            }
        }

          //4 -Crie um programa que leia o nome de uma pessoa e seu sexo (m para masculino e f para feminino). Ao final, o programa deve imprimir a mensagem
         //“Bom dia senhor” ou “Bom dia senhora” seguida do nome.

         //Console
         //Qual seu nome?
         //José
         //Qual seu sexo?
         //Bom dia, senhor José


         function lerSexo (){
            var nome = prompt ("Qual seu nome ? ");
            console.log("Qual seu nome ? ");
            console.log("nome: "  + nome);

            var sexo = prompt ("Qual seu sexo ? ");
            console.log("Qual seu sexo ? ");
            console.log("sexo: "  + nome);

            var masculino, feminino;
            
            if (sexo = masculino = feminino) {
                console.log("Bom dia senhor");
                
            } else {
                console.log("Bom dia senhora");
            }


         }

