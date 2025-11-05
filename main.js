/* In questo esercizio, utilizzerai Promise.all() per creare la funzione getDashboardData(query), che accetta una città come input e recupera simultaneamente:

1 Nome completo della città e paese da /destinations?search=[query]
(result.name, result.country, nelle nuove proprietà city e country).

2 Il meteo attuale da /weathers?search={query}
(result.temperature e result.weather_description nella nuove proprietà temperature e weather).

3 Il nome dell’aeroporto principale da /airports?search={query}
(result.name nella nuova proprietà airport).
*/ 

//iniziamo salvando l'url base dei nostri endpoint in una costante 
// `http://localhost:3333`;

//adesso per semplificare il codice creo la funzione di supporto fetchJson

async function fetchJson(url) {
  const response = await fetch(url)
  const result = await response.json()
  return result
  
}


async function getDashboardData(query) {
  console.log(`Caricando la dashboard per la query ${query}`)
  //adesso con la funzione di supporto preparo le varie fetch
  const destinationPromise = fetchJson(`http://localhost:3333/destinations?search=${query}`)

  const weatherPromise = fetchJson(`http://localhost:3333/weathers?search=${query}`)

  const airportsPromise = fetchJson(`http://localhost:3333/airports?search=${query}`)



  
}  



getDashboardData('london')


/* getDashboardData('london')
    .then(data => {
        console.log('Dasboard data:', data);
        console.log(
            `${data.city} is in ${data.country}.\n` +
            `Today there are ${data.temperature} degrees and the weather is ${data.weather}.\n`+
            `The main airport is ${data.airport}.\n`
          );
        })
        .catch(error => console.error(error));*/