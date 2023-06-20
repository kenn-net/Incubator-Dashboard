let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');

window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            logo.classList.add('active');
        }, 100)
        
        setTimeout(()=>{
            logo.classList.remove('active');
            logo.classList.add('fade');
        },1500);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },3200);
    })
});
