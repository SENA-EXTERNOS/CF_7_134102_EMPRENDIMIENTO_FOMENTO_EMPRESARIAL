export default {
  global: {
    componenteFormativo: 'Contabilidad, NIIF y estados financieros',
    descripcionCurso:
      'Para entender un informe contable, es importante reconocer a la empresa como esa unidad organizada donde se realizan operaciones que son registradas y soportadas con base en una normatividad vigente y que acepta generar informes para sus usuarios, exponiendo las ganancias o pérdidas, lo que permite el acceso a la toma de decisiones financieras a corto, mediano o largo plazo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Aspectos generales de la contabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'La contabilidad y su clasificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La empresa en Colombia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'La información contable',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Documentos y libros contables',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Documentos contables',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Libros contables',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Títulos valores',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Hechos contables – transacciones de las empresas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Obligaciones tributarias de las empresas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Informes contables y estados financieros',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Nómina',
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
      tema: 'La información contable',
      referencia:
        'IFRS Foundation (s.f.). <em>Norma Internacional de Contabilidad 8. Políticas Contables, Cambios en las Estimaciones Contables y Errores.</em> ',
      tipo: 'PDF',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534369239-2962',
    },
    {
      tema: 'Documentos contables',
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (s.f.). <em>Documento soporte en adquisicioens efectuadas a sujetos no obligados a expedir factura de venta o documento equivalente.</em>',
      tipo: 'PDF',
      link:
        'https://www.dian.gov.co/impuestos/Documents/Documento_soporte_en_adquisiciones_efectuadas.pdf',
    },
    {
      tema: 'Documentos contables',
      referencia:
        'Resolución 0167 de 2021. [Dirección de Impuestos y Aduanas Nacionales]. Por la cual se implementa y desarrolla en el sistema de facturación electrónica la funcionalidad del documento soporte en adquisiciones efectuadas a sujetos no obligados a expedir factura de venta o documento equivalente, para su transmisión electrónica y se expide el anexo técnico del documento. Diciembre 30 de 2021.',
      tipo: 'PDF',
      link:
        'https://www.dian.gov.co/normatividad/Normatividad/Resoluci%C3%B3n%20000167%20de%2030-12-2021.pdf',
    },
    {
      tema: 'Documentos y libros contables',
      referencia:
        'PROING – SA OFICIAL. (2017). <em>Organización y archivo de documentos – Gestión documental</em> (video).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DGRZsfzGE9Y',
    },
  ],
  glosario: [
    {
      termino: 'Comerciante',
      significado:
        'persona que ejerce alguna de las actividades que se consideran mercantiles.',
    },
    {
      termino: 'Costo histórico',
      significado: 'es el valor de la transacción de una operación.',
    },
    {
      termino: 'Contribuyente',
      significado:
        'se refiere a toda persona natural o jurídica llamada para cumplir ciertas obligaciones tributarias, por la realización del hecho generador establecido en la ley para el nacimiento del tributo.',
    },
    {
      termino: 'Debe',
      significado: 'registra el valor monetario al lado izquierdo.',
    },
    {
      termino: 'Declarante',
      significado:
        'persona natural o jurídica que presenta una declaración tributaria.',
    },
    {
      termino: 'Empresa',
      significado:
        'ente económico dedicado a la compra y venta de bienes, conocidos como mercancías.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'estado financiero compuesto por las cuentas de ingresos, gastos y costos, los cuales reflejan el resultado del ejercicio.',
    },
    {
      termino: 'Estado de situación financiera',
      significado:
        'estado integrado por los elementos de activo, pasivo y patrimonio.',
    },
    {
      termino: 'Haber',
      significado: 'corresponde al registro del precio al lado derecho.',
    },
    {
      termino: 'Hecho generador',
      significado:
        'es el evento o suceso, expresamente definido en la ley, por el cual se origina la obligación tributaria.',
    },
    {
      termino: 'Impuesto',
      significado:
        'es el tributo que establece la ley a favor del sujeto activo, y a cargo de los sujetos a quienes se les atribuya la realización del hecho imponible de la obligación tributaria.',
    },
    {
      termino: 'Normas básicas',
      significado:
        'conceptos básicos y reglas que se deben observar al efectuar los registros contables correspondientes a las actividades que desarrollan las personas jurídicas o naturales, y que deben aplicar todas las personas obligadas a llevar contabilidad.',
    },
    {
      termino: 'Nota débito',
      significado:
        'comprobante que emiten las empresas, para cargar a la cuenta de los clientes, valores como intereses por financiación, por sobregiros, el gravamen a movimientos financieros (GMF), venta de chequeras, comisiones, y otros cobros.',
    },
    {
      termino: 'Partida doble',
      significado:
        'es la igualdad de los registros del debe y el haber en el asiento contable, presentando un equilibrio.',
    },
    {
      termino: 'Patrimonio',
      significado: 'es la diferencia presentada entre activo y pasivo.',
    },
    {
      termino: 'Políticas contables',
      significado:
        'son las bases, reglas y procedimientos aplicables por una empresa, para presentar los estados financieros.',
    },
    {
      termino: 'Razón comercial',
      significado:
        'es el nombre que se asigna a la empresa, para darse a conocer ante el público o mercado.',
    },
    {
      termino: 'Razón social',
      significado:
        'es el nombre de la empresa, que se encuentra registrado en la cámara de comercio y demás entidades de control.',
    },
    {
      termino: 'Registro Único Tributario (RUT)',
      significado:
        'es el documento que se tramita ente la Dirección de Impuestos y Aduanas Nacionales (DIAN), el cual relaciona la clasificación y responsabilidades del contribuyente.',
    },
    {
      termino: 'Sujeto activo',
      significado:
        'es el Estado como acreedor de la prestación pecuniaria que se deriva de la realización del hecho generador del tributo.',
    },
    {
      termino: 'Sujeto pasivo',
      significado:
        'es aquel a quien se le atribuye la realización del hecho impositivo de la obligación tributaria.',
    },
    {
      termino: 'Tarifa',
      significado:
        'es la unidad de medida o porcentaje que se aplica a la base gravable para determinar la cuantía del tributo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto 2420 de 2015. [Presidencia de la República]. Por medio de la cual se expide el Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información y se dictan otras disposiciones. Diciembre 14 de 2015. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'Economipedia (s.f.). Definición técnica. Software de contabilidad. ',
      link:
        'https://economipedia.com/definiciones/software-de-contabilidad.html#:~:text=Un%20software%20de%20contabilidad%20es,una%20empresa%20o%20entidades%20similares. ',
    },
    {
      referencia:
        'Hernández, S. (2011). Introducción a la administración. McGraw-Hill Interamericana.',
      link:
        'https://santic.cl/mt-content/uploads/2022/09/hernandez_introduccion_a_la_admin.pdf',
    },
    {
      referencia:
        'Ley 590 de 2000. Por la cual se dictan disposiciones para promover el desarrollo de las micro, pequeñas y medianas empresa. Julio 10 de 2000. DO. No. 44.078',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=12672',
    },
    {
      referencia:
        'Decreto 2650 de 2008. [Ministerio de Defensa Nacional]. Por el cual se modifica la estructura de la Caja Promotora de Vivienda Militar y de Policía y se determinan las funciones de sus dependencias. Julio 18 de 2008.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1803283',
    },
    {
      referencia:
        'Sistema de Información sobre Comercio Exterior (s.f.). Comisión de la Comunidad Andina. Decisión 486: <em>Régimen Común sobre Propiedad Industrial.</em> SICE OAS.',
      link: 'http://www.sice.oas.org/trade/junac/decisiones/dec486s6.asp  ',
    },
    {
      referencia:
        'Luis Raúl Uribe Medina (2016). <em>Plan de cuentas para sistemas contables.</em> Docplayer.',
      link: 'https://docplayer.es/33172203-Luis-raul-uribe-medina.html',
    },
    {
      referencia:
        'Zapata, P. (2018). <em>Contabilidad General.</em> Alfaomega.',
      link:
        'https://www.alphaeditorialcloud.com/reader/contabilidad-general?location=22 ',
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
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
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
