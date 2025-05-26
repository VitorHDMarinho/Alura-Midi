const listaDeTeclas = document.querySelectorAll('.tecla');


function tocaSom(seletorAudio){
   const elemento =  document.querySelector(seletorAudio);
   if(elemento && elemento.localName == 'audio'){
    elemento.play();
   }
   else{
    console.log('Elemento não encontrado ou seletor inválido');
   }
   
}

for(let i = 0; i < listaDeTeclas.length; i++){
    
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        console.log(evento.code);
        if(evento.code == 'Space' || evento.code == 'Enter'){
            listaDeTeclas[i].classList.add('ativa');
        }
    }

    tecla.onkeyup = function(evento){
            listaDeTeclas[i].classList.remove('ativa');
        }
        
    }

    


