let investEasily_left_first_p = document.getElementById("investEasily_left_first_p");
let general_indicator = document.getElementById("general_indicator");

investEasily_left_first_p.onmouseover = function() {
    general_indicator.style.visibility = "visible";
}

investEasily_left_first_p.onmouseout = function() {
    general_indicator.style.visibility = "hidden";
}

 // при загрузке старницы
let investEasily_rihgt = document.getElementById("investEasily_rihgt");
let investEasily_rihgt_more = document.getElementById("investEasily_rihgt_more");
let autoFollow_left = document.getElementById("autoFollow_left");
let autoFollow_left_more = document.getElementById("autoFollow_left_more");
let autoFollow_right = document.getElementById("autoFollow_right");
let investEasily_left_second_a = document.getElementById("investEasily_left_second_a");
let i = 0;
let speed = 50;

document.addEventListener("DOMContentLoaded", function() {
    investEasily();
    autoFollow_L();
    autoFollow_R();
    investEasily_a();
    investEasily_more();
    autoFollow_L_more();
});

function investEasily_more() {
    if(i < 1.1) {
        investEasily_rihgt_more.style.opacity = i;
        let timeout = setTimeout("investEasily_more()", speed);
        i = i + 0.01;
    }
};
function autoFollow_L_more() {
    if(i < 1.1) {
        autoFollow_left_more.style.opacity = i;
        let timeout = setTimeout("autoFollow_L_more()", speed);
        i = i + 0.01;
    }
};
function autoFollow_R() {
    if(i < 1.1) {
        autoFollow_right.style.background = "rgba(6, 43, 97, " + i + ")";
        let timeout = setTimeout("autoFollow_R()", speed);
        i = i + 0.01;
    }
};
// ========================================================
// ====================МАДЫЙ less РАЗМЕР===================
// ========================================================
function investEasily_a() {
    if(i < 1.1) {
        investEasily_left_second_a.style.background = "rgba(9, 98, 232, " + i + ")";
        let timeout = setTimeout("investEasily_a()", speed);
        i = i + 0.01;
    }
};

function investEasily() {
    if(i < 1.1) {
        investEasily_rihgt.style.opacity = i;
        let timeout = setTimeout("investEasily()", speed);
        i = i + 0.01;
    }
};

function autoFollow_L() {
    if(i < 1.1) {
        autoFollow_left.style.opacity = i;
        let timeout = setTimeout("autoFollow_L()", speed);
        i = i + 0.01;
    }
};
