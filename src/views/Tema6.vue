<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 6
      h1 Transporte de carga extradimensionada y extrapesada Resolución 4959 de 2006

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t6/t6_01.png", alt="alt")
      .col-lg-7(data-aos="fade-right")
        p Esta resolución ha sido muy importante, ya que no se había legislado adecuadamente acerca de este transporte especializado, pues la infraestructura actual de puertos, aeropuertos y carreteras está rezagada respecto al tamaño y peso de algunas cargas que se mueven hoy en el mundo.
        .bg--PaleYellow2.p-4.br--01
          p.mb-0 Por lo anterior, surge la #[strong Resolución 4959 del 08 de noviembre de 2006, por la cual se fijan los requisitos y procedimientos para conceder los permisos al transporte de cargas indivisibles, extrapesadas y extradimensionadas y las especificaciones de los vehículos destinados a esta clase de transporte.]

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
              .row.justify-content-end.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h4.mb-2 Resolución 4959
                  p.mb-0 Para conocer más sobre la Resolución 4959 de 2006, puede descargar el documento, con el fin de ampliar sus conocimientos sobre el transporte de carga extradimensionada.
                .col-auto
                  .row.align-items-center.mb-3                
                    .col-auto
                      a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/Resolucion_4959_8_Noviembre_2006.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download    

    p(data-aos="fade-right").mb-5 A continuación, encontrará la información sobre las diferentes categorías que se deben tener en cuenta al determinar el tamaño de una carga, por lo que le invitamos a revisar y reflexionar sobre su contenido:   

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Tabla 1.
      span Rango de dimensiones carga extradimensionada.

    .bg--black.p-4(data-aos="zoom-in")
      h4.text-center.txt--yellow.mb-0 CARGAS EXTRADIMENSIONADAS
    .cstmTable(data-aos="zoom-in")
      table
        thead         
          tr.text-center.text-small
            td(width="18%;") EXTRADIMENSIONADA EN
            td(width="10%;") DIMENSIONES
            td REQUIERE PERMISO INVIAS
            td AVISOS
            td AVISO POLICIA CARRETERAS
            td(width="12%;") VEHICULO ACOMPA&Ntilde;ANTE
            td P&Oacute;LIZA
            td VELOCIDAD EN &Aacute;REA RURAL KPH
            td VELOCIDAD EN &Aacute;REA URBANA KPH
            td(width="12%;") OBSERVACIONES
        tbody.text-center.text-small
          tr
            td(rowspan='4') LONGITUD
            td MENOR A 1 METRO
            td
            td X
            td
            td
            td
            td
            td
            td
          tr
            td ENTRE 1 Y 2 MTS
            td X
            td X
            td              
            td
            td
            td
            td
            td
          tr
            td ENTRE 2 Y 3 MTS
            td
            td
            td
            td
            td
            td
            td
            td
          tr
            td MAYOR A 3 MTS
            td X
            td X
            td
            td
            td X
            td
            td
            td
          tr
            td(rowspan='4') ANCHO
            td ENTRE 2,6 Y 3 MTS
            td X
            td X
            td
            td X
            td
            td 40
            td 20
            td Requiere aviso en la parte delantera y trasera del&nbsp;&nbsp;&nbsp;veh&iacute;culo.<br><br> En adici&oacute;n uno o dos veh&iacute;culos acompa&ntilde;amiento en &aacute;rea urbana, uno&nbsp;&nbsp;&nbsp;para un sentido de circulaci&oacute;n y 2 cuando hay 2 sentidos.
          tr
            td ENTRE 3 Y 3,3 MTS
            td X
            td X
            td
            td X
            td
            td 40
            td 20
            td
          tr
            td ENTRE 3,3 Y 3,6
            td X
            td X
            td
            td X
            td
            td 40
            td 20
            td
          tr
            td MAYOR A 3,6
            td X
            td X
            td
            td X
            td X
            td 40
            td 20
            td
          tr
            td ALTURA
            td MAYOR A 4,4
            td X
            td X
            td X
            td X
            td X
            td 40
            td 20
            td




</template>

<script>
export default {
  name: 'Tema6',
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
