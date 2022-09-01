const inputs=document.querySelectorAll('.input');

const handlefocus=({ target })=>{
    const span=target.previousElementSibling;
    span.classList.add('span-active');
}

const handlefocusout=({ target })=>{
    if(target.value==''){

    const span=target.previousElementSibling;
    span.classList.remove('span-active');
    }
}

inputs.forEach((input)=> input.addEventListener('focus',handlefocus));
inputs.forEach((input)=> input.addEventListener('focusout',handlefocusout));