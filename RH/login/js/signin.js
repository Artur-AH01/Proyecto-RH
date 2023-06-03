// Autor: Artur AH
window.onload = init;

function init() {
    if (!localStorage.getItem("token")){
        document.querySelector('.btn-secondary').addEventListener('click',function(){
            window.location.href = "login.html";
        });

        document.querySelector('.btn-primary').addEventListener('click',signin);
    }else{
        window.location.href = "empleados.html"
    }

    
}
function signin(){
    var name = document.getElementById('input-name').value;
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
        url: 'http://localhost:3000/user/signin',
        data: {
            user_name: name,
            user_mail: mail,
            user_password: pass
        }
   }).then(function(res) {
        console.log(res);
        alert("Registro exitoso");
        window.location.href = "empleados.html";
   }).catch(function(err){
        console.log(err);
   })
}