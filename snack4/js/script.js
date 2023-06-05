// array delle squadre
const squadre = [
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Lazio',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Napoli',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Fiorentina',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Torino',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Sassuolo',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Monza',
        punti: 0,
        falli: 0
    }
];

// funzione per generare un numero random
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ciclo per assegnare il numero random a punti e falli
for(let i = 0; i < squadre.length; i++){
    squadre[i].punti = numRandom(1, 100);
    squadre[i].falli = numRandom(1, 200);
}

console.log(squadre);

// creo un nuovo array newSquadre con solo le proprietà nome e falli di ogni squadra utilizzando la destrutturazione degli oggetti
const newSquadre = squadre.map(({ nome, falli }) => ({ nome, falli }))

console.log(newSquadre)
