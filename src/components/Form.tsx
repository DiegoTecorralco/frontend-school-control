export const Form = () => {
  return(
    <>
        <div className="card">
            <div className="card-header">
                <h3>Tegistro de Alumnos</h3>
            </div>
            <div className="card-body">
                <form action="">
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="txtStudentId" className="form-label">Matricula</label>
                            <input type="text" id="txtStudentId" className="form-control" name="student_id" />
                        </div>
                        <div className="col-lg-6">
                        <label htmlFor="txtName" className="form-label">Nombre</label>
                        <input type="text" id="txtName" className="form-control" name="name" />
                        </div>
                        <div className="col-lg-6">
                        <label htmlFor="txtLastName" className="form-label">Apellido(s)</label>
                        <input type="text" id="txtLastName" className="form-control" name="lastname" />
                        </div>
                        <div className="col-lg-6">
                        <label htmlFor="txtGrade" className="form-label">Grado</label>
                        <input type="number" id="Grade" className="form-control" name="grade" />
                        </div>
                        <div className="col-lg-6">
                        <label htmlFor="txtGroup" className="form-label">Grupo</label>
                        <input type="number" id="Group" className="form-control" name="group" />
                        </div>
                        <div className="col-lg-6">
                        <label htmlFor="txtAverage" className="form-label">Promedio</label>
                        <input type="number" id="txtAverage" className="form-control" name="average" />
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    </>
  )
}