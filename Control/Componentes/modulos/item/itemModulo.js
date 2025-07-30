export function item() {
    let item = document.createElement('div');
    item.className = "item";

    // Título
    let title = document.createElement('h3');
    title.textContent = "La Fórmula 1";

    // Imagen
    let image = document.createElement('img');
    image.src = "https://e00-xlk-ue-marca.uecdn.es/files/article_main_microformat_4_3/uploads/2025/02/18/67b4ff04e7d85.jpeg";
    image.alt = "Imagen del producto";

    // Descripción
    let description = document.createElement('p');
    description.textContent = "El Campeonato Mundial de Fórmula 1 es la principal competición de automovilismo internacional.";

    // Agregar elementos al contenedor principal
    item.appendChild(title);
    item.appendChild(image);
    item.appendChild(description);

    return item;
}
