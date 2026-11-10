<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Gestión de contingencias y control de procesos
      p.mb-5 Las #[b contingencias] son situaciones que alteran el funcionamiento habitual del predio y exigen una respuesta organizada para proteger a los animales, a las personas, la inocuidad y la continuidad productiva. Aunque la implementación de las BPG reduce muchos riesgos, ningún sistema elimina por completo la posibilidad de una emergencia, por lo que el plan de contingencias debe revisarse a la luz de los resultados de la evaluación y adaptarse a las condiciones reales de cada predio.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Concepto y tipos de contingencias
      p.mb-5 A continuación, se presenta un video sobre la identificación y gestión de contingencias en el predio. En este recurso se abordan los principales tipos de contingencias, su diferencia frente a las fallas rutinarias y los criterios que permiten determinar cuándo es necesario activar el plan de contingencias para proteger a los animales, las personas y la inocuidad de la producción.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Gestión de contingencias en las Buenas Prácticas Ganaderas
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Identificación y priorización de riesgos
      p.mb-5 Después de implementar las BPG, la identificación de riesgos se concentra en tres situaciones, que son las contingencias posibles, las fallas de los controles implementados y los #[b riesgos residuales], es decir, los que persisten aunque los controles funcionen. Para cada control se analiza cómo podría fallar y qué consecuencia tendría, como se presenta en la siguiente tabla:
      .bg-1
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 8.
            span Fallas posibles de los controles y riesgos residuales
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Control implementado
                  th.ajuste-border-tabla.texto-left Cómo puede fallar
                  th.ajuste-border-tabla.texto-left Riesgo residual
                  th.texto-left Prioridad
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Bomba de agua con mantenimiento programado
                  td.ajuste-border-tabla.texto-left Daño eléctrico o corte prolongado de energía
                  td.ajuste-border-tabla.texto-left Interrupción total del suministro de agua
                  td.texto-left Alta
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Bodega de alimentos protegida
                  td.ajuste-border-tabla.texto-left Gotera en temporada de lluvias
                  td.ajuste-border-tabla.texto-left Alimento con moho y riesgo de toxicidad
                  td.texto-left Alta
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Protocolo de cuarentena
                  td.ajuste-border-tabla.texto-left Reducción del periodo por falta de espacio
                  td.ajuste-border-tabla.texto-left Ingreso de enfermedades al rebaño
                  td.texto-left Alta
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Identificación de animales en retiro
                  td.ajuste-border-tabla.texto-left Pérdida del collar o ausencia del ordeñador habitual
                  td.ajuste-border-tabla.texto-left Leche de animales tratados en el tanque
                  td.texto-left Alta
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Revisión diaria de cercas
                  td.ajuste-border-tabla.texto-left Omisión durante días de alta carga de trabajo
                  td.ajuste-border-tabla.texto-left Escape de animales o ingreso de animales ajenos
                  td.texto-left Media
          p.mb-0 La priorización combina la probabilidad de que el control falle con la gravedad de la consecuencia, mediante escalas internas definidas por el predio. Se atienden primero los riesgos que pueden afectar la inocuidad, causar sufrimiento animal o interrumpir procesos esenciales, aunque sean poco frecuentes. La valoración se actualiza después de cada evento o evaluación, y no reemplaza la clasificación de los instrumentos oficiales.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Respuesta ante contingencias
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1(data-aos="fade-right").mb-3
            p.mb-0 La respuesta ante una contingencia sigue una secuencia que consiste en detectar y confirmar el evento, proteger a las personas y los animales, comunicar, controlar la situación, registrar lo ocurrido y restablecer la operación. La protección de las personas y los animales orienta todas las decisiones, y no se ejecutan maniobras que expongan al personal a peligros para los cuales no está preparado. Los dos ejemplos siguientes muestran cómo se concreta esta secuencia en la unidad del caso.
          p.mb-0 En una #[b interrupción del suministro de agua] por daño de la bomba principal, la respuesta se organiza de la siguiente manera:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img1.png', alt='' style="max-width: 500px").m-auto
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 9.
                span Respuesta ante la interrupción del suministro de agua
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento
                      th.texto-left Contenido
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Decisiones inmediatas
                      td.texto-left Activar la reserva del tanque elevado, priorizar a las cabras en lactancia y a las crías, y suspender la limpieza con agua a presión
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Responsables
                      td.texto-left El encargado de corrales confirma la falla y activa la reserva; el administrador decide el abastecimiento externo y contrata la reparación
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recursos
                      td.texto-left Tanque de reserva, carrotanque del proveedor alterno, canecas limpias y bebederos provisionales
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Comunicación
                      td.texto-left El encargado informa de inmediato al administrador; el administrador avisa al personal y, si la falla supera un día, al médico veterinario
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Condiciones para restablecer la operación
                      td.texto-left La bomba funciona durante al menos un día sin fallas, el agua llega a todos los bebederos y los animales consumen con normalidad
          p.mb-5 Ante la #[b sospecha de contaminación del alimento], por ejemplo cuando se detecta moho en un lote de concentrado y varios animales disminuyen su consumo, la respuesta se organiza así:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 10.
                span Respuesta ante la sospecha de contaminación del alimento
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento
                      th.texto-left Contenido
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Decisiones inmediatas
                      td.texto-left Suspender el lote sospechoso, separarlo e identificarlo para evitar su uso, y suministrar alimento de otro lote verificado
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Responsables
                      td.texto-left El encargado de la bodega suspende y separa el lote; el médico veterinario evalúa a los animales y decide si se requieren análisis
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recursos
                      td.texto-left Alimento de reemplazo, área de separación señalizada y recipientes para la toma de muestras
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Comunicación
                      td.texto-left Se informa al administrador y al médico veterinario, y se notifica al proveedor con el número de lote y la fecha de entrega
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Condiciones para restablecer la operación
                      td.texto-left Alimento nuevo verificado en bodega, causa de la contaminación identificada y corregida, y animales afectados en seguimiento veterinario
          p.mb-0 En ambos casos, la trazabilidad resulta decisiva. Sin el número de lote del alimento o la identificación de los animales afectados, es mucho más difícil delimitar la exposición y controlar el evento.
          Separador
          #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.4 Seguimiento y evaluación de la respuesta
          p.mb-5 Después de la intervención inicial se comprueba si el evento está controlado y si aparecen consecuencias posteriores. El seguimiento se organiza en tres frentes, que se presentan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Animales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Animales
              p.mb-0 Se observa la evolución de los animales afectados, el consumo de agua y alimento, la aparición de nuevos casos, la producción de leche y los signos de deshidratación o enfermedad. En la contaminación del alimento, por ejemplo, se sigue a las cabras que lo consumieron durante varias semanas, porque algunos efectos, como los abortos, pueden aparecer tiempo después.
        .py-3.py-md-4(titulo="Instalaciones y recursos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Instalaciones y recursos
              p.mb-0 Se revisa si el área intervenida se mantiene en buenas condiciones, si la reparación funciona y si los recursos de respaldo utilizados se repusieron.
        .py-3.py-md-4(titulo="Registros")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Registros
              p.mb-0 Se documenta el evento con su fecha, lugar, descripción, animales afectados, acciones, responsables, recursos, resultados y evidencias. Las causas iniciales se registran como hipótesis hasta que se confirman.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-3(data-aos="fade-right").mb-3
            p.mb-0 Las #[b consecuencias posteriores] se detectan comparando los indicadores de los días o semanas siguientes con los valores habituales. Una caída de la producción de leche dos días después de restablecer el agua, o un aumento de los abortos semanas después de suspender un alimento contaminado, indican que el efecto del evento continúa.
          p.mb-0 La respuesta se #[b ajusta] cuando aparecen nuevos casos después de la intervención, cuando los animales afectados no mejoran en el tiempo esperado según el criterio veterinario, cuando el recurso de respaldo resulta insuficiente o cuando se identifica una causa distinta de la supuesta inicialmente. Una vez estabilizada la situación, se revisa qué funcionó, qué falló, qué recurso faltó y qué decisiones se demoraron, y este aprendizaje se incorpora al plan de contingencias y al plan de mejora.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Control y continuidad de los procesos
      p.mb-5 La #[b continuidad] consiste en mantener los procesos esenciales durante la contingencia y retomar la operación normal sin comprometer la sanidad, la inocuidad ni el bienestar. Durante el evento, los procesos esenciales se sostienen de la siguiente manera:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img6.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Agua").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se utilizan las reservas y los proveedores alternos previamente identificados, y se verifica que el agua de respaldo sea apta y llegue a todos los animales.
            .row(titulo="Alimentación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se recurre a lotes de alimento verificados o a proveedores alternos, se ajusta el suministro por categorías y se prioriza a los animales en lactancia, gestación avanzada y crías.
            .row(titulo="Atención sanitaria").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se mantienen disponibles los contactos veterinarios y se garantiza la atención de los animales afectados por el evento y de los que ya estaban en tratamiento.
            .row(titulo="Registros").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Si los registros habituales no pueden utilizarse, se lleva un registro provisional con la fecha, la hora, las acciones, los animales y los responsables, que se transcribe a los formatos oficiales al terminar el evento.
      p.mb-5 Para comprobar que pueden retomarse las actividades habituales se siguen los siguientes pasos:
      .bg-4
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Confirmar el control de la causa
                    p.mb-0 Verificar que la falla se reparó o que el factor de riesgo se eliminó.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img7.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img8.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Probar el funcionamiento
                    p.mb-0 Comprobar en condiciones reales que el proceso funciona; por ejemplo, que el agua llega a todos los bebederos durante un día completo.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Revisar a los animales
                    p.mb-0 Confirmar con el médico veterinario que no hay nuevos casos y que los afectados evolucionan favorablemente.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img9.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img10.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Reponer los recursos de respaldo
                    p.mb-0 Llenar de nuevo las reservas y actualizar los contactos y proveedores utilizados.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Autorizar el regreso a la rutina
                    p.mb-0 El administrador decide la normalización y la comunica al personal, dejando constancia en el registro del evento.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img11.png', alt='' style="width: 300px").m-auto
      p.mb-0 El plan de contingencias se actualiza cuando cambian las instalaciones, el inventario, el personal, los recursos o los riesgos, y después de cada evento real. Los ejercicios de simulación permiten comprobar su funcionamiento sin esperar una emergencia, siempre que no generen riesgos para los animales o las personas.

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
