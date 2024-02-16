// Función para cargar y mostrar los productos desde la API
function cargarProductos() {
    // URL de la API de productos
    const apiUrl = 'https://fakestoreapi.com/products';

    // Realizar solicitud a la API
    $.get(apiUrl, function (productos) {
        // Limpiar el contenedor de productos
        $('#productosContainer').empty();

        // Iterar sobre cada producto y mostrar la información en una card de Bootstrap
        productos.forEach(function (producto) {
            const cardHtml = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title}</h5>
                            <p class="card-text">${producto.description}</p>
                            <p class="card-text">Precio: $${producto.price}</p>
                            <p class="card-text">Categoría: ${producto.category}</p>
                        </div>
                    </div>
                </div>
            `;
            $('#productosContainer').append(cardHtml);
        });
    });
}

// Llamar a la función para cargar y mostrar los productos al cargar la página
$(document).ready(function () {
    cargarProductos();
});