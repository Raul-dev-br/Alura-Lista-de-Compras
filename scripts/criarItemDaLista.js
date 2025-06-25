import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById('input-item');
let contador = 0;

  export function criarItemDaLista(){

    if(inputItem.value === ''){
      alert('Coloque um valor apropriado!');
      return
    }
  
    const itemDaLista = document.createElement('li');
    const containerItemDaLista = document.createElement('div');
    containerItemDaLista.classList.add('lista-item-container');
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = 'checkbox-' + contador++;
    const nomeItem =  document.createElement('p');
    nomeItem.innerText = inputItem.value;
    const dataItem = document.createElement('p');
    const dataCompleta = gerarDiaDaSemana();
    dataItem.classList.add('texto-data');
    dataItem.innerText = dataCompleta;
  
    inputCheckbox.addEventListener('click', function() {
      if(inputCheckbox.checked){
        nomeItem.style.textDecoration = 'line-through';
      } else {
        nomeItem.style.textDecoration = 'none';
      }
    })
  
    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
  
    itemDaLista.appendChild(containerItemDaLista);
    itemDaLista.appendChild(dataItem);
  
    return itemDaLista;
  }