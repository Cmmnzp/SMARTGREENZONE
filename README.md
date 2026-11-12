# SMARTGREENZONE

SmartGreenZone es un proyecto académico de agricultura inteligente que integra Internet de las Cosas (IoT) e ingeniería de datos para monitorear variables ambientales y del suelo. Su propósito es convertir mediciones de sensores en información organizada que ayude a interpretar las condiciones del entorno agrícola y apoyar la toma de decisiones.

> **Alcance:** el escenario y los datos presentados son simulados. El proyecto no afirma haber validado resultados en un cultivo real ni que sus sensores diagnostiquen enfermedades o midan variables que no estén calibradas.

## Problema

Sin información continua y organizada sobre las condiciones del cultivo, decisiones relacionadas con el riego y el uso de insumos pueden tomarse con datos insuficientes. Asimismo, los cambios ambientales podrían pasar inadvertidos. SmartGreenZone propone integrar monitoreo, almacenamiento y análisis para facilitar la consulta de las mediciones.

## Objetivos

### Objetivo general

Desarrollar una solución tecnológica basada en IoT y gestión de datos para monitorear variables ambientales, almacenar y procesar las mediciones, y generar análisis que apoyen la toma de decisiones en un contexto agrícola.

### Objetivos específicos

- Adquirir información ambiental mediante sensores conectados a dispositivos ESP32.
- Transmitir, organizar y almacenar los registros recopilados.
- Preparar los datos para su consulta y análisis.
- Explorar tendencias y relaciones mediante indicadores y visualizaciones.
- Presentar información que apoye la interpretación de las condiciones monitoreadas.

## Solución propuesta

La arquitectura se organiza en cinco capas:

1. **Adquisición:** sensores conectados a un microcontrolador ESP32.
2. **Comunicación:** envío de mediciones por Wi-Fi mediante el protocolo MQTT.
3. **Integración y monitoreo:** recepción y procesamiento de mensajes y flujos en Node-RED.
4. **Almacenamiento:** organización de los datos en Azure SQL y preparación para análisis mediante procesos ETL.
5. **Análisis:** consulta y visualización de información con Power BI.

## Variables monitoreadas

El proyecto describe cinco sensores físicos y seis variables o lecturas:

| Sensor | Medición |
| --- | --- |
| DHT22 | Temperatura y humedad del aire |
| BH1750 | Intensidad de iluminación (lux) |
| MQ-2 | Lectura analógica del sensor (ADC) |
| Sensor capacitivo | Lectura analógica relacionada con la humedad del suelo (ADC) |
| DS18B20 | Temperatura del suelo |

Las lecturas ADC se conservan en su unidad reportada; no representan porcentajes de humedad ni concentraciones de gas sin una calibración adecuada.

## Gestión y análisis de datos

El flujo analítico contempla extraer registros, transformarlos y cargarlos en un modelo dimensional. El modelo descrito es de tipo estrella y comprende una tabla de hechos y cinco dimensiones: dispositivo, fecha, hora, sensor y tipo de sensor. Esta estructura permite organizar las mediciones para consultas e indicadores.

Entre los análisis planteados se encuentran la evolución temporal de las variables, la comparación de promedios por periodo y la exploración de asociaciones entre mediciones. Las correlaciones se interpretan como asociaciones, no como relaciones causales.

## Avances reportados

La sección de resultados de la aplicación reporta:

- Un ESP32 integrado con cinco sensores físicos.
- Seis variables o lecturas monitoreadas.
- 1.500.000 registros almacenados en SmartGreenZoneDB.
- Un modelo estrella con una tabla de hechos y cinco dimensiones.
- Flujos de comunicación MQTT e integración con Node-RED.

Estos avances corresponden a la implementación y evaluación del escenario académico con datos simulados; no constituyen resultados experimentales de producción agrícola.

## Aplicación web

El sitio presenta la identificación del proyecto, el problema, la justificación, los objetivos, el marco referencial, la metodología, la arquitectura, la gestión y el análisis de datos, los resultados y las referencias. También incluye un panel con indicadores, preguntas de análisis y un enlace a un informe de Power BI.

### Tecnologías de la aplicación

- React y TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React

### Ejecución local

Se requiere Node.js 20.19 o superior, o 22.12 o superior. Desde la carpeta `frontend`:

```powershell
npm ci
npm run dev
```

Para validar la aplicación y generar la compilación de producción:

```powershell
npm run lint
npm run build
```

La aplicación presenta el sitio principal en `/` y el panel analítico en `/dashboard`.
