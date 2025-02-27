import { getAllClassrooms } from "../services/ClassroomService";
import { useEffect, useState } from "react";

interface Classroom {
    classroom_id: number,
    building: String,
    career: String,
    type: String,
    capacity: number
}

export const TableClassroom = () => {
    const [classrooms, setTeachers] = useState<Classroom[]>([]);
    
    useEffect(() => {
        getAllClassrooms()
            .then((data) => {
                const {data:dataClassrooms} = data;
                console.log("Datos recibidos de maestros", dataClassrooms);
                setTeachers(dataClassrooms);
            })
            .catch((error) => {
                console.log("Error al obtener los datos de maestros");
            });
    }, [classrooms]);

    return (
      <>
          <table className="table-primary table-strped">
          <thead>
              <th>Numero</th>
              <th>Edificio</th>
              <th>Carrera</th>
              <th>Tipo</th>
              <th>Capacidad</th>
              <th colSpan={2}>Operaciones</th>
          </thead>
          <tbody>
          {classrooms.map((classroom) => (
              <tr key={classroom.classroom_id}>
                  <td>{classroom.classroom_id}</td> 
                  <td>{classroom.building}</td>
                  <td>{classroom.career}</td>
                  <td>{classroom.type}</td>
                  <td>{classroom.capacity}</td>
                  <td>
                      <a href="#" className="btn btn-success">
                          Editar
                      </a>
                  </td>
                  <td>
                      <a href="#" className="btn btn-danger">Eliminar</a>
                  </td>
              </tr>
              ))}
          </tbody>
      </table>
      </>
    )
  }
  