import { useState } from "react";
import { insertClassroom } from "../services/ClassroomService"; // Importa el servicio de insertar aulas

export const Classroom = () => {
  const [formData, setFormData] = useState({
    classroom_id: "",
    building: "",
    career: "",
    type: "",
    capacity: "",
  });

  const [message, setMessage] = useState(""); // Para mostrar mensajes de éxito o error

  // Actualiza el estado del formulario cuando el usuario escribe algo
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previene la recarga de la página

    try {
      const response = await insertClassroom(formData);
      if (response.message === "Classroom saved") {
        alert('Estudiante registrado con éxito');
        setFormData({
          classroom_id: "",
          building: "",
          career: "",
          type: "",
          capacity: "",
        }); // Limpiar el formulario después de éxito
      }
    } catch (error) {
      setMessage("Hubo un error al guardar el aula.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3>Registro de Aulas</h3>
        </div>
        <div className="card-body">
          {message && <div className="alert alert-info">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-2">
                <label htmlFor="txtClassroomId" className="form-label">
                  Numero de Aula
                </label>
                <input
                  type="number"
                  id="txtClassroomId"
                  className="form-control"
                  name="classroom_id"
                  value={formData.classroom_id}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-2">
                <label htmlFor="txtBuilding" className="form-label">
                  Edificio
                </label>
                <input
                  type="text"
                  id="txtBuilding"
                  className="form-control"
                  name="building"
                  value={formData.building}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-2">
                <label htmlFor="txtCareer" className="form-label">
                  Carrera
                </label>
                <input
                  type="text"
                  id="txtCareer"
                  className="form-control"
                  name="career"
                  value={formData.career}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-2">
                <label htmlFor="txtType" className="form-label">
                  Tipo de edificio
                </label>
                <input
                  type="text"
                  id="txtType"
                  className="form-control"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-2">
                <label htmlFor="txtCapacity" className="form-label">
                  Capacidad
                </label>
                <input
                  type="number"
                  id="txtCapacity"
                  className="form-control"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-2">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
