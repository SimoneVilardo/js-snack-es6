const arrayBici = [
    {
        nome: 'Bianchi',
        peso: 24
    },
    {
        nome: 'Atala',
        peso: 50
    },
    {
        nome: 'Olmo',
        peso: 30
    },
    {
        nome: 'Casati',
        peso: 36
    },
    {
        nome: 'Cinelli',
        peso: 18
    },
    {
        nome: 'Colnago',
        peso: 8
    },
];


let pesoMinore = arrayBici[0];

arrayBici.forEach(({peso , nome}) => {
    if(peso < pesoMinore.peso){
        pesoMinore = {peso, nome}
    }
}
)

// Stampa in console della bici con peso minore
console.log(`La bici con peso minore è la ${pesoMinore.nome} con un peso di ${pesoMinore.peso} kg.`);
