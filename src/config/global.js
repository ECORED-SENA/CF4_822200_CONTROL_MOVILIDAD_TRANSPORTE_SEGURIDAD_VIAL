export default {
  global: {
    componenteFormativo:
      'Normatividad en la programación del transporte y carga',
    descripcionCurso:
      'A través de este componente formativo, se adquirirán bases sólidas en logística de transporte y programación de equipos. Para lo cual se hace necesario adquirir conocimientos claros en: rutas de transporte, seguridad de equipos, normatividad vigente, planes de contingencia, aplicación de técnicas de inspección y chequeo, manejo de cargas extradimensionadas y el impacto de tecnologías en el sector.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/box_01.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/box_02.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/box_03.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Características de la geografía de rutas de transporte y del plan de rutas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Equipos de seguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Planes de contingencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Logística en transporte de carga',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Técnicas para inspección de medios de transporte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo:
          'Transporte de carga extradimensionada y extrapesada Resolución 4959 de 2006',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo:
          'Fundamentos de las listas de chequeo y técnicas para inspección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo:
          'Tecnologías de la información, fundamentos y tipos de equipos de comunicación',
        desarrolloContenidos: true,
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
  complementario: [
    {
      tema: 'Planes de contingencia',
      referencia:
        'Decreto 1609 de 2002. Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera. Julio 31 de 2002.',
      tipo: 'PDF',
      descarga: '/downloads/Decreto_1609_de_2002.pdf',
    },
    {
      tema: 'Planes de contingencia',
      referencia:
        'Decreto 321 de 1999. Por el cual se adopta el Plan Nacional de Contingencia contra Derrames de Hidrocarburos, Derivados y Sustancias Nocivas. Febrero 17 de 1999.',
      tipo: 'PDF',
      descarga: '/downloads/Decreto_321_99.pdf',
    },
    {
      tema: 'Técnicas para inspección de medios de transporte',
      referencia:
        'Ley 769 de 2002.  Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Agosto 6 de 2002.',
      tipo: 'PDF',
      descarga:
        '/downloads/ley-769-de-2002-codigo-nacional-de-transito_3704_0.pdf',
    },
    {
      tema: 'Técnicas para inspección de medios de transporte',
      referencia:
        'Icontec Internacional. (2012). Revisión técnico – mecánica y de emisiones contaminantes en vehículos automotores [NTC 5375].',
      tipo: 'PDF',
      descarga: '/downloads/ntc-5375.pdf',
    },
    {
      tema: 'Técnicas para inspección de medios de transporte',
      referencia:
        'Icontec. (2006). Centros de diagnóstico automotor [NTC 5385].',
      tipo: 'PDF',
      descarga: '/downloads/NormaTecnicaColombiana5385.pdf',
    },
    {
      tema: 'Técnicas para inspección de medios de transporte',
      referencia:
        'Resolución 3768 de 2013. [Ministerio de Transporte]. Por la cual se establecen las condiciones que deben cumplir los Centros de Diagnóstico Automotor para su habilitación, funcionamiento y se dictan otras disposiciones. Septiembre 26 de 2013.',
      tipo: 'PDF',
      descarga: '/downloads/Resolucion_3768_2013-Sep-26.pdf',
    },
    {
      tema: 'Técnicas para inspección de medios de transporte',
      referencia:
        'Asociación Nacional de Centros de Diagnóstico Automotor [ASOCDA]. (2016). La inspección técnica vehicular en Colombia.',
      tipo: 'PDF',
      descarga: '/downloads/LA-ITV-EN-COLOMBIA.pdf',
    },
    {
      tema:
        'Transporte de carga extradimensionada y extrapesada Res 4959 de 2006',
      referencia:
        'Resolución 4959 de 2006. [Ministerio de Transporte]. Por la cual se fijan los requisitos y procedimientos para conceder los permisos para el transporte de cargas indivisibles extrapesadas y extradimensionadas, y las especificaciones de los vehículos destinados a esta clase de transporte. Noviembre 8 de 2006.',
      tipo: 'PDF',
      descarga: '/downloads/Resolucion_4959_8_Noviembre_2006.pdf',
    },
    {
      tema: 'Fundamentos de las listas de chequeo y técnicas para inspección ',
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio. (2019). Formulario para la inspección de vehículos.',
      tipo: 'PDF',
      descarga: '/downloads/GTH-F-75_FORMATO_SST.xls',
    },
    {
      tema:
        'Tecnologías de la información, fundamentos y tipos de equipos de comunicación',
      referencia:
        'Novologística. (2019). La revolución del uso de las tecnologías en el transporte terrestre.',
      tipo: 'Web',
      link:
        'https://www.novologistica.com/tranporte/la-revolucion-del-uso-de-las-tecnologias-en-el-transporte-terrestre/',
    },
  ],
  glosario: [
    {
      termino: 'Bus',
      significado:
        'vehículo automotor destinado al transporte colectivo de personas y sus equipajes, debidamente registrado conforme con las normas y características especiales vigentes.',
    },
    {
      termino: 'Camión',
      significado:
        'vehículo automotor que, por su tamaño y destinación, se usa para transportar carga.',
    },
    {
      termino: 'Capacidad de carga',
      significado:
        'es el máximo tonelaje autorizado en un vehículo, de tal forma que el peso bruto vehicular no exceda los límites establecidos.',
    },
    {
      termino: 'Icontec',
      significado:
        'Instituto Colombiano de Normas Técnicas y Certiﬁcación, que, mediante Decreto 2269 de 1993, es reconocido como el organismo nacional de normalización.',
    },
    {
      termino: 'Mercancía peligrosa',
      significado:
        'materiales perjudiciales que, durante la fabricación, manejo, transporte, almacenamiento o uso, pueden generar o desprender polvos, humos, gases, líquidos, vapores o ﬁbras infecciosas, irritantes, inﬂamables, explosivos, corrosivos, asﬁxiantes, tóxicos o de otra naturaleza peligrosa, o radiaciones ionizantes en cantidades que puedan afectar la salud de las personas que entran en contacto con estas, o que causen daño material.',
    },
    {
      termino: 'Norma técnica',
      significado:
        'es el documento establecido por consenso y aprobado por un organismo reconocido, que suministra, para uso común y repetido, reglas, directrices y características para las actividades o sus resultados, encaminadas al logro del grado óptimo de orden en un contexto dado. Las normas técnicas se deben basar en los resultados consolidados de la ciencia, la tecnología y la experiencia, y sus objetivos deben ser los beneﬁcios óptimos para la comunidad (D. 2269/93, art. 2º, Cap. II).',
    },
    {
      termino: 'Plan de contingencia',
      significado:
        'programa de tipo predictivo, preventivo y reactivo, con una estructura estratégica, operativa e informática, desarrollado por la empresa, industria o algún actor de la cadena del transporte, para el control de una emergencia que se produzca durante el manejo, transporte y almacenamiento de mercancías peligrosas, con el propósito de mitigar las consecuencias y reducir los riesgos de empeoramiento de la situación y acciones inapropiadas, así como para regresar a la normalidad con el mínimo de consecuencias negativas para la población y el medio ambiente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación Nacional de Centros de Diagnóstico Automotor [ASOCDA]. (2016). La inspección técnica vehicular en Colombia.',
      link:
        'https://www.aso-cda.org/wp-content/uploads/2017/08/LA-ITV-EN-COLOMBIA.pdf',
    },
    {
      referencia:
        'Decreto 321 de 1999. Por el cual se adopta el Plan Nacional de Contingencia contra Derrames de Hidrocarburos, Derivados y Sustancias Nocivas. Febrero 17 de 1999.',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/20106/Decreto_321_99.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Decreto 1609 de 2002. Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera. Julio 31 de 2002.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6101',
    },
    {
      referencia: 'Floria, A. (2000). Métodos de inspección. Sid@r.',
      link:
        'http://www.sidar.org/recur/desdi/traduc/es/visitable/inspection.htm',
    },
    {
      referencia:
        'Icontec Internacional. (2012). Revisión técnico - mecánica y de emisiones contaminantes en vehículos automotores [NTC 5375].',
      link:
        'https://bogota.gov.co/sites/default/files/tys/2017/11/ntc-5375.pdf',
    },
    {
      referencia:
        'ISO. (2018). Sistemas de gestión de la seguridad y salud en el trabajo — Requisitos con orientación para su uso [Norma Internacional ISO 45001].',
      link:
        'https://www.unidadvictimas.gov.co/sites/default/files/documentosbiblioteca/iso-45001-norma-internacional.pdf',
    },
    {
      referencia:
        'Ley 769 de 2002.  Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Agosto 6 de 2002.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.html',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio. (2019). Formulario para la inspección de vehículos.',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/procesos/GTH-F-75%20%20FORMATO%20SST%20-%20FORMATO%20INSPECCION%20DE%20VEHICULO%202.0.xls',
    },
    {
      referencia:
        'Mintransporte. (2021). Reactivando nuestra economía a través del sector transporte [Video]. YouTube.',
      link: 'https://youtu.be/0LOslU5t2Fs',
    },
    {
      referencia:
        'Resolución 4100 de 2004. [Ministerio de Transporte]. Por la cual se adoptan los límites de pesos y dimensiones en los vehículos de transporte terrestre automotor de carga por carretera, para su operación normal en la red vial a nivel nacional. Diciembre 28 de 2004.',
      link:
        'https://www.invias.gov.co/index.php/normativa/resoluciones-circulares-otros/10387-resolucion-4100-del-28-de-diciembre-de-2004',
    },
    {
      referencia:
        'Resolución 4959 de 2006. [Ministerio de Transporte]. Por la cual se fijan los requisitos y procedimientos para conceder los permisos para el transporte de cargas indivisibles extrapesadas y extradimensionadas, y las especificaciones de los vehículos destinados a esta clase de transporte. Noviembre 8 de 2006.',
      link:
        'https://www.invias.gov.co/index.php/normativa/resoluciones-circulares-otros/5576-resolucion-4959-de-8-noviembre-de-2006',
    },
    {
      referencia:
        'Resolución 3768 de 2013. [Ministerio de Transporte]. Por la cual se establecen las condiciones que deben cumplir los Centros de Diagnóstico Automotor para su habilitación, funcionamiento y se dictan otras disposiciones. Septiembre 26 de 2013.',
      link:
        'https://www.cvc.gov.co/sites/default/files/2018-10/Resolucion%203768%20de%202013-Sep-26.pdf',
    },
    {
      referencia:
        'SURA ARL. (s. f.). Accidentes e incidentes de trabajo, importancia de la investigación de ambos.',
      link: 'https://www.arlsura.com/index.php/326',
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
        nombre: 'Juan Carlos García Vargas',
        cargo: 'Experto temático',
        centro: 'Centro de Tecnología del Transporte Bogotá - Regional Bogotá',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora Pedagógica y Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
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
        nombre: 'Sofía Suárez Suárez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yeimmy Bibiana Barrera Maldonado',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
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
