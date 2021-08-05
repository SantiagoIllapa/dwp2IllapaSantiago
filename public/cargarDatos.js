const hbs = require('hbs');
//Helpers
const datos={};
hbs.registerHelper('Producto', (idx) => {
    return new Date().getFullYear();
});
function cargarDatos(){
    const xhttp= new XMLHttpRequest();
    xhttp.open('GET','DataFile.json',true)
    xhttp.send();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            datos = JSON.parse(this.responseText);
            for(let item of datos){

            }
        }
    }
}
cargarDatos();
console.log(datos[0]);
