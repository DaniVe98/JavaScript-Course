//  Configurar con eExpressJS el servidor de la app
const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(3000);

// Llamar al objeto MongoClient del componente mongoDB
const {MongoClient} = require('mongodb');

// Funcion asincrona para hacer las peticiones al servidor
async function usar(){
  // Crear nueva instacia de Mongo Client
  const client = new MongoClient("mongodb://127.0.0.1:27017/mibase");

  // Nos conectamos y hacemos nuestras peticiones
  try{
    const conexion = await client.connect();
    const controlador = conexion.db().collection('clientes');
    
    let respuesta, filas, filtro;

    // Insertar un nuevo registro
    const nuevoCliente = {nombre: "Daniel Vega", genero: 0, telefono: 35446, domicilio: "Calle 159 B 8D"};
    respuesta = await controlador.insertOne(nuevoCliente);
    console.log("Insertado: ", respuesta);

    // Realizar una consulta
    filas = await controlador.find().toArray();
    console.log("Seleccion: ", filas);

    // Modificar el registro anterior
    const cambiarCliente = {$set: {genero: 1, telefono: 161616}};
    filtro = {nombre: "Daniel Vega"};
    respuesta = await controlador.updateOne(filtro, cambiarCliente);
    console.log("Actualizado a: ", respuesta);

    // Realizar una consulta
    filtro = {genero: 1};
    filas = await controlador.find(filtro).toArray();
    console.log("Seleccion: ", filas);

    // Eliminar un registro
    filtro = {nombre: "Daniel Vega"};
    respuesta = await controlador.deleteOne(filtro);
    console.log("Eliminado: ", respuesta);

    // Realizar una consulta
    filas = await controlador.find().toArray();
    console.log("Seleccion: ", filas);
  } catch(error) {
    console.log(error)
  };
}

usar();