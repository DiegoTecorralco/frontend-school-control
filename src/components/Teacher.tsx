import React, { useState } from 'react';
import { insertTeacher } from '../services/TeacherService'; // Asegúrate de importar la función insertTeacher

export const Teacher = () => {
    // Define el estado para cada campo del formulario
    const [teacher, setTeacher] = useState({
        teacher_number: '',
        name: '',
        lastname: '',
        age: 0, // Asegúrate de que el estado sea un número para 'age'
        career: '',
        salary: 0, // Asegúrate de que el estado sea un número para 'salary'
    });

    // Define un estado para manejar los errores
    const [error, setError] = useState<string | null>(null);

    // Maneja los cambios de los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTeacher({
            ...teacher,
            [name]: name === "age" || name === "salary" ? Number(value) : value, // Convierte 'age' y 'salary' a números
        });
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevenir recarga de la página al enviar el formulario
        try {
            const response = await insertTeacher(teacher); // Llamar a la función insertTeacher de Axios
            console.log('Teacher added:', response);
            // Puedes agregar un mensaje de éxito o redirigir a otra página aquí
        } catch (error) {
            console.error('Error al agregar el maestro:', error);
            setError('Error al agregar el maestro. Por favor intente de nuevo.');
        }
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3>Registro de Maestros</h3>
                </div>
                <div className="card-body">
                    {/* Mostrar mensaje de error si existe */}
                    {error && <div className="alert alert-danger">{error}</div>}
                    
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-2">
                                <label htmlFor="txtTeacherNumber" className="form-label">Matricula</label>
                                <input
                                    type="text"
                                    id="txtTeacherNumber"
                                    className="form-control"
                                    name="teacher_number"
                                    value={teacher.teacher_number}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-lg-2">
                                <label htmlFor="txtName" className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    id="txtName"
                                    className="form-control"
                                    name="name"
                                    value={teacher.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-lg-2">
                                <label htmlFor="txtLastName" className="form-label">Apellido(s)</label>
                                <input
                                    type="text"
                                    id="txtLastName"
                                    className="form-control"
                                    name="lastname"
                                    value={teacher.lastname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-lg-2">
                                <label htmlFor="txtAge" className="form-label">Edad</label>
                                <input
                                    type="number"
                                    id="txtAge"
                                    className="form-control"
                                    name="age"
                                    value={teacher.age}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-lg-2">
                                <label htmlFor="txtCareer" className="form-label">Carrera</label>
                                <input
                                    type="text"
                                    id="txtCareer"
                                    className="form-control"
                                    name="career"
                                    value={teacher.career}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-lg-2">
                                <label htmlFor="txtSalary" className="form-label">Salario</label>
                                <input
                                    type="number"
                                    id="txtSalary"
                                    className="form-control"
                                    name="salary"
                                    value={teacher.salary}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-lg-2">
                                <input className="btn btn-primary" type="submit" value="Guardar" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
