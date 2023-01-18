<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Documentos y libros contables

    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/template/tema02/t2-i1.png')
      .col-lg-7
        p Toda organización, para su funcionamiento, requiere soportar el registro de transacciones, con la finalidad que le sirva como medio de prueba y soporte de las actividades propias que su organización ejecuta en la cotidianidad.
        p Los documentos contables soportan hechos económicos propios de la organización y, al ser registrados, afectan la contabilidad de la empresa; los documentos no contables soportan transacciones de la empresa pero, al no registrarse contablemente, no afectan la contabilidad.

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Documentos contables

    p.mb-5 Facilitan que, de manera cronológica y organizada, se proporcione una información de los movimientos de la empresa.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-f.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto Teniendo en cuenta los requisitos legales que sean aplicables, según el tipo de acto que se trate, los hechos económicos deben documentarse mediante soportes de orígenes internos o externos, debidamente fechados y autorizados por quienes intervengan en ellos o los elaboren

          .bloque-texto-f__autor-right.mb-3
            h3.mb-0 Anexo 6 del DUR 2420 de 2015 Normas sobre el sistema Documental, Título Tres, Artículo 6, 14 de diciembre de 2015.

    p.mb-5 Profundice en la normativa vigente, revisando en detalle:

    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-lg-6 
            a.anexo.mb-4.mb-lg-0(
              href='https://www.ctcp.gov.co/publicaciones-ctcp/compilaciones-normativas/anexo-6-del-dur-2420-de-2015-normas-sobre-sistema-/compilacion-anexo-6-a-diciembre-31-de-2020-normas',
              target='_blank'
            )
              .anexo__icono
                img(src='@/assets/template/icono-link.svg')
              .anexo__texto
                p
                strong Enlace web.&nbsp;
                | El anexo 6 del Decreto único reglamentario 2420.
          .col-lg-6 
            a.anexo.mb-4.mb-lg-0(
              href='https://www.ctcp.gov.co/CMSPages/GetFile.aspx?guid=ccb355bb-d8f6-48d2-8d9d-d44e924a8aed',
              target='_blank'
            )
              .anexo__icono
                img(src='@/assets/template/icono-link.svg')
              .anexo__texto
                p
                strong Enlace web.&nbsp;
                | El concepto emitido por la junta central de contadores 2021-0409.

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Diligenciamiento

    p.mb-5 Los documentos internos son propios de manejo y uso de la organización; les permite llevar un control interno y son usados de manera frecuente, mientras que los documentos externos, son utilizados por la organización o por terceros.
      br
      br
      |A continuación, conozca los más comunes:

    .row.d-flex.justify-content-center.mb-5
      .col-md-12
        ImagenInfografica.color-acento-botones(data-aos='zoom-in')
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema02/t2-i2.png')

          .tarjeta.text-black.p-3.bg-secundario(
            x='51.5%',
            y='23.5%',
            numero='+'
          )
            p Respaldan las entradas y salidas de dinero de la organización, deben diligenciarse de manera adecuada evitando tachones o enmendaduras y se les anexa el documento con el que se soporta la entrada o la salida. Ejemplo: factura, consignación.

          .tarjeta.text-black.p-3.bg-secundario(
            x='62.5%',
            y='41.5%',
            numero='+'
          )
            p Son los que respaldan el pago mensual de los empleados; se incluyen los días trabajados, horas extras, recargos y todos los descuentos que acontezcan por pagos de seguridad social, pensión y demás descuentos autorizados.

          .tarjeta.text-black.p-3.bg-secundario(
            x='73.1%',
            y='23.5%',
            numero='+'
          )
            p Actualmente, muchas empresas lo realizan de manera digital; estos documentos sirven para llevar, de forma organizada, el control de existencias de mercancías y es diligenciado por el encargado de esta dependencia; debe ser actualizado diariamente.

          .tarjeta.text-black.p-3.bg-secundario(
            x='83.1%',
            y='41.5%',
            numero='+'
          )
            p Son los que la empresa utiliza para salidas o entradas pequeñas de dinero, como la caja menor.

          .tarjeta.text-black.p-3.bg-secundario(
            x='44.7%',
            y='61.3%',
            numero='+'
          )
            p La factura cambiaria es un título valor y en ella se registra la compra y la venta de mercancías.

          .tarjeta.text-black.p-3.bg-secundario(x='51.5%', y='86%', numero='+')
            p Tiene la misma validez que la factura de papel; soporta las transacciones de la organización.

          .tarjeta.text-black.p-3.bg-secundario(x='60%', y='61.3%', numero='+')
            p Es el documento usado para acreditar la compra de un bien o servicio; lo debe generar el comprador cuando hace transacciones con un proveedor que no está obligado a expedir factura de venta.

          .tarjeta.text-black.p-3.bg-secundario(x='67.2%', y='86%', numero='+')
            p Son documentos expedidos por los bancos; soportan para la empresa transacciones de salida o entrada de dinero a sus propias cuentas.

          .tarjeta.text-black.p-3.bg-secundario(
            x='74.5%',
            y='61.3%',
            numero='+'
          )
            p Documentos expedidos por el banco, en donde se registra el resumen de las transacciones realizadas en la cuenta o cuentas de la empresa; el banco la remite en físico o en digital.

          .tarjeta.text-black.p-3.bg-secundario(x='82.4%', y='86%', numero='+')
            p Hace referencia a las declaraciones que debe presentar la empresa ante la Dirección de Impuestos y Aduanas Nacionales, DIAN, de acuerdo con las obligaciones fiscales de la empresa.

          .tarjeta.text-black.p-3.bg-secundario(
            x='89.6%',
            y='61.3%',
            numero='+'
          )
            p Cuando una organización ejecuta algún ajuste o corrección, realiza una nota contable que puede ser de débito (a favor de la empresa) o de crédito (a favor de un cliente o acreedor).

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Documentos extra contables y títulos valores

    p Los documentos extracontables generan una ganancia o utilidad de manera previa a la transacción comercial. No causan registro en la contabilidad y son meramente informativos.

    p.mb-5 Algunos documentos no contables son:

    .row.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-primario.p-4.h-30
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(
                  src='@/assets/template/tema02/t2-i3.svg',
                  alt='Texto que describa la imagen'
                )

          h3.text-center Cotización
          p.text-center Documento usado por las organizaciones para dar información de sus productos y servicios, las características ofrecidas y aquellas que se consideren necesarias de suministrar al cliente.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-primario.p-4.h-30
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(
                  src='@/assets/template/tema02/t2-i3.svg',
                  alt='Texto que describa la imagen'
                )

          h3.text-center Pedido
          p.text-center Este documento se usa para poder registrar los encargos de bienes o servicios.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-primario.p-4.h-30
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(
                  src='@/assets/template/tema02/t2-i3.svg',
                  alt='Texto que describa la imagen'
                )

          h3.text-center Remisión
          p.text-center Documento soporte de la entrega de mercancías, en el que se indican las cantidades que han salido de forma física del inventario y han sido entregadas al cliente, pero no han sido facturadas.

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Documentos internos y externos

    p.mb-5 Todo soporte o documento contable debe contener unos parámetros mínimos para su diligenciamiento, entre los que se debe tener presente los siguientes:

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema02/t2-i4.png")})` }'
          )
          .bloque-texto-g__texto.p-4
            .row 
              .col-lg-6
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Nombre/razón social del comprador y del vendedor.
                  li 
                    i.fas.fa-check
                    | Identificación o Nit.
                  li 
                    i.fas.fa-check
                    | Fecha de expedición.
                  li 
                    i.fas.fa-check
                    | Fecha de vencimiento.
              .col-lg-6 
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Tipo de documento y consecutivo.
                  li 
                    i.fas.fa-check
                    | Descripción detallada del tipo de transacción.
                  li 
                    i.fas.fa-check
                    | Valor en letras y números.

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Libros contables

    p.mb-5 Según el Código de Comercio:

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-f.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto “Todo comerciante conformará su contabilidad, libros, registros contables, inventarios y estados financieros en general, a las disposiciones de este Código y demás normas sobre la materia” (Código de Comercio, Art. 48).

          .bloque-texto-f__autor-right.mb-3
            h3.mb-0 (Código de Comercio, Art. 48)

    p.mb-5 Los libros de comercio para los efectos legales, se entenderán como los que determine la ley como obligatorios y los auxiliares necesarios para el completo entendimiento de aquellos (Código de Comercio, Art 49).

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema02/t2-i5.png")})` }'
          )
          .bloque-texto-g__texto.p-4
            p Los libros podrán ser de hojas removibles o formarse por series continuas de tarjetas, siempre que unas y otras estén numeradas, puedan conservarse archivadas en orden y aparezcan autenticadas conforme con Ia reglamentación del gobierno. Los libros podrán llevarse en archivos electrónicos, que garanticen, de forma ordenada, Ia inalterabilidad, Ia integridad y seguridad de Ia información, así como su conservación. El registro de los libros electrónicos se adelantará, de acuerdo con Ia reglamentación que expida el Gobierno Nacional. (Código de Comercio, Art 56)

    p.mb-5 Para dar cumplimiento, las empresas deben registrar ante cámaras de comercio, por disposición del artículo 175 del Decreto Ley 019 de 2012:

    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-lg-6
            figure
              img(
                src='@/assets/template/tema02/t2-i6.svg',
                alt='Texto que describa la imagen'
              )
          .col-lg-6 
            figure
              img(
                src='@/assets/template/tema02/t2-i7.svg',
                alt='Texto que describa la imagen'
              )

          .col-lg-12
            .row.justify-content-center
              .col-lg-6
                figure
                  img(
                    src='@/assets/template/tema02/t2-i8.svg',
                    alt='Texto que describa la imagen'
                  )

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Formatos y comprobantes

    p.mb-5 Los libros de contabilidad deben seguir los principios básicos de contabilidad, lo que indica que deben ser diligenciados como fiel copia de las transacciones económicas, que sirvan como medio de prueba y, en caso de ser solicitados por las autoridades competentes, estén disponibles; en caso de no llevarse a efecto el debido proceso, se somete a sanciones fiscales.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-4
        .cajon.bg-cajon-secundario.p-4
          p.mb-0 “El comerciante deberá dejar copia fiel de la correspondencia que dirija, en relación con los negocios, por cualquier medio que asegure la exactitud y duración de la copia. Asimismo, conservará la correspondencia que reciba en relación con sus actividades comerciales, con anotación de la fecha de contestación o de no haberse dado respuesta”. (Artículo 54 Código de Comercio)

      .col-lg-10
        .cajon.bg-cajon-acento-contenido.p-4
          p.mb-0 “El comerciante conservará archivados y ordenados los comprobantes de los asientos de sus libros de contabilidad, de manera que en cualquier momento se facilite verificar su exactitud” (Artículo 55 Código de Comercio)

    p.mb-5 En conformidad con lo establecido por el Artículo 29 de La ley 2195 de 2022, se consideran prohibiciones las siguientes:

    .row.d-flex.justify-content-center.mb-5
      .col-lg-11.col-12
        PasosA.color-acento-contenido.mb-5(tipo='n')
          .row.align-items-center
            .col-md-10.col-8.mb-md-0
              p.text-start Alterar en los asientos, el orden o la fecha de las operaciones a que estos se refieren.

            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i9.svg',
                  alt='Texto que describa la imagen'
                ) 
          .row.align-items-center
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i9.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-10.mb-md-0.col-8
              p.text-start Dejar espacios que faciliten intercalaciones o adiciones en el texto de los asientos, o a continuación de los mismos.
          .row.align-items-center
            .col-md-10.col-8.mb-md-0
              p.text-start Hacer interlineaciones, raspaduras o correcciones en los asientos. Cualquier error u omisión se salvará con un nuevo asiento en la fecha en que se advirtiere.

            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i9.svg',
                  alt='Texto que describa la imagen'
                )
          .row.align-items-center
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i9.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-10.mb-md-0.col-8
              p.text-start Borrar o tachar en todo o en parte, los asientos.
          .row.align-items-center
            .col-md-10.col-8.mb-md-0
              p.text-start Arrancar hojas, alterar el orden de las mismas, mutilar los libros, o alterar los archivos electrónicos.

            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i9.svg',
                  alt='Texto que describa la imagen'
                ) 
          .row.align-items-center
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i9.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-10.mb-md-0.col-8
              p.text-start Crear cuentas en los libros contables, que no cuenten con los comprobantes y soportes correspondientes.
          .row.align-items-center
            .col-md-10.col-8.mb-md-0
              p.text-start No asentar en los libros contables, las operaciones efectuadas.

            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i9.svg',
                  alt='Texto que describa la imagen'
                ) 
          .row.align-items-center
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i9.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-10.mb-md-0.col-8
              p.text-start Llevar doble contabilidad, es decir, llevar dos o más libros iguales en los que se registre, en forma diferente, las mismas operaciones, o cuando se tengan distintos comprobantes sobre los mismos actos.
          .row.align-items-center
            .col-md-10.col-8.mb-md-0
              p.text-start Registrar en los libros contables operaciones de manera inadecuada, gastos inexistentes, o pasivos sin la identificación correcta.

            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i9.svg',
                  alt='Texto que describa la imagen'
                ) 
          .row.align-items-center
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i9.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-10.mb-md-0.col-8
              p.text-start Utilizar documentos falsos que sirvan de soporte a la contabilidad.
          .row.align-items-center
            .col-md-10.col-8.mb-md-0
              p.text-start Abstenerse de revelar partidas en los estados financieros, sin la debida correspondencia con las cuentas asentadas en los libros de contabilidad.

            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i9.svg',
                  alt='Texto que describa la imagen'
                ) 

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Títulos valores

    p.mb-5 Estos documentos poseen un valor intrínseco que representa un derecho para quien lo porta y en el que se ha establecido un plazo para su ejecución o cambio.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5.bloque-modificado
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema02/t2-i10.svg")})` }'
          )
          .bloque-texto-g__texto.p-4
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Son negociables.
              li 
                i.fas.fa-check
                | Presentan autonomía para quien lo porta.
              li 
                i.fas.fa-check
                | Se presume de su autenticidad.
              li 
                i.fas.fa-check
                | Podrá ser endosable.
              li 
                i.fas.fa-check
                | El portador puede ejercer el derecho contenido allí.
              li 
                i.fas.fa-check
                | Lugar de cumplimiento.
              li 
                i.fas.fa-check
                | La firma de quien lo crea.

    p.mb-5 De acuerdo con la normativa vigente, toda empresa puede optar por emitir cualquiera de los títulos que ella contempla y, por lo tanto, se han clasificado de la siguiente manera:

    .row
      .col-lg-4.order-2.order-lg-1.mb-4.mb-lg-0(data-aos='zoom-in')
        figure
          img.m-auto(
            src='@/assets/template/tema02/t2-i12.svg',
            alt='alt',
            style='width: 450px'
          )       
      .col-lg-8.order-1.order-lg-2
        TabsA.tab-color-acento-contenido.color-acento-contenido.mb-5 
          .tarjeta.clr-paleYellow.p-4(titulo='Títulos nominativos')
            p Se exige la inscripción de un tenedor, quien es el gozante de los derechos que este contempla, y la única persona que se reconocerá como tenedor legítimo.
          .tarjeta.clr-paleYellow.p-4(titulo='Títulos a la orden')
            p Estos son expedidos a la orden de una persona específica o, en caso de transmitirse el documento, a favor de quien aparezca designado en este último registro.
          .tarjeta.clr-paleYellow.p-4(titulo='Títulos al portador')
            p En este tipo de título, a diferencia de los anteriores, la persona o entidad que lo porte es quien goza de los derechos que representa; la simple exhibición del título legitimará al portador y su tradición se producirá por la sola entrega.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema02/t2-i11.svg")})` }'
          )
          .bloque-texto-g__texto.p-4
            .row 
              .col-lg-6
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Letra de cambio
                  li 
                    i.fas.fa-check
                    | Pagaré
                  li 
                    i.fas.fa-check
                    | Cheque
              .col-lg-6 
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Factura cambiaria
                  li 
                    i.fas.fa-check
                    | Bonos
                  li 
                    i.fas.fa-check
                    | Acciones
</template>

<script>
export default {
  name: 'Tema2',
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
