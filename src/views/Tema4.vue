<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 4
      h1 Logística en transporte de carga

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-4 #[span.bold.hlgt--yellow La logística, como una técnica de organización, se formaliza con la Ingeniería Militar], donde se tenían como directrices de estrategia, tácticas de movimiento de tropas, equipos y suministros, y la organización de las instalaciones para los soldados.

        .bg--warning(data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/warning_01.svg", alt="alt").img85.m-auto
            .col-lg
              h5 ¡Importante!
              p.mb-0 Esta lista de inspección es solo un indicador general, pero se debe realizar ajustada al tipo de modo de transporte, a la carga u operación específica y a la normatividad que esté en vigencia.

      .col-lg-4.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_01.png", alt="alt")

    p(data-aos="fade-right").mb-5 Una adecuada planeación en la logística de transporte tiene las siguientes ventajas:

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Figura 3.
      span Logística en transporte de carga

    figure.mb-5(data-aos="zoom-in")
      img(src="@/assets/curso/temas/t4/t4_02.svg", alt="alt")

    p(data-aos="fade-right") #[span.bold.hlgt--yellow La planeación en logística], las necesidades, requerimientos y, en general, los retos del día a día #[span.bold.hlgt--yellow varían dependiendo del tipo de transporte] a utilizar, las solicitudes de la carga, el tipo de industria en el que se estén desarrollando las operaciones logísticas y su ubicación geográfica.

    p(data-aos="fade-right").mb-5 #[span.bold.hlgt--yellow La logística en el transporte de carga tiene como objetivo llevar al mejoramiento continuo de las condiciones de operación y servicio, reduciendo costos y mejorando la calidad en las operaciones de transporte;] para que esto sea posible, debe garantizarse lo siguiente:

    .bg_slider.px-5.pt-5.pb-4.br--01.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0            
            p Agrupar y/o consolidar diferentes tipos de carga, teniendo en cuenta su compatibilidad en el transporte y evitando la contaminación de las mismas.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t4/t4_03.png', alt='')

        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0            
            p Eliminar etapas innecesarias y sobrerrecorridos que no agregan valor; esto permite reducción de costos en la cadena logística y economías de escala.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t4/t4_04.png', alt='')

        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0            
            p Una vez la carga esté sobre las unidades de transporte, se debe evitar manipularla de manera innecesaria, cambiarle los empaques o desembalarla, esto con el fin de conservar la carga en las condiciones en la que fue cargada, manteniendo así los productos en las mejores condiciones.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t4/t4_05.png', alt='')

    p(data-aos="fade-right").mb-5 Lo anterior permite una #[span.bold.hlgt--yellow reducción de costos] que es el resultado de la adecuada #[span.bold.hlgt--yellow gestión logística] y de un conocimiento de las operaciones, basada en #[span.bold.hlgt--yellow análisis, gestión y control,] que se definen a continuación:

    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_06.png", alt="alt")
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Análisis")
            .col-lg-12
              p Este paso es fundamental, ya que se debe #[strong conocer la demanda] para saber qué elementos se tienen en la zona de influencia de las operaciones logísticas, cantidades, periodos, costos y necesidades, etc. Con esto, se puede determinar cuáles insumos se pueden requerir y en cuáles momentos que puedan favorecer las operaciones logísticas.

          .row(numero="2" titulo="Gestión")
            .col-lg-12
              p Se refiere a todo lo necesario que se debe tener una vez se #[strong realiza el análisis], para que los elementos y los procesos que se identifican como necesarios se den en el momento que se requieran, evitando pérdidas de tiempo, recursos y gestiones administrativas.

          .row(numero="3" titulo="Control")
            .col-lg-12
              p Hay una frase que dice: “lo que no se mide, no se controla”, y por lo tanto, es necesario #[strong generar indicadores] que permitan, de una manera cuantitativa y cualitativa, determinar si lo que se implementa requiere acciones de mejora urgentes o está funcionando adecuadamente.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Aquí, es importante aclarar que la #[span.bold.hlgt--yellow logística del transporte es una subdivisión de la logística], la cual es la encargada de transportar bienes y servicios de un origen a un destino a lo largo de una ruta óptima seleccionada. 

        p En esta especialidad de la logística, el fin no sería posible sin que se determine un #[span.bold.hlgt--yellow transporte y unas condiciones de operación adecuadas, pero existen diferentes tipos de transporte y de alternativas ajustados a unas necesidades cada vez más cambiantes y complejas.]

        p.mb-0 Para profundizar los aspectos relacionados con Logística y transporte, le invitamos a visualizar el siguiente video:

      .col-lg-4.col-10.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_07.png", alt="alt")

    figure(data-aos="zoom-in").mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/jB13jaw_HPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_08.png", alt="alt")
      .col-lg-6(data-aos="fade-right")
        p Los diferentes modos de transporte, como son aéreo, marítimo, carretero y ferroviario, tienen, por sus propias características, procesos y requisitos para que se puedan dar, debido básicamente a sus diferencias en la infraestructura y la capacidad de los equipos, lo cual deriva en los tamaños y carga que se puedan movilizar, por lo que cada uno está regularizado por los regímenes internacionales, nacionales y locales que aplican a cada modo específico.

        p.mb-0 Por esto, se ha clasificado el transporte en modos, que involucran la infraestructura que se requiere para lograr sus desplazamientos, así:

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-6.mb-4.mb-lg-0(data-aos="flip-right")
        .bg--hover_01.hg--100
          figure.mb-4
            img(src="@/assets/curso/temas/t4/t4_09.png", alt="alt").img85.m-auto
          h3.text-center Transporte aéreo
          p.text-center.mb-0 Este moviliza pasajeros y carga a través de aeropuertos y aeródromos; a esta categoría pertenecen los aviones, avionetas y helicópteros.

      .col-lg-3.col-md-6.mb-4.mb-lg-0(data-aos="flip-right")
        .bg--hover_01.hg--100
          figure.mb-4
            img(src="@/assets/curso/temas/t4/t4_10.png", alt="alt").img85.m-auto
          h3.text-center Transporte carretero
          p.text-center.mb-0 Este transporte moviliza pasajeros y carga por las carreteras, utilizando vehículos de motor; a esta categoría pertenecen: autos, buses, camiones.

      .col-lg-3.col-md-6.mb-4.mb-lg-0(data-aos="flip-right")
        .bg--hover_01.hg--100
          figure.mb-4
            img(src="@/assets/curso/temas/t4/t4_11.png", alt="alt").img85.m-auto
          h3.text-center Transporte ferroviario
          p.text-center.mb-0 Este transporte moviliza pasajeros y cargas utilizando vehículos con ruedas sobre vías férreas; a esta categoría pertenecen los trenes, tranvías, monorrieles.

      .col-lg-3.col-md-6.mb-4.mb-lg-0(data-aos="flip-right")
        .bg--hover_01.hg--100
          figure.mb-4
            img(src="@/assets/curso/temas/t4/t4_12.png", alt="alt").img85.m-auto
          h3.text-center Transporte fluvial y marítimo
          p.text-center.mb-0 Este transporte moviliza pasajeros y carga a través de ríos y mares; a esta categoría pertenecen barcos, barcazas, buques.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Por otro lado, se encuentra el transporte #[span.bold.hlgt--yellow multimodal, el cual se genera como una necesidad de conectar más de un modo de transporte e involucra una infraestructura específica para realizar las transferencias de pasajeros o carga a la unidad de transporte específica.] 

        p En este mundo globalizado, existe una fuerte competencia entre #[span.bold.hlgt--yellow cada uno de los modos de transporte, y estos, dependiendo de la región, tienen preferencias sobre el uso, de acuerdo con la geografía y la infraestructura.]

        p.mb-0 Para profundizar en los tipos de transporte, le invitamos a visualizar el video transporte multimodal.

      .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_13.png", alt="alt")    

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gqxEBYVW7eg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   


</template>

<script>
export default {
  name: 'Tema4',
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
