# Evaluación de Base de Datos SQL o NoSQL

Este sistema está diseñado para ayudar a los usuarios a evaluar si deberían utilizar una base de datos relacional (SQL) o una no relacional (NoSQL) en función de sus necesidades específicas. El usuario responde a una serie de preguntas que cubren criterios técnicos y, en base a las respuestas, se genera una recomendación visual junto con un informe descargable en PDF.

## Tabla de Contenidos
- [Instalación](#instalación)
- [Uso](#uso)
- [Criterios de Evaluación](#criterios-de-evaluación)
- [Generación de Resultados](#generación-de-resultados)
- [Descarga de PDF](#descarga-de-pdf)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Instalación

1. Clona el repositorio en tu máquina local:
    ```bash
    git clone https://github.com/dgomezh92/MatrizTipoBaseDeDatos.git
    ```

2. Asegúrate de tener conexión a internet para cargar las bibliotecas externas de **Bootstrap**, **jsPDF** y **Chart.js**.

3. Abre el archivo `index.html` en cualquier navegador moderno.

## Uso

1. **Abrir el formulario:** El sistema presenta un formulario con varias preguntas relacionadas con la estructura de tus datos, tus necesidades de escalabilidad, seguridad, flexibilidad del esquema y otras características importantes para seleccionar entre una base de datos SQL o NoSQL.

2. **Llenar el formulario:** El usuario debe seleccionar las respuestas más apropiadas para cada pregunta. Todas las preguntas son obligatorias.

3. **Evaluar:** Una vez completado el formulario, presiona el botón "Evaluar". El sistema calculará una puntuación basada en las respuestas del usuario y mostrará una visualización comparativa entre las bases de datos SQL y NoSQL en un gráfico de barras.

4. **Descargar resultados:** Después de la evaluación, puedes presionar el botón "Descargar Respuestas" para generar un informe en formato PDF que incluye tanto las respuestas seleccionadas como el gráfico generado.

## Criterios de Evaluación

El sistema utiliza un conjunto de reglas para determinar si se debe recomendar una base de datos **SQL** o **NoSQL**. A continuación, se explican algunos de los criterios utilizados:

1. **Estructura de los datos:**
    - Si los datos son **estructurados**, el sistema favorece SQL.
    - Si los datos son **no estructurados**, se prefiere NoSQL.

2. **Escalabilidad:**
    - Si necesitas escalar horizontalmente, se recomienda **NoSQL**.
    - Para escalabilidad más vertical, **SQL** es más adecuado.

3. **Transacciones ACID:**
    - Si requieres transacciones **ACID** (Atomicidad, Consistencia, Aislamiento, Durabilidad), se favorece **SQL**.

4. **Carga de trabajo (Lectura vs Escritura):**
    - Si la carga de trabajo es predominantemente de **lectura**, se favorece **SQL**.
    - Si es predominantemente de **escritura**, **NoSQL** es más recomendado.

5. **Flexibilidad del esquema:**
    - Si necesitas flexibilidad en el esquema de los datos, **NoSQL** es la mejor opción.
    - Para esquemas más rígidos, **SQL** es preferible.

6. **Seguridad avanzada:**
    - Si necesitas medidas de seguridad avanzadas, se favorece **SQL**.

7. **Crecimiento rápido de los datos:**
    - Si se anticipa un crecimiento rápido de los datos, **NoSQL** será más eficiente.

## Generación de Resultados

Los resultados se presentan de dos formas:

1. **Visualización en el navegador:** Los resultados de la evaluación se muestran en un gráfico de barras, donde se comparan las puntuaciones de bases de datos SQL y NoSQL. Las barras representan la cantidad de características que mejor se adaptan a cada tipo de base de datos según las respuestas proporcionadas por el usuario.

2. **PDF:** El sistema genera un PDF descargable con los siguientes elementos:
    - Las preguntas del formulario y las respuestas seleccionadas.
    - Una puntuación comparativa entre bases de datos SQL y NoSQL.
    - Una copia del gráfico de barras mostrado en el navegador.

## Descarga de PDF

El PDF se genera utilizando la biblioteca **jsPDF**. Incluye todas las respuestas del usuario y el gráfico de barras generado por **Chart.js**. Para descargar el PDF, simplemente presiona el botón "Descargar Respuestas" una vez que los resultados hayan sido mostrados.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura del documento.
- **CSS3**: Para la presentación y el diseño.
- **JavaScript**: Para la lógica del formulario y la evaluación.
- **Bootstrap 5**: Para la estructura y componentes responsivos.
- **jsPDF**: Para la generación y descarga de archivos PDF.
- **Chart.js**: Para la visualización de los resultados en gráficos.
