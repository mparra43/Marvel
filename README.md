# Marvel
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instrucciones 

Para ejecutar el proyecto es necesario crear un la raíz de la carpeta api un archivo .env con las siguientes variables de entorno: PORT 	que hace referencia al puerto en el que corre el servidor,  y los siguientes datos para que se pueda conectar a la base de datos DB_USER que identifica el usuario, DB_PASSWORD es la clave de usuario DB_HOST es el host de la base de datos y por ultimo DB_PORT que es el puerto, SECRET_JWT_SEED que es la clave que genera el JWT , y por ultimo API_URL que es la api de consumo de marvel.   

## Servicios 

 Crear un usuario: /marvel/auth/new/<br />
 Autenticación: /marvel/auth/login<br />
 Get de los comics : /marvel/all<br />
 agregar un favorito: /marvel/addFavorite<br />
 get a los favoritos:/marvel/allFavorites<br />


### `npm run dev`

Ejecuta la aplicación en modo de desarrollo.<br />
 pruebe [http://localhost:PORT](http://localhost:3001) en el Postman, El puerto puede cambiar de acuerdo al valor que se le asigne en PORT


### `npm star`

Ejecuta la aplicación client en modo de desarrollo.
Abra http: // localhost: 3000 para verlo en el navegador.

La página se recargará si realiza modificaciones.
También verá errores de pelusa en la consola.

### `HOME`
![image](https://user-images.githubusercontent.com/66500440/139009302-cdefa285-2964-4598-b0a7-618c49aba21b.png)

### `MAIN SCREEN`
![image](https://user-images.githubusercontent.com/66500440/139009490-a449bb52-162f-4b15-baa9-85de8dafd03d.png)

### `DETAIL SCREEN`
![image](https://user-images.githubusercontent.com/66500440/139009844-4916eb93-e04f-4ca7-a819-fb20e6ea5a4d.png)

### `FAVORITES`
![image](https://user-images.githubusercontent.com/66500440/139010238-d0539b62-e816-4d8e-a9ba-fc3acfb2b870.png)
