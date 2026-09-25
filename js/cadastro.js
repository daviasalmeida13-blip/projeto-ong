import { salvarDados, recuperarDados } from "./storage.js";
function configurarForm(){
const form=document.getElementById("formCadastro")
const success=document.querySelector(".alert")
const realizado=document.querySelector(".toast")
form.addEventListener("submit", function(evento){
    evento.preventDefault()
    const cadastro={
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    nascimento: document.getElementById("nascimento").value,
    cpf: document.getElementById("cpf").value,
    telefone: document.getElementById("telefone").value,
    endereco: document.getElementById("endereco").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getElementById("estado").value,
    cep: document.getElementById("cep").value
}
salvarDados(cadastro);
 success.innerHTML="Cadastro realizado com sucesso"
    realizado.classList.add("visivel")});
    const cadastroSalvo= recuperarDados();
if (cadastroSalvo){
document.getElementById("nome").value=cadastroSalvo.nome;
document.getElementById("email").value=cadastroSalvo.email;
document.getElementById("nascimento").value=cadastroSalvo.nascimento;
document.getElementById("cpf").value=cadastroSalvo.cpf;
document.getElementById("telefone").value=cadastroSalvo.telefone;
document.getElementById("endereco").value=cadastroSalvo.endereco;
document.getElementById("cidade").value=cadastroSalvo.cidade;
document.getElementById("estado").value=cadastroSalvo.estado;
document.getElementById("cep").value=cadastroSalvo.cep;
}};
export{configurarForm};
