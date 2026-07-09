function checkPassword() {

const password = document.getElementById("password").value;

if(password === "7 06 2026"){

document.getElementById("password-screen").style.display="none";

document.getElementById("book-container").style.display="flex";

setTimeout(()=>{

document.getElementById("book").classList.add("open");

},300);

}else{

document.getElementById("error").innerHTML="❌ Contraseña incorrecta ❤️";

}

}
