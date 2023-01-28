function topo(){
    window.scroll(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    )
}

//Validação do login
    function login(){
        var logado = 0;
        var usuario = document.getElementById("usuario").value;
        var senha = document.getElementById("senha").value;

        if(usuario == 'admin' && senha == "123456789"){
         window.location = "index.html";
         logado = 1;
        }
        if(logado == 0){
            alert("Erro, acesso Negado");
        }
    }

//alerta no botão cadastrar
    function cadastro(){
        alert("cadastro com sucesso!");
        window.location.href = "index.html";
    }

