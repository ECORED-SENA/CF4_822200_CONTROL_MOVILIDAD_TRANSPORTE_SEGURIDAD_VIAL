<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 8
      h1 Tecnologías de la información, fundamentos y tipos de equipos de comunicación   

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t8/t8_01.png", alt="alt")
      .col-lg-8(data-aos="fade-right")
        p.mb-0 En un mundo globalizado, donde las Tecnologías de la Información y las Comunicaciones permiten conocer y procesar datos en tiempo real, es importante integrarlas a las actividades diarias, para lograr tomar decisiones acordes con las circunstancias y decidir cuál es la mejor tecnología que aplica, dependiendo del tipo de operación de transporte que se esté ejecutando y que se quiere reportar o medir.  Es por esto que se presentan a continuación algunas tecnologías comúnmente utilizadas, según la perspectiva de la empresa Novologística (2019):

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/K_KgBscfdDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)     

    .rectangle_01.mb-4
      .row.justify-content-center.align-items-center
        .col-lg
          p.mb-0 Para concluir, es importante mostrar, a través del siguiente video del Ministerio del Transporte, los avances y proyecciones que, en materia de transporte, se han realizado, con el fin de hacer de Colombia un país competitivo, listo para ofrecer a las empresas extranjeras la infraestructura que se requiere para hacer inversión segura en este hermoso lugar.  
        .col-auto.me-4.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/t8/t8_02.png", alt="alt").img85

    .bg--yellow.p-4.br--01.my-5(data-aos="zoom-in") 
      .row.justify-content-center.align-items-center
        .col-auto.mb-4.mb-lg-0
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/call_01.svg", alt="alt").img65                
        .col-lg            
          .row.justify-content-end.align-items-center
            .col-lg.mb-4.mb-lg-0
              h4.mb-2 Reactivando nuestra economía a través del sector transporte
              p.mb-0 A continuación lo invitamos a ver un video que explica la estrategia ‘Compromiso por Colombia’, la cual estructuró 81 proyectos divididos en 5 programas en los que se invertirán 75 billones de pesos buscando reactivar la economía a través del sector del transporte.
            .col-auto
              .row.align-items-center.mb-3                
                .col-auto
                  a.boton.color-botones.texto-blanco(href="https://www.youtube.com/watch?v=0LOslU5t2Fs" target="_blank")
                    span Ver video
                    i.fas.fa-link




</template>

<script>
export default {
  name: 'Tema8',
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
