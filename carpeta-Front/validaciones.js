function validarPoblacion() {
    const poblac = document.getElementById("poblacion").value;

    if (poblac.length > 0) {
        if (parseInt(poblac) < 0 || parseInt(poblac) > 2500000000) {
            document.getElementById("boton-agregar").disabled = true;
            alert("La población no puede ser menor a 0 ni mayor a 2500 millones de personas")
        } else {
            document.getElementById("boton-agregar").disabled = false;
        }

    } else {
        document.getElementById("boton-agregar").disabled = true;

    }
}

function consumirApi() {
    console.log("Consumiendo API")
    const unaTupla = document.getElementById('cuerpoTabla');

    const externalHTML = `
    <tr>
        <td>EJemplo desde API</td>
        <td>Ejemplo desde API</td>
        <td>Ejemplo desde API</td>
        <td>Ejemplo desde API</td>
        <td>Ejemplo desde API</td>
    </tr>`;

    unaTupla.innerHTML = externalHTML;

}