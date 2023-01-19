<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Hechos contables – transacciones de las empresas

    p.mb-5 Son ocasionados por el giro ordinario de las actividades que la empresa realiza, como compra y venta de bienes o servicios. Estos hechos económicos deben desarrollarse en concordancia con las cualidades de información financiera y se les denominan transacciones, donde la veracidad de la información debe ser evidente.

    .row.justify-content-center.mb-5
      .col-lg-11
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema03/t3-i1.svg")})` }'
          )
          .bloque-texto-g__texto.p-4
            p Estos hechos contables o transacciones, permiten clasificar y determinar la representación, y posterior definición del registro contable, para que esta clasificación se realice de manera oportuna; la entidad debe diseñar, con anterioridad, un manual de políticas contables y ajustarlo basado en la normativa vigente; para este caso, la NIC 8.  

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | De la cuenta

    p.mb-5 Para organizar y registrar los hechos económicos de una organización, es necesario y apropiado emplear cuentas contables, las cuales deben utilizarse de manera apropiada, porque un mal uso de ellas ocasiona una contabilidad alejada de la realidad de la organización. Es necesario que la persona encomendada para esta actividad, posea bases sólidas y conocimientos claros sobre este tema.
    
    .row.justify-content-center.mb-5    
      .col-lg-10.px-4
        .row.p-4.card-t1.align-items-center.mb-5(data-aos='zoom-in-up')
          .col-lg-1.col-2.d-none.d-lg-block
            figure
              img(
                src='@/assets/template/tema03/t3-i2.svg',
              )
          .col-lg-8.col-6
            h4 Qué es una cuenta.
            p.mb-0 Para conocer qué es una cuenta, sus elementos, estructura, clases y dinámica, lo invitamos a ver el documento Qué es una cuenta. 
          .col-lg-3.col-4.text-center
            a.boton.boton--b.color-acento-botones(
              :href="obtenerLink('/downloads/QUE ES UNA CUENTA.pdf')",
              target='_blank'
            )
              span Ver documento
              i.fas.fa-file-download 

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Ecuación contable 

    p.mb-5 Ecuación contable se refiere a la igualdad que nos muestra que, el valor de los recursos llamados activos de una empresa o compañía, es igual al valor de los recursos propios llamados patrimonio, más el valor de los recursos obtenidos del tercero, conocidos como pasivos. Gráficamente, la ecuación se construye así:

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1
          br
          span.fst-italic La ecuación contable
        figure
          img(
            src='@/assets/template/tema03/t3-i3.svg',
          )                       

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | La partida doble

    .row.justify-content-center.mb-5
      .col-lg-8
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema03/t3-i4.svg")})` }'
          )
          .bloque-texto-g__texto.p-4
            p Consiste en que por cada movimiento contable, deben estar presentes, como mínimo, dos cuentas. Esto significa que, en cada asiento contable, la suma de los débitos debe ser igual a la suma de los créditos.

    p.mb-5 A continuación, se presenta una serie de términos importantes a tener en cuenta en los hechos contables.

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="<strong>Reconocimiento</strong>")
        .row
          .col-md-6.mb-4.mb-md-0
            p Se comprende como reconocimiento contable, a todo movimiento económico de la empresa sea este, ingreso o egreso, entrada o salida, que puede ser medible con fiabilidad y su flujo sea probable. Estos se verán reflejados, de manera posterior, en los estados financieros, una vez cumplan con el concepto de sus elementos. 
        
          .col-md-6
            figure
              img(src='@/assets/template/tema03/t3-i5.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="<strong>Baja de cuentas</strong>")
        .row
          .col-md-6.mb-4.mb-md-0
            p Bajar o retirar, hace referencia a la eliminación total o parcial de alguno de los registros, por situaciones como pérdida de derechos adquiridos (venta de un activo), o pago de una deuda con proveedor (eliminación del pasivo).    
          .col-md-6
            figure
              img(src='@/assets/template/tema03/t3-i6.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="<strong>Medición</strong>")
        .row
          .col-md-6.mb-4.mb-md-0
            p Hace referencia al proceso mediante el cual se le asigna un valor monetario a la transacción económica; este proceso se lleva a cabo en dos momentos diferentes, en el reconocimiento inicial y en la medición posterior.    
          .col-md-6
            figure
              img(src='@/assets/template/tema03/t3-i7.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="<strong>Política contable</strong>")
        .row
          .col-md-6.mb-4.mb-md-0
            p Se refiere a las reglas o parámetros con los que se elaboran los estatutos financieros, para que cuando alguien los lea, identifique cuál fue la base para elaborar los estados financieros; las políticas, lo que hacen es contextualizar cómo y bajo qué metodología, se prepararon los estados financieros.        
          .col-md-6
            figure
              img(src='@/assets/template/tema03/t3-i8.png', alt='Texto que describa la imagen')

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
