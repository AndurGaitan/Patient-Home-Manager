import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'Juan Pérez', age: 65, condition: 'EPOC' },
    { id: 2, name: 'María López', age: 72, condition: 'Asma' },
    { id: 3, name: 'Carlos García', age: 80, condition: 'Fibrosis Pulmonar' },
  ]);

  return (
    <div className="container mx-auto p-4">
    <section>
        <h1 className="text-3xl font-bold mb-4">Lista de Pacientes</h1>
    </section>
    <section>
      <h1 className="text-3xl font-bold mb-4">Lista de Pacientes</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {patients.map((patient) => (
          <div key={patient.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{patient.name}</h2>
            <p>Edad: {patient.age}</p>
            <p>Condición: {patient.condition}</p>
            <Link to="/assign-kinesiologist">
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                Asignar Kinesiólogo
              </button>
            </Link>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
};

export default Home;
