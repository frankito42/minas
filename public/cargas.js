document.addEventListener("DOMContentLoaded", function() {
    // Code to be executed when the DOM is ready
    logeado()
});


document.getElementById("cerrarSesion").addEventListener("click",()=>{
    cerrarSesion()
}) 

function logeado() {
    const user = JSON.parse(localStorage.getItem('userMina'));
    if(user == null){
      /* si no esta logueado te lleva al login*/
      location.href="/"
    }else{
      /* si esta logueado queda aqui */
    }
}
function cerrarSesion() {
    localStorage.clear()
    location.href="/"    
}