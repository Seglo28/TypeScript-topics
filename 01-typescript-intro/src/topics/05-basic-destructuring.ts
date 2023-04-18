
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: String;
    details: Details;
}

interface Details {
    author: String;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Can't remember to forget you",
    details: {
        author: "Shakira feat. Rihanna",
        year: 2014
    }
}

//En la desestructuración se puede tomar ciertas piezas que me interesan

const {song} = audioPlayer;
const {author, year} = audioPlayer.details; 

console.log('Sonando: "'+song + '" de ' +author+ ', que se estreno en ' +year+'.');

// Desestructuración de arreglos


const guerreros : String [] = ['Goku', 'Trunks', 'Veggeta'];

const trunks : String = guerreros[3] || 'nulo, era Krillin pero murio.-';

console.log('El guerrero Z es '+trunks);


const [ , , , , Picollo = 'Este es el Daimaku'] : String[] = ['Veggeta', 'Trunks', 'Goku', 'Goten'];

console.log(Picollo);


