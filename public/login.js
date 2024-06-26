document.addEventListener("DOMContentLoaded", function() {
  // Code to be executed when the DOM is ready
  logeado()
});
document.getElementById("formularioLogin").addEventListener("submit",async (e)=>{
  e.preventDefault()
  await login(this)
})
 
async function login() {
  const formLogin=new FormData(document.getElementById("formularioLogin"))
  const urlEncode=new URLSearchParams(formLogin).toString()
  const res = await fetch("http://localhost:4000/loginUser",{
    method:'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body:urlEncode
  });
  const loginUser = await res.json();

  if(isString(loginUser)){
    Swal.fire({
      title: 'ERROR',
      text: loginUser,
      icon: 'error',
    });
  }else{
    localStorage.setItem("userMina",JSON.stringify(loginUser))
    location.href="/inicio"
  }
}

// Function to test if variable is a string
function isString(variable) {
  return typeof variable === "string";
}

function logeado() {
  const user = JSON.parse(localStorage.getItem('userMina'));
  if(user == null){
    /* si no esta logueado queda en login */
    console.log("aaaaa")
  }else{
    /* si esta logeado te lleva al inicio */
    location.href="/inicio"
  }
}