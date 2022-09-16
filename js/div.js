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
    fi_panel_footer
} from './module.js';
// msgSuccess("AVVISO", "MSG");
// fnc.msg_success("TITLE", "File script");
// const classi = new CLS;
// classi.cls_msg_success("TITOLO", "MSG");
// inizializzo la class
const classe = new CLS;
// recupero gli elementi dal DOM
let fi_btn_all = document.querySelectorAll('.fi-btn');
let fi_bg = document.querySelectorAll('.bg');
let fi_zoom_image = document.querySelector('.fi-zoom-image');
// ./recupero gli elementi dal DOM
/*
function printer() {
    console.groupCollapsed("PRINT");
        console.info("STAMPA");
    console.groupEnd();
}
*/
function rotationElement(el, title, message) {
    'use strict'
    try {
        for(var i=0; i<fi_btn_all.length; i++) {
            if(i == el) {
                fi_btn_all[el].classList.add('fi-animation');
                fi_panel_footer.style.setProperty('background-color', 'var(--danger)');
                fi_panel_footer.innerHTML = `<br /><h2>${message}</h2>`;
                setTimeout((e) => {
                    fi_btn_all[el].classList.remove('fi-animation');
                    fi_panel_footer.style.setProperty('background-color', 'var(--lightgray)');
                    fi_panel_footer.innerHTML = "";
                }, (2500));
            }// ./if
        }// ./for
    } catch(err) {
        showAlert("ATTENZIONE", `${err.message}`, "var(--warning)", "warning");
    }
}// ./rotationElement()
fi_btn_all[0].addEventListener('click', function() {
    // printer(); // OK
    // fnc.msg_success("TITOLO", "Questa funzione è stata chiamata al click del div"); // OK
    // classe.cls_msg_success("CLASSE", "Messaggio"); // OK
    rotationElement(0, "AVVISO", "Messaggio di prova 1");
})// ./div.click
fi_btn_all[1].addEventListener('click', function() {
    rotationElement(1, "ATTENZIONE", "Messaggio di prova 2");
})// ./div.click
fi_btn_all[2].addEventListener('click', function() {
    rotationElement(2, "QUESTO E'", "Alert a comparsa. INFO");
    showAlert("ALERT", "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.", "var(--info)", 'info');
})// ./div.click
fi_btn_all[3].addEventListener('click', function() {
    rotationElement(3, "QUESTO E'", "Alert a comparsa. SUCCESS");
    showAlert("ALERT", "Message call.", "var(--success)", 'success');
})// ./div.click
fi_btn_all[4].addEventListener('click', function() {
    rotationElement(4, "QUESTO E'", "Alert a comparsa. WARNING");
    showAlert("ALERT", "Message call.", "var(--warning)", 'warning');
})// ./div.click
fi_alert_close.addEventListener('click', (e) => {
    hideAlert()
});
function zoomImage(index) {
    'use strict'
    try {
        for(var d=0; d<fi_bg.length; d++) {
            if(d == index) {
                fi_fullscreen.style.setProperty('display', 'block');
                var bg_data_id1 = fi_bg[index].getAttribute('data-id1');
                fi_zoom_image.style.setProperty('display', 'block');
                fi_zoom_image.style.setProperty('background-image', `url(${bg_data_id1})`);
                fi_zoom_image.style.setProperty('background-repeat', 'no-repeat');
                fi_zoom_image.style.setProperty('background-position', 'center center');
                fi_zoom_image.style.setProperty('background-size', '100% 100%');
            }
        }
    } catch(err) {
        showAlert("WARNING", `${err.message}`, 'var(--warning)', 'warning');
    }
}// ./zoomImage()
/*
fi_bg[0].addEventListener('click', function() {
    zoomImage(0);
})// ./bg[0]()
fi_bg[1].addEventListener('click', function() {
    zoomImage(1);
})// ./bg[1]()
fi_bg[2].addEventListener('click', function() {
    zoomImage(2);
})// ./bg[2]()
fi_bg[3].addEventListener('click', function() {
    zoomImage(3);
})// ./bg[3]()
fi_bg[4].addEventListener('click', function() {
    zoomImage(4);
})// ./bg[4]()
fi_bg[5].addEventListener('click', function() {
    zoomImage(5);
})// ./bg[5]()
fi_bg[6].addEventListener('click', function() {
    zoomImage(6);
})// ./bg[6]()
fi_bg[7].addEventListener('click', function() {
    zoomImage(7);
})// ./bg[7]()
fi_bg[8].addEventListener('click', function() {
    zoomImage(8);
})// ./bg[8]()
fi_bg[9].addEventListener('click', function() {
    zoomImage(9);
})// ./bg[9]()
fi_bg[10].addEventListener('click', function() {
    zoomImage(10);
})// ./bg[10]()
fi_bg[11].addEventListener('click', function() {
    zoomImage(11);
})// ./bg[11]()
fi_bg[12].addEventListener('click', function() {
    zoomImage(12);
})// ./bg[12]()
fi_bg[13].addEventListener('click', function() {
    zoomImage(13);
})// ./bg[13]()
fi_bg[14].addEventListener('click', function() {
    zoomImage(14);
})// ./bg[14]()
*/
for(var fibg=0; fibg<fi_bg.length; fibg++) {
    const current = fi_bg.length-fibg-1;
    //console.info(current);
    fi_bg[current].addEventListener('click', function() {
      zoomImage(current);
    });
}// ./for

fi_zoom_image.addEventListener('click', function() {
    this.style.setProperty('display', 'none');
    fi_fullscreen.style.setProperty('display', 'none');
});// ./fi_zoom_image()
