<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Evaluación de las Buenas Prácticas Ganaderas en la producción ovino-caprina
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 La #[b evaluación de las BPG] permite establecer si las prácticas implementadas en la unidad productiva se ejecutan como fueron definidas y si protegen la sanidad, la inocuidad y el bienestar de los ovinos y caprinos. Para ello, se compara lo que ocurre en el predio con los requisitos aplicables y con la situación encontrada antes de la implementación, y se identifican diferencias respaldadas por evidencias.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img1.png', alt='').m-auto
        .col-xl
          p.mb-0 El referente para la certificación BPG es la #[b Resolución ICA 20277 de 2018], junto con la lista de chequeo #[b Forma 3-860] publicada por el ICA. En bienestar animal se consideran la Resolución MADR 136 de 2020, la Resolución ICA 16409 de 2024, modificada parcialmente por la Resolución ICA 8452 de 2025, y la metodología del ICA para ovinos y caprinos, versión 3.0 de 2026. Una evaluación interna prepara las decisiones de gestión del predio, mientras que la certificación oficial requiere el procedimiento y la decisión de la autoridad competente (ICA, 2018, 2024, 2025, 2026).
      .caja-2(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img2.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p Para conocer los requisitos sanitarios y de inocuidad que se verifican en la evaluación, consulte el anexo #[b Requisitos sanitarios y de inocuidad para la certificación en BPG de ovinos y caprinos], que corresponde a la Resolución ICA 20277 de 2018.
            a.anexo.mb-4.mb-lg-0(href="https://www.ica.gov.co/getattachment/f6b34382-0332-44b0-84d3-d8faba7f4559/2018R20277.aspx " target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                h5.mb-0 Requisitos sanitarios y de inocuidad para la certificación en BPG de ovinos y caprinos
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Concepto, objetivos y metodología de evaluación
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-2(data-aos="fade-right").mb-3
            p.mb-0 La #[b evaluación] es un proceso sistemático de recolección, contraste e interpretación de evidencias para determinar el grado de cumplimiento de los requisitos. Sus objetivos son comprobar si las prácticas implementadas se aplican, identificar no conformidades y riesgos que persisten, reconocer las fortalezas que deben mantenerse y orientar las acciones de mejora.
          p.mb-0 Aunque utiliza instrumentos similares, la evaluación se diferencia del #[b diagnóstico inicial] realizado antes de la implementación. Sus diferencias se presentan a continuación:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img3.png', alt='' style="max-width: 500px").m-auto
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t1/img4.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Diagnóstico inicial
                  p.mb-0.text-center Se realiza antes de implementar las BPG. Describe la situación de partida, identifica las brechas frente a los requisitos y sirve de base para formular el plan de implementación.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t1/img5.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Evaluación
                  p.mb-0.text-center Se realiza después de implementar las prácticas y se repite periódicamente. Comprueba si lo implementado se ejecuta y se mantiene, compara los resultados con la línea de base del diagnóstico y sirve de base para formular el plan de mejora.
          p.mb-5 La evaluación se desarrolla mediante la siguiente secuencia de pasos:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Definir el alcance
                    p.mb-0 Establecer qué áreas, lotes y periodo se evaluarán, y con qué instrumento. En el caso de referencia, el alcance comprende las dos especies, todas las áreas de manejo y los registros de los últimos tres meses, utilizando la Forma 3-860.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img6.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Seleccionar los procesos por revisar
                    p.mb-0 Priorizar los procesos con mayor riesgo y aquellos que presentaron brechas en el diagnóstico inicial. En el caso, se seleccionan el suministro de agua, el manejo de medicamentos y el control del retiro, el almacenamiento de alimentos, la cuarentena y el bienestar de los lotes.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Seleccionar las evidencias
                    p.mb-0 Definir para cada requisito qué se observará, qué documentos se revisarán y a quién se entrevistará. Si no se revisa todo el rebaño o todos los registros, se establece cómo se elegirá la muestra; por ejemplo, diez registros de tratamientos tomados de diferentes semanas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img8.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img9.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Evaluar
                    p.mb-0 Recorrer el predio, aplicar el instrumento y comparar cada evidencia con el criterio del requisito.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Registrar los hallazgos
                    p.mb-0 Anotar cada resultado con la fecha, el área, el lote o proceso, la evidencia y el requisito relacionado.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img10.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img11.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 6. Formular las conclusiones
                    p.mb-0 Determinar el cumplimiento de cada requisito, compararlo con el diagnóstico inicial, señalar los límites de la evaluación y comunicar los resultados al responsable del predio.
      p.mb-0 La objetividad, la imparcialidad y la trazabilidad deben mantenerse en todos los pasos, de modo que otra persona pueda comprender cómo se llegó a cada conclusión y verificarla con las mismas evidencias.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Criterios de evaluación de las BPG
      p.mb-5 Los #[b criterios de evaluación] corresponden a los requisitos de instalaciones, saneamiento, sanidad, bioseguridad, alimentación y agua, medicamentos, registros y bienestar animal que se implementaron en la unidad productiva. Durante la evaluación, la atención se centra en cómo observar cada criterio, qué evidencias contrastar y cuándo considerarlo cumplido, como se presenta en la siguiente tabla:
      .bg-3
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 1.
            span Observación y valoración de los criterios de evaluación
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Criterio
                  th.ajuste-border-tabla.texto-left Qué observar
                  th.ajuste-border-tabla.texto-left Qué contrastar
                  th.texto-left Se considera cumplido cuando
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Instalaciones
                  td.ajuste-border-tabla.texto-left Estado de pisos, cercas, corrales y áreas de descanso
                  td.ajuste-border-tabla.texto-left Plan de mantenimiento y registros de reparación
                  td.texto-left Las condiciones observadas son seguras y coinciden con lo registrado
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Saneamiento
                  td.ajuste-border-tabla.texto-left Limpieza real de bebederos, comederos y áreas
                  td.ajuste-border-tabla.texto-left Protocolo y registro de limpieza
                  td.texto-left El área está limpia y la práctica observada sigue el protocolo
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Sanidad
                  td.ajuste-border-tabla.texto-left Signos de enfermedad, lesiones y animales separados
                  td.ajuste-border-tabla.texto-left Plan sanitario y registros de atención
                  td.texto-left Los casos observados están registrados y tienen seguimiento
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Bioseguridad
                  td.ajuste-border-tabla.texto-left Ingreso de personas, animales y vehículos; uso de la cuarentena
                  td.ajuste-border-tabla.texto-left Registro de ingresos y protocolo de cuarentena
                  td.texto-left Los ingresos recientes cumplieron el protocolo
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alimentación y agua
                  td.ajuste-border-tabla.texto-left Acceso efectivo, estado del alimento y del agua
                  td.ajuste-border-tabla.texto-left Registros de suministro y de inspección de bodegas
                  td.texto-left Todos los animales acceden a alimento y agua en buen estado
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Medicamentos
                  td.ajuste-border-tabla.texto-left Almacenamiento, vencimientos e identificación de animales tratados
                  td.ajuste-border-tabla.texto-left Inventario y registros de tratamientos
                  td.texto-left Cada tratamiento es trazable y el retiro se controla
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Registros
                  td.ajuste-border-tabla.texto-left Diligenciamiento durante la actividad
                  td.ajuste-border-tabla.texto-left Correspondencia entre registros y hechos observados
                  td.texto-left Los registros son completos, oportunos y verificables
          p.mb-5 En #[b bienestar animal], los enfoques de las cinco libertades y los cinco dominios orientan la evaluación, y la metodología del ICA organiza las evidencias en tres tipos de medidas. Las medidas basadas en el animal, como la cojera, las lesiones, la condición corporal o la respuesta al manejo, muestran el resultado de las prácticas; las basadas en los recursos, como el acceso al agua o el estado del alojamiento, muestran las condiciones disponibles, y las basadas en la gestión, como los protocolos y los registros, muestran la organización del trabajo. Las escalas, las muestras y las reglas de calificación se toman de la metodología aplicable, sin reemplazarlas por metas internas del predio (ICA, 2026).
      .caja-2.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img12.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p Para profundizar en las condiciones de bienestar que deben evaluarse en manejo, instalaciones, alimentación, agua y alojamiento, consulte el anexo #[b Manual de condiciones de bienestar animal para ovinos y caprinos], adoptado mediante la Resolución MADR 136 de 2020.
            a.anexo.mb-4.mb-lg-0(href="https://www.minagricultura.gov.co/fileadmin/Cadenas_Pecuarias__Pesqueras_y_Acuicolas/Equina__Asnal_y_Mular/Manual-de-bienestar-Animal-V1.pdf " target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                h5.mb-0 Manual de condiciones de bienestar animal para ovinos y caprinos 
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right").mb-3
            p Consulte el anexo #[b Certificación en bienestar animal en la producción primaria pecuaria], que reúne la Resolución ICA 16409 de 2024 y su modificación parcial mediante la Resolución ICA 8452 de 2025. Revise ambas normas en conjunto para identificar los requisitos vigentes.
            a.anexo.mb-4(href="https://www.ica.gov.co/getattachment/1ea4c816-7e31-41c9-9b88-166dd254caf4/2024R00016409.aspx" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                h5.mb-0 Certificación en bienestar animal en la producción primaria pecuaria. Resolución ICA 16409 de 2024
            a.anexo.mb-4.mb-lg-0(href="https://www.ica.gov.co/getattachment/fbc7f2d8-071d-4fe0-a18f-cff07f35be95/2025R0008452.aspx" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                h5.mb-0 Certificación en bienestar animal en la producción primaria pecuaria. Resolución ICA 8452 de 2025
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img13.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Para valorar un criterio se contrastan al menos dos fuentes de evidencia, y el resultado se registra como cumple, no cumple o evidencia insuficiente. Por ejemplo, si los bebederos funcionan y el registro de revisión está al día, pero varias ovejas muestran dificultad para acceder a ellos por la competencia de las cabras, el criterio de acceso al agua no se considera cumplido, aunque el recurso exista y esté documentado.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Inspección de procesos
      p.mb-5 A continuación, se presenta un podcast sobre la inspección como herramienta para evaluar las Buenas Prácticas Ganaderas. A lo largo del recurso se explican los aspectos que deben observarse durante el recorrido por el predio y la manera en que las entrevistas al personal complementan la verificación de los procedimientos implementados.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.caja-4(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t1/img14.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Inspección y verificación de las Buenas Prácticas Ganaderas&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t1/img15.png" style="max-width: 450px").m-auto
      p.mb-5 En la unidad del caso, por ejemplo, la inspección del procedimiento de limpieza de bebederos mostró las siguientes diferencias entre lo escrito y lo observado:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Diferencias entre el procedimiento escrito y la práctica observada
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Procedimiento escrito
                      th.ajuste-border-tabla.texto-left Práctica observada
                      th.texto-left Implicación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Vaciar el bebedero y retirar la materia orgánica
                      td.ajuste-border-tabla.texto-left El operario agrega agua sin vaciar el bebedero
                      td.texto-left La suciedad acumulada permanece en el agua
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Lavar con cepillo y desinfectar con el producto indicado
                      td.ajuste-border-tabla.texto-left No hay cepillo en el área; el desinfectante está en la bodega principal
                      td.texto-left Faltan los insumos en el punto de uso
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Realizar la limpieza diariamente después del ordeño
                      td.ajuste-border-tabla.texto-left La tarea coincide con el ordeño y la alimentación de la mañana
                      td.texto-left El responsable no dispone de tiempo para hacerla completa
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Registrar la limpieza al terminarla
                      td.ajuste-border-tabla.texto-left El registro se diligencia completo al final de la semana
                      td.texto-left El registro no refleja la ejecución real
          p.mb-0 Esta comparación muestra que el problema no es solo de cumplimiento individual, sino de organización del trabajo y disponibilidad de recursos. Los hallazgos se registran con fecha, área y evidencia, y cuando existe una amenaza inmediata, como agua visiblemente contaminada, se informa y se corrige sin esperar al informe final.
          Separador
          #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.4 Lista de chequeo: estructura y aplicación
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-3(data-aos="fade-right").mb-3
            p.mb-0 La #[b lista de chequeo] organiza los requisitos que deben revisarse. Para las BPG ovino-caprinas se utiliza la Forma 3-860 del ICA en la versión publicada oficialmente, conservando sus categorías y reglas de decisión. Su valor depende de que cada valoración esté justificada, ya que una casilla marcada sin explicación no permite saber cómo se comprobó el resultado.
          p.mb-0 Cada valoración debe incluir la evidencia consultada y la razón del resultado. Los elementos de una justificación adecuada se presentan a continuación:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img16.png', alt='' style="max-width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img17.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Evidencia consultada").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Qué se observó, qué documentos se revisaron y a quién se entrevistó. Ejemplo: revisión de diez registros de tratamientos y observación de las cabras en ordeño.
            .row(titulo="Razón del resultado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Por qué la evidencia demuestra el cumplimiento o el incumplimiento. Ejemplo: tres de diez registros no incluyen el tiempo de retiro.
            .row(titulo="Uso de “no aplica”").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Solo cuando el requisito no corresponde al sistema productivo, con la justificación respectiva. No se utiliza para cubrir la falta de información.
            .row(titulo="Evidencia insuficiente").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se registra qué falta y cómo se obtendrá, sin presentar como cumplido un requisito que no se ha verificado.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right")
            p.mb-0 Cuando un requisito no se cumple, el incumplimiento se documenta con la condición encontrada, su ubicación, la evidencia que lo sustenta y el requisito relacionado. Las fotografías complementan la descripción si se identifican con la fecha, el lugar y el hallazgo al que corresponden.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img18.png', alt='').m-auto
        .col-xl
          p.mb-0 Los resultados se comparan, además, con la evaluación inicial, para reconocer qué brechas se cerraron, cuáles persisten y cuáles aparecieron después de la implementación. Para la unidad del caso, esta comparación se presenta en la siguiente tabla:
      .bg-1
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 3.
            span Comparación con la evaluación inicial
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Requisito
                  th.ajuste-border-tabla.texto-left Evaluación inicial
                  th.ajuste-border-tabla.texto-left Evaluación actual
                  th.texto-left Interpretación
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Almacenamiento de medicamentos
                  td.ajuste-border-tabla.texto-left No cumple (productos vencidos y sin área exclusiva)
                  td.ajuste-border-tabla.texto-left Cumple
                  td.texto-left Brecha cerrada; se debe mantener el control de vencimientos
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Registro de tratamientos y retiro
                  td.ajuste-border-tabla.texto-left No cumple (sin registros)
                  td.ajuste-border-tabla.texto-left No cumple (3 de 10 registros sin tiempo de retiro)
                  td.texto-left Avance parcial; la brecha persiste
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Limpieza de bebederos
                  td.ajuste-border-tabla.texto-left No cumple (sin rutina)
                  td.ajuste-border-tabla.texto-left No cumple (registro completo, práctica deficiente)
                  td.texto-left El procedimiento existe, pero no se aplica
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Cuarentena de animales nuevos
                  td.ajuste-border-tabla.texto-left No cumple (sin área definida)
                  td.ajuste-border-tabla.texto-left Cumple
                  td.texto-left Brecha cerrada
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Bienestar del lote de ovejas
                  td.ajuste-border-tabla.texto-left Sin hallazgo (4 de 60 animales con cojera)
                  td.ajuste-border-tabla.texto-left Hallazgo (9 de 60 animales con cojera)
                  td.texto-left Situación nueva que requiere investigación
          .caja-4.mb-0(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img19.svg', alt='' style="max-width: 85px").m-auto
              .col-xl.mb-4.mb-lg-0
                h4 Lista de chequeo para la evaluación de las BPG
                p.mb-0 Los invitamos a consultar el anexo #[b Lista de chequeo didáctica para la evaluación de las Buenas Prácticas Ganaderas en la producción ovino-caprina]. Este recurso les permitirá verificar el cumplimiento de criterios relacionados con bioseguridad, instalaciones, medicamentos veterinarios, alimentación, bienestar animal, capacitación del personal, manejo ambiental y registros, a partir de la revisión de evidencias en la unidad productiva.
              .col-xl-2
                a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_Lista_chequeo_BPG_ovino_caprino.pdf')" target="_blank" type="application/pdf")
                  span Descargar
                  i.fas.fa-file-download
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Verificación e interpretación de resultados
      p.mb-5 La #[b verificación] comprueba, mediante evidencias, si un requisito se cumple. Para ello se define qué debe comprobarse, se identifican las fuentes de información y se compara el resultado con el criterio. La interpretación transforma esa comparación en una conclusión que puede ser cumplimiento, no conformidad, riesgo u oportunidad de mejora. El siguiente ejemplo, tomado de la unidad del caso, muestra el recorrido completo:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Requisito
                  p.mb-0 Los tratamientos con medicamentos veterinarios deben registrarse y el tiempo de retiro debe controlarse para que la leche y la carne de los animales tratados no se destinen al consumo antes de su finalización (ICA, 2018).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Evidencias
                  p.mb-0 Se revisaron diez registros de tratamientos de los últimos tres meses; en tres no figura el tiempo de retiro. En la entrevista, el ordeñador afirma que siempre separa la leche de las cabras tratadas. En la observación del ordeño, las cabras tratadas se identifican con un collar rojo, pero dos cabras con tratamiento reciente no lo tienen.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Hallazgo
                  p.mb-0 En tres de diez registros de tratamientos revisados no se identifica el tiempo de retiro, y dos de las cabras tratadas durante la última semana no portan la identificación de retiro durante el ordeño.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Conclusión
                  p.mb-0 No conformidad en el control del tiempo de retiro, que compromete la inocuidad de la leche y requiere atención inmediata. El hallazgo combina una falla documental y una falla en la práctica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img23.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 En este ejemplo, la entrevista y la observación no coinciden. Las #[b contradicciones entre fuentes] no se resuelven eligiendo la versión más favorable, sino investigando su origen mediante el siguiente procedimiento:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Identificar la contradicción
                    p.mb-0 Precisar qué afirma cada fuente. En el caso, el ordeñador afirma que separa la leche, pero dos cabras tratadas no están identificadas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img24.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img27.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Revisar fechas y origen
                    p.mb-0 Comprobar si las fuentes se refieren al mismo momento y a los mismos animales; por ejemplo, si el tratamiento se aplicó después del último ordeño observado.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Buscar una tercera fuente
                    p.mb-0 Consultar otra evidencia independiente, como el registro de leche descartada o la prescripción veterinaria.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img25.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img26.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Concluir o registrar la incertidumbre
                    p.mb-0 Si la tercera fuente confirma una versión, se concluye con base en ella; si no es posible resolver la diferencia, se registra como evidencia insuficiente y se define cómo se verificará.
      p.mb-0 Al revisar el registro de leche descartada en el caso, no aparece la leche de las dos cabras sin collar, lo que confirma la falla en la práctica. La conclusión, además, debe reconocer los #[b límites de la evaluación]. Se revisaron diez registros y no la totalidad, y el ordeño se observó un solo día; por ello, el informe indica que el resultado corresponde a la muestra revisada y recomienda verificar todos los tratamientos del último mes antes de dimensionar el alcance del problema.

</template>

<script>
import audio1 from '@/assets/curso/temas/t1/audios/audio-ej.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
