// creo un array di oggetti con i nomi dei componenti del tavolo
const invitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// creo una nuova array dove aggiungo nome tavolo invitati e il posto
const segnaposto = invitati.map((item, index) => {

    let oggetti ={
        'tavolo': 'Tavolo Vip',
        'name': item,
        'value': index + 1
    }

    return oggetti
})

// ciclo l'array generato e stampo in console il risultato
for(let i=0; i<segnaposto.length; i++){
    let risultato_segnaposto = segnaposto[i];
    console.log(risultato_segnaposto.tavolo)
    console.log(risultato_segnaposto.name)
    console.log(risultato_segnaposto.value)

}