<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 2
      h1 Equipos de seguridad

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .bloque-texto-f.hlgt--yellow01.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto El equipo de prevención y seguridad es el conjunto de elementos necesarios para la atención inicial de emergencias que debe poseer un vehículo, ya que, de acuerdo con las disposiciones del Ministerio de Transporte, ningún automotor podrá transitar sin estos elementos, puesto que podría recibir un comparendo por la infracción de la ley definida en el Código Nacional de Tránsito y pagar una multa según lo definido en esta normatividad 
          .bloque-texto-f__autor.mb-3
            h5.mb-0 - Código Nacional de Tránsito Terrestre, Artículo 30    

      .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
        figure.mb-4
          img(src="@/assets/curso/temas/t2/t2_01.png", alt="alt")

    p(data-aos="fade-right").mb-5 Pero, ¿cuál es el equipo de seguridad que menciona el código que debe portar todo vehículo en Colombia para poder transitar en las vías? Revise el siguiente contenido:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-tBny0kZrlE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        

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
