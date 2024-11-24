// Función para mostrar el perro de forma aleatoria
function showRandomDog() {
    // Crea un nuevo elemento de imagen para el perro
    const dogImage = document.createElement('img');
    dogImage.src = 'C:\Users\dgaja\Desktop\Daniel\INFORMÁTICA\Páginas Web\Amandis\perro.png'; // Reemplaza con la ruta de tu imagen de perro
    dogImage.classList.add('dog-img'); // Aplica la clase de estilo
    
    // Crea un contenedor para la imagen del perro
    const dogContainer = document.createElement('div');
    dogContainer.classList.add('dog-image');
    dogContainer.appendChild(dogImage);
    
    // Agrega el contenedor de la imagen al body
    document.body.appendChild(dogContainer);

    // Hacer visible y ejecutar la animación
    setTimeout(() => {
        dogContainer.classList.add('show');
    }, 10); // Hacer visible justo después de agregar al body

    // Eliminar la imagen después de que la animación termine (6 segundos)
    setTimeout(() => {
        dogContainer.remove();
    }, 6000); // 6000ms = 6 segundos
}

// Función para generar una posición aleatoria para la imagen
function getRandomPosition() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Generar valores aleatorios para la posición
    const randomX = Math.random() * width;
    const randomY = Math.random() * height;

    return { x: randomX, y: randomY };
}

// Función para cambiar la posición del perro y mostrarlo
function showRandomDogAtRandomPosition() {
    const position = getRandomPosition();
    const dogImage = document.querySelector('.dog-img');
    
    // Establecer la posición aleatoria
    dogImage.style.position = 'absolute';
    dogImage.style.left = `${position.x}px`;
    dogImage.style.top = `${position.y}px`;
}

// Función para ejecutar la acción de mostrar al perro cada cierto tiempo aleatorio
function startRandomDogAnimation() {
    const intervalTime = Math.floor(Math.random() * (15000 - 7000 + 1)) + 7000; // Entre 7 y 15 segundos
    showRandomDog(); // Mostrar el perro
    setInterval(() => {
        showRandomDog(); // Llamar a showRandomDog cada intervalo aleatorio
    }, intervalTime);
}

// Iniciar la animación cuando se carga la página
window.addEventListener('load', () => {
    startRandomDogAnimation();
});
