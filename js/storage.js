function salvarDados(cadastro){
localStorage.setItem("cadastro",JSON.stringify(cadastro));
};
function recuperarDados(){
const cadastroSalvo=JSON.parse(localStorage.getItem("cadastro"))
return cadastroSalvo;
}
export{salvarDados,recuperarDados};