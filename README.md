API con architettura Restful per sviluppo applicazione web

Lo sviluppo è stato realizzato in ambiente Linux

L'app si compone di due parti: -Backend -Frontend

-Il Backend è stato realizzato tramite framework Laravel attraverso script in php. Per il passaggio dei dati è stato creato un array con i seguenti campi: {id, title, description, due_date, priority}

id: identificatore univoco del Task title: nome del task descrizione: breve descrizione del task date: data di scadenza pririty: importanza del task

(è definito in Task.php)

Per operare col Task è stato creato un Controller (file: TaskController.php) Questo file è completo di: costruttore e operazioni di CRUD (create, read, update, destroy) e salvataggio su array. Le viste con la formattazione in php dei vari task, sono contenute nell directory (./app/views)

Sono state create così le rotte importando il TaskController (file: web.php) con tutti gli endpoint, uno per ogni operazione (GET, POST, PUT, DELETE).

Una volta realizzato tutto quanto viene avviato singolarmente col comando: php artisan serve, raggiungibile con URL: localhost:8000.

Per consentire l'invio e la ricezione dei dati è stato utilizzato il sistema CORS, tramite la creazione del middleware Cors e l'inserimento del relativo collegamento (file: Kernel.php)

-Il frontend è stato realizzato tramite framework Angular CLI per comunicare con la Rest Api, sviluppato tramite Node.js attraverso script in javascript. Tutte le dipendenze sono state gestite attraverso npm.

L'interfaccia quindi è realizzata in HTML5 e CCS con i relativi file per ogni operazione coi Task (file: task-edit.component.ts; task-form.component.ts; task-list.component.ts) con altrettanti file per organizzare la formattazione HTML e lo stile con CSS.

Sono state create così le rotte per seguire le varie operazioni dei Task (file: app.routes.ts)

Successivamente sono create le fetch API per comunicare con il serve tramite chiamate Http (file task.service.ts).

Il frontend così è stato eseguto tramite il comando: ng serve. Con URL: localhost:4200.

Per fare le varie prove è stato utilizzato Postman, testando così gli endpoint e le modifiche apportate ai Task.

Commenti: Il Backend in Laravel l'ho completato con gli endpoint per gestire i task e gli accessi all'array. Il frontend ho trovato qualche difficoltà nell'aggiornamento delle varie attività e la non corretta visualizzazione delle viste. Docker ho provato pure ad utilzzarlo ma dà qualche problema nella compilazione dei composer.

Manuale di utilizzo

Per ottenere il progetto basta scaricare tutta la repository e avviare la parte server e quella client con i rispettivi comandi da linea di comando (sono entrambi funzionandi sia in ambiente Linux, sia Windows):

1)Backend: 
cd ./Backend 
php artisan serve

per visualizzare il server: localhost:8000

2)frontendo 
cd .
/frontend ng serve

(eventualmente cambiare la directory con il relativo percorso)
