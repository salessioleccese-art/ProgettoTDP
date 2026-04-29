function creaSezione(titoloTesto, descrizioneTesto) {
    let sezione = document.createElement("section");
    sezione.classList.add("sezione");

    let h2 = document.createElement("h2");
    h2.textContent = titoloTesto;
    h2.classList.add("titoloSezione");
    h2.classList.add("textJ");

    let p = document.createElement("p");
    p.innerHTML = descrizioneTesto;
    p.classList.add("testoSezione");
    p.classList.add("textJ");

    let containerCard = document.createElement("div");
    containerCard.classList.add("contenitoreCard");

    sezione.appendChild(h2);
    sezione.appendChild(p);
    sezione.appendChild(containerCard);
    
    return sezione;
}
function creaCard(sezione, titoloTesto, immagine, descrizione) {
    let container = sezione.querySelector(".contenitoreCard");

    let card = document.createElement("div");
    card.classList.add("card");

    let h3 = document.createElement("h3");
    h3.textContent = titoloTesto;

    let img = document.createElement("img");
    img.src = immagine;

    let p = document.createElement("p");
    p.innerHTML = descrizione;

    card.appendChild(h3);
    card.appendChild(img);
    card.appendChild(p);
    container.appendChild(card);
}
// funzione per creare la nuova pagina con i segnali
function apriSegnaletica() {
    let main = document.querySelector("main");
    main.innerHTML = "";

    let titolo = document.createElement("h1");
    titolo.textContent = "⚠️Segnaletica⚠️";
    titolo.classList.add("h1J");
    main.appendChild(titolo);

    let sezionePericoli = creaSezione("Segnali di Pericoli stradali","Questi cartelli servono per indicare al conducente di prestare attenzione alla guida perché potrebbero esserci tratti di strada pericolosi.");
    main.appendChild(sezionePericoli);

    creaCard(sezionePericoli, "Strada deformata", "img/StradaDeformata.png", "Segnale che indica un tratto di strada deformato o dissestato, quindi è necessario moderare la velocità.");
    creaCard(sezionePericoli, "Dosso", "img/Dosso.png", "Segnale che preannuncia un dosso a circa 150 metri, cioè un tratto di strada con scarsa visibilità. È obbligatorio moderare la velocità.");
    creaCard(sezionePericoli, "Cunetta", "img/Cunetta.png", "Segnale che indica una cunetta, cioè una discesa seguita da una salita. In caso di pioggia può accumularsi acqua.");
    creaCard(sezionePericoli, "Curva pericolosa a destra o sinistra", "img/CurvaPericolosa.png", "Segnale che preannuncia una curva pericolosa con visibilità limitata. È vietato fermarsi, sostare o fare inversione di marcia.");
    creaCard(sezionePericoli, "Doppia curva pericolosa", "img/DoppiaCurvaPericolosa.png", "Segnale che indica una serie di curve pericolose ravvicinate.");
    creaCard(sezionePericoli, "Passaggio a livello con barriere", "img/passaggioBarriera.png", "Segnale che indica un passaggio a livello con barriere che si chiudono in presenza del treno.");
    creaCard(sezionePericoli, "Passaggio a livello senza barriera", "img/senzaBarriera.png", "segnale che indica un pasasggio a livello senza barriera o semi barriere, pestare attenzione e moderare la velocità");
    creaCard(sezionePericoli, "Attraversamento ciclabile", "img/attraversamentoCiclabile.png", " Segnale che indica un attraversamento riservato alle biciclette.");
    creaCard(sezionePericoli, "Attraversamento pedonale", "img/attraversamentoPedonale.webp", "Segnale che indica un attraversamento riservato ai pedoni.(questo è molto piccolo perche assomiglia al cazzo di qualcuno");
    creaCard(sezionePericoli, "Attraversamento tranviario", "img/attraversamentoTranviario.png", "Segnale che indica la presenza di un attraversamento del tram.");
    creaCard(sezionePericoli, "Discesa pericolosa", "img/discesaPericolosa.png", "Segnale che indica una discesa ripida. È necessario inserire una marcia bassa e frenare con attenzione.");

    let sezionePrecedenza = creaSezione("Segnali stradali di precedenze","questi cartelli servono per regolare le precedenze in strada" );
    main.appendChild(sezionePrecedenza);

    creaCard(sezionePrecedenza, "intersezione precedenza a destra", "img/intersezioneADestra.png", "Segnale che preannuncia che tra 150m si incontrerà un incrocio in cui vige la regola della precedenza a destra");
    creaCard(sezionePrecedenza, "Intersezione con diritto di precedenza", "img/dirittoPrecedenza.png", "Segnale che preannuncia che tra 150,m si incontrerà una strada di minor importanza, nel quale il conducente ha il diritto di precedenza");
    creaCard(sezionePrecedenza, "Intersezione a T con diitto di precedenza", "img/intersezioneT.png", "Segnale che preannuncia che si incontrerà un incrocio a T, con una strada di minor importanza, nella quale il conducente ha la precedenza");
    creaCard(sezionePrecedenza,"Confluenza a destra e sinistra", "img/confluenza.jpg", "Segnale che indica la presenza di una strada che si immette da destra o da sinistra nella carreggiata principale. Prestare attenzione alla possibile immissione di veicoli.");
    creaCard(sezionePrecedenza, "Dare precedenza", "img/darePrecedenza.png", "Segnale che impone di dare la precedenza ai veicoli provenienti da altre strade prima di impegnare l'incrocio.");
    creaCard(sezionePrecedenza,"Stop", "img/stop.png", "Segnale che obbliga ad arrestare completamente il veicolo e dare precedenza prima di ripartire.");
    creaCard(sezionePrecedenza, "Diritto di precedenza", "img/dirittoPrecedenza.png", "Segnale che indica che la strada percorsa ha diritto di precedenza rispetto alle altre strade che si incrociano.");
    creaCard(sezionePrecedenza, "Senso unico alternato", "img/sensoUnicoAlternato.webp", "Segnale che indica un tratto di strada a senso unico alternato regolato da semaforo o movieri.");
    creaCard(sezionePrecedenza, "Dare precedenza senso unico alternato", "img/darePrecedenzaAlternato.png", "Segnale che indica la presenza di un senso unico alternato e l'obbligo di dare precedenza ai veicoli provenienti dall'altro senso.");
    main.appendChild(sezionePrecedenza);

    let sezioneDivieto = creaSezione("Segnali stradali di divieto","questi cartelli servono per imporredivieti nelle strade");
    main.appendChild(sezioneDivieto);

    creaCard(sezioneDivieto, "Divieto di transito", "img/divietoTransito.png", "Segnale che vieta il transito a qualsiasi veicolo in entrambe le direzioni.");
    creaCard(sezioneDivieto, "Divieto di senso unico", "img/divietoSenso.png", "Segnale che indica il divieto di entrare in una strada a senso unico nel verso contrario.");
    creaCard(sezioneDivieto, "Divieto di sorpasso", "img/divietoSorpasso.png", "Segnale che vieta il sorpasso tra veicoli in movimento.");
    creaCard(sezioneDivieto, "Divieto di sorpasso per veicoli pesanti", "img/divietoSorpassoPesanti.jfif", "Segnale che vieta il sorpasso ai veicoli con massa a pieno carico superiore a quella indicata.");
    creaCard(sezioneDivieto, "Distanziamento minimo", "img/distanziamentoMinimo.png", "Segnale che impone di mantenere una distanza minima tra veicoli in movimento.");
    creaCard(sezioneDivieto, "Limite massimo di velocità", "img/limiteVelocita.png", "Segnale che indica la velocità massima consentita sulla strada.");
    creaCard(sezioneDivieto, "Divieto di segnalazioni acustiche", "img/divietoClacson.png", "Segnale che vieta l’uso del clacson salvo casi di pericolo immediato.");
    creaCard(sezioneDivieto, "Divieto di transito pedoni, biciclette e trazione animale", "img/divietoPedoniBici.png", "Segnale che vieta il transito a pedoni, biciclette e veicoli a trazione animale.");
    creaCard(sezioneDivieto, "Divieto di transito a braccio", "img/divietoBraccio.png", "Segnale che vieta il transito ai veicoli a mano o trasportati a braccia.");
    creaCard(sezioneDivieto, "Divieto di transito motocicli", "img/divietoMoto.png", "Segnale che vieta il transito ai motocicli.");
    creaCard(sezioneDivieto, "Divieto di transito a tutti gli autoveicoli", "img/divietoAuto.png", "Segnale che vieta il transito a tutti gli autoveicoli.");
    main.appendChild(sezioneDivieto);

    let sezioneObbligo = creaSezione("Segnali di obbligo", "questi cartelli servono per far circolare i veicoli in modo corretto");
    main.appendChild(sezioneObbligo);
    creaCard(sezioneObbligo, "Obbligo generico", "img/obbligoGenerico.png", "Segnale che impone al conducente di rispettare le indicazioni obbligatorie presenti sulla strada.");
    creaCard(sezioneObbligo, "Direzioni consentite", "img/direzioniConsentite.png", "Segnale che indica le uniche direzioni in cui è consentito proseguire.");
    creaCard(sezioneObbligo, "Passaggio obbligatorio", "img/passaggioObbligatorio.png", "Segnale che obbliga a passare nel punto indicato per motivi di sicurezza.");
    creaCard(sezioneObbligo, "Passaggio obbligatorio pedoni", "img/passaggioPedoni.png", "Segnale che indica il percorso obbligatorio riservato ai pedoni.");
    creaCard(sezioneObbligo, "Rotatoria obbligatoria", "img/rotatoria.png", "Segnale che obbliga a percorrere la rotatoria seguendo il senso indicato.");
    creaCard(sezioneObbligo, "Velocità minima obbligatoria", "img/velocitaMinima.png", "Segnale che impone di non scendere sotto la velocità minima indicata.");
    creaCard(sezioneObbligo, "Catene da neve obbligatorie", "img/cateneNeve.jfif", "Segnale che obbliga ad avere catene da neve montate o a bordo del veicolo.");
    creaCard(sezioneObbligo, "Percorso pedonale e ciclabile", "img/pedoniCiclabile.png", "Segnale che indica un percorso obbligatorio condiviso tra pedoni e ciclisti.");
    creaCard(sezioneObbligo, "Pista ciclabile", "img/ciclabile.png", "Segnale che indica il percorso obbligatorio riservato ai ciclisti.");
    creaCard(sezioneObbligo, "Marciapiede obbligatorio", "img/marciapiede.png", "Segnale che obbliga i pedoni a utilizzare il marciapiede.");
    creaCard(sezioneObbligo, "Percorso per quadrupedi", "img/quadrupedi.png", "Segnale che indica il percorso obbligatorio per animali a trazione animale o quadrupedi.");
    creaCard(sezioneObbligo, "Dogana", "img/dogana.png", "Segnale che indica la presenza di un posto di controllo doganale.");
    creaCard(sezioneObbligo, "Polizia", "img/polizia.png", "Segnale che indica la presenza di un posto di controllo della polizia.");
    creaCard(sezioneObbligo, "Stazione di servizio", "img/stazione.png", "Segnale che indica la presenza di una stazione di servizio nelle vicinanze.");
    main.appendChild(sezioneObbligo);

    let btnHome = document.createElement("button");
    btnHome.textContent = "Torna alla Home";

    btnHome.onclick = function () {
        location.reload();
    };

    main.appendChild(btnHome);
}

