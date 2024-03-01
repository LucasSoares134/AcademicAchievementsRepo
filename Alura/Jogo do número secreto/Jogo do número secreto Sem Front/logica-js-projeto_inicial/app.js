/* deferença ao iniciar a variavel com var, let, const:
// Exemplo com var
var a = 10;
if (true) {
    var a = 20; // Sobrescreve a variável 'a' do escopo externo
}
console.log(a); // Resultado: 20

// Exemplo com let
let b = 10;
if (true) {
    let b = 20; // Cria uma nova variável 'b' no escopo interno
}
console.log(b); // Resultado: 10

// Exemplo com const
const c = 10;
// c = 20; // Gera um erro, pois 'c' não pode ser reatribuída
// const c = 30; // Gera um erro, pois 'c' não pode ser redeclarada
----
cost eu crio uma váriavel, onde não posso alterar nunca então ?
----
Sim, é isso mesmo. Quando você declara uma variável usando const em JavaScript, significa que você está criando uma constante, ou seja, um valor que não pode ser reatribuído depois de ser inicializado. Veja um exemplo:
---
const minhaConstante = 42;

// Isso gera um erro, pois você não pode reatribuir o valor de uma constante
// minhaConstante = 10;


//1)


//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".


let diaSemana = prompt("Qual o dia da semana");
if(diaSemana == "Sábado" ||diaSemana == "Domingo" ){
	alert("Bom fim de semana!");
	
}
else {
	alert("Boa semana!");
}

//2)
let numero = prompt("Digite um número");
if(numero>=0){
alert("Número positivo");
}
else{
    alert("Número negativo");
}

let nome = prompt("Insira seu nome");
alert("Seja muito bem-vindo! "+nome);

*/


/*
//1)

var numero=0;
while(numero <= 10){
alert(numero);
numero++
}

//2)

var numero=10;
while(numero >= 0){
alert(numero);
numero = numero - 1;
}

let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++
    alert(contador)
}

*/


 /*
 
    //1),2,3
    console.log("Boas-vindas!");
    let nome = Lucas;
    console.log("Olá,"+nome+"!");
    alert("Olá,"+nome+"!");

    //4)
    let linguagem = prompt("Qual a linguaguem de programação, que você mais gosta?");
    console.log("A linguagem que informou, foi: "+linguagem);

    //5)

    var valor1 = 5;
    var valor2 = 13;
    var resultado;
    resultado = valor1 + valor2;
    
    console.log("A soma de:"+valor1+"+"+valor2+"É igual a:"+ resultado);
//6)    
     var valor1 = 5;
    var valor2 = 13;
    var resultado;
    resultado = valor1 - valor2;

    console.log("A diferença de:"+valor1+"-"+valor2+"É igual a:"+ resultado);
//7)
let idade= prompt("Digite a sua idade: ");
if(idade >=18){
    alert("Você é maior de idade!");

}
else {
    alert("Você é menor de idade");
}

//8)
let numero = prompt("Digite um número");
if(numero > 0){
    alert(numero + "Número Positivo");

}

if(numero<0){
    alert(numero + "Número Negativo");
    
}
else{
    alert(numero + "Número é igual a zero");

}

//9)
let imprimirConsole=0;
while(imprimirConsole>=10){
    alert(imprimirConsole);
imprimirConsole++
}

//10
var nota = 6;
if(nota>=7){
alert("Com base, na sua nota:"+nota+"você foi: Aprovado!");
}
else{
    alert("Com base, na sua nota:"+nota+"você foi: Reprovado!");
}
//11 
let num = Math.random();
console.log(num);

//12
let  num1 = parseInt(Math.random()* 10 +1);
console.log(num1);
//13
let num2 = parseInt(Math.random()* 1000 +1);
console.log(num2);
*/




alert("Boas vindas, ao jogo do número secreto!");//Alerta de mensagem de boas vindas
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

;//OBS: OLHAR A DOCUMENTAÇÃO OFICIAL DA LINGUAGEM!esse caso, encontraram essa função de numero aleatório e adaptaram a função parseInt, para ficar bonitinha assim!;//Criando a váriavel a ser usada, para armazenar o número
console.log(numeroSecreto);//ambiente "Secreto", para testar códigos. Aparece os códigos na parte de console, no inspecionar elemento.
let chute;// = prompt('Escolha um número, entre 1 e 15');//''-> normalmente é usada, para distinquir uma string que vai ser passada. Uma mensagem//scanner(interagir os dados, com o usuário)//É importante, sempre testar os erros!
//Como a linguagem é "de boa", eu já crio uma váriavel, que vai receber o valor digitado.
let tentativas = 1;//Posso determinar uma váriavel, sem descrever o tipo dela na declaração e atribuir um valor direto a ela, ou posterior.

// enquanto chute não for igual ao numeroSecreto, repita...
while(chute != numeroSecreto){
    chute = prompt("Escolha um número, entre 1 e "+numeroMaximo);

parseInt(Math.random()* 10+1);
 //OBS: OLHAR A DOCUMENTAÇÃO OFICIAL DA LINGUAGEM!esse caso, encontraram essa função de numero aleatório e adaptaram a função parseInt, para ficar bonitinha assim!
    if(chute == numeroSecreto){//Estrutura condicional, criada, realizando comparação com o valor dá váriavel, que foi inserido

    break;}//se trata de parar a estrutura de repetição, neste exato momento "PARA COM ESSA PORRA AI MERMAO."}

    else {
        if(chute > numeroSecreto) {
        alert("O número secreto é menor que: "+ chute);
        }
        else{
            alert("O número secreto é maior que: "+ chute)
        }
           
            tentativas++;
             //tentativas=tentativas +1
    }
}

//(criando uma variavel, para armazenar o operador tenário)   (Com paração de verdade)  (?= verificação do computador)       (Resposta se positiva)   (mescla entre as duas respostas)    (Resposta, se negativa)
//let palavraTentativa =                                       tentativas > 1            ?                                   ' tentativas'              :                                     'tentativa';
let palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa';
//operador tenário(SUBSTITUI TODA A FUNÇÃO DE BAIXO)
//Primeiro valor é o positivo. e segundo o negativo.
alert(`Isso ae, você escolheu o Número secreto, que é ${numeroSecreto}`+" Com: "+ tentativas + palavraTentativa);



//    if(tentativas > 1){ 
        //alert("Isso ae, você escolheu o Número secreto, que é: "+(numeroSecreto));- Corrento pegando o conhecimento que tenho
 //   /*Dá pra fazer em JS, assim:*/ alert(`Isso ae, você escolheu o Número secreto, que é ${numeroSecreto}`+"Com: "+ tentativas +"Tentativas");
//}
   // else{ 
  //  alert(`Isso ae, você escolheu o Número secreto, que é ${numeroSecreto}`+"Com: "+ tentativas +"Tentativa");
    //}

  