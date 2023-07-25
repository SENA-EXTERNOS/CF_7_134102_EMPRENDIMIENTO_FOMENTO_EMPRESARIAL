<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Obligaciones tributarias de las empresas

    p Una obligación tributaria es aquella que parte de las necesidades del Estado para que todos contribuyan con el gasto público. El incumplimiento de este tipo de obligaciones acarrea sanciones como multas o suspensión de operaciones.

    p.mb-5 Lo invitamos a ver el siguiente video, para aprender sobre los impuestos y su historia.

    .col-12.mb-5
      figure
        .video
          iframe(
            width='560',
            height='315',
            src='https://www.youtube.com/embed/MDaXLkmR6rI',
            title='YouTube video player',
            frameborder='0',
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowfullscreen
          )      

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Tipos de impuestos

    p.mb-5 En Colombia existen tres tipos de impuestos que, a su vez, se dividen según los recaudadores de impuestos a nivel nacional, departamental o municipal. 

    .row.justify-content-center    
      .col-lg-10.px-4
        .row.p-4.card-t1.align-items-center.mb-5(data-aos='zoom-in-up')
          .col-lg-1.col-2.d-none.d-lg-block
            figure
              img(
                src='@/assets/template/tema04/t4-i1.svg',
              )
          .col-lg-8.col-6
            h4 Tipos de impuestos
            p.mb-0 Para conocer estos impuestos, lo invitamos a leer el documento 
          .col-lg-3.col-4.text-center
            a.boton.boton--b.color-acento-botones(
              :href="obtenerLink('/downloads/Tipo_de_impuesto.pdf')",
              target='_blank'
            )
              span Ver documento 
              i.fas.fa-file-download     

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
