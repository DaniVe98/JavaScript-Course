function login() {
    let miEmail = document.getElementById("txtEmail").value;
    let miPass = document.getElementById("txtPass").value;

  var regex = /^[a-zA-Z0-9]+$/;

  if(miPass.match(regex)){
    try {
        fetch('http://localhost:3000/usuarios/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: miEmail,
                pass: miPass
            })
        })
        .then(respuesta => respuesta.text())
        .then(data => {
            if(data === "") {
              alert("Login incorrecto");
            }
            else {
              localStorage.setItem('token', data);
              window.location.href = "home.html";
            }
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
  } else {
    alert('No se permiten caracteres especiales, solo letras y numeros');
  }
}


function crear() {
    let miEmail = document.getElementById("txtEmail").value;
    let miPass = document.getElementById("txtPass").value;

    var constraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if(miPass.match(constraseñaRegex)){
      try {
          fetch('http://localhost:3000/usuarios/create', {
              method: 'POST',
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  email: miEmail,
                  pass: miPass
              })
          })
          .then(alert("Usuario creado"))
          .catch(error => { throw new Error("Error en la solicitud: " + error) })
      } catch (error) {
          console.error(error)
      }
    } else {
        alert('La contraseña no cumple las condiciones minimas');
      }
}