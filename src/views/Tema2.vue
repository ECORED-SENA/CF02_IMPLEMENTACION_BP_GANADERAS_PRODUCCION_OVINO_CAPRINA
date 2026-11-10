<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Gestión y seguimiento del cumplimiento de las BPG
      p.mb-5 La evaluación muestra la situación en una fecha, mientras que la #[b gestión] se ocupa de que los requisitos se mantengan todos los días. Un predio puede presentar buenas condiciones durante una visita y volver a fallar si no existe una rutina de seguimiento. Por ello, la gestión organiza el trabajo, utiliza los registros y los indicadores para detectar desviaciones y comunica los resultados mediante informes que conducen a decisiones.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Gestión de la calidad: seguimiento y control
      p.mb-5 La #[b gestión de la calidad] aplica un ciclo de planificación, ejecución, verificación y ajuste a cada proceso del predio. El #[b seguimiento] revisa periódicamente cómo se comportan las actividades, y el #[b control] utiliza esa información para mantener las condiciones dentro de los criterios establecidos. Aplicado al suministro de agua de la unidad del caso, el ciclo funciona de la siguiente manera:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Planificar")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Planificar
              p.mb-0 Se establece que el encargado de corrales revisa todos los bebederos dos veces al día y verifica tres condiciones, que son el flujo de agua, el nivel suficiente y la ausencia de suciedad visible. El administrador define este criterio y aprueba el procedimiento.
        .py-3.py-md-4(titulo="Ejecutar")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ejecutar
              p.mb-0 El encargado realiza las revisiones y registra el resultado al terminar cada recorrido, anotando cualquier falla encontrada.
        .py-3.py-md-4(titulo="Verificar")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Verificar
              p.mb-0 El administrador revisa los registros cada semana y realiza una inspección sin aviso para comparar lo registrado con el estado real de los bebederos.
        .py-3.py-md-4(titulo="Ajustar")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ajustar
              p.mb-0 Si se repiten las fallas en un mismo bebedero o la inspección no coincide con el registro, se revisa la causa y se modifica el procedimiento, los recursos o la frecuencia.
      p.mb-5 Para que el control funcione, se define de antemano quién detecta cada desviación, quién decide la respuesta y qué respuesta se activa, como se presenta en la siguiente tabla:
      .bg-1
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 4.
            span Respuesta ante desviaciones en el suministro de agua
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Desviación
                  th.ajuste-border-tabla.texto-left Quién la detecta
                  th.ajuste-border-tabla.texto-left Quién decide
                  th.texto-left Respuesta
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Bebedero sin flujo
                  td.ajuste-border-tabla.texto-left Encargado de corrales
                  td.ajuste-border-tabla.texto-left Encargado de corrales
                  td.texto-left Habilitar un bebedero provisional y reparar la válvula el mismo día
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Agua con suciedad visible
                  td.ajuste-border-tabla.texto-left Encargado de corrales
                  td.ajuste-border-tabla.texto-left Encargado de corrales
                  td.texto-left Vaciar, limpiar y registrar la corrección
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Falla repetida en el mismo bebedero
                  td.ajuste-border-tabla.texto-left Administrador, al revisar los registros
                  td.ajuste-border-tabla.texto-left Administrador
                  td.texto-left Investigar la causa e incluirla en el plan de mejora
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Interrupción general del suministro
                  td.ajuste-border-tabla.texto-left Cualquier trabajador
                  td.ajuste-border-tabla.texto-left Administrador
                  td.texto-left Activar el plan de contingencias
          p.mb-0 Sin estas decisiones previas, el registro deja constancia del problema, pero nadie lo atiende. Además, cuando una falla se repite, no basta con insistir en el cumplimiento del procedimiento, porque la causa puede estar en los recursos, en el tiempo disponible o en la claridad de las responsabilidades.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Indicadores de cumplimiento y desempeño
      p.mb-5 Los indicadores definidos durante la implementación, con su fórmula, su fuente y su periodicidad, se utilizan ahora para interpretar el comportamiento de los procesos. Para ello se distinguen dos tipos de indicadores, que se presentan a continuación:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img5.png', alt="" ).m-auto
                  h4.text-center Indicadores de actividad
                  .caja-5_p
                    p.mb-0.text-center Miden si se realizó lo programado. Ejemplo: porcentaje de recortes de pezuñas ejecutados frente a los programados.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img6.png', alt="" ).m-auto
                  h4.text-center Indicadores de resultado
                  .caja-5_p
                    p.mb-0.text-center Miden si se obtuvo el efecto esperado en los animales, los productos o los procesos. Ejemplo: porcentaje de ovejas con cojera en el lote.
          p.mb-5 Un indicador de actividad favorable no demuestra que el resultado sea bueno. En la unidad del caso, el recorte de pezuñas se ejecutó en el 100 % de las fechas programadas y, sin embargo, la cojera aumentó en el lote de ovejas, como muestra la siguiente tabla:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Evolución de la cojera en el lote de ovejas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Periodo
                      th.ajuste-border-tabla.texto-left Ovejas con cojera
                      th.ajuste-border-tabla.texto-left Ovejas observadas
                      th.texto-left Prevalencia de cojera
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diagnóstico inicial (línea de base)
                      td.ajuste-border-tabla.texto-left 4
                      td.ajuste-border-tabla.texto-left 60
                      td.texto-left 6,7 %
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mes 1 después de la implementación
                      td.ajuste-border-tabla.texto-left 3
                      td.ajuste-border-tabla.texto-left 60
                      td.texto-left 5,0 %
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mes 2
                      td.ajuste-border-tabla.texto-left 5
                      td.ajuste-border-tabla.texto-left 60
                      td.texto-left 8,3 %
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mes 3
                      td.ajuste-border-tabla.texto-left 7
                      td.ajuste-border-tabla.texto-left 60
                      td.texto-left 11,7 %
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mes 4
                      td.ajuste-border-tabla.texto-left 9
                      td.ajuste-border-tabla.texto-left 60
                      td.texto-left 15,0 %
          p.mb-5 La interpretación de una #[b tendencia] considera varios periodos y no un solo dato. En este caso, el primer mes mostró una leve mejora frente a la línea de base, pero los tres meses siguientes presentan un aumento sostenido que supera el doble del valor inicial. Antes de concluir, se comprueba que los datos sean comparables, es decir, que se observó el mismo número de animales, con el mismo criterio de cojera y con la misma persona evaluadora. Una vez confirmado el dato, la tendencia indica que algo cambió en las condiciones del lote, aunque todavía no explica qué.
          .caja-2(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img7.png', alt='' style="width: 500px").m-auto
              .col-xl.caja-2_p
                p Para medir los indicadores de bienestar, como la cojera, con criterios y escalas comparables entre periodos, consulte el anexo #[b Metodología para evaluar el bienestar animal en ovinos y caprinos] (versión 3.0) del ICA.
                a.anexo.mb-4.mb-lg-0(href="https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias/documentos/2025/meba-ovinos-y-caprinos.aspx " target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    h5.mb-0 Metodología para evaluar el bienestar animal en ovinos y caprinos
      p.mb-5 A partir de la interpretación de los indicadores se adopta una de las siguientes decisiones:
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img8.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Mantener").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El resultado es estable y cumple el criterio; se continúa con el seguimiento habitual.
            .row(titulo="Revisar el dato").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El cambio es inesperado o la calidad de los registros es dudosa; se verifica la información antes de actuar.
            .row(titulo="Investigar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La tendencia es desfavorable y confirmada; se analizan sus causas. Es la decisión que corresponde a la cojera del caso.
            .row(titulo="Intervenir").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Existe un riesgo inmediato para los animales o la inocuidad; se actúa de inmediato mientras se investiga. En el caso, los animales cojos reciben atención veterinaria sin esperar el resultado del análisis.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Gestión de la información
      p.mb-5 Las conclusiones de una evaluación son tan confiables como los datos en que se apoyan. Por ello, la #[b gestión de la información] incluye la detección y el tratamiento de los datos incompletos, inconsistentes o duplicados, cuyas fallas más frecuentes se presentan en la siguiente tabla:
      .bg-1
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 6.
            span Fallas en los datos y su tratamiento
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Tipo de falla
                  th.ajuste-border-tabla.texto-left Ejemplo
                  th.ajuste-border-tabla.texto-left Efecto en las conclusiones
                  th.texto-left Tratamiento
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Dato incompleto
                  td.ajuste-border-tabla.texto-left Un tratamiento registrado sin identificación del animal
                  td.ajuste-border-tabla.texto-left Impide saber qué animal está en retiro
                  td.texto-left Completar con la fuente original (prescripción, entrevista) o registrar la ausencia; nunca inventar el dato
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Dato inconsistente
                  td.ajuste-border-tabla.texto-left El inventario indica 60 ovejas y la suma por lotes da 62
                  td.ajuste-border-tabla.texto-left Cualquier proporción calculada sobre el lote queda en duda
                  td.texto-left Contar de nuevo los animales y corregir el registro con la fecha y la persona que corrige
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Dato duplicado
                  td.ajuste-border-tabla.texto-left Una muerte anotada en el registro de mortalidad y otra vez en el registro sanitario como caso nuevo
                  td.ajuste-border-tabla.texto-left Aumenta artificialmente la mortalidad o la incidencia
                  td.texto-left Identificar el registro oficial de cada evento y eliminar el doble conteo en los cálculos
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Dato tardío
                  td.ajuste-border-tabla.texto-left Registros de limpieza diligenciados al final de la semana
                  td.ajuste-border-tabla.texto-left El registro no demuestra la ejecución real
                  td.texto-left Exigir el registro durante la actividad y tratar los datos tardíos como evidencia débil
          p.mb-0 Cuando se detecta una falla en los datos, la conclusión que dependía de ellos se revisa. Si no es posible corregir la información, el resultado se presenta con su limitación; por ejemplo, “la mortalidad del trimestre no puede calcularse con precisión porque se detectaron registros duplicados en agosto”. Así se evita tomar decisiones sobre cifras que no reflejan lo ocurrido y se distingue una falla de registro de una variación real del proceso.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Registros, evidencias y trazabilidad
      p.mb-5 Los registros implementados permiten reconstruir lo ocurrido en el predio, siempre que tengan calidad suficiente. En la evaluación se revisa su calidad mediante cinco criterios, que se presentan a continuación:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img10.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Completos
                    p.mb-0.text-center Contienen todos los campos necesarios, incluida la identificación del animal o el lote.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img11.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Oportunos
                    p.mb-0.text-center Se diligencian durante la actividad o inmediatamente después.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img12.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Legibles y claros
                    p.mb-0.text-center Pueden ser interpretados por una persona distinta de quien los diligenció.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img13.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Coherentes
                    p.mb-0.text-center Coinciden entre sí y con lo que se observa en el predio.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img14.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Corregidos con trazabilidad
                    p.mb-0.text-center Las correcciones conservan el dato original e indican quién corrigió y por qué.
      p.mb-5 La #[b trazabilidad] se pone a prueba cuando se cruza la información de varios registros para reconstruir un problema. En la unidad del caso, por ejemplo, se presentaron cuatro abortos en cabras durante dos semanas, y para reconstruir el evento se siguió el siguiente procedimiento:
      .bg-4
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Delimitar el evento
                    p.mb-0 Identificar en el registro reproductivo las cabras que abortaron, las fechas y el lote al que pertenecen.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img15.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img16.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Revisar los movimientos
                    p.mb-0 Consultar el inventario y el registro de ingresos para saber si esas cabras compartieron corral con animales recién ingresados.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Revisar la alimentación
                    p.mb-0 Consultar el registro de suministro para identificar qué lote de alimento consumieron en las semanas anteriores.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img17.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img18.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Revisar la sanidad
                    p.mb-0 Consultar los registros sanitarios y de tratamientos para conocer los signos previos y los medicamentos aplicados.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Integrar la información
                    p.mb-0 Comparar los datos de los cuatro casos para encontrar los factores comunes y entregarlos al médico veterinario como base para el diagnóstico.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img19.png', alt='' style="width: 300px").m-auto
      p.mb-0 En el caso, el cruce mostró que las cuatro cabras pertenecían al mismo corral y habían consumido el mismo lote de concentrado, almacenado en la zona de la bodega donde luego se encontró moho, mientras que no compartieron espacio con animales recién ingresados. Con esta información, el médico veterinario orientó los análisis de laboratorio. Sin la identificación de los animales, los lotes y las fechas en cada registro, esta relación no habría podido establecerse. Las evidencias complementarias, como facturas, resultados de laboratorio o fotografías, se evalúan del mismo modo, por lo que demuestra cada una y por su coherencia con el resto de la información.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Informes: finalidad, tipos y frecuencia
      p.mb-5 El #[b informe] presenta información seleccionada e interpretada para orientar decisiones. Debe indicar el alcance, el periodo, los resultados, los hallazgos, las evidencias, las limitaciones y las recomendaciones, y su frecuencia depende del riesgo de cada proceso. Una contingencia o una afectación grave se comunican de inmediato, sin esperar al informe periódico. Se distinguen dos tipos principales de informe, que se presentan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Informe de seguimiento")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Informe de seguimiento
              p.mb-0 Se elabora periódicamente, por ejemplo cada mes o cada trimestre. Muestra cómo se comportan los procesos, el avance de las acciones y las desviaciones detectadas, y sirve para tomar decisiones durante la ejecución.
        .py-3.py-md-4(titulo="Informe final")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Informe final
              p.mb-0 Se elabora al cerrar un ciclo de evaluación y mejora. Integra la situación inicial, los hallazgos, las causas, las acciones, los resultados obtenidos y los asuntos pendientes, y sirve para valorar la eficacia del ciclo y planificar el siguiente.
      p.mb-5 La siguiente tabla presenta un ejemplo de informe de seguimiento para la unidad del caso:
      .bg-1
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Ejemplo de informe de seguimiento
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento
                      th.texto-left Contenido
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alcance
                      td.texto-left Suministro de agua, medicamentos y retiro, bienestar del lote de ovejas y bioseguridad
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Periodo
                      td.texto-left Julio a septiembre de 2026
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultados
                      td.texto-left Se realizaron 24 de las 26 revisiones semanales de bebederos programadas (92 %); la prevalencia de cojera en ovejas pasó de 5,0 % a 15,0 %; no hubo ingresos de animales sin registro
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Hallazgos
                      td.texto-left Limpieza de bebederos registrada, pero no ejecutada según el procedimiento; tres de diez registros de tratamientos sin tiempo de retiro; dos cabras tratadas sin identificación de retiro; lote de concentrado con moho en la bodega
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evidencias
                      td.texto-left Registros de revisión y de tratamientos, fotografías de los bebederos con fecha, registro de leche descartada y notas de la inspección
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Limitaciones
                      td.texto-left Se revisó una muestra de diez registros de tratamientos y se observó un solo ordeño
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recomendaciones
                      td.texto-left Revisar todos los tratamientos del último mes, investigar las causas de la cojera, reorganizar la limpieza de bebederos e incluir los hallazgos en el plan de mejora

</template>

<script>
export default {
  name: 'Tema2',
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
