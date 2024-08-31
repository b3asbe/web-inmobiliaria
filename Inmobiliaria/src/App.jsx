import { useState } from 'react'
import './App.css'
import './js/app.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Encabezado from './componente/Encabezado'
import Cuerpo from './componente/Cuerpo'
import Pie from './componente/Pie'
function App() {
  return (
    <>
      <Encabezado/>
      <Cuerpo/>
      <Pie/>
    </>
  )
}

export default App
