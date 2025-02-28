// src/App.tsx
import React, { useState } from 'react';
import { Classroom } from './components/Classroom';
import { TableClassroom } from './components/TableClassroom';
import { Teacher } from './components/Teacher';
import { TableTeacher } from './components/TableTeacher';
import { Form } from './components/Form';
import { Table } from './components/Table';
import { Navbar } from './components/Navbar';

function App() {
  const [activeComponent, setActiveComponent] = useState<string>("");

  const handleNavigation = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <Navbar handleNavigation={handleNavigation} />
        </div>
        <div className="row">
          <div className="col-12">
            {activeComponent === "classroom" && (
              <>
                <Classroom />
                <TableClassroom />
              </>
            )}
            {activeComponent === "teacher" && (
              <>
                <Teacher />
                <TableTeacher />
              </>
            )}
            {activeComponent === "student" && (
              <>
                <Form />
                <Table />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
