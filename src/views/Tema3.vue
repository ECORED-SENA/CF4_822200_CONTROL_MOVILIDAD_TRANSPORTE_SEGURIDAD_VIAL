<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 3
      h1 Planes de contingencia

    .row.justify-content-center.mb-4
      .col-lg-4(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_01.png", alt="alt")
      .col-lg-8(data-aos="fade-left")
        p Los planes, a nivel general, #[span.bold.hlgt--yellow son un documento base que permite dar pautas y unas directrices, generando estrategias, procesos, procedimientos, , etc., para dar respuesta apropiada a la atención de los incidentes que se puedan dar como desarrollo de las operaciones de transporte.]  

        .hr--line_01
        .cstm_Quote
          .row
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/quote_01.svg", alt="alt").img25
            .col
              p Hay que tener en cuenta que, en la normatividad colombiana, un #[strong “incidente”] es un suceso repentino no deseado, que ocurre por las mismas causas que se presentan los accidentes, solo que, por cuestiones del azar, no desencadena lesiones en las personas, daños a la propiedad, al proceso o al ambiente”. 
          .row.justify-content-end
            .col-auto
              p #[strong - (Sura, s. f.) ] 
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/quote_02.svg", alt="alt").img25   

    p(data-aos="fade-right").mb-5 En los incidentes, se va a requerir: 

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Figura 1.
      span Incidentes
      
    figure.mb-5(data-aos="zoom-in")
      img(src="@/assets/curso/temas/t3/t3_02.svg", alt="alt")

    p(data-aos="fade-right").mb-5 En Colombia, en operaciones de transporte de carga, las condiciones críticas son las relacionadas con:

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="flip-right")
        .bg--hover_01.hg--100
          figure.mb-4
            img(src="@/assets/curso/temas/t3/t3_03.svg", alt="alt").img85.m-auto
          h3.text-center El transporte

      .col-lg-4.mb-4.mb-lg-0(data-aos="flip-right")
        .bg--hover_01.hg--100
          figure.mb-4
            img(src="@/assets/curso/temas/t3/t3_04.svg", alt="alt").img85.m-auto
          h3.text-center La manipulación

      .col-lg-4.mb-4.mb-lg-0(data-aos="flip-right")
        .bg--hover_01.hg--100
          figure.mb-4
            img(src="@/assets/curso/temas/t3/t3_05.svg", alt="alt").img85.m-auto
          h3.text-center El almacenamiento<br>de sustancias químicas

    p(data-aos="fade-right") Por ende, los conocimientos sobre incidentes son tomados como base para estructurar los planes de contingencias.

    p(data-aos="fade-right") Este documento debe ser: 

    .bg_img_01.p-4.mb-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-5.col-10
          figure.mb-4
              img(src="@/assets/curso/temas/t3/t3_06.svg", alt="alt")
        .col-lg-7
          h3.text-center.mb-5 #[span.hlgt--yellow02 Plan de contingencia empresarial]
          h4.mb-2 Objetivo:
          p.mb-4 Reducir riesgos y tener un plan de acción definido.

          .row.justify-content-md-start.justify-content-center
            .col-xl-4.col-lg-5.col-md-5.col-8.mb-4.mb-xl-0
              .bg--yellow2.br--03
                .row.justify-content-center.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t3/t3_07.png", alt="alt").img50.m-auto
                  .col
                    p.mb-0 #[strong Predictivo]

            .col-xl-4.col-lg-5.col-md-5.col-8.mb-4.mb-xl-0
              .bg--yellow2.br--03
                .row.justify-content-center.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t3/t3_08.png", alt="alt").img50.m-auto
                  .col
                    p.mb-0 #[strong Preventivo]

            .col-xl-4.col-lg-5.col-md-5.col-8.mb-4.mb-xl-0
              .bg--yellow2.br--03
                .row.justify-content-center.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t3/t3_09.png", alt="alt").img50.m-auto
                  .col
                    p.mb-0 #[strong Reactivo]

    p(data-aos="fade-right").mb-5 Los planes de contingencia, en su estructura, tienen unas prioridades, las cuales se muestran a continuación:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="zoom-in")
      .bg--yellow2.p-4.br--01.hg--100
        figure.mb-4
          img(src="@/assets/curso/temas/t3/t3_10.svg", alt="alt").img145.m-auto
        h3.text-center Vida 
        p.text-center La vida humana.

      .bg--yellow2.p-4.br--01.hg--100
        figure.mb-4
          img(src="@/assets/curso/temas/t3/t3_11.svg", alt="alt").img145.m-auto
        h3.text-center Medio ambiente
        p.text-center Las fuentes hídricas (agua) que sean de abastecimiento para consumo humano y/o agropecuarias.

      .bg--yellow2.p-4.br--01.hg--100
        figure.mb-4
          img(src="@/assets/curso/temas/t3/t3_12.svg", alt="alt").img145.m-auto
        h3.text-center Población afectada
        p.text-center Protección de recursos que sean de valor para la población afectada.

      .bg--yellow2.p-4.br--01.hg--100
        figure.mb-4
          img(src="@/assets/curso/temas/t3/t3_13.svg", alt="alt").img145.m-auto
        h3.text-center Sustentabilidad
        p.text-center Recursos ecológicos.

      .bg--yellow2.p-4.br--01.hg--100
        figure.mb-4
          img(src="@/assets/curso/temas/t3/t3_14.svg", alt="alt").img145.m-auto
        h3.text-center Protección
        p.text-center Protección del personal y los equipos que atienden la emergencia si las condiciones son adversas a lo planeado.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Aquí, es muy importante que el #[span.bold.hlgt--yellow personal que atiende estas contingencias se entrene y capacite de manera constante], para que sean equipos eficientes; esto se hace a través de #[span.bold.hlgt--yellow simulacros periódicos] que refuercen las actividades de cada uno de los intervinientes.

        .bg--warning(data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/warning_01.svg", alt="alt").img85.m-auto
            .col-lg
              h5 ¡Importante!
              p.mb-0 Es muy importante que se tenga muy definido y evaluado el #[strong riesgo], ya que es el insumo para estructurar el plan de contingencia, y esto redundará en la respuesta a la emergencia.
      .col-lg-5(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_15.png", alt="alt")

    p(data-aos="fade-right").mb-5 Por lo anterior, se hace necesario revisar las exigencias precisas y demandantes del Decreto 1609, el cual se debe acoplar con el PNC (Plan Nacional de Contingencias), de acuerdo con el Artículo 8 del Decreto 321 de 1999, que dice así: 

    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
            .bg--PaleYellow.p-4
              .row
                .col-12.mb-2
                  figure
                    img(src="@/assets/curso/temas/recursos/quote_01.svg", alt="alt").img25
                .col-12
                  p Los lineamientos, principios, facultades y organizaciones establecidos en el PNC deberán ser incorporados en los planes de contingencias de todas las personas naturales y jurídicas, públicas o privadas, que exploren, investiguen, exploten, produzcan, almacenen, transporten, comercialicen o efectúen cualquier manejo de hidrocarburos, derivados o sustancias nocivas, o que tengan bajo su responsabilidad el control y prevención de los derrames en aguas marinas, fluviales o lacustres.                
              .row.justify-content-end                
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/recursos/quote_02.svg", alt="alt").img25 
          .col-lg-7(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/t3/t3_16.png", alt="alt")

        
        .bg--yellow.p-4.br--01.my-5(data-aos="zoom-in")   
          .row.justify-content-center.align-items-center
            .col-auto.mb-4.mb-lg-0
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/recursos/call_01.svg", alt="alt").img65  
                  
            .col-lg            
              .row.align-items-center.mb-3
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-0 Como parte de su aprendizaje autónomo le invitamos a descargar y revisar los siguientes documentos:
                .col-lg-6
                  .row.align-items-center.mb-3
                    .col
                      ul.fa-ul.mb-0
                        li
                          i.fas.fa-circle.bullet--orange
                          | Decreto 1609
                    .col-auto
                      a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

                  .row.align-items-center
                    .col
                      ul.fa-ul.mb-0
                        li
                          i.fas.fa-circle.bullet--orange
                          | Decreto 321 de 1999                  
                    .col-auto
                      a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download
               

    .row.justify-content-center.mb-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_17.svg", alt="alt")
      .col-lg-6(data-aos="fade-left")
        p Dentro de las premisas básicas del PNC, está la #[span.bold.hlgt--yellow acción participativa], donde se establecen responsabilidades y compromisos de orden sectorial, local, regional y nacional, para autoridades e industria, que debe manejarse con criterios de participación y concertación. 

        p En adición, se debe contar con #[span.bold.hlgt--yellow planes de contingencia locales o de ayuda] para enfrentar el máximo nivel de riesgo probable. Los comités locales y regionales para la prevención y atención de desastres apoyarán complementariamente las actividades de respuesta previstas en ellos.

        p Dentro de la atención de las contingencias, es importante el desarrollo de #[span.bold.hlgt--yellow técnicas] que permitan ser #[span.bold.hlgt--yellow preventivos o reactivos] de acuerdo con el caso y cuando se produce el accidente, las cuales se clasifican, según la ISO 45OO1, de la siguiente forma:

    .bg_img_02.p-4.br--01(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0
          .bg--Pale.p-3.br--01.shadow
            p #[span.bold.txt--orange 1.Técnicas activas:] se basan en #[strong planeación y prevención antes de los accidentes], identificando peligros y evaluando los riesgos, apoyados en inspecciones en las que se analizan los recursos y procesos para evaluar todos los riesgos.
            figure.py-3
              img(src="@/assets/curso/temas/recursos/line_01.svg", alt="alt")
            p #[span.bold.txt--orange 2.Técnicas reactivas:] se producen #[strong una vez ocurre el accidente;] determinan causas para #[strong implementar controles;] en esto es muy importante #[strong la investigación de accidentes y la estadística.]
            figure.py-3
              img(src="@/assets/curso/temas/recursos/line_01.svg", alt="alt")
            p #[span.bold.txt--orange 3.Técnicas complementarias:] #[strong basadas en normatividad y señalización], eliminando aspectos que afecten la seguridad y la salud.
        .col-lg-5
          figure
            img(src="@/assets/curso/temas/t3/t3_18.svg", alt="alt")



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
