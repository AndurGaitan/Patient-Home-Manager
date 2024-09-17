import { useState } from 'react';

const AssignKinesiologistPage = () => {
  const [kinesiologist, setKinesiologist] = useState('');
  const [patientId, setPatientId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Asignado ${kinesiologist} al paciente con ID: ${patientId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Asignar Kinesiólogo</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="patientId" className="block text-gray-700">
            ID del Paciente
          </label>
          <input
            type="text"
            id="patientId"
            className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="kinesiologist" className="block text-gray-700">
            Nombre del Kinesiólogo
          </label>
          <input
            type="text"
            id="kinesiologist"
            className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
            value={kinesiologist}
            onChange={(e) => setKinesiologist(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Asignar Kinesiólogo
        </button>
      </form>
    </div>
  );
};

export default AssignKinesiologistPage;
