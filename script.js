const input = document.querySelector('input'),
btn = document.querySelector('.btn'),
main = document.querySelector('.main'),
qrImg = document.querySelector('.qr-img')
console.log(input,btn);

btn.onclick = () =>{
    let qrValue = input.value;
    qrImg.classList.toggle("active")
    main.classList.toggle("active")
    console.log(qrValue);
    
}






async function getQrData() {
    const getData = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`)
}