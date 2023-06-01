const invitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const segnaposto = invitati.map((item, index) => {

    let oggetti ={
        'tavolo': 'Tavolo Vip',
        'name': item,
        'value': index + 1
    }

    return oggetti
})


for(let i=0; i<segnaposto.length; i++){
    let risultato_segnaposto = segnaposto[i];
    console.log(risultato_segnaposto.tavolo)
    console.log(risultato_segnaposto.name)
    console.log(risultato_segnaposto.value)

}