import { useState } from 'react'
import './App.css'


const usuario = {
  nome: "Lucas Ramalho"
}

const OlaMundo = () => {
  return (
    <h3>Olá mundo</h3>
  )
}

const BoasVindasUsuario = () => {
  return (
    <p>Seja bem-vind@ usuári@ {usuario.nome}</p>
  )
}

//// Component funcional do React

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OlaMundo />
      <BoasVindasUsuario />
    </>
  )
}

export default App
