<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario de apropiación: evaluación, seguimiento y acciones de mejora de las BPG',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> afianzar su interpretación de evidencias, cálculo de indicadores, respuesta ante contingencias y formulación de acciones de mejora de las BPG en situaciones ovino-caprinas. Usted realizará esta actividad de práctica sin calificación.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué debe comprobar usted al evaluar las BPG ya implementadas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que las prácticas funcionan y mantienen los resultados esperados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Que basta con disponer de protocolos escritos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que la visita reemplaza el seguimiento diario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que el diagnóstico inicial certifica el predio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Si los bebederos funcionan, pero las ovejas no pueden acceder por competencia con las cabras, ¿cómo debe valorar usted el criterio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cumplido, porque existe el recurso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'No cumplido, porque el acceso efectivo no está garantizado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cumplido, porque hay registros actualizados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No aplicable, porque comparten el corral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué debe incluir usted para justificar una valoración en la lista de chequeo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente una casilla marcada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La opinión general del administrador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La evidencia consultada y la razón del resultado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo el número total de animales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Si la entrevista y la observación del ordeño se contradicen, ¿qué debe hacer usted?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aceptar la versión más favorable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Descartar todas las observaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Concluir que todos los registros son falsos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Investigar la contradicción y contrastar otras evidencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Si usted revisó diez registros y observó un solo ordeño, ¿qué debe indicar en el informe?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El alcance y las limitaciones de la muestra revisada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Que todos los tratamientos del predio fueron verificados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que el resultado garantiza el cumplimiento permanente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que no necesita realizar verificaciones adicionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál indicador debe utilizar usted para medir un resultado de bienestar animal?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porcentaje de recortes de pezuñas programados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porcentaje de ovejas con cojera en el lote.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Número de reuniones de capacitación realizadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Número de protocolos impresos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Si usted observa nueve ovejas con cojera en un lote de sesenta, ¿qué prevalencia obtiene?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '6,7 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '9,0 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '15,0 %.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '60,0 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Si todos los recortes se realizaron, pero la cojera aumentó, ¿qué debe concluir usted?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ejecución garantiza el bienestar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los indicadores de resultado son innecesarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Debe cerrar el seguimiento del lote.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Debe investigar las causas del resultado desfavorable.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Si usted detecta registros duplicados que impiden calcular la mortalidad con precisión, ¿qué debe hacer?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Revisar los datos e informar la limitación si no puede corregirlos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Utilizar los duplicados para completar el indicador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presentar la cifra como exacta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Atribuir el aumento a una enfermedad sin verificar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Ante cuatro abortos, ¿qué información debe cruzar usted para apoyar la investigación veterinaria?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el número de trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificación, ubicación, alimentación y registros sanitarios de los animales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente las fotografías de las cercas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo el precio de venta del alimento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué informe debe elaborar usted durante la ejecución para comunicar avances y desviaciones?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informe de certificación automática.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Informe final sin asuntos pendientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Informe de seguimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Inventario de equipos sin interpretación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué debe considerar usted al priorizar los riesgos del predio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el costo de la reparación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente la antigüedad del control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La facilidad de diligenciar el registro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La probabilidad y las consecuencias del evento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Si falla la bomba de agua, ¿qué respuesta inmediata debe aplicar usted según el caso?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Activar la reserva y priorizar cabras en lactancia y crías.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Esperar al informe mensual para decidir.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener la limpieza con agua a presión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suspender toda comunicación con el administrador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Si usted encuentra un lote de concentrado con moho, ¿qué debe hacer de inmediato?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mezclarlo con alimento nuevo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Suspenderlo, separarlo e identificarlo y suministrar otro lote verificado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilizarlo primero para liberar la bodega.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Esperar la reparación del techo para retirarlo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Antes de normalizar la operación tras una contingencia, ¿qué debe verificar usted?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que el evento ya no aparece en el informe.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que solo se compraron recursos nuevos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que la causa se controló y el proceso funciona en condiciones reales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Que el personal considera innecesario el seguimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué debe establecer usted en el plan de mejora?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo una lista general de deseos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente la fecha de la próxima visita.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo el nombre del administrador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Acciones, responsables, recursos, plazos, indicadores y evidencias de eficacia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué hallazgo debe atender usted primero según la priorización del caso?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cabras tratadas sin identificación de retiro durante el ordeño.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Demora al consultar la historia de un animal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Necesidad de reorganizar un archivo accesible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Oportunidad de agilizar una consulta administrativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Si una acción se retrasa, ¿qué debe hacer usted antes de acordar un nuevo plazo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cerrar la acción como ejecutada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar el retraso, evaluar el riesgo y aplicar medidas temporales si corresponde.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la fecha prevista del registro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suspender toda protección de los animales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Después de retirar el alimento con moho, ¿qué acción correctiva debe gestionar usted ante la causa confirmada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Volver a utilizar el lote retirado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrar el retiro sin intervenir la bodega.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reparar el techo e instalar estibas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Esperar hasta que aparezca otro lote contaminado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cuándo debe cerrar usted una no conformidad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando se asigna un responsable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuando se compra el material necesario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuando se redacta la acción correctiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cuando verifica la ejecución y demuestra la eficacia durante un periodo justificado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
