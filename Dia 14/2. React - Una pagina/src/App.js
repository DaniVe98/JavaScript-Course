import React from 'react';
import Saludo from './saludo';
import Mensaje from './mensaje';

function App() {
  return (
    <div>
      <Saludo nombre="Daniel" />
      <Mensaje mensaje="Bienvenido a mi aplicación React" />
      <Saludo nombre="Alfredo" />
    </div>
  )
}

export default App;