const input = document.querySelector('input'),
btn = document.querySelector('.btn'),
main = document.querySelector('.main'),
reload = document.querySelector('.reload'),
qrImg = document.querySelector('.qr-img img')
console.log(input,btn);

btn.onclick = (e) =>{
    let qrValue = input.value.trim();
    if (qrValue == '') {
        return
    }
    console.log(qrValue);
    e.target.textContent = 'Generating Qr code...'
    
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    
    qrImg.addEventListener('load',()=>{
        qrImg.classList.add("active")
        main.classList.add("active")
        e.target.textContent = 'Generate Qr code'
        btn.disabled = true
    })    
    reload.addEventListener('click',()=>{
        location.reload()
    })

}





