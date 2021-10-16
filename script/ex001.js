// variáveis e operadores 

window.alert (`Seja bem vindo(a)`);
var nome = window.prompt (`Qual é o seu nome?`); //-nome

//idade 
var anoN = window.prompt(`${nome}, qual ano você nasceu? `);
var anoA = 2021; 
var idade = anoA - anoN; 
window.alert(`A sua idade é: ${idade}`)

/// somar 
window.alert(`Olá, ${nome}! Vamos somar. `);
var maisN1 = Number(window.prompt(`${nome}, digite um número pra somar:`));
var maisN2 = Number(window.prompt(`Digite mais um número, ${nome}:`));
var soma = maisN1 + maisN2; 
window.alert(`A soma entre ${maisN1} mais ${maisN2} é igual a: ${soma}.`); 

// subitração 
window.alert (`${nome}, vamos de subitração!`); 
var menosN1 = Number(window.prompt(`Digite um número para subitrair: `)); 
var menosN2 = Number(window.prompt(`Mais um número por favor:`)); 
var valor_menos = menosN1 - menosN2
window.alert(`${nome}, o valor de ${menosN1} menos ${menosN2} é igual a ${valor_menos}.`)

// multiplicação 
window.alert(`Agora um pouco de multiplicação `);
var vezesN1 = Number(window.prompt(`${nome}, qual valor deseja multiplicar? `));
var vezesN2 = Number(window.prompt(`Por qual número? `));
var valor_vezes = vezesN1 * vezesN2;
window.alert (`A multiplicação de ${vezesN1} x ${vezesN2} é igual a: ${valor_vezes}.`);

// divisão 
window.alert (`Vamos dividir :)`)
var dividirN1 = Number(window.prompt(`Qual número você deseja dividir, ${nome}?`));
var dividirN2 = Number(window.prompt(`Por qual número? `));
var valor_dividir = dividirN1 / dividirN2;
window.alert (`O valor da divisão de ${dividirN1} dividido por ${dividirN2} é igual a: ${valor_dividir}.`);


// resultado das soma feitas no console 
window.console.log (
    `O seu nome é ${nome}, a sua soma foi igual a ${soma}. A subitração restou-se ${valor_menos}. O resultado da multiplicação foi ${valor_vezes}. Por último, a sua divisão foi igual a ${valor_dividir}.`
);

/* 
    Aqui vai a prática de operadores aritiméticos, atribuição e destribuição. 
    
    Juntando com os conhecimentos das variáveis, fica um diálogo melhor por causa do nome e das reptições númericas na tela.
*/ 