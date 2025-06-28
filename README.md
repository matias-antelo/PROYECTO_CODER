<h1> PROTOTIPO DE INVENTARIO Y SEGUIMIENTO DE VERIFICACIONES, CALIBRACIONES Y MANTENIMIENTO DE EQUIPOS DE LABORATORIO </h1>
Plataforma para control de inventario de equipos en laboratorio.

<h2>index.html</h2>
El index tiene incorporado un back end en Javascript simulando un login usando input en ambos casos para ingreso de datos de usuario (admin) y contraseña (1234) que se encuentran almacenados en un archivo JSON.
Para las notificaciones se utilizo sweetalert en caso de un mal ingreso de datos, para el acceso a la pagina y el bloqueo en caso de reintentar en varias oportunidades. 
Se puso en funcionamiento y solo para fines practicos un reloj que muestra la hora actual utilizando la API de RAPIDID.

<h2>MicrobiologiaAgricola.html</h2>
La idea de esta plataforma es dar ingreso a equipos y que luego puedan ser visualizador en las pestañas correspondientes. El ingreso es un formulario de fechas, ingreso de datos y tiene para ingresar archivos PDF y JPG. Se guardo en archivo JSON algunos objetos con el objetivo de mostrar el correcto funcionamiento y se dejo a otro sin objetos para que se pueda ver la leyenda "No hay equipos registrados.".
El ingreso de datos desde la pestaña de ingreso de equipos crea el objeto en el array y lo guarda localmente en el localStorage para evitar perder la informacion cuando se carga la pagina.
Finalmente se creo los botones EDITAR y ELIMINAR en funcion de las observaciones de la entrega anterior.
