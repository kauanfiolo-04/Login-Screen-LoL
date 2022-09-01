const inputs=document.querySelectorAll('.input');

const handlefocus=({ target })=>{
    const span=target.previousElementSibling;
}

inputs.forEach((input)=> input.addEventListener('focus',handlefocus));