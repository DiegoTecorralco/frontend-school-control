import { useEffect, useState } from "react";
import { getAllStudents } from '../services/StudentService';

interface Student {
    student_id: string;
    name: string;
    lastname: string;
    grade: string;
    group: string;
    average: string;
}

export const Table = () => {
    const [students, setStudents] = useState<Student[]>([]);
    
    useEffect(() => {
        getAllStudents()
            .then((data) => {
                const {data:dataStudents} = data;
                console.log("Datos recibidos de estudiantes", dataStudents);
                setStudents(dataStudents);
            })
            .catch((error) => {
                console.log("Error al obtener los datos de estudiantes");
            });
    }, [students]);

    return (
        <>
            <table className="table-primary table-striped">
                <thead>
                    <tr>
                        <th>Matricula</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Grado</th>
                        <th>Grupo</th>
                        <th>Promedio</th>
                        <th colSpan={2}>Operaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.student_id}>
                            <td>{student.student_id}</td>
                            <td>{student.name}</td>
                            <td>{student.lastname}</td>
                            <td>{student.grade}</td>
                            <td>{student.group}</td>
                            <td>{student.average}</td>
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
