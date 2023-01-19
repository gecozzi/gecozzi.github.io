function gracias(){
    const nomb1= document.getElementById("nn").value;
    const cel= document.getElementById("cel").value;
    const asunto= document.getElementById("asunto").value;
    const mensaje= document.getElementById("msj").value;
    if (nomb1.length>3 && cel.length>3 && asunto.length>3 && mensaje.length>6) {
        alert (nomb1+"," + " Gracias por su mensaje, será respondido a la brevedad.");
    } else {
        alert("Revise el formulario, es necesario rellenar todos los campos con la cantidad de carácteres obligatorios.");
    }
    
}
