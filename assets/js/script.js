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
let nomeOk = false
let EmailOk = false
let AssuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = "100%";
email.style.width = "100%"

function validaNome(){
    
        let txtNome = document.querySelector('#txtNome')
        if(nome.value.length < 3){
            txtNome.innerHTML = 'Nome Inválido'
            txtNome.style.color = 'red'
        }else{
            txtNome.innerHTML = "Nome Válido"
            txtNome.style.color = 'green'
            nomeOk = true
        }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-Mail Inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        EmailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Número Máximo de Caractéres (100)'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        AssuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && EmailOk == true && AssuntoOk == true){
        alert('Formulário Enviado com Sucesso!')
    }else{
        alert('Preencha o Formulário Corretamente!')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}