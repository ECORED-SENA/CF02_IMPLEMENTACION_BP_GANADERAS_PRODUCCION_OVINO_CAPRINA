<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Mejoramiento continuo y plan de mejora
      p.mb-5 Los resultados de la evaluación y el seguimiento solo generan valor cuando se transforman en cambios que se mantienen en la rutina. El #[b mejoramiento continuo] organiza esa transformación mediante el plan de mejora, que relaciona cada problema con su causa, la acción, el responsable y el resultado esperado.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Concepto y principios del mejoramiento continuo
      p.mb-5 El #[b mejoramiento continuo] es un proceso permanente de revisión y ajuste apoyado en evidencias. Parte de los resultados obtenidos, establece un cambio, comprueba su efecto y lo incorpora a la rutina si funciona, siguiendo el ciclo de planificación, ejecución, verificación y ajuste que orienta la gestión de los procesos. Puede originarse en una no conformidad, en una tendencia desfavorable o en una oportunidad de optimización. Sus principios se presentan a continuación:
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Prevención
                  p.mb-0 Actúa sobre las condiciones que pueden generar problemas antes de que ocurran, a partir de las tendencias y los riesgos identificados en la evaluación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Participación
                  p.mb-0 Incorpora la experiencia de quienes realizan el trabajo, que suelen conocer las dificultades reales de cada tarea.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Decisiones basadas en evidencias
                  p.mb-0 Fundamenta cada cambio en datos, registros y observaciones, y no en impresiones o urgencias momentáneas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Seguimiento
                  p.mb-0 Comprueba que lo acordado se ejecute en los plazos y con los recursos previstos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aprendizaje
                  p.mb-0 Convierte los resultados, positivos o negativos, en ajustes documentados de los procedimientos y los planes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img5.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Importancia en la producción ovino-caprina
      p.mb-5 En la producción ovino-caprina, el mejoramiento continuo se traduce en resultados concretos que pueden medirse. Estos resultados se presentan a continuación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img6.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Inocuidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Disminución de los tratamientos sin control del retiro y de la leche de animales tratados que llega al tanque. Indicador: porcentaje de tratamientos con tiempo de retiro registrado y controlado.
            .row(titulo="Sanidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reducción de los casos nuevos de enfermedad, los abortos y la mortalidad, especialmente en las crías. Indicador: casos nuevos por cada cien animales en el periodo.
            .row(titulo="Bienestar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Menos animales con cojera, lesiones o condición corporal inadecuada, y mejor acceso al agua y al alimento. Indicador: prevalencia de cojera en cada lote.
            .row(titulo="Continuidad productiva").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Menos interrupciones del suministro de agua y alimento, y una respuesta más rápida ante contingencias. Indicador: días con interrupción del suministro en el periodo.
      p.mb-0 Estos resultados están relacionados entre sí. Corregir un área encharcada, por ejemplo, reduce la cojera, facilita la limpieza y mejora el descanso; y organizar el control del retiro protege a los consumidores y la confianza de los compradores de leche. Por ello, el mejoramiento busca resultados compatibles, de modo que un aumento de la producción no dependa de condiciones que comprometan a los animales o la inocuidad.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Estructura y componentes del plan de mejora
      p.mb-5 El #[b plan de mejora] se diferencia del plan de implementación elaborado al inicio. Sus diferencias se presentan a continuación:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img7.png', alt="" ).m-auto
                  h4.text-center Plan de implementación
                  .caja-5_p
                    p.mb-0.text-center Parte del diagnóstico inicial y organiza la puesta en marcha de los requisitos de BPG que todavía no existían en el predio, como áreas, protocolos, registros y capacitación.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img8.png', alt="" ).m-auto
                  h4.text-center Plan de mejora
                  .caja-5_p
                    p.mb-0.text-center Parte de los hallazgos de la evaluación y del seguimiento, interviene las causas de las fallas en las prácticas ya implementadas y exige comprobar la eficacia de cada acción antes de cerrarla.
          p.mb-5 Cada acción del plan de mejora relaciona el hallazgo, su causa, el objetivo, la acción, el responsable, los recursos, el plazo, el indicador y la evidencia de eficacia. El objetivo debe describir un cambio verificable y no una intención general como “mejorar la limpieza”. La siguiente tabla presenta un ejemplo para el hallazgo de los bebederos de la unidad del caso:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 11.
                span Ejemplo de acción del plan de mejora
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Componente
                      th.texto-left Contenido
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Hallazgo
                      td.texto-left La limpieza de bebederos se registra como realizada, pero la inspección muestra que solo se agrega agua sin vaciar ni lavar
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Causa confirmada
                      td.texto-left La tarea coincide con el ordeño de la mañana, el encargado no dispone de tiempo y el cepillo no está en el área
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Objetivo
                      td.texto-left Que todos los bebederos inspeccionados sin aviso se encuentren limpios durante ocho semanas consecutivas
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Acción
                      td.texto-left Trasladar la limpieza a la tarde, ubicar cepillo y desinfectante en cada corral y registrar la limpieza al terminarla
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Responsable
                      td.texto-left Encargado de corrales; el administrador supervisa
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recursos
                      td.texto-left Dos cepillos, dos canecas con tapa para el desinfectante y una hora diaria del encargado
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Plazo
                      td.texto-left Inicio el 1 de octubre; verificación de eficacia el 30 de noviembre
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Indicador
                      td.texto-left Bebederos limpios ÷ bebederos inspeccionados sin aviso × 100
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evidencia de eficacia
                      td.texto-left Ocho inspecciones semanales sin aviso con fotografías fechadas y registros diligenciados el mismo día
          p.mb-0 Además de las acciones de fondo, el plan incluye las correcciones inmediatas cuando el hallazgo representa un riesgo, y diferencia la ejecución del resultado. Haber comprado los cepillos demuestra avance, pero solo las inspecciones sin aviso permiten comprobar que el problema se resolvió.
          Separador
          #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.4 Priorización de acciones de mejora
          p.mb-5 Cuando la evaluación produce varios hallazgos, es necesario decidir el orden de atención. Para ello se consideran cuatro criterios, que se presentan a continuación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img9.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Gravedad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Magnitud del daño posible para la inocuidad, la salud de los animales o su bienestar.
            .row(titulo="Urgencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Rapidez con que el daño puede producirse o agravarse si no se actúa.
            .row(titulo="Impacto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Número de animales, lotes o procesos afectados y posibilidad de propagación.
            .row(titulo="Recursos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Presupuesto, tiempo, personal y apoyo técnico necesarios. Se analizan después de los criterios anteriores y nunca justifican dejar sin control un riesgo grave.
      p.mb-5 En la unidad del caso, la evaluación produjo cinco hallazgos, que se ordenaron como se presenta en la siguiente tabla:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 12.
                span Ejemplo de priorización de hallazgos
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Orden
                      th.ajuste-border-tabla.texto-left Hallazgo
                      th.texto-left Justificación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 1
                      td.ajuste-border-tabla.texto-left Dos cabras tratadas sin identificación de retiro durante el ordeño
                      td.texto-left Gravedad alta para la inocuidad y urgencia inmediata, porque la leche puede llegar al consumidor en el siguiente ordeño. Su corrección es rápida y de bajo costo
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 2
                      td.ajuste-border-tabla.texto-left Lote de concentrado con moho en la bodega
                      td.texto-left Riesgo de toxicidad para todo el rebaño que lo consume. La corrección (retirar el lote) es inmediata; la reparación del techo se programa como acción correctiva
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 3
                      td.ajuste-border-tabla.texto-left Limpieza deficiente de bebederos
                      td.texto-left Afecta a todo el rebaño y a un recurso esencial; aunque el daño no es inmediato, su impacto es amplio y la solución requiere pocos recursos
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 4
                      td.ajuste-border-tabla.texto-left Aumento de la cojera en el lote de ovejas (15 %)
                      td.texto-left Gravedad alta para el bienestar de nueve animales, pero requiere investigar las causas antes de definir la acción de fondo. Mientras tanto, los animales reciben atención veterinaria inmediata
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 5
                      td.ajuste-border-tabla.texto-left Demora de 20 minutos para consultar la historia de un animal
                      td.texto-left No es un incumplimiento, sino una oportunidad de mejora; se programa cuando las acciones anteriores estén en ejecución
          p.mb-0 Este ejemplo muestra que el orden no depende solo de la facilidad de ejecución. Cuando una solución estructural requiere tiempo, como la investigación de la cojera, se aplican medidas temporales de protección y se programa la intervención definitiva. La justificación de la priorización se conserva para revisarla si cambian las condiciones o aparece nueva evidencia.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Responsables, recursos, tiempos y seguimiento
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1(data-aos="fade-right").mb-3
            p.mb-0 Cada acción del plan tiene un responsable de ejecutarla, una persona que la supervisa, los recursos asignados y fechas de inicio, ejecución y verificación. El valor del plan, sin embargo, depende del #[b seguimiento de los compromisos], que se realiza en reuniones breves y periódicas en las que se revisa el estado de cada acción, las dificultades encontradas y las evidencias disponibles.
          p.mb-0 Las #[b evidencias de ejecución] deben demostrar que la acción se realizó como estaba prevista y no solo que se inició. Una factura demuestra la compra de los materiales, pero la ejecución se comprueba con la observación de la reparación terminada, la fotografía fechada o el registro de la actividad. Cuando una acción se #[b retrasa], se gestiona mediante el siguiente procedimiento:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img10.png', alt='' style="max-width: 500px").m-auto
      .bg-4
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Registrar el retraso
                    p.mb-0 Anotar la acción, la fecha prevista y la razón del incumplimiento del plazo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img11.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img12.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Evaluar el riesgo de la demora
                    p.mb-0 Determinar qué consecuencias tiene para los animales, la inocuidad o los procesos que la acción no se haya ejecutado.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Aplicar medidas temporales
                    p.mb-0 Si el riesgo lo exige, adoptar medidas de protección mientras se ejecuta la acción. Por ejemplo, si la reparación de un drenaje se retrasa por falta de contratista, se traslada el lote afectado a un corral seco y se refuerza la cama.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img13.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img14.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Definir una nueva fecha
                    p.mb-0 Acordar un nuevo plazo realista con el responsable y, si es necesario, ajustar los recursos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Escalar la decisión
                    p.mb-0 Si la acción se retrasa de nuevo, el administrador revisa si debe cambiarse el responsable, la acción o los recursos asignados.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img15.png', alt='' style="width: 300px").m-auto
      p.mb-0 Una acción que se retrasa varias veces sin explicación indica que el plan no responde a las condiciones reales del predio, por lo que su revisión forma parte del mismo seguimiento.

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
