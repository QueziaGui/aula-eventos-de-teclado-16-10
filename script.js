/*const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})*/

const navPerfil = document.getElementById("nav-perfil");
const linkParaDadosPerfil = document.getElementById("link-perfil-dados");

document.addEventListener("keyup", (event) => {
  if (event.code === "Digit1") {
    if (navPerfil.style.display === "block") {
      linkParaDadosPerfil.click();
    } else {
      navPerfil.style.display = "block";
    }
  }
});

/*JS script is document.addEventListener("keyup") callback

const navperfil = document.getElementById("nav-perfil");
const linkParaDadosPerfil document.getElementById("link-perfil-dados")


document.addEventListener("keyup", (event) => { 
  console.log (event)

  if (event.code 'Digit1') { 
    navperfil.style.display "block"
  }   if(event.code 'Escape'){ 
      navperfil.style.display = "none" linkParaDadosPerfil.click()
  } else {

  navperfil.style.display 'block
  }
})  */
