<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 1
      h1 Características de la geografía de rutas de transporte y del plan de rutas

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_01.png", alt="alt")
      .col-lg-8(data-aos="fade-left")
        p #[span.bold.hlgt--yellow Las características dentro del contexto de la geografía, la carga y su necesidad de movilización a diferentes puntos, en variados modos de transporte, hacen que cada vez sean más relevantes], pues se pone de manifiesto el desarrollo de la economía y la necesidad de mover más bienes y servicios en un entorno económico dinámico, que debe generar cada vez más #[span.bold.hlgt--yellow desafíos logísticos a precios más competitivos.] 

        p Por lo anterior, el combinar la geografía con las rutas y el transporte debe estar ligado a las posibilidades de #[span.bold.hlgt--yellow acceder a la infraestructura], en un entorno donde se generen economías y se puedan realizar intercambios modales que permitan el desarrollo económico del país.

        p Aquí, es de vital importancia definir el concepto de rutas, entendidas estas como: #[span.bold.hlgt--yellow el recorrido de las unidades de transporte para la entrega de los productos y/o servicios, por lo que se deben maximizar las capacidades de las flotas de transporte y minimizar los costos y riesgos, así como la distancia y el tiempo.] Para el logro de este objetivo, se debe definir el plan de rutas, el cual tiene en cuenta los siguientes elementos:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="zoom-in")
      .bg--yellow2.p-4.br--01.hg--100
        figure.mb-4
          img(src="@/assets/curso/temas/t1/t1_02.svg", alt="alt").img145.m-auto
        h3.text-center Conocer el producto 
        p.text-center Se deben considerar: las vías, rutas y productos que se van a movilizar.

      .bg--yellow2.p-4.br--01.hg--100
        figure.mb-4
          img(src="@/assets/curso/temas/t1/t1_03.svg", alt="alt").img145.m-auto
        h3.text-center Conocer la ruta 
        p.text-center Cada ruta es única, se diferencia por su longitud, topografía, el estado de sus vías y climas.

      .bg--yellow2.p-4.br--01.hg--100
        figure.mb-4
          img(src="@/assets/curso/temas/t1/t1_04.svg", alt="alt").img145.m-auto
        h3.text-center Conocer el cronograma
        p.text-center El plan de ruta tiene en cuenta: las vías, tiempos de desplazamiento, producto y tipos de equipos, etc.

      .bg--yellow2.p-4.br--01.hg--100
        figure.mb-4
          img(src="@/assets/curso/temas/t1/t1_05.svg", alt="alt").img145.m-auto
        h3.text-center Planear para prever
        p.text-center Las rutas deben planearse previendo el congestionamiento de tránsito y con menores volúmenes.

      .bg--yellow2.p-4.br--01.hg--100
        figure.mb-4
          img(src="@/assets/curso/temas/t1/t1_06.svg", alt="alt").img145.m-auto
        h3.text-center Organizar
        p.text-center Al realizar su planeación, se deben definir rutas alternas y equipos de apoyo.

      .bg--yellow2.p-4.br--01.hg--100
        figure.mb-4
          img(src="@/assets/curso/temas/t1/t1_07.svg", alt="alt").img145.m-auto
        h3.text-center Sistematizar
        p.text-center Es importante la planificación de ruta de transporte de manera digital, con el apoyo de programas o software, para tomar decisiones de cambio en tiempo real.

    .bg--warning.mb-5(data-aos="zoom-in")      
      .row.justify-content-center.align-items-center
        .col-auto
          figure
            img(src="@/assets/curso/temas/recursos/warning_01.svg", alt="alt").img85.m-auto
        .col-lg
          h5 ¡Importante!
          p.mb-0 Este análisis permite definir los mejores trayectos, con la finalidad de optimizar tiempos y minimizar costos de transporte y logística; #[strong pero estos criterios no tienen como objetivo elegir la menor distancia de recorrido, sino la mejor alternativa para que sea efectiva la logística, pues no es una regla general que la menor distancia sea la mejor o la de menor costo].
      .octagon

    h3(data-aos="zoom-in").text-center.mb-4 #[span.hlgt--yellow02 Planificación y optimización de rutas]

    p(data-aos="zoom-in").text-center.mb-5 Para continuar profundizando en la temática, le invitamos a visualizar los elementos clave en la planificación y optimización de rutas.

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/z-rEIdSFkqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
       
      
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
