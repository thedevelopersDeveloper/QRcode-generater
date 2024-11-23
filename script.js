let data = ""
let url = ``
let img = document.querySelector(".img")
let input = document.querySelector(".qr-input")
let btn = document.querySelector(".generate-btn")
let download = document.querySelector(".download")
btn.addEventListener("click",()=>{
    data = input.value;
    if(data!=""){
        url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`
        img.src=url
        download.style.display = "block";
    }

})