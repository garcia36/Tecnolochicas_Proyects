const nombre = 'Aide';
const age = 21;
const likesMusic = true;

const nombreElement = document.querySelector("#name");
const ageElement = document.querySelector("#age");
const likesMusicElement = document.querySelector("#likesMusic");

nombreElement.textContent = nombre;
ageElement.textContent = age;
if(likesMusic === true){
    likesMusicElement.textContent = ' me encanta la musica';
}else{
    likesMusicElement.textContent = 'no me encanta la musica';
}
//teclas seleccionadas funcionales
const WHITE_KEYS = ['z','x','c','v','b','n','m'];
const BLACK_KEYS = ['s','d','f','g','h'];

//info html de las teclas
const keys =  document.querySelectorAll('.key');
const whiteKeys =  document.querySelectorAll('.key.white');
const blackKeys =  document.querySelectorAll('.key.black');

const playNote = (key) => {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.play();
       // Añadimos clase active
       key.classList.add('active');
       // Agregamos un event listener al estado ended del evento keydown
       noteAudio.addEventListener('ended', () => {
         // Cuando termine de reproducirse el sonido, removemos clase active
         key.classList.remove('active');
       });
}
document.addEventListener('keydown',(e)=>{//z
    //si se repite el evento
    if(e.repeat) return;

    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);//0
    const blackKeyIndex = BLACK_KEYS.indexOf(key);//-1 no existe dato

    if(whiteKeyIndex > -1){
        playNote(whiteKeys[whiteKeyIndex]);//whiteKeys[0]
    }
    if(blackKeyIndex > -1){
        playNote(blackKeys[blackKeyIndex]);
    }
});



