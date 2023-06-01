// creo un array con i dati della classe
const classe = [
    {
        'id': 213,
        'name': 'Marco della Rovere',
        'grades': 78
    },
    {
        'id': 110,
        'name': 'Paola Cortellessa',
        'grades': 96
    },
    {
        'id': 250,
        'name': 'Andrea Mantegna',
        'grades': 48
    },
    {
        'id': 145,
        'name': 'Gaia Borromini ',
        'grades': 74
    },
    {
        'id': 196,
        'name': 'Luigi Grimaldello',
        'grades': 68
    },
    {
        'id': 102,
        'name': 'Piero della Francesca',
        'grades': 50
    },
    {
        'id': 120,
        'name': 'Francesca da Polenta',
        'grades': 84
    }
];


// funzione per visualizzare i nomi degli studenti in maiuscolo
const uppercaseName = classe.map((elem) => {
    let name_stud = elem.name.toUpperCase();
    return name_stud
});

// ciclo l'array generato e stampo in console il risultato
for(let i=0; i<uppercaseName.length; i++){
    let upName = uppercaseName[i];
    console.log(upName);
}

// creo un array di tutti gli studenti che hanno un totale di voti superiore a 70
const superiore70 = classe.filter((elem) => {
    if(elem.grades > 70){
        return true;
    }

    return false;
});

//ciclo l'array generato e stampo in console il risultato
for(let i=0; i<superiore70.length; i++){
    let up70 = superiore70[i];
    console.log(up70.id);
    console.log(up70.name.toUpperCase());
    console.log(up70.grades);

}

// creo un array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const id120 = classe.filter((elem) => {

    if(elem.id > 120 && elem.grades > 70){
        return true;
    }

    return false;
});

// ciclo l'array generato e stampo in console il risultato
for(let i=0; i<id120.length; i++){
    let upid120 = id120[i];
    console.log(upid120.id);
    console.log(upid120.name.toUpperCase());
    console.log(upid120.grades);

};