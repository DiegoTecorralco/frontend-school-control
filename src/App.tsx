import { Form } from "./components/form"
import { Navbar } from "./components/Navbar"
import { Table } from "./components/Table"

function App() {

  return (
    <>
    <div className="container">
      <div className="row mb-3">
        {/*Aquí va la llamada al componente de la Navbar*/}
      </div>
        <Navbar/>
      <div className="row">
        <div className="col-lg 5">
          {/*aqui va la llamada al cpmponente para el formulario*/ }
          <Form/>
        </div>
        <div className="col-lg 7">
          {/*aqui va la llamada ak componente para la tabla*/}
          <Table/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
