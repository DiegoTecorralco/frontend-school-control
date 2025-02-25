export const Teacher = () => {
    return(
      <>
          <div className="card">
              <div className="card-header">
                  <h3>Registro de Maestros</h3>
              </div>
              <div className="card-body">
                  <form action="">
                      <div className="row">
                          <div className="col-lg-2">
                              <label htmlFor="txtTeacherNumber" className="form-label">Matricula</label>
                              <input type="text" id="txtTeacherNumber" className="form-control" name="teacher_number" />
                          </div>
                          <div className="col-lg-2">
                              <label htmlFor="txtName" className="form-label">Nombre</label>
                              <input type="text" id="txtName" className="form-control" name="name" />
                          </div>
                          <div className="col-lg-2">
                              <label htmlFor="txtLastName" className="form-label">Apellido(s)</label>
                              <input type="text" id="txtLastName" className="form-control" name="lastname" />
                          </div>
                          <div className="col-lg-2">
                              <label htmlFor="txtAge" className="form-label">Edad</label>
                              <input type="number" id="txtAge" className="form-control" name="age" />
                          </div>
                          <div className="col-lg-2">
                              <label htmlFor="txtCareer" className="form-label">Carrera</label>
                              <input type="text" id="txtCareer" className="form-control" name="career" />
                          </div>
                          <div className="col-lg-2">
                              <label htmlFor="txtSalary" className="form-label">Salario</label>
                              <input type="number" id="txtSalary" className="form-control" name="salary" />
                          </div>
                          <div className="col-lg-2">
                              <input className="btn btn-primary" type="submit" value="Guardar" />
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </>
    )
}
