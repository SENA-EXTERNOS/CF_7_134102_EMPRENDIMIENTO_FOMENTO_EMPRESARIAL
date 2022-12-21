<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Aspectos generales de la contabilidad

    p.mb-5 Para obtener la facultad de poder hablar sobre contabilidad, es necesario reconocer que, como individuos, siempre hemos tenido la necesidad de guardar memoria y dejar constancia escrita de los movimientos económicos realizados porque, de no hacerlo, podríamos olvidarlos.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema01/t1-i1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La mayoría de las personas consideran a la contabilidad como un escenario netamente técnico, en el que solamente profesionales de la contaduría pueden manejarla y comprenderla; concepto erróneo, porque realmente se podría decir que todos utilizamos constantemente la información contable; algunos en mayor o menor proporción que otros. En nuestra cotidianidad, por ejemplo, al realizar cuentas de las entradas y salidas de dinero, obtenidas durante un periodo determinado, se está llevando a cabo una contabilización.    

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 La contabilidad y su clasificación

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.bg-cajon-acento-contenido.p-4
              p.mb-0 Indica Zapata (2018), que la contabilidad se define como la ciencia, la técnica y el arte de reconocer, valorar, presentar y analizar las operaciones económicas y financieras que realiza una empresa durante un período determinado, con el fin de conocer los resultados obtenidos y estructurar los estados financieros que servirán, como fundamento, para la toma de decisiones gerenciales (p. 21). En términos cotidianos, podríamos definir que la contabilidad es la encargada de llevar el registro de los movimientos y transacciones diarias de una organización, en un momento específico, con la finalidad de generar informes que puedan ser útiles para tomar decisiones importantes. 


    p Partiendo de lo anterior, es importante resaltar que el objetivo principal, de quien contabiliza, es el de tomar las mejores decisiones, que le permitan maximizar sus recursos y, al mismo tiempo, le ayuden a decidir donde ubicarlos e invertirlos.

    p.mb-5 Dentro de los objetivos de la contabilidad, también encontramos los definidos en el Decreto 2649 de 1993, Art. 3. Objetivos básicos. La información contable debe servir fundamentalmente para:

    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/template/tema01/t1-i2.svg')
      .col-lg-7
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Conocer y demostrar los recursos controlados por un ente económico, las obligaciones que tenga para transferir recursos a otros entes, los cambios que hubieren experimentado tales recursos y el resultado obtenido en el periodo.
          li 
            i.fas.fa-check
            | Predecir flujos de efectivo.
          li 
            i.fas.fa-check
            | Apoyar a los administradores en la planeación, organización y dirección de los negocios.
          li 
            i.fas.fa-check
            | Tomar decisiones en materia de inversiones y crédito.
          li 
            i.fas.fa-check
            | Ejercer control sobre las operaciones del ente económico.
          li 
            i.fas.fa-check
            | Fundamentar la determinación de cargas tributarias, precios y tarifas.
          li 
            i.fas.fa-check
            | Ayudar a la conformación de la información estadística nacional.
          li 
            i.fas.fa-check
            | Contribuir con la evaluación del beneficio o el impacto social, que la actividad económica de un ente, represente para la comunidad.

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Tipos de información contable

    p Desde la perspectiva del usuario de la contabilidad, se puede tener una necesidad específica, y otros usuarios pueden requerir de otro tipo de necesidades.
    p.mb-5 Existen muchos tipos de información contable pero, en este apartado, se mencionan los principales. 
           
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/template/tema01/t1-i3.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Contabilidad financiera
            p.mb-0.text-center Es una rama de la contabilidad en la que se describen tanto las obligaciones de la entidad o individuo, como los recursos financieros de los mismos y se crea esta rama bajo la figura de persona jurídica.           
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/template/tema01/t1-i4.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Contabilidad gerencial
            p.mb-0.text-center Esta rama se enfoca más en la interpretación de la información contable, en aras de tomar decisiones propias del negocio, como metas y finalidades, buscando siempre maximizar sus recursos y generar una mayor rentabilidad.           
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/template/tema01/t1-i5.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Contabilidad tributaria
            p.mb-0.text-center Rama de la contabilidad cuyo enfoque se concentra en la planeación y organización de los deberes fiscales que tiene la empresa o individuo, con la finalidad que cumpla, a cabalidad, sus compromisos estatales y evite sanciones por omisión, o equivocaciones en impuestos a su cargo.

    p.mb-5 En algún momento, todos somos usuarios de la información contable y, por lo general, podemos actuar como los tipos de usuarios que se observan a continuación:

    .row.justify-content-center.mb-5
      .col-lg-9
        figure
          img(src="@/assets/template/tema01/t1-i6.svg", alt="alt")

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 La empresa en Colombia

    p.mb-5 Se puede definir una empresa como el individuo o grupo de personas con ideales similares, que buscan un beneficio en común y deciden organizarse legalmente para prestar un servicio o realizar alguna actividad que la ley considere mercantil. En Colombia, puede darse la opción de variedad de empresas que se dedican a atender las mismas, o diferentes tipos de solicitudes
   
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-f.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto Para todos los efectos, se entiende por empresa, toda unidad de explotación económica, realizada por persona natural o jurídica, en actividades agropecuarias, industriales, comerciales o de servicios, en el área rural o urbana.
          .bloque-texto-f__autor-right.mb-3
            h3.mb-0 De acuerdo con la Ley 590 del año 2000, Art. 2


    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Clasificación de las empresas

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema01/t1-i7.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Su naturaleza.
              li 
                i.fas.fa-check
                | Su actividad económica.
              li 
                i.fas.fa-check
                | Su proveniencia de capital.
              li 
                i.fas.fa-check
                | Sus ingresos y el sector.
              li 
                i.fas.fa-check
                | Su presentación de información financiera NIIF.
              li 
                i.fas.fa-check
                | Su finalidad.
              li 
                i.fas.fa-check
                | Su forma de asociación.
    
      .col-lg-10.px-4
        .row.p-4.card-t1.align-items-center.mb-5(data-aos='zoom-in-up')
          .col-lg-1.col-2.d-none.d-lg-block
            figure
              img(
                src='@/assets/template/tema01/t1-i8.svg',
              )
          .col-lg-8.col-6
            h4 Clasificación de las empresas
            p.mb-0 Para ampliar la información, lo invitamos a ver el documento 
          .col-lg-3.col-4.text-center
            a.boton.boton--b.color-acento-botones(
              href="#",
              target='_blank'
            )
              span Descargar
              i.fas.fa-file-download

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Formalización de empresa

    p.mb-5 Teniendo clara la clasificación y el modelo societario, se deben tener en cuenta los requisitos exigidos, actualmente, en el territorio nacional colombiano, para su legalización.

    h4 Requisitos comerciales
    p.mb-5 Los requisitos comerciales exigidos para la formalización de una empresa, son:

    .tarjeta.bg-slider.p-5.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Identificación de la empresa
            p Toda organización debe contar con un nombre comercial que le permita identificarse; puede ser escogido y será de uso exclusivo durante la permanencia del ente económico. No podrá incluir nombres que afecten la moral o lleven a la confusión y, así mismo, puede tener varios nombres comerciales, pero solamente una razón social, la cual tendrá una duración de diez años contados a partir de la fecha de su registro, renovables por períodos iguales (Artículos 134 y 196 de la decisión 486 de 2000 de la Comisión de la Comunidad Andina). 

            p Para evitar que dos o más empresas puedan hacer uso de un mismo nombre, las cámaras de comercio ofrecen el servicio de control de homonimia, verificación que debe realizarse, previamente, para consultar la disponibilidad del nombre seleccionado.             
          .col-md-6
            figure
              img(src='@/assets/template/tema01/t1-i9.svg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Documento de constitución
            p Posterior a la selección del nombre apropiado y disponible, quienes constituirán la sociedad deberán realizar un documento donde se estipulen los datos establecidos en el Artículo 110 del Código de Comercio (nombre, identificación, domicilio de los socios o accionistas, domicilio de la empresa, duración, actividades de la empresa, así como el monto de los aportes realizados, facultades de los administradores y todo aquello que sea necesario, de forma detallada).           
          .col-md-6
            figure
              img(src='@/assets/template/tema01/t1-i10.svg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Registro único empresarial y social RUES
            p Administrado por las cámaras de comercio, implementado con la finalidad de disminuir los trámites necesarios para la formalización de las empresas, está regulado mediante el artículo 11 de la Ley 590 de 2000, el Decreto Ley 019 de 2012, la Circular Externa 003 de 2017, entre otras disposiciones normativas. Este documento está compuesto por:      
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Registro mercantil.                  
              li 
                i.fas.fa-check
                | Registro de proponentes.                 
              li 
                i.fas.fa-check
                | Registro de entidades sin ánimo de lucro – Esal.                
              li 
                i.fas.fa-check
                | Registro nacional público de vendedores de juegos de suerte y azar.               
              li 
                i.fas.fa-check
                | Registro público de veedurías ciudadanas.               
              li 
                i.fas.fa-check
                | Registro nacional de turismo.               
              li 
                i.fas.fa-check
                | Registro de entidades extranjeras de derecho privado sin ánimo de lucro.              
              li 
                i.fas.fa-check
                | Registro de la economía solidaria.               
          .col-md-6
            figure
              img(src='@/assets/template/tema01/t1-i11.svg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Matrícula mercantil
            p Es el documento mediante el cual la organización demuestra su existencia y constitución legal; esto le permite gozar de protección del nombre comercial, hacer pública la condición de comerciante, evitar multas y sanciones de entidades de vigilancia y control, facilidad de obtención de créditos, contar con asesoría permanente por parte de la cámara de comercio a la cuál esta adscrita la empresa.                     
          .col-md-6
            figure
              img(src='@/assets/template/tema01/t1-i12.svg', alt='Texto que describa la imagen')

    h4.mb-5 Requisitos de funcionamiento

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema01/t1-i13.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Certificado de uso de suelos.
              li 
                i.fas.fa-check
                | Certificado de seguridad mediante el cuerpo de bomberos.
              li 
                i.fas.fa-check
                | Concepto sanitario. 
              li 
                i.fas.fa-check
                | Concepto ambiental.
              li 
                i.fas.fa-check
                | Certificado de Sayco & Acinpro.

    h4 Requisitos de obligaciones laborales
    p.mb-5 Los socios y quienes dirigen la empresa, deben tener en cuenta varios aspectos y revisar constantemente sus cambios, lo que garantiza que se ajusten a la normativa vigente.

    .row.mb-5
      .col-sm-6.col-lg-6.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-primario.p-4.h-38
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/template/tema01/t1-i14.svg', alt='Texto que describa la imagen')

          h3.text-center Contractuales
          p Para efectos de contratar personal en la organización y la relación laboral. 
          ul.lista-ul--color
              li 
                i.fas.fa-check
                | Contratos de trabajo.
              li 
                i.fas.fa-check
                | Afiliaciones al sistema de seguridad social y fondos de pensiones. 
              li 
                i.fas.fa-check
                | Aseguradora de riesgos A.R.L. 
              li 
                i.fas.fa-check
                | Afiliaciones a fondos de cesantías y cajas de compensación familiar

      .col-sm-6.col-lg-6.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-primario.p-4.h-38
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/template/tema01/t1-i15.svg', alt='Texto que describa la imagen')

          h3.text-center Seguridad en el trabajo
          p Para efectos de convivencia, seguridad y salud en el trabajo.
          ul.lista-ul--color
              li 
                i.fas.fa-check
                | Esquema de salud ocupacional.
              li 
                i.fas.fa-check
                | Reglamento de higiene. 
              li 
                i.fas.fa-check
                | Reglamento interno de trabajo.
              li 
                i.fas.fa-check
                | Dotación de los trabajadores.

    h4 Requisitos de obligaciones contables 
    p.mb-5 Al momento de constituir una organización, esta empresa debe cumplir con los requerimientos técnico-normativos, establecidos en Colombia, para la presentación de la información contable, como son los que vemos a continuación:     

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema01/t1-i16.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Revisar la obligación de llevar contabilidad.
              li 
                i.fas.fa-check
                | Clasificar un grupo de convergencia internacional.
              li 
                i.fas.fa-check
                | Diseñar el manual de políticas internas. 
              li 
                i.fas.fa-check
                | Elaborar el estado de situación financiera.    

    h4.mb-5 Requisitos de carácter tributario

    //- p Para que una organización funcione de manera adecuada, es necesario conocer el marco jurídico que la regula; en materia contable, han sido cambios precisos y puntuales que se han venido presentando y esto implica la generación de información financiera y de aseguramiento de alta credibilidad, homogénea, veraz y útil.

    //- p.mb-5 Las normas más importantes en la actualidad son:

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema01/t1-i17.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Inscripción en el Rut.
              li 
                i.fas.fa-check
                | Clasificar un grupo de convergencia internacional.
              li 
                i.fas.fa-check
                | Solicitud de facturación electrónica. 
              li 
                i.fas.fa-check
                | Presentación de diferentes declaraciones tributarias.    


    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Marco jurídico de la contabilidad en Colombia 

    p Para que una organización funcione de manera adecuada, es necesario conocer el marco jurídico que la regula; en materia contable, han sido cambios precisos y puntuales que se han venido presentando y esto implica la generación de información financiera y de aseguramiento de alta credibilidad, homogénea, veraz y útil.

    p.mb-5 Las normas más importantes en la actualidad son:    

    .row.justify-content-center.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/template/tema01/t1-i18.png", alt="alt").img400.m-auto
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA").bg-secundary-acordeon
          .row(titulo="Legislación comercial - Código de Comercio")
            .col-12
              p.mb-0 En este se dan las indicaciones propias de los actos de comercio, así como las obligaciones y deberes del comerciante.
          .row(titulo="Ley 43 de 1990")
            .col-12
              p.mb-0 En esta ley se reglamenta la profesión de contador público, se dan indicaciones de la ética profesional y se indican los órganos de control y normalización.
          .row(titulo="Decreto 2649 de 1993")
            .col-12
              p.mb-0 Antes de la llegada de la normativa internacional, el régimen contable propio se regía por este decreto, del cual aún permanecen vigentes algunos artículos, incluyendo los principios de contabilidad generalmente aceptados. 
          .row(titulo="Decreto 2650 de 1993")
            .col-12
              p.mb-0 En este decreto se encuentra el plan único de cuentas, se busca dar una uniformidad para el registro de transacciones de los comerciantes y aún permanece vigente.
          .row(titulo="Normas internacionales de información financiera NIIF - Ley 1314 de 2009")
            .col-12
              p.mb-0 Compuesto de postulados, principios, limitaciones, conceptos, normas técnicas, interpretaciones y guías, con las cuales se realiza la intervención económica en busca de la homogenización de información con miras a la competitividad nacional e internacional.
          .row(titulo="Decreto único reglamentario 2420 de 2015")
            .col-12
              p.mb-0 Relaciona los marcos normativos NIC, NIIF e interpretaciones.
          .row(titulo="Decreto 624 de 1989")
            .col-12
              p.mb-0 Por el cual se expide el Estatuto Tributario de los Impuestos Administrados por la Dirección General de Impuestos Nacionales, DIAN. 


    p.mb-5 De esta forma, los marcos normativos contables actuales, para las entidades de naturaleza privada, están asociados con los decretos emitidos según los grupos de aplicación y su caracterización; grupos 1, 2 y 3, además de algunas definiciones del decreto 2649 que aún persisten, mientras que los marcos normativos para las entidades de naturaleza pública, están asociados con las resoluciones correspondientes, también según su caracterización.
                 
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 La información contable

    p.mb-5 Con el pasar del tiempo las prácticas contables han evolucionado y se han ido tecnificando de acuerdo con diversas variables como el tamaño de la empresa y el tipo de actividad o servicio que presta. Organizar dicha información, de una manera correcta, ha repercutido en el desarrollo de sistemas contables que se adapten a las estructuras normativas y puedan presentar información pertinente, enfrentando el reto que implica la participación en una economía globalizada.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema01/t1-i19.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Teniendo en cuenta que la información contable satisface la necesidad de interés público y, en particular, de sus propietarios, se puede decir que los usuarios son todas aquellas personas que requieren de una información financiera comprensible, confiable y pertinente, que sirva de apoyo para la toma de decisiones y, a su vez, les permita tener mejores prácticas y una evolución a nivel internacional, de sus negocios.

    p.mb-5 Entre quienes pueden requerir de la información contable encontramos: propietarios, funcionarios, empleados, inversionistas, y otras partes interesadas en mejorar la productividad y el desarrollo armónico de las actividades empresariales. 

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Periodo contable

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.bg-cajon-acento-contenido.p-4
          .row 
            .col-lg-3.mb-3
              .row.justify-content-center
                .col-lg-7.col-4
                  figure
                    img(src='@/assets/template/tema01/t1-i20.png')
            .col-lg-9
              p.mb-0 El periodo contable hace referencia al tiempo que la organización define para presentar sus informes financieros; en Colombia es necesario como mínimo, una vez al año entre el 1 de enero y el 31 de diciembre; sin embargo, las autoridades competentes podrán solicitar estados contables intermedios, e informes y reportes contables. 

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Características cualitativas de la información contable

    p Cuando se habla de útil, se hace referencia a aquella información que va a proporcionar elementos significativos y enriquecedores a los usuarios de la información contable, para la toma de decisiones sobre la entidad que emite su información.

    p.mb-5 Esta información contable se realiza a partir de registros y transacciones capturadas en el ejercicio de la actividad económica de la empresa; entre estas características encontramos:


    .row.d-flex.justify-content-center.mb-5
      .col-lg-11.col-12
        PasosA.color-acento-contenido.mb-5(tipo='n')
          .row
            .col-md-10.col-8.mb-md-0
              h3 Relevancia
              p.text-start Hace referencia a aquella que logra influir en las decisiones tomadas por los usuarios, también conocida como materialidad o importancia relativa, en donde se le da el reconocimiento o no, a un hecho económico.

            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema01/t1-i21.svg',
                  alt='Texto que describa la imagen'
                )    
          .row
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema01/t1-i22.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-10.mb-md-0.col-8
              h3.text-start Representación fiel
              p.text-start Hace referencia a que la información debe ser completa, neutral y libre de error, en donde se incluyan todas aquellas descripciones o información que permitan comprenderla en su totalidad.
          .row
            .col-md-10.col-8.mb-md-0
              h3 Comparabilidad
              p.text-start Hace referencia a que la información se debe presentar, de tal forma que permita compararla de un periodo a otro y, de esta forma, los usuarios puedan confrontar sus decisiones. 

            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema01/t1-i23.svg',
                  alt='Texto que describa la imagen'
                )  
          .row
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema01/t1-i24.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-10.mb-md-0.col-8
              h3.text-start Verificabilidad
              p.text-start La información presentada se puede comprobar mediante diferentes técnicas y metodologías.
          .row
            .col-md-10.col-8.mb-md-0
              h3 Oportunidad
              p.text-start La información presentada debe permitir que los usuarios de ella puedan tomar decisiones en cualquier momento, debido a que está actualizada y es pertinente.

            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema01/t1-i25.svg',
                  alt='Texto que describa la imagen'
                )  
          .row
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema01/t1-i26.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-10.mb-md-0.col-8
              h3.text-start Comprensibilidad
              p.text-start La información presentada debe tener la claridad suficiente y la organización adecuada, que permita ser entendida por quienes la requieran.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