function apriPatenti() {
    let main = document.querySelector("main");
    main.innerHTML = "";

    let titolo = document.createElement("h1");
    titolo.textContent = "patenti";
    titolo.classList.add("h1J");
    main.appendChild(titolo);

    let sezionePatenti = creaSezione("categorie Per le Patenti", "E' vietato condurre qualsiasi veicolo a motore senza avere la patente.<br>" + "Le patenti vengono divise in categorie in base all'età e al veicolo che si può condurre.");
    main.appendChild(sezionePatenti);
    creaCard(sezionePatenti, "AM", "img/AM.png", "Con la patente AM si possono condurre:<br>" +"-Ciclomotori a 2 o 3 ruote con velocità max 45 km/h<br>" + "-Quadricicli leggeri con massa a vuoto 425 kg<br>" + "-Si può prendere dall'età di 14 anni");
    creaCard(sezionePatenti, "A1", "img/A1.avif", "Con la patente A1 si possono condurre:<br>" + "-Motocicli con cilindrata 125 cm3, con potenza massima di 11kW <br>" + "-Tricicli motore con potenza 15 kW<br>" + "-Macchine agricole con velocità massima 45 km/h, non superano i limiti di sagoma e di massa previsti per i motoveicoli (larghezza max 1,60 m, lunghezza max 4,00 m, altezza max 2,50 m e massa max 2,5 t).")
    creaCard(sezionePatenti, "A2", "img/A2.jpg", "con la patente A1 si puo condurre: <br>" + "-Motocicli con potenza massima 35 kW")
    creaCard(sezionePatenti, "A", "img/A.jpg", "Con la patente A si può condurre: <br>" + "-Tutti i motocicli, senza limiti <br>" + "-Si può prendere a 24 anni o a 20 anni se hai la patente A2 da 2 anni");
    creaCard(sezionePatenti, "B1", "img/B1.jpg", "Con la patente B1 si possono condurre:<br>" + "-Quadricicli non leggeri con potenza fino a 15 kW<br>" + "-Velocità massima fino a 80 km/h<br>" + "-Si può conseguire a partire da 16 anni");
    creaCard(sezionePatenti, "B", "img/B.jpg", "Con la patente B si possono condurre:<br>" + "-Autoveicoli fino a 3500 kg e max 9 posti totali<br>" + "-Rimorchio leggero (fino a 750 kg) o superiore se il complesso non supera 3500 kg<br>" + "-Macchine agricole e macchine operatrici comuni");
    creaCard(sezionePatenti, "B96", "img/B96.jpg", "Con la patente B96 si possono condurre:<br>" + "-Complessi di veicoli (motrice B + rimorchio)<br>" + "-Massa massima autorizzata del complesso fino a 4250 kg");
    creaCard(sezionePatenti, "BE", "img/BE.jpg", "Con la patente BE si possono condurre:<br>" + "-Complessi di veicoli con motrice categoria B<br>" + "-Rimorchio con massa fino a 3500 kg<br>" + "-Massa totale del complesso fino a 7000 kg");


    let btnHome = document.createElement("button");
    btnHome.textContent = "Torna alla Home";
    btnHome.onclick = function () {
        location.reload();
    };
    main.appendChild(btnHome);
}

