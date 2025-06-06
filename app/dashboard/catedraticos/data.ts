export type Estudio = {
    nivel: string;
    descripcion: string;
    institucion: string;
  };
  
  export type Asignacion = {
    licenciatura: string;
    ciclo: string;
    modalidad: string;
    clases: string;
    status: string;
    motivoBaja: string;
    recomendaReingreso: string;
  };
  
  export type Experiencia = {
    descripcion: string;
    institucion: string;
    fecha: string;
  };
  
  export type Evaluacion = {
    ciclo: string;
    calificacion: string;
    comentarios: string;
  };
  
  export type Catedratico = {
    id: number;
    nombre: string;
    especialidad: string;
    fechaNacimiento: string;
    titulo: string;
    escuelaAval: string;
    estudios: Estudio[];
    asignaciones: Asignacion[];
    experiencia: Experiencia[];
    evaluaciones: Evaluacion[];
  };
  
  export const catedraticosData: Catedratico[] = [
    {
      id: 1,
      nombre: "Dr. Juan Pérez",
      especialidad: "Matemáticas",
      fechaNacimiento: "1975-06-15",
      titulo: "Doctorado en Matemáticas",
      escuelaAval: "UNAM",
      estudios: [
        {
          nivel: "Licenciatura",
          descripcion: "Matemáticas Puras",
          institucion: "UNAM"
        },
        {
          nivel: "Maestría",
          descripcion: "Matemáticas Aplicadas",
          institucion: "IPN"
        },
        {
          nivel: "Doctorado",
          descripcion: "Topología Algebraica",
          institucion: "UNAM"
        }
      ],
      asignaciones: [
        {
          licenciatura: "Ingeniería en Sistemas",
          ciclo: "2023-2",
          modalidad: "Presencial",
          clases: "Álgebra Lineal",
          status: "Activo",
          motivoBaja: "N/A",
          recomendaReingreso: "Sí"
        }
      ],
      experiencia: [
        {
          descripcion: "Docente en preparatoria",
          institucion: "Colegio de Bachilleres",
          fecha: "2000-2005"
        },
        {
          descripcion: "Profesor universitario",
          institucion: "UNAM",
          fecha: "2005-Actualidad"
        }
      ],
      evaluaciones: [
        {
          ciclo: "2023-1",
          calificacion: "9.5",
          comentarios: "Excelente dominio del tema"
        },
        {
          ciclo: "2023-2",
          calificacion: "9.8",
          comentarios: "Metodología clara y efectiva"
        }
      ]
    },
  
    {
      id: 2,
      nombre: "Mtra. Ana Gómez",
      especialidad: "Literatura",
      fechaNacimiento: "1982-03-22",
      titulo: "Maestría en Letras Hispánicas",
      escuelaAval: "UAM",
      estudios: [
        {
          nivel: "Licenciatura",
          descripcion: "Letras Hispánicas",
          institucion: "UAM"
        },
        {
          nivel: "Maestría",
          descripcion: "Literatura Latinoamericana",
          institucion: "UAM"
        }
      ],
      asignaciones: [
        {
          licenciatura: "Lengua y Literatura",
          ciclo: "2023-2",
          modalidad: "En línea",
          clases: "Literatura Contemporánea",
          status: "Activo",
          motivoBaja: "N/A",
          recomendaReingreso: "Sí"
        }
      ],
      experiencia: [
        {
          descripcion: "Editora de textos",
          institucion: "Editorial Planeta",
          fecha: "2008-2013"
        },
        {
          descripcion: "Docente universitaria",
          institucion: "UAM",
          fecha: "2013-Actualidad"
        }
      ],
      evaluaciones: [
        {
          ciclo: "2023-1",
          calificacion: "9.0",
          comentarios: "Muy dinámica en clases"
        },
        {
          ciclo: "2023-2",
          calificacion: "9.2",
          comentarios: "Estímulo a la participación"
        }
      ]
    }
  ];
  