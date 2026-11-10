<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p En el componente anterior se caracterizó la unidad productiva ovino-caprina, se realizó el diagnóstico inicial y se organizó la implementación de las Buenas Prácticas Ganaderas (BPG) mediante un plan con actividades, responsables, protocolos, registros y capacitación. Una vez implementadas las prácticas, corresponde comprobar si funcionan en la rutina del predio, si se mantienen en el tiempo y si producen los resultados esperados en sanidad, inocuidad y bienestar animal.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right").mb-3
            p.mb-0 Este componente desarrolla esa segunda etapa. Aborda la evaluación del cumplimiento de las BPG, el seguimiento de los procesos mediante indicadores, registros e informes, la gestión de las contingencias que pueden interrumpir la operación, la formulación del plan de mejora, el tratamiento de las no conformidades y el análisis de causas que permite comprobar la eficacia de las acciones antes de cerrarlas.
          p.mb-0 Para conectar estos temas se utiliza como referencia el caso de una unidad productiva con 120 cabras lecheras y 60 ovejas de carne que implementó las BPG hace seis meses. A partir de su evaluación, el aprendiz podrá interpretar evidencias, valorar resultados frente a la situación inicial, investigar causas y formular acciones de mejora con responsables, recursos, plazos e indicadores, de acuerdo con los procedimientos de la unidad productiva y la normativa vigente.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img1.png', alt='' style="max-width: 470px").m-auto
      
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
