<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bg-img.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/template/introduccion/ti-i1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde aprenderá a interpretar las políticas financieras y contables, así como también a procesar los documentos generados por las actividades financieras; estudiará cómo se originan las operaciones en el sistema de información contable, todo esto basado en las políticas y la normativa de la organización.

    p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    
    .col-12
      figure
        .video
          iframe(
            width='560',
            height='315',
            src='https://www.youtube.com/embed/GoxPO-pOR7w',
            title='YouTube video player',
            frameborder='0',
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowfullscreen
          )       
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
