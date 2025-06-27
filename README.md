<h1> PROTOTIPO DE INVENTARIO Y SEGUIMIENTO DE VERIFICACIONES, CALIBRACIONES Y MANTENIMIENTO DE EQUIPOS DE LABORATORIO </h1>
Plataforma para control de inventario de equipos en laboratorio.

<h2>index.html</h2>
El index tiene incorporado un back end en Javascript simulando un login usando input en ambos casos para ingreso de datos de usuario (admin) y contraseña (1234) que se encuentran almacenados en un archivo JSON.
Para las notificaciones se utilizo sweetalert en caso de un mal ingreso de datos, para el acceso a la pagina y el bloqueo en caso de reintentar en varias oportunidades. 
Se puso en funcionamiento y solo para fines practicos un reloj que muestra la hora actual utilizando la API de RAPIDID.

<h2>MicrobiologiaAgricola.html</h2>
La idea de esta plataforma es dar ingreso a equipos y luego puedan ser visualizador en las pestañas correspondientes. El ingreso es un formulario de fechas un selector, ingreso de pdf, jpg o png creando un array principal el cual entraria el objeto,
luego las otras pestañas son opciones que solamente muestran lo que fue guardado en el array desde el formulario de ingreso
