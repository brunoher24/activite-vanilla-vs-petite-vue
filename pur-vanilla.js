let selected = "page_1";

/*---------------------- METHODE 1 ------------------------ */
// const navBtnPage1 = document.querySelector('#nav-btn-page-1');
// const navBtnPage2 = document.querySelector('#nav-btn-page-2');

// navBtnPage1.addEventListener('click', e => {
//     selected = "page_1";
//     e.target.style.backgroundColor = selected === "page_1" ? "black" : "transparent";
//     navBtnPage2.style.backgroundColor = selected === "page_2" ? "black" : "transparent";
// });

// navBtnPage2.addEventListener('click', e => {
//     selected = "page_2";
//     e.target.style.backgroundColor = selected === "page_2" ? "black" : "transparent";
//     navBtnPage1.style.backgroundColor = selected === "page_1" ? "black" : "transparent";
// });


/*---------------------- METHODE 2 (less code) ------------------------ */
const navBtns = document.querySelectorAll('.nav-btn-page');
navBtns.forEach(navBtn => {
    navBtn.addEventListener('click', updateNavBtnBackground);
});

function updateNavBtnBackground(e) {
    selected = e.target.dataset.name;
    navBtns.forEach(navBtn => {
        navBtn.style.backgroundColor = navBtn.dataset.name === selected ? "black" : "transparent";
    });
}
