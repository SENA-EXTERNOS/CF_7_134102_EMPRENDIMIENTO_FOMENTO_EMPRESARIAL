<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Nómina

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema06/t6-i1.png")})` }'
          )
          .bloque-texto-g__texto.p-4
            p De igual manera, en materia de contabilidad, la nómina se refiere a los pagos quincenales o mensuales que el empleador realiza a los trabajadores, vinculados mediante contrato de trabajo. Estos pagos comprenden salario, comisiones, horas extras, recargos, prestaciones sociales, vacaciones y auxilios; es así como la nómina es el documento que recibe cada mes, un trabajador de la empresa, en el que consta el salario o compensación salarial recibido por el trabajo realizado durante ese mes. Según el artículo 144 del Código Sustantivo del Trabajo, es lo que todo trabajador tiene derecho a percibir para subvenir a sus necesidades normales y a las de su familia, en el orden material, moral y cultural.

    p.mb-5 En la nómina, se tienen en cuenta varios apartados, como:

    AcordionA.mb-5.bg-secundary-acordeon.mb-5(
      tipo='a',
      clase-tarjeta='tarjeta acordeonA'
    )
      .row(titulo='Devengos ')
        .col-8
          p Son aquellas sumas pagadas al trabajador como retribución de sus servicios. Entre estos conceptos, se encuentran aquellos pagados directamente como remuneración salarial y son la parte que suma dentro de una nómina. En el apartado de devengos, existen los salariales y los no salariales.

          p Son clasificados como salariales:
          ul.lista-ul--color
            li 
              i.fas.fa-check
              p
                strong Salario base:&nbsp;
                | corresponde al pago mensual mínimo que recibirá un trabajador.
            li 
              i.fas.fa-check
              p
                strong Complementos salariales:&nbsp;
                | son percepciones económicas que se añaden al salario base, por una causa específica y determinada, derivada de la prestación del trabajo.
            li 
              i.fas.fa-check
              p
                strong Horas extraordinarias:&nbsp;
                | las horas extraordinarias son las cantidades de tiempo adicionales que un trabajador realiza, además de su jornada de trabajo.
            li 
              i.fas.fa-check
              p
                strong Pagos extras:&nbsp;
                | según cada convenio o acuerdo entre empleado y empresa.
            li 
              i.fas.fa-check
              p
                strong Mejoras voluntarias:&nbsp;
                | el sueldo que se percibe como salario en especie o retribución.
          p Por otra parte, los no salariales son los que se compensan, como:
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | Indemnizaciones.
            li 
              i.fas.fa-check
              | Prestaciones de seguridad social.
            li 
              i.fas.fa-check
              | Indemnizaciones por traslados.
            li 
              i.fas.fa-check
              | Suspensión o despido.

        .col-lg-4
          figure
            img(
              src='@/assets/template/tema06/t6-i2.png',
              alt='Texto que describa la imagen'
            ) 
      .row(titulo='Deducciones ')
        .col-8
          p Son descuentos del monto total devengado por el trabajador, es decir, del monto total de los salarios percibidos durante un mes o una quincena, son conceptos o valores descontados de la nómina. Estas deducciones se encuentran previstas en la ley, y se llevan a cabo para efectos de realizar los aportes a seguridad social, sobre el porcentaje que deba ser asumido por el trabajador.

          p Dentro de los valores que se deducen de la nómina tenemos:

          .row 
            .col-lg-6
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Aporte a la salud.
                li 
                  i.fas.fa-check
                  | Aporte a la pensión.
                li 
                  i.fas.fa-check
                  | Fondo de solidaridad.
                li 
                  i.fas.fa-check
                  | Cuotas sindicales.
            .col-lg-6
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Aportes a cooperativas.
                li 
                  i.fas.fa-check
                  | Embargos.
                li 
                  i.fas.fa-check
                  | Créditos.
                li 
                  i.fas.fa-check
                  | Deudas.
          p Es necesario dejar en claro que la empresa, la compañía u organización, no podrá retener ningún valor del salario de un empleado sin el consentimiento expreso del mismo, a menos que lo ordene un tribunal competente.

        .col-lg-4
          figure
            img(
              src='@/assets/template/tema06/t6-i3.png',
              alt='Texto que describa la imagen'
            ) 

    p.mb-5 El documento en el que se relacionan estos conceptos, se conoce de manera común como nómina, y está compuesta por los siguientes elementos:

    .row.d-flex.justify-content-center.mb-5
      .col-md-6
        ImagenInfografica.color-acento-botones(data-aos='zoom-in')
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema06/t6-i4.svg')

          .tarjeta.text-black.p-3.bg-secundario(
            x='21.1%',
            y='22.5%',
            numero='+'
          )
            p.mb-0 Datos de identificación de la empresa.

          .tarjeta.text-black.p-3.bg-secundario(
            x='21.1%',
            y='32.9%',
            numero='+'
          ) 
            p.mb-0 Datos básicos del trabajador.
          .tarjeta.text-black.p-3.bg-secundario(
            x='21.1%',
            y='43.5%',
            numero='+'
          ) 
            p.mb-0 Periodo de liquidación.
          .tarjeta.text-black.p-3.bg-secundario(
            x='21.1%',
            y='62.6%',
            numero='+'
          ) 
            p.mb-0 Compensaciones salariales y no salariales, que componen el salario bruto.
          .tarjeta.text-black.p-3.bg-secundario(
            x='68.1%',
            y='62.6%',
            numero='+'
          ) 
            p.mb-0 Deducciones que se realizan al salario bruto.
          .tarjeta.text-black.p-3.bg-secundario(
            x='21.1%',
            y='80.7%',
            numero='+'
          ) 
            p.mb-0 Detalles de las bases de cotización de la nómina.
          .tarjeta.text-black.p-3.bg-secundario(
            x='68.1%',
            y='80.7%',
            numero='+'
          ) 
            p.mb-0 Total neto a percibir.
          .tarjeta.text-black.p-3.bg-secundario(
            x='21.1%',
            y='91.5%',
            numero='+'
          ) 
            p.mb-0 Lugar y emisión, fecha y empresa.

    p Antes de continuar, es importante tener presente que existen varios tipos de salarios.

    p.mb-5 Conozcamos cada uno de ellos:

    .row.d-flex.justify-content-center.mb-5
      .col-md-10
        ImagenInfografica.color-acento-botones(data-aos='zoom-in')
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema06/t6-i5.png')

          .tarjeta.text-black.p-3.bg-secundario(x='20.5%', y='65%', numero='+')
            p.mb-0 Está estipulado en el artículo 145 del CST. Monto mínimo al que todo trabajador tiene derecho. Es decretado por el gobierno nacional anualmente; para el año 2023, en Colombia se decretó por $1.160.000.

          .tarjeta.text-black.p-3.bg-secundario(x='38%', y='21%', numero='+') 
            p.mb-0 Está estipulado por el artículo 132 del CST. Está conformado por un valor salarial equivalente a 10 salarios mínimos, que constituye un 70 % del total de la remuneración.
          .tarjeta.text-black.p-3.bg-secundario(x='74%', y='21%', numero='+') 
            p.mb-0 Cuando el trabajador recibe pagos sujetos a la ejecución de determinados hechos, comisiones o bonificaciones.
          .tarjeta.text-black.p-3.bg-secundario(x='56%', y='65%', numero='+') 
            p.mb-0 Toda retribución material diferente al dinero, que recibe el trabajador como parte de su remuneracion salarial y contraprestación directa del servicio. Está estipulada por el artículo 129 del CST.
          .tarjeta.text-black.p-3.bg-secundario(x='91.5%', y='65%', numero='+') 
            p.mb-0 Establecido en el artículo 132 del CST, es una modalidad de salario variable, donde se paga un valor determinado, por una labor específica.

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Trabajo extra y recargos

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema06/t6-i6.png")})` }'
          )
          .bloque-texto-g__texto.p-4
            p Recuerde que la jornada ordinaria consiste en 8 horas diarias y 48 horas semanales y, al realizar un exceso de horas de trabajo fuera del horario estipulado o pactado mediante el contrato, se presentan las horas extras, aquellas que se desarrollan más allá de la jornada ordinaria; cabe aclarar que, en ningún caso, las horas extras de trabajo diurnas o nocturnas, podrán exceder a 2 diarias y 12 a la semana.

      .col-lg-10
        .cajon.bg-cajon-acento-contenido.p-4
          p.mb-0 Para poder laborar el tiempo suplementario, el empleador deberá solicitar autorización del Ministerio de Protección Social, y si lo obtiene deberá llevar un registro de trabajo suplementario y está obligado a entregar al trabajador, una relación de las horas extras laboradas.

    p.mb-5 La liquidación del trabajo extra o suplementario, se llevará a cabo de acuerdo con las fórmulas presentadas a continuación:

    .row.justify-content-center.mb-5
      .col-lg-12
        .row
          .col-lg-12.my-2
            .row.justify-content-center
              .col-lg-6
                figure
                  img(
                    src='@/assets/template/tema06/t6-i7.png',
                    alt='Texto que describa la imagen'
                  ) 
          .col-lg-6.my-2
            figure
              img(
                src='@/assets/template/tema06/t6-i8.png',
                alt='Texto que describa la imagen'
              )
          .col-lg-6.my-2 
            figure
              img(
                src='@/assets/template/tema06/t6-i9.png',
                alt='Texto que describa la imagen'
              )

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema06/t6-i10.png")})` }'
          )
          .bloque-texto-g__texto.p-4
            p Igualmente, los recargos nocturnos, los dominicales y los festivos, son términos y condiciones sujetos a la jornada normal de trabajo del empleado, según lo acordado entre las partes.

            p Para efectos legales, se considera como trabajo diurno el comprendido entre las 6:00 a.m. y las 10:00 p.m. y trabajo nocturno entre las 10:00 p.m. y las 6:00 a.m. Esta distinción ofrece importancia para el régimen de retribución de los recargos legales como horas extras y trabajo nocturno. En este caso, no hay trabajo extra, sino un recargo por trabajar en dicho horario.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-4
        .cajon.bg-cajon-secundario.p-4
          p.mb-0 Debemos tener en cuenta que los días tienen una duración de 24 horas, contados desde las 12:00 de la noche hasta las 12:00 de la noche del día siguiente. Por otra parte, el recargo dominical y festivo es para los empleados que, por cualquier razón, deben trabajar un festivo donde no hay cabida a horas extras, porque se aplica el sistema legal de 8 horas. A la hora de determinar la compensación obligatoria de vacaciones, hay que tener en cuenta que, si el salario de un trabajador es fijo, incluye el pago de los domingos y festivos.

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Prestaciones sociales

    p Las prestaciones sociales son los pagos adicionales, aparte del salario, que el trabajador recibe en determinadas épocas del año, y que, a su vez, le representan beneficios; estas prestaciones son una remuneración obligatoria por parte del empleador, para los trabajadores que se encuentren vinculados a la empresa, por medio de un contrato de trabajo.

    p.mb-5 A continuación, se mostrarán detalladamente, cada una de estas prestaciones, con sus respectivas fórmulas de liquidación.

    .row.justify-content-center.mb-5
      .col-lg-8
        AcordionA.mb-5.bg-secundary-acordeon(tipo='a', clase-tarjeta='tarjeta acordeonA')
          .row(titulo='Auxilio de cesantías')
            .col-12
              p Son una prestación social a cargo de todo empleador, cuyo fin es un ahorro que tiene el trabajador para cuando esté desempleado, o para invertirlas en el pago sus estudios, el de su cónyuge, compañero permanente, o el de sus hijos, para compra, mejora o liberación de gravámenes de su vivienda.
              strong Fórmula para liquidar cesantías = valor del salario mensual x los días laborados en el año / 360.
              p Las cesantías se causan a 31 de diciembre de cada año y se consignan en el fondo de cesantías que elija el trabajador, a más tardar el 14 de febrero del año siguiente. De no consignarse en la fecha establecida, el empleador deberá pagar una multa de un día de salario por cada día de retraso, a favor del trabajador.
          .row(titulo='Intereses sobre las cesantías')
            .col-12
              p Todos los empleadores deberán pagar a sus trabajadores los intereses sobre las cesantías, que equivalen al 12 % anual. Los intereses se causan y se pagan a más tardar el 31 de enero de cada año, con base en el saldo de cesantías que el trabajador tuviere acumuladas a su favor al 31 de diciembre del año inmediatamente anterior.

              p Fórmula para liquidar intereses sobre las cesantías = valor de las cesantías x días trabajados en el año x 0.12 / 360.

          .row(titulo='Prima de servicios')
            .col-12
              p Es una prestación social que debe pagar el empleador que tenga carácter de empresa, con la finalidad que sus trabajadores disfruten por las utilidades que arroja la empresa. Se pagará, por concepto de prima de servicios, 30 días de salario por cada año de prestación del servicio, los cuales se pagan de forma semestral por partes iguales, el quince de junio y el 20 de diciembre.

              p Fórmula para liquidar la prima de servicios = valor del promedio del salario mensual x los días laborados en el semestre / 360.

      .col-lg-4
        figure(data-aos='zoom-in')
          img.img400.m-auto(src='@/assets/template/tema06/t6-i11.svg', alt='alt') 

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.bg-cajon-acento-contenido.p-4
          p.mb-0 Teniendo clara la clasificación anterior, se puede decir que las vacaciones no son salario, ni prestación social, sino un descanso remunerado, que debe tomarse como base para liquidar aportes.

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Salario integral

    p Ampliemos un poco más la información sobre el salario integral.

    p Se encuentra estipulado a través del artículo 132 del CST. Se conforma por un factor salarial equivalente a diez (10) smmlv (salario mínimo mensual vigente) que constituyen el 70 % del total de la remuneración, más uno prestacional de (3) smmlv que equivalen al 30 % de la misma. El factor salarial comprende el valor que debe utilizarse como base para la liquidación de aportes al sistema de seguridad social, parafiscales, vacaciones, licencias e incapacidades.

    p.mb-5 El salario integral incluye los siguientes conceptos:

    .row.mb-5
      .row.d-flex.justify-content-center
        SlyderF(columnas='col-lg-6 col-xl-4')(data-aos='zoom-in')
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema06/t6-i16.svg',
                      alt='AvatarTop'
                    )
                  p.text-center Salario.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema06/t6-i17.svg',
                      alt='AvatarTop'
                    )
                  p.text-center Prima de servicios.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema06/t6-i18.svg',
                      alt='AvatarTop'
                    )
                  p.text-center Auxilio de cesantías.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema06/t6-i19.svg',
                      alt='AvatarTop'
                    )
                  p.text-center Horas extras.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema06/t6-i20.svg',
                      alt='AvatarTop'
                    )
                  p.text-center Recargos nocturnos.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema06/t6-i21.svg',
                      alt='AvatarTop'
                    )
                  p.text-center Trabajo dominical y festivo.


    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema06/t6-i12.png")})` }'
          )
          .bloque-texto-g__texto.p-4
            p Sin embargo, el salario integral no incluye:
            br
            br
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Vacaciones.
              li 
                i.fas.fa-check
                | Aportes a seguridad social.
              li 
                i.fas.fa-check
                | Aportes parafiscales.
              li 
                i.fas.fa-check
                | Indemnización por despido injustificado.
              li 
                i.fas.fa-check
                | Sanciones moratorias.

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Novedades

    p.mb-5 El numeral 10 del artículo 2.1.1.3 del Decreto 780 de 2016, establece que se entiende por novedad toda modificación que afecta el estado o condición de afiliación del trabajador, la inscripción, cambio o retiro de una EPS y las actualizaciones que se efectúen de los datos de los afiliados. Estas novedades deben ser reportadas, de manera obligatoria una vez se presenten, a modo que el empleador no sea objeto de determinadas sanciones, según el tipo de novedad que debería reportarse.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-4
        .cajon.bg-cajon-secundario.p-4
          p.mb-0 Existen dos tipos de novedades: las permanentes, son aquellas que se mantienen de manera constante durante la relación laboral; por ejemplo, traslado de EPS o de fondo de pensiones, y las transitorias que, como su nombre lo indica, se presentan por un período determinado; por ejemplo, una incapacidad o una licencia no remunerada. Para prestar estos servicios, los operadores deben estar autorizados por parte del Ministerio de Salud y Protección Social.

    p.mb-5 Algunas novedades que pueden presentarse son:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/template/tema06/t6-i22.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Licencia por luto
            p.mb-0.text-center 5 días hábiles cuando el fallecido es familiar dentro del grado de parentesco que exige la ley.          
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/template/tema06/t6-i23.png", alt="alt")
          .crd_hover_txt--body.fz-13
            h4.mb-3.text-center Licencia o descanso durante el periodo de lactancia
            p.mb-0.text-center 2 descansos de 30 minutos cada uno, durante la jornada laboral.          
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/template/tema06/t6-i24.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Licencia de maternidad
            p.mb-0.text-center 12 semanas u 84 días después del parto, la cubre la EPS 10 % del IBC (Ingreso Base de Cotización).

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/template/tema06/t6-i25.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center.fz-15 Licencia de aborto o parto prematuro
            p.mb-0.text-center De dos a cuatro semanas, la paga la EPS al 100%.          
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/template/tema06/t6-i26.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Licencia de paternidad
            p.mb-0.text-center Ley María 755 de 2002, son 8 días hábiles, si ambos cotizan, o 4 días si solo cotiza el padre; 100 % la cubre la EPS.             

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Liquidación de nómina

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema06/t6-i13.png")})` }'
          )
          .bloque-texto-g__texto.p-4
            p Conocemos todos los términos, ahora vamos con la liquidación de nómina, la cual consiste en calcular el valor acumulado de la cantidad de días trabajados y la cantidad deducida del pago de un empleado, durante un período determinado, para llegar al valor total pagado. Se liquida mensual o quincenalmente, dependiendo de las condiciones de pago pactadas; las empresas deberán continuar liquidando sus respectivos salarios, para determinar los diversos conceptos que adeudan a los trabajadores y que deben descontar.

      .col-lg-10
        .cajon.bg-cajon-acento-contenido.p-4
          p.mb-0 En la liquidación de la nómina se deben tener en cuenta dos cosas que deberá pagar el empleador y que se le deducirá al empleado, como vemos que se presenta en la siguiente tabla.

    .row.justify-content-center.mb-5
        .col-lg-8.p-3
          .titulo-sexto.color-acento-contenido.mb-5
            h5 Tabla 1
            br
            br
            | Obligaciones del empleador y del empleado
          figure
            img(
              src='@/assets/template/tema06/t6-i15.svg',
              alt='Texto que describa la imagen'
            )

    p El Fondo de Solidaridad Pensional, lo pagan los asalariados que ganen más de 4 salarios mínimos; equivale al 1 % del Ingreso Base de Cotización, sin subsidio de transporte.

    p.mb-5 El formato estándar utilizado para la liquidación de nómina, se debe regir por la legislación vigente, que define la estructura mínima y el contenido que debe seguirse en todo momento.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-4
        .cajon.bg-cajon-secundario.p-4
          .row 
            .col-lg-2.p-3
              figure
                img(
                  src='@/assets/template/tema06/t6-i14.png',
                  alt='Texto que describa la imagen'
                ) 
            .col-lg-10
              p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
</template>

<script>
export default {
  name: 'Tema3',
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
