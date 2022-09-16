let fi_fullscreen = document.querySelector('.fi-fullscreen');
let fi_alert = document.querySelector('.fi-alert');
let fi_alert_header = document.querySelector('.fi-alert-header');
let fi_alert_body = document.querySelector('.fi-alert-body');
let fi_alert_close = document.querySelector('.fi-alert-close');
let fi_panel_body = document.querySelector('.fi-panel-body-s');
let fi_panel_footer = document.querySelector('.fi-panel-footer');
let fi_qs = document.querySelector('.fi-qs');
const li = document.querySelectorAll('.fi-navbar li');
const li_a = document.querySelectorAll('.fi-navbar li a');
function msgInfo(title, message) {

}// ./msgInfo()
function msgPrimary(title, message) {
    
}// ./msgPrimary()
function msgSuccess(title, message) {
    
}// ./msgSuccess()
function msgWarning(title, message) {
    
}// ./msgWarning()
function msgDanger(title, message) {
    
}// ./msgDanger()
function showAlert(title, message, bg_color, name_img) {
    fi_alert_header.innerHTML = ``;
    fi_alert_body.innerHTML = ``;
    fi_fullscreen.style.setProperty('display', 'block');
    fi_alert.style.setProperty('transition', '2s');
    fi_alert.style.setProperty('top', '50%');
    fi_alert_header.innerHTML = `<br /><center><img src='../images/${name_img}.png' alt='Not-image' width=25 height=25>&nbsp;${title}</center>`;
    fi_alert_body.style.setProperty('background-color', bg_color);
    fi_alert_body.innerHTML = `${message}`;
}// ./viewAlert()
function hideAlert() {
    fi_alert.style.setProperty('transition', '2s');
    fi_alert.style.setProperty('top', '-50%');
    fi_fullscreen.style.setProperty('display', 'none');
    fi_alert_header.innerHTML = "";
    fi_alert_body.innerHTML = ``;
}// ./hideALert()
const fnc = {
    msg_success : function(title, msg) {
        msgSuccess(title, msg);
    },
    msg_danger : function(title, mag) {
        msgDanger(title, msg);
    }
}
class CLS {
    cls_msg_success = function(title, msg) {
        msgSuccess(title, msg);
    }
    cls_msg_danger = function(title, msg) {
        msgDanger(title, msg);
    }
}
function stampa() {
    console.info("STAMPA");
}
export{
    msgInfo,
    msgPrimary,
    msgSuccess,
    msgWarning,
    msgDanger,
    showAlert,
    hideAlert,
    fnc,
    CLS,
    stampa,
    fi_fullscreen,
    fi_alert,
    fi_alert_header,
    fi_alert_close,
    fi_panel_body,
    fi_panel_footer,
    fi_qs,
    li,
    li_a
};