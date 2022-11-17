<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 7
      h1 Fundamentos de las listas de chequeo y técnicas para inspección

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .bg--yellow3.p-4.mb-4
          p.mb-0 #[strong Las listas de chequeo son básicamente formatos de control en los cuales se registran actividades que pueden ser rutinarias, que permiten el control, cumplimiento de los requisitos y la obtención de resultados.]

        p El proceso de elaboración de las listas de chequeo permite considerar casi todos los factores que pueden afectar la seguridad en las operaciones de transporte y no deja que se escapen aspectos importantes. 

        .bg--warning
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/warning_01.svg", alt="alt").img85.m-auto
            .col-lg
              h5 ¡Importante!
              p.mb-0 En estas, se plasman aspectos que se deben comprobar en cada proceso para realizar la respectiva inspección; para esto, se debe conocer el proceso y elaborar las listas según criterios de experiencia para complementar o mejorar su esquema, con el fin de detectar desviaciones que puedan afectar la operación de transporte.
        
      .col-lg-5.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t7/t7_01.png", alt="alt")

    p(data-aos="fade-right").mb-5 Estas se utilizan en transporte y seguridad vial en las diferentes etapas del proceso, como:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 5.
          span Listas de chequeo

        .row.justify-content-center.align-items-center
          .col-xl-auto.col-8
            .bg--orange.p-4.br--02
              h5.mb-0.text-center PLANIFICACIÓN
          .col-xl-auto.col-12.py-2
            figure
              img(src="@/assets/curso/temas/t7/arrow_01.svg", alt="alt").img35.m-auto.arrow
          .col-xl-auto.col-8
            .bg--yellow.p-4.br--02
              h5.mb-0.text-center DISEÑO
          .col-xl-auto.col-12.py-2
            figure
              img(src="@/assets/curso/temas/t7/arrow_02.svg", alt="alt").img35.m-auto.arrow
          .col-xl-auto.col-8
            .bg--yellow2.p-4.br--02
              h5.mb-0.text-center CONSTRUCCIÓN
          .col-xl-auto.col-12.py-2
            figure
              img(src="@/assets/curso/temas/t7/arrow_03.svg", alt="alt").img35.m-auto.arrow
          .col-xl-auto.col-8
            .bg--darkGray.p-4.br--02
              h5.mb-0.text-center.text-white OPERACIÓN

    .bg--warning.mb-4(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-auto
          figure
            img(src="@/assets/curso/temas/recursos/warning_01.svg", alt="alt").img85.m-auto
        .col-lg
          h5 ¡Importante!
          p.mb-0 Estas deben ser elaboradas a la medida de cada proyecto; para esto, se recomienda dividir por etapas o por procesos, y luego se debe dar respuesta a cada pregunta de las listas de chequeo, indicando lugar y demás información de los formatos, dejando las notas y observaciones de cada proceso evaluado.

    p(data-aos="fade-right").mb-4 Para elaborar una lista de chequeo, se deben tener en cuenta los siguientes datos: 

    .row.justify-content-center.mb-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t7/t7_04.png", alt="alt")
      .col-lg-7(data-aos="fade-right")
        ul.fa-ul
          li
            i.fa-li.fa.fa-check.txt--orange
            | Determinar el proceso o área que se quiere revisar; se debe tener claro cada paso de lo que ocurre en ese proceso.
          li
            i.fa-li.fa.fa-check.txt--orange
            | Se diseña el formato de tal manera que quede sencillo y fácil de diligenciar, además de registrar notas y otras novedades.
          li
            i.fa-li.fa.fa-check.txt--orange
            | Se debe registrar la información en periodos de tiempo que aporten información valiosa al proceso.
          li
            i.fa-li.fa.fa-check.txt--orange
            | Realizar el registro y el procesamiento adecuado de la información.

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10
        .bg--yellow.p-4.br--01  
          .row.justify-content-center.align-items-center
            .col-auto.mb-4.mb-lg-0
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/recursos/call_01.svg", alt="alt").img65                
            .col-lg            
              .row.justify-content-end.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h4.mb-2 FORMATO SST - FORMATO INSPECCIÓN DE VEHÍCULO 2.0
                  p.mb-0 Para apoyar su aprendizaje, el Ministerio de Vivienda tiene un formulario para la inspección vehicular que le servirá de ejemplo, el cual le invitamos a descargar y revisar.
                .col-auto
                  .row.align-items-center.mb-3                
                    .col-auto
                      a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/GTH-F-75_FORMATO_SST.xls')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

    p(data-aos="fade-right").mb-5 Los métodos de inspección, según la organización SIDAR (s. f.), se pueden orientar de 5 formas básicas, las cuales se pueden identificar a continuación:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-0QCAFzDnWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       




</template>

<script>
export default {
  name: 'Tema7',
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
