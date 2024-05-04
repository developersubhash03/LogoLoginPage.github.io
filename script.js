const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const regislink=document.querySelector('.register-link');
const popupbtn=document.querySelector('.loginpopupbtn');
const iconclose=document.querySelector('.icon-close');
regislink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
popupbtn.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});


