// Axios con POST
let datos = {
  title: 'Nuevo post',
  body: 'Mi contenido'
}

axios.post('https://jsonplaceholder.typicode.com/posts', datos)
.then(respuesta => console.log('El post ha sido creado con éxito', respuesta.data))
.catch(error => console.error('Error al publicar', error));


// Axios con all y spread
let pedido1 = axios.get('htttps://api.ejemplo.com/data1');
let pedido2 = axios.get('htttps://api.ejemplo.com/data2');
let pedido3 = axios.get('htttps://api.ejemplo.com/data3');

axios.all([pedido1, pedido2, pedido3])
.then(axios.spread((respuesta1, respuesta2, respuesta3)=>{
  // Código
}))
.catch(error =>{
  // Manejar errores
});


// Método moderno que reemplaza a Axios
let pedido4 = axios.get('htttps://api.ejemplo.com/data4');
let pedido5 = axios.get('htttps://api.ejemplo.com/data5');
let pedido6 = axios.get('htttps://api.ejemplo.com/data6');

Promise.all([pedido1, pedido2, pedido3])
.then(([respuesta1, respuesta2, respuesta3])=>{
  // Código
})
.catch(error =>{
  // Manejar errores
});


// Interceptores REQUEST y RESPONSE
let miToken = 'este_es_mi_Token';

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer $(miToken)`;
    return config;
  }, (error) => {
    return Promise.reject(error);
  }
)

axios.interceptors.response.use(
  (respuesta) => {
    respuesta.data.customField = "Nuevo campo";
    return respuesta;
  }, (error) => {
    return Promise.reject(error);
  }
)

let pedido7 = axios.get('htttps://api.ejemplo.com/data7');
let pedido8 = axios.get('htttps://api.ejemplo.com/data8');
let pedido9 = axios.get('htttps://api.ejemplo.com/data9');

Promise.all([pedido1, pedido2, pedido3])
.then(([respuesta1, respuesta2, respuesta3])=>{
  // Código
})
.catch(error =>{
  // Manejar errores
});