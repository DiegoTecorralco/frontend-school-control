import { getAllTeachers } from "../services/TeacherService";
import { useEffect, useState } from "react";

interface Teacher {
    teacher_number: number;
    name: String,
    lastname: String,
    age: number,
    career: String,
    salary: number
}

export const TableTeacher = () => {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    
    useEffect(() => {
        getAllTeachers()
            .then((data) => {
                const {data:dataTeachers} = data;
                console.log("Datos recibidos de estudiantes", dataTeachers);
                setTeachers(dataTeachers);
            })
            .catch((error) => {
                console.log("Error al obtener los datos de estudiantes");
            });
    }, [teachers]);

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
          {teachers.map((teacher) => (
              <tr key={teacher.teacher_number}>
                  <td>{teacher.teacher_number}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.lastname}</td>
                  <td>{teacher.age}</td>
                  <td>{teacher.career}</td>
                  <td>{teacher.salary}</td>
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
  