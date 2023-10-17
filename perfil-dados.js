const linkParaVoltar = document.getElementById('link_para_voltar')

document.addEventListener("keyup", (event) => {
    
    if (event.code === "Backspace"){
        linkParaVoltar.click()
    }
})