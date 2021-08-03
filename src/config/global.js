export default {
  global: {
    componenteFormativo: 'Aplicaciones móviles híbridas',
    descripcionCurso:
      'Una aplicación híbrida se crea utilizando <i>HTML5</i>, funciona en cualquier plataforma y dispositivo.  Son más rápidas de desarrollar, pero no permiten acceder a todos los recursos de un <i>smartphone</i>, lo que hace indispensable un análisis del producto a desarrollar antes de elegir el tipo de plataforma de desarrollo (nativa, híbrida).',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción aplicaciones móviles híbridas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de aplicaciones móviles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'La monetización de las <i>apps</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          '<i>Frameworks</i> para el desarrollo de aplicaciones móviles híbridas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Etapas en el desarrollo de <i>apps</i>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Cadenas, R. (2019). ¿Qué necesito? ¿Web Apps, App Nativa o App Híbrida? GSoft.',
      link:
        'https://www.gsoft.es/articulos/que-necesito-web-apps-app-nativa-o-app-hibrida/?cli_action=1626116601.578',
    },
    {
      referencia: 'CuponU. (2021). Uber ¿Cómo funciona? CuponU.com.',
      link: 'https://cuponu.com/uber-como-funciona/',
    },
  ],
  glosario: [
    {
      termino: 'BackEnd',
      significado:
        'es un conjunto de acciones que permiten la integración a las bases de datos o la conexión por medio de API a los dispositivos o servicios.',
    },
    {
      termino: 'Interface (interfaz)',
      significado:
        'Zona de contacto, conexión entre dos componentes de hardware, entre dos aplicaciones o entre un usuario y una aplicación. [WEB]. También apariencia externa de una aplicación informática. Ver también: "application". [RFCALVO]',
    },
    {
      termino: 'JavaScript',
      significado:
        'Lenguaje de programación para WWW, desarrollado por Netscape. Al igual que VBScript, pertenece a la familia Java, pero se diferencia de este último en que los programas están incorporados en el fichero HTML.Ver también: "Java", "script", "VBScript". [RFCALVO]',
    },
    {
      termino: 'Operating System – OS(sistema operativo)',
      significado:
        'Un sistema operativo es un programa especial que se carga en un ordenador o dispositivo móvil tras ser encendido, cuya función es gestionar los programas, o aplicaciones, que se ejecutarán en dicho dispositivo, como un procesador de texto o una hoja de cálculo, o la impresión de un texto en una impresora o una conexión a Internet.',
    },
    {
      termino: 'Source Code (código fuente)',
      significado:
        'Conjunto de instrucciones que componen un programa informático. Estos programas se escriben en determinados lenguajes, según la necesidad a solucionar. Cada lenguaje tiene características que facilitan el desarrollo.',
    },
  ],
  complementario: [
    {
      texto:
        'Web app, nativa o híbrida: Cadenas, R. (2019). ¿Qué necesito? ¿Web Apps, App Nativa o App Híbrida? GSoft.',
      tipo: 'Página web',
      link:
        'https://www.gsoft.es/articulos/que-necesito-web-apps-app-nativa-o-app-hibrida/?cli_action=1626116601.578',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Cuervo Nieto',
        cargo: 'Instructor',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
