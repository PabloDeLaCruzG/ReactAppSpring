Introducción

He creado un nuevo proyecto Spring con las dependencias de Spring Data JPA, Spring Boot Devtools y Lombok. Para empezar, he creado una base de datos SQL en MySQLWorkbench, luego en el proyecto Spring he creado una estructura de paquetes para la creación y conexión de la ApiRest, una vez hecha la estructura, he hecho un controlador con los métodos de la Api GET, POST, PUT y REMOVE para controlar los datos, luego he creado otro controlador que obtiene una lista con una condición, por último, he creado un interceptor para definir un rango de horas de acceso a la web. Luego he hecho otro proyecto nuevo con React y la librería Axios para la conexión de Api, este proyecto ‘FrontEnd’ se conecta al otro proyecto ‘BackEnd’ a través de la Api. En el FrontEnd he creado una vista principal con el listado, un link a otra vista que contiene la lista con la condición, y botones para post, put y remove.

FrontEnd (React y Axios) 

React es un framework de JavaScript para crear interfaces de usuario interactivas en páginas web, mediante la construcción de componentes reutilizables. React depende mucho de sus librerías, hay que hacer uso de muchas de ellas, una de las librerías es ‘Axios’, esta librería nos permite y facilita la conexión con la Api del BackEnd, ‘Axios’ tan solo recibe la url de la Api y a partir de ella la maneja con las solicitudes de la Api, eso quiere decir que a ‘Axios’ no le importa el lenguaje en el que este hecho la Api, de esa manera nos permite trabajar de manera muy sencilla con las Apis. 

Estructura del proyecto 

El proyecto se construye solo, en este caso las únicas modificaciones han sido en la creación de componentes, el ‘css’ de los componentes y el archivo ‘App.js’ para manejar las rutas del proyecto. 

Componentes 

Los componentes en React son como bloques de construcción para construir páginas web. Cada componente representa una parte diferente de la página, como un botón, un encabezado o un formulario. Estos componentes se pueden reutilizar y componer juntos para crear interfaces de usuario complejas y dinámicas de manera más sencilla. 

ListadoComponent 

Este Componente es el principal, en él vamos a trabajar a partir del primer controlador, con los productos con el precio original, en el componente he hecho un GET para recibir un listado de productos, he creado un link para ir al otro componente, también un botón para añadir un producto, y dentro de cada producto los botones ‘Modificar y ‘Eliminar’.  

OfertasComponent

Este es el componente en el que vamos a cargar el controlador de solo los productos de
con las ofertas añadidas, aquí en este componente solo queremos ver el lisado así que solo
se hace una solicitud GET.

App 

El componente App es el punto de partida de la aplicación de React y actúa como el contenedor principal que organiza y renderiza otros componentes dentro de la interfaz de usuario. 

Conclusión del FrontEnd 

En resumen, lo que va a hacer este proyecto es conectarse con el backend de Spring y crear componentes para darle una interfaz a las solicitudes HTTP, a esos componentes se le añade un estilo con css pero que se vean con buen aspecto, y el resultado sería una página web con estilo y con la que puedes trabajar haciendo solicitudes y recibiendo los datos de la base de datos. 

Video del funcionamiento: https://www.youtube.com/watch?v=Wd1Skiyh8KY&ab_channel=PabloDeLaCruz
