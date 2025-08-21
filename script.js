







async function getQrData() {
    const getData = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`)
}