# Aplicación web SmartGreenZone

La aplicación web presenta el proyecto académico SmartGreenZone: una propuesta de monitoreo agrícola que integra sensores IoT, gestión de datos y análisis. El escenario descrito y los datos del proyecto son simulados; las lecturas de sensores no deben interpretarse como resultados de un cultivo real ni como mediciones calibradas cuando se expresan en ADC.

## Secciones del sitio

La página principal (`/`) organiza la información del proyecto en secciones:

- Identificación, problema, justificación y objetivos.
- Marco referencial y metodología.
- Solución IoT y arquitectura de cinco capas.
- Gestión, almacenamiento y análisis de datos.
- Conocimiento, decisiones, resultados y referencias.

La ruta `/dashboard` presenta indicadores, preguntas de análisis y criterios de calidad de datos, junto con un enlace a un informe de Microsoft Power BI.

## Tecnologías

- React y TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React

## Requisitos

- Node.js 20.19 o superior, o 22.12 o superior.
- npm.

## Ejecutar localmente

Desde esta carpeta (`frontend`):

```powershell
npm ci
npm run dev
```

Vite muestra en la terminal la dirección local del sitio, normalmente <http://localhost:5173>.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run lint` | Ejecuta ESLint. |
| `npm run build` | Comprueba TypeScript y genera `dist/`. |
| `npm run preview` | Sirve localmente la compilación generada. |

## Estructura

```text
src/
├── components/     # Navegación y secciones del proyecto
├── pages/
│   ├── Home.tsx    # Página principal
│   └── Dashboard.tsx
├── App.tsx         # Rutas
└── main.tsx        # Entrada de React

public/
└── images/         # Imágenes e ilustraciones del proyecto
```

Consulta el [README principal](../README.md) para conocer el problema, los objetivos, la arquitectura y los avances reportados de SmartGreenZone.
