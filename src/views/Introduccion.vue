<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.txt--sistema
      h1 Introducción

    .bg--grad_01.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-7(data-aos="fade-right")
          p En el presente siglo, se ve el impacto de la tecnología en varios sectores económicos, uno de ellos es el de los transportes y, por ende, el de la logística, a nivel mundial.

          p Es por esta razón que Colombia, para dar impulso al eje de competitividad, en medio de un alto grado de innovación y globalización del mercado, ha tenido que invertir dinero en infraestructura para abrir rutas de salida de productos nacionales e ingreso de productos internacionales con el fin de generar apertura a la inversión extranjera y aumento de divisas que permitan el desarrollo del país. 

          p.mb-0 Por lo anterior, le invitamos a ver el siguiente video, que le mostrará grosso modo el contenido del componente formativo: control de movilidad, transportes y seguridad vial.

        .col-lg-5.d-none.d-lg-flex(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/intro/intro.png", alt="alt")

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Mg8qRl9nY3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        
    
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
