var ppDwn = document.getElementById("pp-dwn");       
    function valida(input){
        if(input.validity.valid){
            input.classList.remove('input-container--invalido');
            console.log("removeu a classe");
            ppDwn.style.display = "block";
        }else{
            input.classList.add('input-container--invalido');
            console.log("add a classe");
        }
    }
    const input = document.querySelector('input');
    input.addEventListener('blur', (evento) =>{
        console.log("fsiuh")
        valida(evento.target);
    })
    function clspp(button){
        ppDwn.style.display = "none";
    }