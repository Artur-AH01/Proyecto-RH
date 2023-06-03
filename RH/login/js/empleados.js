window.onload = init;

var headers = {};
var url = "http://localhost:3000"

function init() {
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")

            }
        }
        loadEmpleado();
    }
    else{
        window.location.href="index.html";
    }
}
function loadEmpleado(){
    axios.get(url + "/empleados", headers)
    .then(function(res){
        console.log(res);
        displayEmpleado(res.data.message);
    }).catch(function(err){
        console.log(err);
    })
}

function displayEmpleado(empleado) {
    var table = document.createElement("table");
  
    // Crea la fila de encabezado de la tabla
    var headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>ID</th><th>Nombre</th><th>Apellido</th><th>Teléfono</th><th>Email</th><th>Dirección</th>";
    table.appendChild(headerRow);
  
    // Agrega una fila para cada empleado en la tabla
    for (var i = 0; i < empleado.length; i++) {
      var empleadoRow = document.createElement("tr");
      empleadoRow.innerHTML = `<td>${empleado[i].id}</td>
                               <td>${empleado[i].name}</td>
                               <td>${empleado[i].last_name}</td>
                               <td>${empleado[i].phone}</td>
                               <td>${empleado[i].email}</td>
                               <td>${empleado[i].address}</td>`;
      table.appendChild(empleadoRow);
    }
  
    // Agrega la tabla al body del documento
    var body = document.querySelector("body");
    body.appendChild(table);
  }
  