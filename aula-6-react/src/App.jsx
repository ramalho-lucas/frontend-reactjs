import Card from "./components/Card"
import Card2 from "./components/Card2"

const usuarios = [
  {
      id: 1,
      name: "Lucas",
      turma: "Front-End",
      ativo: true,
  },

  {
      id: 2,
      name: "Raquel",
      turma: "back-End",
      ativo: false,
  },

  {
      id: 3,
      name: "Ana",
      turma: "UX",
      ativo: true,
  },
];

function App() {

  return (
    <div className="App">
      <h1>Hello World</h1>

      <Card title="Card 1"/>
      <Card title="Card 2"/>
      <Card title="Card 3"/>
      <Card title="Card 4"/>
      <Card />

      
      <ul>
        {usuarios.map((usuario)=>(
            <Card2 usuario={usuario}/>
        ))
        }
      </ul>
    

    </div>
  )
}

export default App
