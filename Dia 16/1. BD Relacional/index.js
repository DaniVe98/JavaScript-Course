// Configurar con eExpressJS el servidor de la app
const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(3000);

// Llamar al componente de mysql
var mysql = require('mysql2');


// Establecer los parámetros de la conexión
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Inchcape@2023<',
  database: 'mibasenueva'
});

// Nos conectamos con la base
connection.connect();

// Agregar un nuevo registro
connection.query('INSERT INTO cliente VALUES(1, "Santiago", 1, 2435, "Cll 45 Cra. 7 41")', function(error, resultados){
  if(error) throw error;
  console.log(resultados)
});

// Realizar la consulta a la tabla
connection.query('SELECT * FROM cliente', function(error, filas){
  if(error) throw error;
  console.log(filas)
});

// Realizar modificación de registro
connection.query('UPDATE cliente SET genero = 0, telefono = 34544545 WHERE identificador = 1', function(error, resultados){
  if(error) throw error;
  console.log(resultados)
});

// Realizar la consulta a la tabla
connection.query('SELECT * FROM cliente', function(error, filas){
  if(error) throw error;
  console.log(filas)
});

// Eliminar un registro
connection.query('DELETE FROM cliente WHERE identificador = 1', function(error, resultados){
  if(error) throw error;
  console.log(resultados)
})

// Realizar la consulta a la tabla
connection.query('SELECT * FROM cliente', function(error, filas){
  if(error) throw error;
  console.log(filas)
});

// Cerramos la conexión
connection.end();
