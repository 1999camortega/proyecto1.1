// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

    // Función para filtrar las imágenes por categoría
    document.getElementById('filtro-categoria').addEventListener('change', function() {
      const categoria = this.value;
      const imagenes = document.querySelectorAll('.galeria .miniatura');
      
      imagenes.forEach(function(imagen) {
        if (categoria === 'todos' || imagen.classList.contains(categoria)) {
          imagen.style.display = 'block';
        } else {
          imagen.style.display = 'none';
        }
      });
    });
  
    // Función para mostrar la vista detallada de una imagen
    document.querySelectorAll('.miniatura').forEach(function(imagen) {
      imagen.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado (navegar)
        const src = imagen.querySelector('img').src;
        document.querySelector('.detalle-imagen img').src = src;
        // Si deseas mostrar más detalles, puedes agregar más código aquí.
      });
    });
  
    // Función para validar el formulario de contacto
    document.querySelector('form').addEventListener('submit', function(event) {
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const mensaje = document.getElementById('mensaje').value;
      
      if (!nombre || !correo || !mensaje) {
        alert('Por favor, completa todos los campos.');
        event.preventDefault(); // Evita que el formulario se envíe si hay campos vacíos
      }
    });
  
  });
  
  