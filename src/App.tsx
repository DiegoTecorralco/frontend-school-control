import { Classroom } from "./components/Classroom";
import { Form } from "./components/Form";
import { Navbar } from "./components/Navbar";
import { Table } from "./components/Table";
import { TableClassroom } from "./components/TableClassroom";
import { TableTeacher } from "./components/TableTeacher";
import { Teacher } from "./components/Teacher";

function App() {

    return (
        <>
            <div className="container">
                <div className="row mb-3">
                    {/* Aquí va la llamada al componente de la Navbar */}
                    <Navbar />
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* Aquí va la llamada al componente para el formulario */}
                        <Form />
                    </div>
                    <div className="col-12">
                        {/* Aquí va la llamada al componente para la tabla */}
                        <Table />
                    </div>
                    <div className="col-12">
                        {/* Aquí va la llamada al componente para la tabla */}
                        <Classroom />
                    </div>
                    <div className="col-12">
                        {/* Aquí va la llamada al componente para la tabla */}
                        <TableClassroom />
                    </div>
                    <div className="col-12">
                        {/* Aquí va la llamada al componente para la tabla */}
                        <Teacher />
                    </div>
                    <div className="col-12">
                        {/* Aquí va la llamada al componente para la tabla */}
                        <TableTeacher />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