function apriInfrazioni() {
    let main = document.querySelector("main");
    main.innerHTML = "";

    let sezioneInfrazione = creaSezione("INfrazioni stradali", "Nel codice stradale ci sono varie categorie di infrazioni che portano a una perdita di punti al conducente.");
    main.appendChild(sezioneInfrazione);
    creaCard(sezioneInfrazione, "Eccesso di velocità", "img/velocitaInfrazione.jpg","Superare i limiti di velocità comporta multa e possibile perdita di punti sulla patente.");
    creaCard(sezioneInfrazione, "Uso del cellulare alla guida", "img/cellulare.png","Usare il telefono mentre si guida è molto pericoloso e comporta sanzioni elevate e decurtazione punti.");
    creaCard(sezioneInfrazione, "Mancato uso delle cinture", "img/cintura.jpg","Guidatore e passeggeri devono indossare le cinture di sicurezza, altrimenti si rischia multa.");
    creaCard(sezioneInfrazione, "Passaggio con semaforo rosso", "img/semaforoRosso.jpg","Passare con il rosso è una grave infrazione che mette in pericolo tutti gli utenti della strada.");
    creaCard(sezioneInfrazione, "Guida in stato di ebbrezza", "img/alcol.jpg","Guidare dopo aver bevuto alcolici comporta multe molto alte, sospensione patente e conseguenze penali.");
    creaCard(sezioneInfrazione, "Sosta vietata", "img/sostaVietata.jpg","Parcheggiare in zone vietate o pericolose comporta multa e possibile rimozione del veicolo.");
    creaCard(sezioneInfrazione, "Mancata precedenza", "img/precedenzaInfrazione.jpg","Non rispettare lo stop o il dare precedenza può causare incidenti e sanzioni.");
    creaCard(sezioneInfrazione, "Sorpasso pericoloso", "img/sorpassoPericoloso.jpg","Eseguire sorpassi dove vietato o senza sicurezza comporta multa e perdita punti.");
    creaCard(sezioneInfrazione, "Guida senza patente", "img/senzaPatente.webp","Condurre un veicolo senza patente valida è una violazione molto grave.");
    creaCard(sezioneInfrazione, "Revisione scaduta", "img/revisione.webp","Circolare con revisione non effettuata comporta sanzioni e possibile fermo del veicolo.");
    main.appendChild(sezioneInfrazione);

    let btnHome = document.createElement("button");
    btnHome.textContent = "Torna alla Home";
    btnHome.onclick = function () {
        location.reload();
    };
    main.appendChild(btnHome);

}

