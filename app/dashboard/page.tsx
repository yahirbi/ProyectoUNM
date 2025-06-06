import React from 'react';

const DescriptionBoxAlt = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="border-l-4 border-green-500 pl-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Sistema Catedráticos</h2>
        <p className="text-gray-600">
          Plataforma integral para la gestión académica universitaria
        </p>
      </div>
      
      <div className="mt-6">
        <p className="text-gray-700 mb-4">
        Gestiona de manera eficiente el seguimiento de los catedráticos de la universidad con nuestro sistema en desarrollo. 
        Este sistema te permite registrar y consultar información detallada sobre los catedráticos, sus asignaciones, licenciaturas 
        y clases impartidas. Registra evaluaciones docentes, analiza su desempeño con gráficas interactivas y genera reportes 
        personalizados para tomar decisiones informadas. Diseñado para ahorrar tiempo y mejorar la calidad educativa, nuestro sistema 
        está en constante evolución para adaptarse a tus necesidades.
        </p>
        
        <div className="bg-green-50 p-4 rounded-lg mt-4">
          <h3 className="font-medium text-green-700 mb-3">Características principales</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5">
                <span className="text-green-700 text-xs">✓</span>
              </div>
              <span className="ml-2 text-sm text-gray-600">Gestión completa de cursos y asignaturas</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5">
                <span className="text-green-700 text-xs">✓</span>
              </div>
              <span className="ml-2 text-sm text-gray-600">Creación y calificación de evaluaciones</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5">
                <span className="text-green-700 text-xs">✓</span>
              </div>
              <span className="ml-2 text-sm text-gray-600">Informes y estadísticas de rendimiento</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBoxAlt;