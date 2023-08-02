//var = variável de escopo global, ou seja, pode ser acessado em todo o código.
//let = variável de escopo local, ou seja, que só pode ser acessado dentro de onde ela é criada.
//const = variável constante de escopo global, pouco utilizado, pois não se altera durante a execução do programa.

/*
Lembrando que o JS é uma Case Sensitive (Reconhece letras maiúsculas e minúsculas)

Por Tag: getElementByTagName()
Por Id: getElementById()
Por Nome: getElementsByName()
Por Classe: getElementsByClassName()
Por Seletor: querySelector() - Usado na maioria das vezes pela vaiedade de formas de selecionar  e atualização mais recente.
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = "100%";
email.style.width = "100%"