let i = 0;
const slider1 = document.querySelector("#sld1");
const slider2 = document.querySelector("#sld2");

const reactTemas = document.getElementsByClassName('ract-tema');

function tachar(elemento) {
    elemento.classList.toggle("tachado");
}

// Función para contar clics
function mostrarClic() {
    i += 1;
    console.log(`clic ${i}`);
}

// Función para mostrar el valor de sliders sld1 y sld2
function mostrarValor() {
    console.log(parseInt(slider1.value) + parseInt(slider2.value));
}

// Función para mostrar el contenido de un elemento clicado
function mostrarContent(objeto) {
    console.log(objeto.target.innerText);
}

// Cambiar el color de fondo
function cambiarFondo(color) {
    document.body.style.backgroundColor = color;
}

// Asignar eventos a cada tema
for (const tema of reactTemas) {
    tema.addEventListener('click', (event) => {
        mostrarContent(event);
        const color = tema.dataset.color; // Usar un atributo personalizado
        if (color) cambiarFondo(color);
    });
}

// -------------------------- Nueva funcionalidad --------------------------

// Seleccionamos todas las tarjetas
const tarjetas = document.querySelectorAll('.card');

// Función para actualizar el título de la tarjeta según el slider
function actualizarTitulo(event) {
    const slider = event.target;
    const tarjeta = slider.closest('.card'); // Obtenemos la tarjeta que contiene el slider
    const titulo = tarjeta.querySelector('.card-title'); // Título de la tarjeta
    if (titulo) {
        titulo.textContent = `Valor: ${slider.value}`; // Actualizamos el título con el valor del slider
    }
}

// Añadimos sliders dinámicamente a cada tarjeta
tarjetas.forEach(tarjeta => {
    // Creamos el slider
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = '100';
    slider.value = '50';
    slider.className = 'form-range'; // Clase de Bootstrap para sliders
    slider.addEventListener('input', actualizarTitulo);

    // Insertamos el slider al final del cuerpo de la tarjeta
    tarjeta.querySelector('.card-body').appendChild(slider);
});
slider.addEventListener('input', (event) => {
    actualizarTitulo(event);
    console.log(`Slider actualizado, nuevo valor: ${slider.value}`);
});


