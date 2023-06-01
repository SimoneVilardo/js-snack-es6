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
]

// funzione per visualizzare i nomi degli studenti in maiuscolo
const uppercaseName = classe.map((elem) => {
    let name_stud = elem.name.toUpperCase();
    console.log(name_stud)
    return name_stud
})

console.log(uppercaseName)