function apriAssicurazioni() {
    let main = document.querySelector("main");
    main.innerHTML = "";

    let sezioneAssicurazioni = creaSezione(
        "Assicurazioni e documenti del veicolo",
        "Per circolare su strada è obbligatorio avere documenti e assicurazione in regola. Senza questi si rischiano multe e fermo del veicolo."
    );

    main.appendChild(sezioneAssicurazioni);

    creaCard(sezioneAssicurazioni,"Assicurazione RCA","img/RCA.png", "È obbligatoria per tutti i veicoli. Copre i danni causati a terzi in caso di incidente.");
    creaCard(sezioneAssicurazioni,"Carta di circolazione","img/cartaDiCircolazione.jpg","Documento che certifica l’idoneità del veicolo a circolare su strada.");
    creaCard(sezioneAssicurazioni,"Revisione del veicolo","img/revisione.webp","Controllo periodico obbligatorio per verificare sicurezza e emissioni del veicolo.");
    creaCard(sezioneAssicurazioni, "Bollo auto", "img/bollo.jpg", "Tassa annuale obbligatoria per la proprietà del veicolo.");
    main.appendChild(sezioneAssicurazioni);
    let btnHome = document.createElement("button");
    btnHome.textContent = "Torna alla Home";

    btnHome.onclick = function () {
        location.reload();
    };

    main.appendChild(btnHome);
}

