//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: 
//Hora do Desafio.

const tituloJogo = document.querySelector('h1');
//criação da variavel + "no documento". "Procure o seletor h1". Traduzindo... Ta pegando o valor
// de h1 e armazendo na váriavel criada.
tituloJogo.innerHTML = 'Hora do Desafio';
//variavel esta sobrescrevendo o valor de h1. pelo novo valor de "Hora do Desafio"
//Então, o código geral está encontrando o primeiro elemento <h1> na página HTML e 
//substituindo seu conteúdo pelo texto "Hora do Desafio".
// Isso é útil para dinamicamente alterar o texto exibido na página web usando JavaScript.

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function notificarConsole(){
    console.log("O botão foi clicado!");
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function amamosJS(){
    alert("Amamos Java Script!");
}
//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function cidade(){
    let cidade = prompt("Digite o nome de uma cidade");
    alert("Estive em "+ cidade+" e lembrei de você!");
}
//Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta

    function somaDoisNumeros(){
        let n1 = prompt("Digite o primeiro número");
        let n2 = prompt("Digite o segundo número");
        //declara na compáração ou antes, exemplo:
        // // Solicita ao usuário que digite o primeiro número e converte o valor para um número
    //let n1 = parseFloat(prompt("Digite o primeiro número"));

    // Solicita ao usuário que digite o segundo número e converte o valor para um número
    //let n2 = parseFloat(prompt("Digite o segundo número"));
    
        // Convertendo as strings para números inteiros usando parseInt
        var resultadoSoma = parseInt(n1) + parseInt(n2);// define o tipo depois, mas tem que definir, se não o js
        //dá pau e soma duas strings.
    
        alert("A soma do seu primeiro número:" + n1 + ". Mais seu segundo número:" + n2 + ". É igual a: " + resultadoSoma);
    }

//-------------------------------------Desafio 2 -------------------------------------------------------------------------------------------

/*
// Criar uma função que exibe "Olá, mundo!" no console.
    function exibirMensagem() {
        console.log("Olá mundo!");
    }

//CERTO

function exibirOla() {
    console.log("Olá, mundo!");
  }
  
  exibirOla();

 //Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
    function recebeNome(nome){
                console.log("Olá,"+nome+"!");
    }
  // CERTO
  function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
  }
  
  exibirOlaNome("Alice");
    


 //Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
    function recebeNumeroEDobra(){
        let num = prompt("Digite um número:");
        let dobro = parseInt(num) * 2;
        console.log("Dobro do seu numero é: "+dobro);
    }


// CERTO:
function calcularDobro(numero) {
    return numero * 2;
  }
  
  let resultadoDobro = calcularDobro(5);
  console.log(resultadoDobro);



    //Criar uma função que recebe três números como parâmetros e retorna a média deles.
    function calculoMedia(){
        let numero1 = prompt("Digite o primeiro número:");
        let numero2 = prompt("Digite o segundo número:");
        let numero3 = prompt("Digite o terceiro número:");
    let media= (perseFloat(numero1)+perseFloat(numero2)+perseFloat(numero3))/3;
console.log("Média dos números é igual a: "+media);    
}


// CERTO 


function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(4, 7, 10);
  console.log(media);


//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(){
    let num1 = prompt("Digite o primeiro número");
    let num2 = prompt("Digite o segundo número");
    if(num1 > num2){
        console.log("Maior número é o:"+num1);

    }
    else {
        console.log("Maior número é o:"+num2);
    }

}
// CERTO


function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = encontrarMaior(15, 9);
  console.log(maiorNumero);



//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function recebeNumeroEMultiplica(){
    let num = prompt("Digite um número:");
    let multiplicacao = parseFloat(num) * parseFloat(num);
    console.log("Dobro do seu numero é: "+multiplicacao);
}

//CERTO

function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado = quadrado(2);
  console.log(resultado); 
    

*/
//-------------------------------Desafio----------------------------
  //Crie uma função que calcule o índice de massa corporal (IMC)
  // de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas,
  // que serão recebidos como parâmetro.
/* IMC
altura = cm
peso = kg
*/
function calcularIMC(altura,peso){
   return imc=altura/peso;
}
calcularIMC(178,130);
console.log(imc);
    
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero){
//ex 8! = 8x7x6x5x4x3x2x1  
   while (numero > 0){
return numero * numero - 1;
}
console.log(numero);   
}  


calcularFatorial(8);

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converteEmDolar(real){
    return Number = real/4,8;
}
console.log=(Number);
//----------------------------------------------------------------------------
//1
function calculaIMC(altura, peso){

    let imc = peso / (alturaMetros * alturaMetros);
  }

//2
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  /*
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);
  //3*/

function converterDolarParaReal(valorEmDolar) {
  let cotacaoDolar = 4.80;
  let valorEmReais = valorEmDolar * cotacaoDolar;
  return valorEmReais.toFixed(2);
}

// Exemplo de uso
let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

//4
function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // Exemplo de uso
  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);

  //5
  function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);
  //6
  function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero = 7;
  mostrarTabuada(numero);

  //-------------------------ARRAY
  /*
Crie uma lista vazia, com o nome listaGenerica.
Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
*/
let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];
linguagensDeProgramacao.push ['Java','Ruby','GoLang'];

var listaComTresNomes = ['Lucas', 'Gaybriela', 'Shereska'];
console.log(listaComTresNomes[0]);
console.log(listaComTresNomes[1]);
console.log(listaComTresNomes[2]);
//-------------------------------EXERCICIOS FUNÇÕES-----------------------
/*
Exercícios Simples:
Escreva uma função que receba dois números como parâmetros e retorne a soma deles.
Crie uma função que receba uma string como parâmetro e retorne o seu comprimento.
Implemente uma função que receba um número como parâmetro e retorne true se esse número for par e false se for ímpar.
Faça uma função que receba um array de números e retorne o maior número presente nesse array.
Escreva uma função que receba um número como parâmetro e retorne o seu quadrado.*/
function somaDoisNumeros(num1,num2){
 return num1 + num2
}
somaDoisNumeros();
function stringComprimento(string){
  return console.log(string.length);
}
stringComprimento();

function imparOuPar(numero){
  return numero % 2 === 0;
  
}
imparOuPar();

function array(){
  let numeros = [1,2,4,5,6] ;
console.log(numeros.length);
}
array();

function quadradoDoNumero(number){
  return number*number;
}

quadradoDoNumero();

//-----------------------Medianos-----------------
/*
Exercícios Medianos:
Crie uma função que receba uma string e retorne a mesma string, mas com todas as letras em maiúsculas.
Implemente uma função que receba dois números como parâmetros e retorne o resultado da multiplicação entre eles, utilizando somente operadores de adição e subtração.
Faça uma função que receba um array de números e retorne a média aritmética deles.
Escreva uma função que receba uma string como parâmetro e retorne true se essa string for um palíndromo (ou seja, se pode ser lida da mesma forma da esquerda para a direita e vice-versa) e false caso contrário.
Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.*/

function stringMaiuscula(string){
  return string.toUpperCase();
}
function multiplicacao(numero1, numero2){
  let soma = 0;
  for (let i = 0; i < numero1; i++) {
    soma += numero2;
  }
  return soma;
}

//function criarArray(...args) {
//  return args;
//}vai criando e enfiando os numero no array



