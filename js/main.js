import { configurarForm } from "./cadastro.js";
const templates={
    inicio:`<section>
             <h2>Quem somos?</h2>
                <p>Somos uma ONG a mais de 10 anos que busca ajudar vítimas de desastres naturais com o apoio de voluntários dispostos, doações e arrecadações!</p>
                <img src="images/sedeong.jpg" alt="imagem voluntários acolhendo vitimas machucadas"> 
            </section>`,
    projetos:` <section>
            <h2>Voluntariado</h2>
            <span class="badge">Ativo</span>
            <p>Você pode contribuir com seu tempo em diversas frentes da nossa ONG.</p>
            <ul>
                <li>Voluntariado em campanhas de arrecadação</li>
                <li>Apoio administrativo</li>
                <li>Distribuição de doações</li>
            </ul>
        </section>

        <section>
            <h2>Doações</h2>
            <p>Você também pode contribuir financeiramente através das formas abaixo.</p>
            <ul>
                <li>Pix</li>
                <li>Transferência bancária</li>
                <li>Doação de itens físicos</li>
            </ul>
        </section>`,
    cadastro:`<form id="formCadastro">
            <fieldset>
                <legend>Dados Pessoais</legend>

                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" required>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>

                <label for="nascimento">Data de nascimento:</label>
                <input type="date" id="nascimento" name="nascimento" required>

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" required>

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" pattern="\\(\\d{2}\\)\\d{5}-\\d{4}" placeholder="(00)00000-0000" required>
            </fieldset>

            <fieldset>
                <legend>Endereço</legend>

                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required>

                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" required>

                <label for="estado">Estado:</label>
                <input type="text" id="estado" name="estado" required>

                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" pattern="\\d{5}-\\d{3}" placeholder="00000-000" required>
            </fieldset>

            <button type="submit"> Enviar cadastro</button>
        </form>
        <div class="alert">Cadastro realizado com sucesso!</div>
        <div class="alert alert-erro">Não foi possível realizar o cadastro.</div>
        <div class="toast">Cadastro realizado com sucesso!</div>`
};
const app= document.getElementById("app");
function renderizar(){
let rota=location.hash.slice(1)
if(rota===""){
rota="inicio"
}
app.innerHTML=templates[rota]
if(rota==="cadastro"){
configurarForm();
}};

window.addEventListener("hashchange", renderizar)
renderizar()
function navegaçao(elemento, rota){
    elemento.addEventListener("click", function(evento){
        evento.preventDefault()
        location.hash=rota
    });
}
navegaçao(linkProjetos, "projetos")
navegaçao(linkInicio, "inicio")
navegaçao(linkCadastro, "cadastro")
window.addEventListener("load",function(){
const cadastroSalvo= JSON.parse(localStorage.getItem("cadastro"));
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
}
});
