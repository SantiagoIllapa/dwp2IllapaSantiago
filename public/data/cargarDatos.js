const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'data/DataFile.json', true)
xhttp.send();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        datos = JSON.parse(this.responseText);
        datos.forEach(element => {
            crearProducto(element);
        });
    }
}
function crearProducto(Producto){
    let name=Producto.name;
    let url=Producto.url;
    let precio=Producto.precio;
    var img =document.createElement("img");
    img.src=url;
    img.alt=name;
    img.className="ImagenProducto";
    var divImg=document.createElement("div");
    divImg.className="imgProducto"
    divImg.appendChild(img);
    var divTxt= document.createElement("div");
    divTxt.className="txt-producto";
    var textoProd = document.createTextNode(name);
    divTxt.appendChild(textoProd);
    var valorProd=document.createTextNode('$'+precio);
    var divPrecio=document.createElement("div");
    divPrecio.className="txt-valor";
    divPrecio.appendChild(valorProd);
    var ProductoSection  = document.createElement("section");
    ProductoSection.className="producto";
    ProductoSection.appendChild(divImg);
    ProductoSection.appendChild(divTxt);
    ProductoSection.appendChild(divPrecio);
    var Catalogo = document.getElementById("productos-section");
    Catalogo.appendChild(ProductoSection); 
    console.log(Producto) 
}
