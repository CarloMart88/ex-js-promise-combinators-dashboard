In questo esercizio, utilizzerai Promise.all() per creare la funzione getDashboardData(query), che accetta una città come input e recupera simultaneamente:

1 Nome completo della città e paese da /destinations?search=[query]
(result.name, result.country, nelle nuove proprietà city e country).

2 Il meteo attuale da /weathers?search={query}
(result.temperature e result.weather_description nella nuove proprietà temperature e weather).

3 Il nome dell’aeroporto principale da /airports?search={query}
(result.name nella nuova proprietà airport).

Utilizzerai Promise.all() per eseguire queste richieste in parallelo e poi restituirai un oggetto con i dati aggregati.

!!!Attenzione: le chiamate sono delle ricerche e ritornano un’array ciascuna, di cui devi prendere il primo risultato (il primo elemento).!!!

Scrivi la funzione getDashboardData(query), che deve:
Essere asincrona (async).

Utilizzare Promise.all() per eseguire più richieste in parallelo.
Restituire una Promise che risolve un oggetto contenente i dati aggregati.
Stampare i dati in console in un messaggio ben formattato.
Testa la funzione con la query "london"
