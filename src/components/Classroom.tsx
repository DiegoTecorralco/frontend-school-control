export const Classroom = () => {
    return(
      <>
          <div className="card">
              <div className="card-header">
                  <h3>Registro de Aulas</h3>
              </div>
              <div className="card-body">
                  <form action="" method="post">
                      <div className="row">
                          <div className="col-lg-2">
                              <label htmlFor="txtClassroomId" className="form-label">Numero de Aula</label>
                              <input 
                                type="number" 
                                id="txtClassroomId" 
                                className="form-control" 
                                name="classroom_id" 
                                required 
                              />
                          </div>
                          <div className="col-lg-2">
                              <label htmlFor="txtName" className="form-label">Edificio</label>
                              <input 
                                type="text" 
                                id="txtName" 
                                className="form-control" 
                                name="building" 
                                required 
                              />
                          </div>
                          <div className="col-lg-2">
                              <label htmlFor="txtCareer" className="form-label">Carrera</label>
                              <input 
                                type="text" 
                                id="txtCareer" 
                                className="form-control" 
                                name="career" 
                                required 
                              />
                          </div>
                          <div className="col-lg-2">
                              <label htmlFor="txtType" className="form-label">Tipo de edificio</label>
                              <input 
                                type="text" 
                                id="txtType" 
                                className="form-control" 
                                name="type" 
                                required 
                              />
                          </div>
                          <div className="col-lg-2">
                              <label htmlFor="txtCapacity" className="form-label">Capacidad</label>
                              <input 
                                type="number" 
                                id="txtCapacity" 
                                className="form-control" 
                                name="capacity" 
                                required 
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
    )
}
