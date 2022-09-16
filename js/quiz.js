import {
    msgInfo,
    msgPrimary,
    msgSuccess,
    msgWarning,
    msgDanger,
    showAlert,
    hideAlert,
    fnc,
    CLS,
    fi_fullscreen,
    fi_alert,
    fi_alert_header,
    fi_alert_close,
    fi_panel_body,
    fi_panel_footer,
    fi_qs,
    li,
    li_a
} from './module.js';
// showAlert("Avviso", "Testing", "var(--success)", 'success');
fi_alert_close.addEventListener('click', (e) => {
    hideAlert()
});
var punteggio = new Number();
/*
switch(parseInt(qs)) {
    case 1: structureQuestion("Qual è l'olio migliore per friggere ?"); break;
    case 2: structureQuestion("Cosa significa punto fumo olio ?"); break;
    default: structureQuestion(`Fine Quiz. Hai totalizzato: ${punteggio}`); break;
}// ./switch
*/
let multiple_cucina = [
    {
        id: 3,
        domanda: "Per evitare che l'olio vada sulle mani in frittura. Cosa fare?",
        risposta1: "Coprire con un coperchio",
        risposta2: "Aggiungere una spolverata di sale grosso prima di versare l'olio",
        giusta: 2
    }, {
        id: 2,
        domanda: "La temperatura ottimale per friggere è?",
        risposta1: "190°",
        risposta2: "170°",
        giusta: 2
    }, {
        id: 1,
        domanda: "Cos'è il punto fumo riferito all'olio?",
        risposta1: "Il limite prima di evaporare l'acquosità e bruciare l'olio",
        risposta2: "Temperatura dell'olio",
        giusta: 1
    }, {
        id: 0,
        domanda: "l'olio migliore per friggere?",
        risposta1: "Arachidi",
        risposta2: "Girasole",
        giusta: 1
    }, {
        id: 4,
        domanda: "Per evitare cattivi odori in frittuta. Cosa fare?",
        risposta1: "Aprire le finestre",
        risposta2: "Aggiungere delle fettine di mela nell'olio",
        giusta: 2
    }, {
        id: 5,
        domanda: "Il sale è un inibitore del lievito?",
        risposta1: "Sì",
        risposta2: "No",
        giusta: 1
    }, {
        id: 6,
        domanda: "Cos'è il Poolish?",
        risposta1: "Fac-simile Lievitino",
        risposta2: "E' solo un impasto per la pizza",
        giusta: 1
    }
];
let multiple_informatica = [
    {
        id: 3,
        domanda: "Cosa si intende con l'acronimo ROM?",
        risposta1: "Memoria solo di lettura",
        risposta2: "Memoria accesso casuale",
        giusta: 1
    }, {
        id: 2,
        domanda: "Cosa si intende con l'acronimo RAM?",
        risposta1: "Memoria solo di lettura",
        risposta2: "Memoria accesso casuale",
        giusta: 2
    }, {
        id: 1,
        domanda: "Cosa sono Macintosh, Windows e Linux Kali?",
        risposta1: "Gestionali",
        risposta2: "OS",
        giusta: 2
    }, {
        id: 0,
        domanda: "HTTPS è?",
        risposta1: "Protocollo non di sicurezza",
        risposta2: "Protocollo di sicurezza",
        giusta: 2
    }, {
        id: 4,
        domanda: "Cosa sin intende con l'acronimo CPU?",
        risposta1: "Processore per PC",
        risposta2: "Capacità HD",
        giusta: 1
    }, {
        id: 5,
        domanda: "1MB è maggiore di 1GB?",
        risposta1: "No",
        risposta2: "Sì",
        giusta: 1
    }
];
let multiple_date_importanti = [
    {
        id: 3,
        domanda: "La prima guerra mondiale",
        risposta1: "28 luglio 1914",
        risposta2: "28 luglio 1915",
        giusta: 1
    }, {
        id: 2,
        domanda: "La seconda guerra mondiale?",
        risposta1: "01 settembre 1940",
        risposta2: "01 settembre 1939",
        giusta: 1
    }, {
        id: 1,
        domanda: "La scoperta dell'America?",
        risposta1: "12 ottobre 1492",
        risposta2: "12 ottobre 1592",
        giusta: 1
    }, {
        id: 0,
        domanda: "La festa tutti i santi?",
        risposta1: "2 novembre",
        risposta2: "1 novembre",
        giusta: 2
    }
];
let ar_cucina = new Array();
ar_cucina.push(multiple_cucina);
let ar_informatica = new Array();
ar_informatica.push(multiple_informatica);
let ar_date_importanti = new Array();
ar_date_importanti.push(multiple_date_importanti);
// In base alla scelta attivo la scritta es. cucina, informatica o date importanti
for(var a=0; a<li_a.length; a++) {
    const current = li_a.length-a-1;
    li_a[current].addEventListener('click', function() {
        //structureQuestion(parseInt(current), parseInt(current+1));
        var select_a = parseInt(this.getAttribute('data-id1'));
        switch(select_a) {
            case 0:
                structureQuestion(parseInt(current), "Cucina", 0);
            break;
            case 1:
                structureQuestion(parseInt(current), "Informatica", 1);
            break;
            case 2:
                structureQuestion(parseInt(current), "Date importanti", 2);
            break;
            default: showAlert("AVVISO", "Al momento nessun evento", "var(--success)", "success"); break;
        }// ./switch
    });
}// ./for
let div_question = document.createElement('div');
let div_question_button = document.createElement('div');
let div_question_btn_1 = document.createElement('div');
let div_question_btn_2 = document.createElement('div');
let div_question_btn_3 = document.createElement('div');
let div_question_btn_4 = document.createElement('div');
var arr = new Array();
function structureQuestion(active, str, button) {
    'use strict'
    try {
        // throw new Error("Testing");
        for(var deactive=0; deactive<li.length; deactive++) {
            li[deactive].classList.remove('active');
        }// ./for
        li[active].classList.add('active');
        div_question_btn_1.classList.add(...['btn', 'qs-btn-1']);
        div_question_btn_2.classList.add(...['btn', 'qs-btn-2']);
        div_question_btn_3.classList.add(...['btn', 'qs-btn-3']);
        div_question.classList.add('div-question');
        div_question_button.classList.add('div-question-button');
        // div_question_button.appendChild(div_question_btn_1);
        // div_question_button.appendChild(div_question_btn_2);
        div_question_button.appendChild(div_question_btn_3);
        div_question_btn_3.onclick = function() {
        div_question_btn_1.style.setProperty('display', 'block');
        div_question_btn_2.style.setProperty('display', 'block');
        div_question_btn_3.style.setProperty('display', 'none');
            populateArrSelected(parseInt(button));
        }
        fi_qs.innerHTML = `${str}`;
        fi_panel_body.innerHTML = "";
        div_question.innerHTML = "INIZIA...";
        punteggio = new Number();
        div_question_btn_1.style.setProperty('display', 'none');
        div_question_btn_2.style.setProperty('display', 'none');
        div_question_btn_3.style.setProperty('display', 'block');
        div_question_btn_4.style.setProperty('display', 'none');
        fi_panel_body.appendChild(div_question);
        fi_panel_body.appendChild(div_question_button);
    } catch(err) {
        showAlert("ATTENZIONE", `${err.message}`, 'var(--warning)', 'warning');
    }
}// ./structureQuestion()
function populateArrSelected(btn) {
    'use strict'
    try {
        //throw new Error("fnc Populate arr selected");
        switch(btn) {
            case 0:
                for(var populate of ar_cucina[0])
                    arr.push({
                        id: populate.id,
                        domanda: populate.domanda,
                        risposta1: populate.risposta1,
                        risposta2: populate.risposta2,
                        giusta: populate.giusta
                    });
            break;
            case 1:
                for(var populate of ar_informatica[0])
                    arr.push({
                        id: populate.id,
                        domanda: populate.domanda,
                        risposta1: populate.risposta1,
                        risposta2: populate.risposta2,
                        giusta: populate.giusta
                    });
            break;
            case 2:
                for(var populate of ar_date_importanti[0])
                    arr.push({
                        id: populate.id,
                        domanda: populate.domanda,
                        risposta1: populate.risposta1,
                        risposta2: populate.risposta2,
                        giusta: populate.giusta
                    });
            break;
            default: null; break;
        }// ./switch
        questionCucinaMultiple(btn);
    }catch(err) {
        showAlert("ATTENZIONE", `${err.message}`, 'var(--warning)', 'warning');
    }
}
function questionCucinaMultiple(btn) {
    'use strict'
    try {
        //throw new Error("Question cucina");
        if(arr.length > 0) {
            // numero casuale compreso nella lunghezza dell'array
            let casual = Math.floor(Math.random() * arr.length);
            // Inizio la funzione per ordinare i dati in modo crescente dell'array
            const sorter = (a, b) => {
                return a.id - b.id;
            };
            const ar_order = arr => {
                arr.sort(sorter);
            };
            // eseguo ordino in modo crescente
            ar_order(arr);
            // ./numero casuale compreso nella lunghezza dell'array.
            // console.info("Before", ar_question);
            // visualizzo la domanda in modo casuale.
            var question = arr[casual].domanda;
            var risp1 = arr[casual].risposta1;
            var risp2 = arr[casual].risposta2;
            var giusta = arr[casual].giusta;
            // cerco l'id dell'array uguale all'id dell'array trovato casual.
            const index = arr.findIndex(function(id) {
                return id.id === arr[casual].id;
            });
            // elimino l'elemento dall'array.
            for(var ar_n of arr) {
                if(ar_n.id === arr[casual].id) {
                    arr.splice(index, 1);
                }
            // console.info("ar_n_id -> ", ar_n.id, "casual -> ", casual)
            }// ./for
            // console.info("After", ar_question);
            div_question_btn_1.classList.add(...['btn', 'qs-btn-1']);
            div_question_btn_1.innerHTML = risp1;
            div_question_btn_1.onclick = function() {
                if(giusta === 1) {
                    punteggio++;
                }
                questionCucinaMultiple(btn, arr);
            }
            div_question_btn_2.classList.add(...['btn', 'qs-btn-2']);
            div_question_btn_2.innerHTML = risp2;
            div_question_btn_2.onclick = function() {
                if(giusta === 2) {
                    punteggio++;
                }
                questionCucinaMultiple(btn, arr);
            }
            div_question_btn_3.classList.add(...['btn', 'qs-btn-3']);
            div_question.classList.add('div-question');
            div_question_button.classList.add('div-question-button');
            div_question_button.appendChild(div_question_btn_1);
            div_question_button.appendChild(div_question_btn_2);
            div_question_button.appendChild(div_question_btn_3);
            div_question_btn_3.onclick = function() {
                questionCucinaMultiple(btn, arr);
            }
            fi_panel_body.innerHTML = ""; 
            div_question.innerHTML = question;
            fi_panel_body.appendChild(div_question);
            fi_panel_body.appendChild(div_question_button);
        } else {
            // quando l'array è a 0 fermo il processo.
            div_question_btn_1.classList.add(...['btn', 'qs-btn-1']);
            div_question_btn_2.classList.add(...['btn', 'qs-btn-2']);
            div_question_btn_3.classList.add(...['btn', 'qs-btn-3']);
            div_question.classList.add('div-question');
            div_question_button.classList.add('div-question-button');
            div_question_button.appendChild(div_question_btn_1);
            div_question_button.appendChild(div_question_btn_2);
            div_question_button.appendChild(div_question_btn_3);
            div_question_button.appendChild(div_question_btn_4);
            fi_panel_body.innerHTML = ""; 
            div_question.innerHTML = "HAI COMPLETATO IL QUIZ...";
            div_question_btn_4.style.setProperty('display', 'block');
            div_question_btn_4.innerHTML = `Hai totalizzato ${punteggio}`;
            div_question_btn_1.style.setProperty('display', 'none');
            div_question_btn_2.style.setProperty('display', 'none');
            fi_panel_body.appendChild(div_question);
            fi_panel_body.appendChild(div_question_button);
            return false;
        }// ./if > 1
    } catch(err) {
        showAlert("ATTENZIONE", `${err.message}`, 'var(--warning)', 'warning');
    }
}// ./questionMultiple