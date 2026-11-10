<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Acciones correctivas, preventivas y no conformidades
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-2(data-aos="fade-right").mb-3
            p.mb-0 Las #[b no conformidades] son incumplimientos comprobados de requisitos aplicables. Su tratamiento protege primero a los animales, a las personas y la inocuidad, y después interviene las causas para evitar que se repitan. Para responder de manera coherente se distinguen tres tipos de medidas, cuya diferencia se explica a continuación con un mismo caso de la unidad productiva.
          p.mb-0 Durante la inspección de la bodega se encontró un lote de concentrado con moho. La revisión mostró que una gotera en el techo, activa desde el inicio de las lluvias, caía sobre los bultos, y que estos estaban apoyados directamente sobre el piso, sin estibas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img1.png', alt='' style="max-width: 500px").m-auto
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Acciones correctivas: concepto y características
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img2.png', alt='' style="max-width: 500px").m-auto
        .col-xl
          .caja-1.color-1(data-aos="fade-left").mb-3
            p.mb-0 En el caso de la bodega, la primera medida es la #[b corrección], que atiende el incumplimiento observado. Consiste en retirar el lote con moho, separarlo e identificarlo para evitar su uso, y suministrar alimento de un lote verificado. La corrección restablece la condición, pero no evita que el problema se repita, porque la gotera y el contacto con el piso continúan.
          p.mb-0 La #[b acción correctiva], en cambio, interviene la causa comprobada de la no conformidad. En el caso, consiste en reparar el techo de la bodega y ubicar todos los bultos sobre estibas, separados de las paredes. Sus características se presentan a continuación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img3.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Basada en la causa").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se formula después de analizar el problema y modifica la condición que lo originó. Si la causa no se ha confirmado, se mantiene la investigación.
            .row(titulo="Específica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Describe qué se hará, dónde y cómo. “Tener más cuidado con el alimento” no modifica ninguna condición del proceso.
            .row(titulo="Proporcional al riesgo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Su magnitud corresponde a la gravedad del problema; un riesgo para la inocuidad justifica una intervención estructural.
            .row(titulo="Verificable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Tiene responsable, plazo y una evidencia que permite comprobar su ejecución y su efecto.
      p.mb-0 Ambas medidas son necesarias. Sin la corrección, los animales podrían consumir el alimento contaminado mientras se repara el techo; sin la acción correctiva, el moho reaparecería en la siguiente temporada de lluvias.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Acciones preventivas: concepto y aplicación
      p La #[b acción preventiva] se adopta antes de que un problema ocurra en un lugar o proceso que todavía no está afectado. En el caso de la bodega, el análisis permitió reconocer que la bodega del heno, ubicada en otra construcción con un techo de la misma antigüedad, podía presentar el mismo problema aunque aún no tuviera alimento dañado. La acción preventiva consiste en revisar su techo, instalar estibas y programar una inspección de todas las bodegas antes de cada temporada de lluvias.
      p.mb-5 Las tres medidas aplicadas al mismo caso se resumen a continuación:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img4.png', alt="" ).m-auto
                  h4.text-center Corrección
                  .caja-5_p
                    p.mb-0.text-center Retirar y separar el lote de concentrado con moho, y suministrar alimento verificado.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img5.png', alt="" ).m-auto
                  h4.text-center Acción correctiva
                  .caja-5_p
                    p.mb-0.text-center Reparar el techo de la bodega del concentrado y ubicar los bultos sobre estibas.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img6.png', alt="" ).m-auto
                  h4.text-center Acción preventiva
                  .caja-5_p
                    p.mb-0.text-center Revisar la bodega del heno e inspeccionar todas las bodegas antes de cada temporada de lluvias.
          p.mb-0 La prevención no debe utilizarse para ocultar un incumplimiento existente. Si en la bodega del heno ya hubiera alimento dañado, existiría también una no conformidad que debe corregirse. Además, la eficacia de una acción preventiva no se demuestra solo por la ausencia de eventos, sino comprobando que el control funciona, por ejemplo, que la inspección de bodegas se realiza y detecta las condiciones de riesgo.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Identificación y clasificación de no conformidades
      p.mb-5 Para identificar una no conformidad se requieren un requisito aplicable y una evidencia de su incumplimiento. Un indicador desfavorable o una impresión del evaluador orientan la investigación, pero no constituyen una no conformidad por sí solos. Su redacción debe ser precisa, verificable y libre de juicios personales, como muestran los ejemplos de la siguiente tabla:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 13.
                span Ejemplos de redacción de hallazgos
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Redacción inadecuada
                      th.texto-left Redacción adecuada
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold El personal es descuidado con los medicamentos
                      td.texto-left En tres de diez registros de tratamientos revisados (julio a septiembre) no se identifica el tiempo de retiro del producto aplicado
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold La bodega está en mal estado
                      td.texto-left En la bodega de concentrado, un lote de doce bultos presenta moho en la zona ubicada bajo una gotera activa del techo; los bultos están apoyados directamente sobre el piso
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Los bebederos están sucios
                      td.texto-left Cuatro de los seis bebederos del corral de cabras presentan materia orgánica acumulada en el fondo, aunque el registro de limpieza indica limpieza diaria
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Hay muchas ovejas cojas
                      td.texto-left Nueve de las sesenta ovejas del lote 2 (15 %) presentan cojera en la observación del 28 de septiembre, frente a cuatro (6,7 %) en el diagnóstico inicial
          .caja-2(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t5/img7.png', alt='' style="width: 500px").m-auto
              .col-xl.caja-2_p
                p.mb-0 Es importante diferenciar los #[b incumplimientos comprobados] de las #[b oportunidades de mejora]. El lote de concentrado con moho incumple un requisito de almacenamiento y constituye una no conformidad; en cambio, la demora para consultar la historia de un animal, cuando los registros están completos, no incumple ningún requisito y se registra como oportunidad de mejora.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img8.png')})` }")
        .bloque-texto-g__texto.p-4
          p La clasificación de las no conformidades debe respetar las categorías del instrumento utilizado. En la evaluación con la Forma 3-860, cada requisito conserva la categoría asignada por el ICA y no se modifica según la percepción del evaluador. Para la gestión interna, el predio puede establecer además niveles de atención según el riesgo, que no reemplazan esa clasificación oficial.
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Registro y tratamiento de no conformidades
      p.mb-5 El tratamiento de una no conformidad sigue una secuencia que va desde su detección hasta su cierre. Sus pasos se presentan a continuación:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Detectar y registrar
                    p.mb-0 Identificar el incumplimiento y registrarlo con un código, la fecha, la ubicación, el requisito, la descripción y la evidencia.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img9.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img10.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Contener o corregir
                    p.mb-0 Adoptar medidas inmediatas para proteger a los animales, las personas y la inocuidad, sin esperar el análisis de causas.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Analizar las causas
                    p.mb-0 Investigar por qué ocurrió el incumplimiento y confirmar la causa con evidencias, mediante herramientas como los cinco porqués o el diagrama de causa y efecto.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img11.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img12.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Definir las acciones
                    p.mb-0 Formular la acción correctiva y, cuando corresponda, la preventiva, con su responsable, recursos y plazo.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Verificar la ejecución
                    p.mb-0 Comprobar que las acciones se realizaron como estaban previstas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img13.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img14.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 6. Evaluar la eficacia y cerrar
                    p.mb-0 Comprobar que el problema no se repite durante un periodo justificado y documentar el cierre.
      p.mb-5 La siguiente tabla muestra el registro de la no conformidad de la bodega de concentrado:
      .bg-4
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 14.
                span Ejemplo de registro de una no conformidad
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Campo
                      th.texto-left Contenido
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Código
                      td.texto-left NC-2026-07
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fecha y ubicación
                      td.texto-left 25 de septiembre de 2026, bodega de concentrado
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Requisito
                      td.texto-left Almacenamiento de alimentos en condiciones que eviten su contaminación y deterioro
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Descripción y evidencia
                      td.texto-left Lote de doce bultos con moho bajo una gotera activa; bultos sobre el piso. Fotografías NC-07-01 y NC-07-02
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Corrección
                      td.texto-left Lote retirado, separado e identificado el mismo día; suministro con un lote verificado
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Causa confirmada
                      td.texto-left Gotera en el techo sin reparar y ausencia de estibas
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Acción correctiva
                      td.texto-left Reparar el techo e instalar estibas. Responsable: administrador. Plazo: 10 de octubre
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Acción preventiva
                      td.texto-left Revisar la bodega del heno e incluir la inspección de bodegas antes de las lluvias en el plan de mantenimiento
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Verificación
                      td.texto-left Ejecución: pendiente. Eficacia: inspección semanal de la bodega durante la temporada de lluvias
          p.mb-0 La documentación se actualiza cuando cambian la hipótesis o la acción. Si se demuestra que la causa propuesta inicialmente era incorrecta, se conserva esa decisión y su justificación, en lugar de modificar el registro como si la conclusión siempre hubiera sido la misma.
          Separador
          #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.5 Seguimiento y verificación de las acciones
          p.mb-5 El #[b seguimiento] de las acciones comprueba que se ejecuten conforme a lo previsto en cuanto a qué se hizo, cómo, cuándo y quién lo hizo. Para cada acción se verifica que se haya realizado completa, con el método acordado, dentro del plazo, por el responsable asignado y con la evidencia correspondiente. La siguiente tabla presenta el seguimiento de las acciones de la unidad del caso a mediados de octubre:
      .bg-1
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 15.
            span Seguimiento de la ejecución de las acciones
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Acción
                  th.ajuste-border-tabla.texto-left Previsto
                  th.ajuste-border-tabla.texto-left Ejecutado
                  th.ajuste-border-tabla.texto-left Evidencia
                  th.texto-left Estado
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Identificar a todas las cabras en retiro
                  td.ajuste-border-tabla.texto-left Inmediato
                  td.ajuste-border-tabla.texto-left Sí, el 26 de septiembre
                  td.ajuste-border-tabla.texto-left Registro de collares asignados y revisión del ordeño
                  td.texto-left Ejecutada
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Reparar el techo de la bodega e instalar estibas
                  td.ajuste-border-tabla.texto-left 10 de octubre
                  td.ajuste-border-tabla.texto-left Estibas instaladas; techo sin reparar
                  td.ajuste-border-tabla.texto-left Fotografía de las estibas; contratista sin fecha
                  td.texto-left Retrasada
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Trasladar la limpieza de bebederos a la tarde
                  td.ajuste-border-tabla.texto-left 1 de octubre
                  td.ajuste-border-tabla.texto-left Sí, desde el 1 de octubre
                  td.ajuste-border-tabla.texto-left Registros diligenciados el mismo día
                  td.texto-left Ejecutada
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Ajustar el formato de tratamientos
                  td.ajuste-border-tabla.texto-left 5 de octubre
                  td.ajuste-border-tabla.texto-left Sí, con el campo de retiro
                  td.ajuste-border-tabla.texto-left Nuevo formato en uso
                  td.texto-left Ejecutada
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-1(data-aos="fade-right").mb-3
                p.mb-0 Cuando una acción no se ejecutó como estaba previsto, como la reparación del techo en el ejemplo, se aplican medidas temporales, como cubrir los bultos y trasladarlos a una zona seca, y se gestiona el retraso con una nueva fecha. Además, se revisa si la acción se ejecutó con el método acordado; por ejemplo, unas estibas instaladas contra la pared húmeda no cumplirían el propósito de la acción, aunque figuren como ejecutadas.
              p.mb-0 Que todas las acciones estén ejecutadas no significa que el problema esté resuelto. Por ello, una vez verificada la ejecución, cada acción pasa a la evaluación de su eficacia, que determina si se puede cerrar.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t5/img15.png', alt='' style="max-width: 500px").m-auto
      .caja-4.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t1/img19.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Análisis de causas y oportunidades de mejora
            p.mb-0 Los invitamos a consultar el documento #[b Análisis de causas y oportunidades de mejora], en el que podrán reconocer cómo identificar y verificar las causas raíz de las desviaciones, priorizar oportunidades de mejora y realizar seguimiento a las acciones implementadas.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_02_Analisis_Causas_Oportunidades_Mejora.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

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
