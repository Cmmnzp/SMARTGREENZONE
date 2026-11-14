import { Box, Cpu, PlayCircle, type LucideIcon } from 'lucide-react'

/**
 * Galería fotográfica de la sección "Arquitectura".
 *
 * CÓMO AGREGAR UNA FOTO
 * 1. Copia el archivo en `public/images/arquitectura/<categoria>/`
 *    (nombres en minúscula, sin espacios ni tildes: `vista-frontal.jpg`).
 * 2. Agrega un objeto al arreglo `galleryPhotos` con la ruta relativa
 *    a `public/images/arquitectura/`.
 *
 * Si el archivo todavía no existe, la tarjeta muestra un marcador
 * indicando la ruta esperada, así que el sitio nunca queda con imágenes rotas.
 */

export type GalleryCategoryId = 'maqueta' | 'sensores' | 'funcionamiento'

export interface GalleryCategory {
  id: GalleryCategoryId
  label: string
  icon: LucideIcon
}

export interface GalleryPhoto {
  /** Identificador único y estable (se usa como key de React). */
  id: string
  category: GalleryCategoryId
  title: string
  /** Descripción visible bajo la foto. */
  description: string
  /** Texto alternativo: describe lo que se ve, para lectores de pantalla. */
  alt: string
  /** Ruta relativa a `public/images/arquitectura/`. */
  file: string
}

export const galleryCategories: readonly GalleryCategory[] = [
  { id: 'maqueta', label: 'Maqueta', icon: Box },
  { id: 'sensores', label: 'Sensores', icon: Cpu },
  { id: 'funcionamiento', label: 'Funcionamiento', icon: PlayCircle },
]

export const galleryPhotos: readonly GalleryPhoto[] = [
  // ── Maqueta ────────────────────────────────────────────────
  {
    id: 'maqueta-vista-general',
    category: 'maqueta',
    title: 'Vista general de la maqueta',
    description: 'Montaje completo del prototipo SmartGreenZone.',
    alt: 'Vista general de la maqueta del prototipo SmartGreenZone',
    file: 'maqueta/vista-general.jpg',
  },
  {
    id: 'maqueta-vista-superior',
    category: 'maqueta',
    title: 'Vista superior',
    description: 'Distribución de la zona de cultivo y del cableado.',
    alt: 'Vista superior de la maqueta con la zona de cultivo y el cableado',
    file: 'maqueta/vista-superior.jpg',
  },
  {
    id: 'maqueta-detalle-esp32',
    category: 'maqueta',
    title: 'Ubicación del ESP32',
    description: 'Unidad de adquisición instalada dentro de la maqueta.',
    alt: 'ESP32 instalado dentro de la maqueta y conectado a la protoboard',
    file: 'maqueta/detalle-esp32.jpg',
  },

  // ── Sensores ───────────────────────────────────────────────
  {
    id: 'sensor-dht22',
    category: 'sensores',
    title: 'DHT22',
    description: 'Temperatura y humedad del aire.',
    alt: 'Sensor DHT22 instalado en la maqueta',
    file: 'sensores/dht22.jpg',
  },
  {
    id: 'sensor-bh1750',
    category: 'sensores',
    title: 'BH1750',
    description: 'Intensidad lumínica sobre el cultivo.',
    alt: 'Sensor de luz BH1750 instalado en la maqueta',
    file: 'sensores/bh1750.jpg',
  },
  {
    id: 'sensor-mq2',
    category: 'sensores',
    title: 'MQ-2',
    description: 'Lectura analógica de gases y humo.',
    alt: 'Sensor MQ-2 instalado en la maqueta',
    file: 'sensores/mq2.jpg',
  },
  {
    id: 'sensor-humedad-suelo',
    category: 'sensores',
    title: 'Sensor capacitivo',
    description: 'Humedad del sustrato.',
    alt: 'Sensor capacitivo de humedad insertado en el sustrato',
    file: 'sensores/humedad-suelo.jpg',
  },
  {
    id: 'sensor-ds18b20',
    category: 'sensores',
    title: 'DS18B20',
    description: 'Sonda de temperatura del suelo.',
    alt: 'Sonda DS18B20 insertada en el sustrato',
    file: 'sensores/ds18b20.jpg',
  },

  // ── Funcionamiento ─────────────────────────────────────────
  {
    id: 'funcionamiento-sistema-encendido',
    category: 'funcionamiento',
    title: 'Sistema en operación',
    description: 'Prototipo energizado y tomando mediciones.',
    alt: 'Prototipo SmartGreenZone encendido y tomando mediciones',
    file: 'funcionamiento/sistema-encendido.jpg',
  },
  {
    id: 'funcionamiento-lecturas',
    category: 'funcionamiento',
    title: 'Lecturas en tiempo real',
    description: 'Mediciones del prototipo visibles en el dashboard.',
    alt: 'Maqueta funcionando junto a la pantalla con las lecturas en tiempo real',
    file: 'funcionamiento/lecturas-tiempo-real.jpg',
  },
  {
    id: 'funcionamiento-prueba-campo',
    category: 'funcionamiento',
    title: 'Prueba de funcionamiento',
    description: 'Validación de la respuesta de los sensores.',
    alt: 'Prueba de funcionamiento de los sensores sobre la maqueta',
    file: 'funcionamiento/prueba-sensores.jpg',
  },
]

const GALLERY_BASE_PATH = `${import.meta.env.BASE_URL}images/arquitectura/`

/** URL pública de una foto (respeta el `base` configurado en Vite). */
export function getGalleryPhotoUrl(photo: GalleryPhoto): string {
  return `${GALLERY_BASE_PATH}${photo.file}`
}
