<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 5
      h1 Técnicas para inspección de medios de transporte 

    p(data-aos="fade-right") #[span.bold.hlgt--yellow Las unidades de transporte se inspeccionan por seguridad de todos los actores viales, para preservar la vida, los bienes y los recursos, lo cual permite detectar un problema a tiempo y puede prevenir muchísimos inconvenientes.] Por lo anterior, se deben tener en cuenta los siguientes tips:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 4.
          span Factores claves para inspección de vehículos

        .row.justify-content-center(data-aos="zoom-in")
          .col-lg-5
            .bg--Pale.br--01.shadow.hg--100
              figure
                img(src="@/assets/curso/temas/t5/t5_01.png", alt="alt")
              .p-4
                p.text-center.mb-0 Usar todos sus sentidos,  como visión, olfato, tacto, oído, para identificar anomalías.
          .col-lg-5
            .bg--Pale.br--01.shadow.hg--100
              figure
                img(src="@/assets/curso/temas/t5/t5_02.png", alt="alt")
              .p-4
                p.text-center.mb-0 Revisar los medidores, para detectar algún problema.

    p(data-aos="fade-right").mb-5 En adición, tenga en cuenta revisar periódicamente los siguientes elementos:

    .bg_slider.px-5.pt-5.pb-4.br--01(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h5 Llantas
            p Con el uso, las llantas van perdiendo su agarre, por lo que, si no se les hace revisión periódica y cambio si se requiere, pueden ocasionar un accidente, en especial, cuando se va transitando por zonas húmedas.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t5/t5_03.png', alt='')

        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h5 Luces
            p Las luces en buen estado son importantes porque le indican al peatón la ubicación del automóvil y su dirección, por lo que, si estas se encuentran dañadas, pueden ser causa de muertes en carretera.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t5/t5_04.png', alt='')

        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h5 Frenos
            p El mantenimiento de los frenos es indispensable, porque de ellos depende que el conductor pueda o no detener el vehículo en un momento dado, por lo que, si no se les hace el debido proceso, pueden ocasionar daños irreparables para la vida o los bienes.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t5/t5_05.png', alt='')

        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h5 Conexiones para remolques
            p La revisión de las conexiones para remolques es vital, ya que estas aseguran una carga, por lo que, si no está en excelentes condiciones, se pueden causar daños a terceros y hasta la muerte.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t5/t5_06.png', alt='')

        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h5 Dispositivos aseguramiento de carga
            p La revisión de los dispositivos para el aseguramiento de carga, en especial cuando se trata de cargas largas o pesadas, es de vital importancia, ya que de ellos depende que esta permanezca en su lugar todo el tiempo, protegiendo la vida y los bienes ajenos.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t5/t5_07.png', alt='')

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bg--yellow.p-4.br--01.my-5   
          .row.justify-content-center.align-items-center
            .col-auto.mb-4.mb-lg-0
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/recursos/call_01.svg", alt="alt").img65  
                  
            .col-lg            
              .row.align-items-center.mb-3
                .col-xl-6.mb-4.mb-xl-0
                  h4.mb-0 Como parte de su aprendizaje autónomo le invitamos a revisar los siguientes videos:

                .col-xl-6
                  .row.align-items-center.mb-3
                    .col
                      ul.fa-ul.mb-0
                        li
                          i.fas.fa-circle.bullet--orange
                          | La mecánica preventiva
                    .col-auto
                      a.boton.color-botones.texto-blanco(href="https://www.youtube.com/watch?v=KndkCCX-VEE" target="_blank")
                        span Ver video
                        i.fas.fa-link

                  .row.align-items-center.mb-3
                    .col
                      ul.fa-ul.mb-0
                        li
                          i.fas.fa-circle.bullet--orange
                          | Revisión técnico mecánica                  
                    .col-auto
                      a.boton.color-botones.texto-blanco(href="https://www.youtube.com/watch?v=1AnDxvpxIiM" target="_blank")
                        span Ver video
                        i.fas.fa-link

                  .row.align-items-center
                    .col
                      ul.fa-ul.mb-0
                        li
                          i.fas.fa-circle.bullet--orange
                          | Mitigando la siniestralidad                 
                    .col-auto
                      a.boton.color-botones.texto-blanco(href="https://www.youtube.com/watch?v=XOrepCH9czw" target="_blank")
                        span Ver video
                        i.fas.fa-link

    .row.justify-content-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Con estas observaciones, se pueden detectar algunos problemas, como baja presión del aire, desgaste de las llantas u otro tipo de problemas.

        p Las técnicas de inspección a los equipos de transporte deben estar muy relacionadas con la integridad operativa y con la normatividad que esté vigente en el momento, es por esto que el punto de partida es el marco regulatorio, cuyas bases tienen sus orígenes en la Ley 769 de 2002.

        p Esta adopta el Código Nacional de Tránsito Terrestre, en el cual se reglamenta la revisión para todos los vehículos automotores y su alcance técnico, al definir los sistemas del vehículo al que se va a realizar la inspección, la cual deben hacer cumplir los Centros de Diagnóstico Automotriz (CDA), entidades que certifican el cumplimiento de la normatividad de los vehículos.

      .col-lg-4.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t5/t5_08.png", alt="alt")

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-g-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t5/t5_09.png", alt="alt")
      .col-lg-8(data-aos="fade-left")
        p Basados en esta normatividad, se le orienta al aprendiz para que conozca qué debe tener en cuenta para realizar sus listas de chequeo y sus inspecciones. Sin embargo, en la actualidad, también se cuenta con la Resolución 3768 de 2013, que es la que regula la Inspección Técnica Vehicular.
        p En el Código Nacional de Tránsito, el Artículo 28 dice textualmente que para que un vehículo pueda transitar por el territorio nacional:

        .hr--line_01.mt-4.mt-lg-0
        .cstm_Quote
          .row
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/quote_01.svg", alt="alt").img25
            .col
              p.mb-0 Debe garantizar como mínimo un perfecto funcionamiento de frenos, del sistema de dirección, del sistema de suspensión, del sistema de señales visuales y audibles permitidas, y del sistema de escape de gases; y demostrar un estado adecuado de llantas, del conjunto de vidrios de seguridad y de los espejos y cumplir con las normas de emisiones contaminantes que establezcan las autoridades ambientales. 
          .row.justify-content-end            
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/quote_02.svg", alt="alt").img25   

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bg--yellow.p-4.br--01
          .row.justify-content-center.align-items-center
            .col-auto.mb-4.mb-lg-0
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/recursos/call_01.svg", alt="alt").img65  
                  
            .col-lg            
              .row.align-items-center.mb-3
                .col-xl-6.mb-4.mb-xl-0
                  h4.mb-0 En los siguientes documentos, podrá afianzar los conocimientos adquiridos sobre las normatividades importantes a nivel nacional, por lo que le invitamos a descargarlos y revisarlos de manera autónoma.

                .col-xl-6
                  .row.align-items-center.mb-3
                    .col
                      ul.fa-ul.mb-0
                        li
                          i.fas.fa-circle.bullet--orange
                          | Ley 769 de 2002
                    .col-auto
                      a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/ley-769-de-2002-codigo-nacional-de-transito_3704_0.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download  

                  .row.align-items-center.mb-3
                    .col
                      ul.fa-ul.mb-0
                        li
                          i.fas.fa-circle.bullet--orange
                          | Resolución 3768 de 2013                 
                    .col-auto
                      a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/Resolucion_3768_2013-Sep-26.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download  

                  .row.align-items-center
                    .col
                      ul.fa-ul.mb-0
                        li
                          i.fas.fa-circle.bullet--orange
                          | Inspección técnica vehicular                
                    .col-auto
                      a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/LA-ITV-EN-COLOMBIA.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download  

    p(data-aos="fade-right").mb-5 Siguiendo con el tema, el alcance técnico contemplado en la norma verifica lo que se muestra a continuación (Código Nacional de Tránsito):

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        .bg--yellow2.px-5.pt-5.pb-4.br--01
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-12
                .row.align-items-center.mb-2
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t5/t5_11.svg", alt="alt").img45
                  .col
                    p.mb-0 Estado de la carrocería.

                .row.align-items-center.mb-2
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t5/t5_12.svg", alt="alt").img45
                  .col
                    p.mb-0 Niveles de emisión de gases y elementos contaminantes de acuerdo con la legislación vigente sobre la materia.

                .row.align-items-center.mb-2
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t5/t5_13.svg", alt="alt").img45
                  .col
                    p.mb-0 Buen funcionamiento del sistema mecánico.

                .row.align-items-center.mb-2
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t5/t5_14.svg", alt="alt").img45
                  .col
                    p.mb-0 Funcionamiento adecuado del sistema eléctrico y del conjunto óptico.

                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t5/t5_15.svg", alt="alt").img45
                  .col
                    p.mb-0 Eficiencia del sistema de combustión interna.

            .row.justify-content-center
              .col-lg-12
                .row.align-items-center.mb-2
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t5/t5_16.svg", alt="alt").img45
                  .col
                    p.mb-0 Elementos de seguridad.

                .row.align-items-center.mb-2
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t5/t5_17.svg", alt="alt").img45
                  .col
                    p.mb-0 Buen estado del sistema de frenos, constatando, especialmente, en el caso en que este opere con aire, que no emita señales acústicas por encima de los niveles permitidos.

                .row.align-items-center.mb-2
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t5/t5_18.svg", alt="alt").img45
                  .col
                    p.mb-0 Adecuado funcionamiento de las llantas del vehículo.

                .row.align-items-center.mb-2
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t5/t5_19.svg", alt="alt").img45
                  .col
                    p.mb-0 Funcionamiento de los sistemas y elementos de emergencia (airbags).

                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t5/t5_20.svg", alt="alt").img45
                  .col
                    p.mb-0 Buen funcionamiento de los dispositivos utilizados para el cobro en la prestación del servicio público. 
                
      .col-lg-4.d-none.d-lg-flex(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/t5/t5_10.png", alt="alt")

    p(data-aos="fade-right").mb-5 Estas revisiones están reglamentadas con base en las siguientes Normas #[span.bold.txt--orange Técnicas de Colombia: NTC 5375 y NTC 5385], dando alcance a las inspecciones #[span.bold.txt--orange sensoriales y mecanizadas]. La Norma 5375 define requisitos que deben cumplir los vehículos en las inspecciones y también indica cuándo este no cumple y genera un riesgo.

    ImagenInfografica.color-primario.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t5/t5_21.png', alt='')          

      .bg--paleBlue2.br--01.shadow.p-3(x="30%" y="25%" numero="+")
        .h5.mb-2 Para la revisión exterior
        p Definida en la NTC 5375, los elementos a inspeccionar son:        
        ul.fa-ul
          li
            i.fa-li.fas.fa-circle.bullet--orange
            | Chasis. 
          li
            i.fa-li.fas.fa-circle.bullet--orange
            | carrocería. 
          li
            i.fa-li.fas.fa-circle.bullet--orange
            | Limpiaparabrisas.
          li
            i.fa-li.fas.fa-circle.bullet--orange
            | Espejos retrovisores.          
          li
            i.fa-li.fas.fa-circle.bullet--orange
            | Escalones de ascenso.
          li
            i.fa-li.fas.fa-circle.bullet--orange
            | Soportes de llanta de repuesto.
          li
            i.fa-li.fas.fa-circle.bullet--orange
            | Vidrios.
          li
            i.fa-li.fas.fa-circle.bullet--orange
            | Dispositivos de retención de carga.
             
                         
      .bg--paleBlue2.br--01.shadow.p-3(x="36%" y="46%" numero="+")
        .h5.mb-2 Para la revisión interior
        p Basada en la seguridad pasiva del vehículo, la norma establece lo siguiente en la revisión:
        ul.fa-ul
          li
            i.fa-li.fas.fa-circle.bullet--orange
            | Habitáculo del conductor y pasajeros.
          li
            i.fa-li.fas.fa-circle.bullet--orange
            | Cinturones de seguridad y anclajes.
          li
            i.fa-li.fas.fa-circle.bullet--orange
            | Dispositivos de control y seguridad.

      .bg--paleBlue2.br--01.shadow.p-3(x="46%" y="54%" numero="+")
        .h5.mb-2 Alumbrado y señalización
        p Es muy importante su adecuada revisión, ya que los equipos deben  permitir ver y ser vistos en sus desplazamientos, importante en la seguridad activa.


      .bg--paleBlue2.br--01.shadow.p-3(x="56%" y="46%" numero="+")
        .h5.mb-2 Salidas de emergencia
        p Están dadas, sobre todo, en el transporte de pasajeros, para una adecuada evacuación en caso de emergencia; están reglamentadas en la NTC 5375.

      .bg--paleBlue2.br--01.shadow.p-3(x="62%" y="25%" numero="+")
        .h5.mb-2 Sistema de frenos
        p Debe evaluarse en forma detallada.

    .row.justify-content-center.mb-5
      .col-lg-12.mb-4(data-aos="zoom-in")
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
                  h4.mb-2 NTC 5375
                  p.mb-0 Para aprender más sobre: sistema de suspensión, sistema de dirección, rines y llantas, motor, sistema de combustible, sistema de transmisión, etc., puede descargar el documento y revisarlo para afianzar sus conocimientos sobre NTC 5375.
                .col-auto
                  .row.align-items-center.mb-3                
                    .col-auto
                      a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/ntc-5375.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download   
      .col-lg-12(data-aos="zoom-in")
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
                  h4.mb-2 NTC 5385
                  p.mb-0 La NTC 5385 es de vital importancia para su conocimiento, por lo que le invitamos a descargar y revisar el documento con el fin de profundizar en el tema.
                .col-auto
                  .row.align-items-center.mb-3                
                    .col-auto
                      a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/NormaTecnicaColombiana5385.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download   

    p(data-aos="fade-right").mb-5 Por otro lado, también se habla de la inspección de unidades de transporte, por lo que se presenta un panorama general de cómo realizarla, para lo cual se hace necesario apoyarse en los sentidos, (inspecciones sensoriales), entre los cuales se tienen:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/QzWr2AecXZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        

    .bg--warning(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-auto
          figure
            img(src="@/assets/curso/temas/recursos/warning_01.svg", alt="alt").img85.m-auto
        .col-lg
          h5 ¡Importante!
          p.mb-0 Esta lista de inspección es solo un indicador general, pero se debe realizar ajustada al tipo de modo de transporte, a la carga u operación específica y a la normatividad que esté en vigencia.

    

</template>

<script>
export default {
  name: 'Tema5',
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
