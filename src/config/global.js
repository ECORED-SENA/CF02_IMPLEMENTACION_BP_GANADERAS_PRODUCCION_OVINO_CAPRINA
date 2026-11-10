export default {
  global: {
    Name: 'Evaluación, seguimiento y mejoramiento de las Buenas Prácticas Ganaderas en la producción ovino-caprina',
    Description:
      'El componente desarrolla la evaluación, el seguimiento y el mejoramiento de las Buenas Prácticas Ganaderas en una unidad ovino-caprina. El aprendiz interpretará evidencias, utilizará indicadores, reconocerá riesgos y contingencias y distinguirá correcciones de acciones correctivas y preventivas. A partir del análisis de causas, estructurará un plan con prioridades, responsables, recursos y plazos, y comprenderá cómo verificar su eficacia y documentar el cierre.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Evaluación de las Buenas Prácticas Ganaderas en la producción ovino-caprina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto, objetivos y metodología de evaluación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Criterios de evaluación de las BPG',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Inspección de procesos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Lista de chequeo: estructura y aplicación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Verificación e interpretación de resultados',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión y seguimiento del cumplimiento de las BPG',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Gestión de la calidad: seguimiento y control',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Indicadores de cumplimiento y desempeño',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Gestión de la información',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Registros, evidencias y trazabilidad',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Informes: finalidad, tipos y frecuencia',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de contingencias y control de procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y tipos de contingencias',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Identificación y priorización de riesgos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Respuesta ante contingencias',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Seguimiento y evaluación de la respuesta',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Control y continuidad de los procesos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Mejoramiento continuo y plan de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto y principios del mejoramiento continuo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Importancia en la producción ovino-caprina',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Estructura y componentes del plan de mejora',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Priorización de acciones de mejora',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Responsables, recursos, tiempos y seguimiento',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Acciones correctivas, preventivas y no conformidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Acciones correctivas: concepto y características',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Acciones preventivas: concepto y aplicación',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Identificación y clasificación de no conformidades',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Registro y tratamiento de no conformidades',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Seguimiento y verificación de las acciones',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
