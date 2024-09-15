// Basic Authorization------------------------------------------------------------

// let usuario = 'Daniel';
// let password = 'javascriptTotal';

// fetch('https://jsonplaceholder.typicode.com/posts',{
//   method: 'GET',
//   credentials: 'include',
//   headers: {
//     'Authorization': 'Basic' + btoa(usuario + ':' + password),
//     'Content-Type': 'application/json'
//   }
// })

// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));


// Bearer Authorization------------------------------------------------------------


let usuario = 'Daniel';
let password = 'javascriptTotal';
let token = 'miToken';

fetch('https://jsonplaceholder.typicode.com/posts',{
  method: 'GET',
  credentials: 'include',
  cache: 'only-if-cached',
  redirect: 'manual',
  headers: {
    'Authorization': 'Bearer' + token,
    'Content-Type': 'application/json'
  }
})


// Only if redirect is "manual":
.then(response => {
  if(response.type === 'opaqueredirect'){
    let nuevaUbicacion = response.headers.get('Location');
    console.log('Redirigiendo a :' + nuevaUbicacion);
  } else {
    return response.json();
  }
})
.then(data => console.log(data))
.catch(error => console.error(error));