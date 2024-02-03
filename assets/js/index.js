'use strict'

const formINput= document.querySelector('.form-input');
const inputs= document.querySelectorAll('input');


formINput.oninput= formInputHeandler;



function formInputHeandler({target}){
if(/^[A-Z][a-z]{1,19}$/.test(target.value)){
    target.classList.add('valid');
    target.classList.remove('invalid');
}else{
    target.classList.add('invalid');
    target.classList.remove('valid');
}
}

const INPUTS_FORM_EXP= {
    'first-name':/^[A-Z][a-z]{1,19}$/,
    'last-name':/^[A-Z][a-z]{1,19}$/,
    'user-email':/^.+@.+$/,
};

inputs.forEach(i => i.addEventListener('input', inputHeandler));
function inputHeandler(e){
    if(INPUTS_FORM_EXP[e.target.name].test(e.target.value)){
        e.target.classList.add('valid');
        e.target.classList.remove('invalid');
    }else{
        e.target.classList.add('invalid');
       e.target.classList.remove('valid');
    }
}
