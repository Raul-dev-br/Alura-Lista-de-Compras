const mensagemListaVazia = document.querySelector(".mensagem-listaVazia");

function verificarListaVazia(listaDeCompras){
  const itensDaLista = listaDeCompras.querySelectorAll("li");

  if(itensDaLista.length === 0){
    mensagemListaVazia.style.display = "block";
  } else{
    mensagemListaVazia.style.display = "none";
  }
}

export default verificarListaVazia;