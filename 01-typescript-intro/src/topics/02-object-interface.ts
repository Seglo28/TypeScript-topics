
const skills: String[] = ['Bash', 'Counter', 'Healing'];

interface Character {
 name: String;
 hp: number;
 skills: String[];
 hometown?: String;
}

const strider: Character = {
    name: 'strider',
    hp: 100,
    skills: ['Bash', 'Counter']
};

strider.hometown = 'Arendel';



console.table(strider)



export {};