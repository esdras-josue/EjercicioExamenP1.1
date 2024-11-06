function Calcular(){
    // obtener valores de los campos
    const product1 = parseFloat(document.getElementById('product1').value);
    const product2 = parseFloat(document.getElementById('product2').value);
    const product3 = parseFloat(document.getElementById('product3').value);
    const product4 = parseFloat(document.getElementById('product4').value);
    const product5 = parseFloat(document.getElementById('product5').value);

    // validar que los valores ingresados sean numero
    if([product1,product2,product3,product4,product5].some(value => isNaN(value))){
        Swal.fire({
            icon: 'error',
            tittel: 'Entrada Invalida',
            text: 'Por favor, ingrese solo numeros en los campos'
        });

        return;
    }

    // calcular subtotal
    const subtotal = product1 + product2 + product3 + product4 + product5;

    // calculando los descuentos
    let porcentajeDescuento = 0;
    if(subtotal >= 1000 && subtotal < 5000)
        porcentajeDescuento = 10;
    else if(subtotal >= 5000 && subtotal < 9000)
        porcentajeDescuento = 20;
    else if(subtotal >= 9000 && subtotal < 13000)
        porcentajeDescuento = 30;
    else if(subtotal >= 13000)
        porcentajeDescuento = 40;

    // calcular descuento y total a pagar
    const descuento = subtotal * (porcentajeDescuento/100);
    const totalPagar = subtotal - descuento;

    // mostrando resultados en los campos
    document.getElementById('subtotal').value = subtotal.toFixed(2);
    document.getElementById('descuento').value = descuento.toFixed(2);
    document.getElementById('labelDescuento').textContent = `Descuento ${porcentajeDescuento} %`;
    document.getElementById('TotalPagar').value = totalPagar.toFixed(2);

}

function Limpiar(){
    document.getElementById('descuentoForm').reset();
    document.getElementById('labelDescuento').textContent = 'Descuento 0%';
}