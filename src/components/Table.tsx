import { useEffect, useState } from "react";
import{getAllStudents} from '../services/StudentService';
export const Table = () => {
    const [students,setStudents]= useState([]);

    useEffect(()=>{
    getAllStudents()
    .then((data)=>{
        console.log("Datos recibidos de estudiantes",data);
        setStudents(data);
    })
    .catch((error)=>{
        console.log("error al obtener los datos de estudiantes");
    });
    },[]);

  return (
    <>
    <table className="table-primary table-strped">
        <thead>
            <th>Matricula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Grado</th>
            <th>Grupo</th>
            <th>Promedio</th>
            <th colSpan={2}>Operaciones</th>
        </thead>
        <tbody>
            <tr>
                <td>230374</td>
                <td>Diego Salvador</td>
                <td>Tecorralco Martinez</td>
                <td>5</td>
                <td>B</td>
                <td>8.2</td>
                <td>
                    <a href="#" className="btn btn-success">
                        Editar
                    </a>
                </td>
                <td>
                    <a href="#" className="btn btn-danger">Eliminar</a>
                </td>
            </tr>
        </tbody>
    </table>
    </>
  )
}