//regex e controlli su il form 
let regexNomeCognome = /^[a-zA-Z]{2,} [a-zA-Z]{2,}$/;
let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.(it|com)$/;
let regexTelefono = /^[0-9]{10}$/;
let regexCodiceFiscale = /^[A-Z0-9]{16}$/;

let regex = {
    "nome": [regexNomeCognome, "Inserisci un nome valido"],
    "telefono": [regexTelefono, "Inserisci un numero di telefono valido"],
    "email": [regexEmail, "Inserisci una email consona"],
    "codiceFiscale": [regexCodiceFiscale, "Inserisci un codice fiscale valido"]
}

let input = document.querySelectorAll("#form input[type='text'], #form select");

input.forEach(campo => {
    campo.addEventListener("blur", function () {

        if (campo.id === "nome") {
            if (campo.value.trim() === "") {
                campo.classList.add("erroreInput");
                campo.classList.remove("inputGiusto");
                document.getElementById("verificaNome").innerText = "Inserire nome e cognome";
            } else if (!regex["nome"][0].test(campo.value)) {
                campo.classList.add("erroreInput");
                campo.classList.remove("inputGiusto");
                document.getElementById("verificaNome").innerText = regex["nome"][1];
            } else {
                campo.classList.add("inputGiusto");
                campo.classList.remove("erroreInput");
                document.getElementById("verificaNome").innerText = "";
            }
        }

        if (campo.id === "telefono") {
            if (campo.value.trim() === "") {
                campo.classList.add("erroreInput");
                campo.classList.remove("inputGiusto");
                document.getElementById("verificaTelefono").innerText = "Inserire numero di telefono";
            } else if (!regex["telefono"][0].test(campo.value)) {
                campo.classList.add("erroreInput");
                campo.classList.remove("inputGiusto");
                document.getElementById("verificaTelefono").innerText = regex["telefono"][1];
            } else {
                campo.classList.add("inputGiusto");
                campo.classList.remove("erroreInput");
                document.getElementById("verificaTelefono").innerText = "";
            }
        }

        if (campo.id === "email") {
            if (campo.value.trim() === "") {
                campo.classList.add("erroreInput");
                campo.classList.remove("inputGiusto");
                document.getElementById("verificaEmail").innerText = "Inserire una email";
            } else if (!regex["email"][0].test(campo.value)) {
                campo.classList.add("erroreInput");
                campo.classList.remove("inputGiusto");
                document.getElementById("verificaEmail").innerText = regex["email"][1];
            } else {
                campo.classList.add("inputGiusto");
                campo.classList.remove("erroreInput");
                document.getElementById("verificaEmail").innerText = "";
            }
        }

        if (campo.id === "codiceFiscale") {
            if (campo.value.trim() === "") {
                campo.classList.add("erroreInput");
                campo.classList.remove("inputGiusto");
                document.getElementById("verificaCodiceFiscale").innerText = "Inserire codice fiscale";
            } else if (!regex["codiceFiscale"][0].test(campo.value)) {
                campo.classList.add("erroreInput");
                campo.classList.remove("inputGiusto");
                document.getElementById("verificaCodiceFiscale").innerText = regex["codiceFiscale"][1];
            } else {
                campo.classList.add("inputGiusto");
                campo.classList.remove("erroreInput");
                document.getElementById("verificaCodiceFiscale").innerText = "";
            }
        }

        if (campo.id === "patente") {
            if (campo.value === "") {
                campo.classList.add("erroreInput");
                campo.classList.remove("inputGiusto");
                document.getElementById("verificaPatente").innerText = "Seleziona una patente";
            } else {
                campo.classList.add("inputGiusto");
                campo.classList.remove("erroreInput");
                document.getElementById("verificaPatente").innerText = "";
            }
        }

    });
});

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let continua = true;
    input.forEach(campo => {
        if (campo.classList.contains("erroreInput") || campo.value.trim() === "") {
            continua = false;
        }
    });

    if (!continua) {
        document.getElementById("messaggioInvia").innerText = "Compila bene tutti i campi";
        return;
    }

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let codiceFiscale = document.getElementById("codiceFiscale").value;
    let patente = document.getElementById("patente").value;

    document.getElementById("messaggioInvia").innerText = "Iscrizione completata con successo!\n" +"Nome: " + nome +"\nEmail: " + email +"\nTelefono: " + telefono +"\nCodice Fiscale: " + codiceFiscale +"\nPatente scelta: " + patente;}
);
        


    

   