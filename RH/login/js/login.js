// Autor: Artur AH
window.onload = init;

function init() {
    if (!localStorage.getItem("token")){
        document.querySelector('.btn-secondary').addEventListener('click',function(){
            window.location.href = "signin.html";
        });

        document.querySelector('.btn-primary').addEventListener('click',login);
    
    }else{
        window.location.href = "empleados.html";
    }

}
function login(){
    var mail = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value;
      
    if(mail == "" || pass == ""){
        alert("Campos incompletos");
        return;
    }
    if(mail.indexOf('@') == -1 || mail.indexOf('.') == -1){
        alert("Mail invalido");
        return;
    }
   axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data: {
            user_mail: mail,
            user_password: pass
        }
   }).then(function(res) {
    if(res.data.code === 200){
        localStorage.setItem("token", res.data.message);
        window.location.href = "empleados.html";

    }
    else{
        alert("Usuario y/o contraseña incorrecto");
    }
   }).catch(function(err){
        console.log(err);
   })
}