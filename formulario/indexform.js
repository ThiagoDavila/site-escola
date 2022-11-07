function logar(){
    const login = document.getElementById('login').value
    const senha = document.getElementById('senha').value

    if(login == 'adminalu' && senha == 'adminalu'){
        location.href = "homescola/homealu.html"
    }else if(login == 'adminprof' && senha == 'adminprof'){
        location.href = "homescola/homeprof.html"   
    }else{
        alert('Login ou Senha inválido ')
    }


}