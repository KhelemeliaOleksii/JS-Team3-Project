const timerId = setTimeout(openAnnoying, 5000);
const objWithRefs = createAnnoying();

function createAnnoying() {
    let counter = 0;
    const TIME_OUT_DELAY = 2000; // задержка мс
    const MAX_ATTEMPTS = 2; // количество появлений "надоедалки"

    const body = document.getElementsByTagName('body')[0];

    const annoyingf = document.createElement("div");
    annoyingf.classList.add("annoying");
    annoyingf.classList.add("bounceIn");
    annoyingf.setAttribute("id", "modalAnnoying");

    const close_annoyingf = document.createElement("div");
    close_annoyingf.setAttribute("id", "close_annoying");
    close_annoyingf.textContent = "+";
    annoyingf.append(close_annoyingf);

    const annoying_txt = document.createElement("div");
    annoying_txt.classList.add("annoying_txt");
    annoyingf.append(annoying_txt);

    const annoying_img = document.createElement("div");
    annoying_img.classList.add("annoying_img");
    // annoying_img.setAttribute("src", "../images/ukrainLogo.png");
    // annoying_img.setAttribute("alt", "ukraine");
    annoying_txt.append(annoying_img);

    const annoyingText = document.createElement("p");
    annoyingText.classList.add("annoying-txt");
    annoyingText.textContent = "Русский военный корабль, пошёл на х#й!";
    annoying_txt.append(annoyingText);

    const annoyingBtn = document.createElement("button");
    annoyingBtn.classList.add("annoying-btn");
    annoying_txt.append(annoyingBtn);

    const btnText = document.createElement("div");
    btnText.classList.add("btn-text");
    btnText.textContent = "Допомогти ЗСУ";
    annoyingBtn.append(btnText);

    const ship = document.createElement("div");
    ship.classList.add("atuin-btn");
    annoyingBtn.append(ship);
   
    body.append(annoyingf);
   
    return {
        ship: ship,
        annoyingf: annoyingf,
        close_annoyingf: close_annoyingf,
        annoying_txt: annoying_txt,
        annoying_img: annoying_img,
        annoyingText: annoyingText,
        annoyingBtn: annoyingBtn,
        btnText: btnText,
        body: body,
        counter: counter,
        TIME_OUT_DELAY: TIME_OUT_DELAY,
        MAX_ATTEMPTS:MAX_ATTEMPTS,        
    }
};
function openAnnoying() {     
        objWithRefs.annoyingf.classList.add('annoying_vis'); // добавляем видимость окна
        objWithRefs.annoyingf.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        objWithRefs.body.classList.add('body_block'); // убираем прокрутку
};
function closeAnnoying() { 
    objWithRefs.annoyingf.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function () { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        objWithRefs.annoyingf.classList.remove('annoying_vis');
        objWithRefs.body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};
function closeHandle() {
    setTimeout(closeAnnoying, 800);
    objWithRefs.ship.style.setProperty("transform", "translate(10px, 100px) rotate(90deg)");
    objWithRefs.annoyingBtn.classList.add("annoying-btn-bang");
    objWithRefs.annoyingText.classList.add("annoying-txt-vis");

};
objWithRefs.close_annoyingf.onclick = function() { // клик на закрытие
    closeAnnoying();
    if (objWithRefs.counter === objWithRefs.MAX_ATTEMPTS) {
        return
    } else {
        setTimeout(openAnnoying, objWithRefs.TIME_OUT_DELAY);
        objWithRefs.counter+=1
    }
};
// Клик на закрытие с первого раза
objWithRefs.ship.addEventListener("click", closeHandle)

