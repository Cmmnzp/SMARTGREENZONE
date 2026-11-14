import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, MouseEvent } from 'react'
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  ImagePlus,
  Images,
  X,
  ZoomIn,
} from 'lucide-react'

import {
  galleryCategories,
  galleryPhotos,
  getGalleryPhotoUrl,
  type GalleryCategoryId,
  type GalleryPhoto,
} from '../data/architectureGallery'

type GalleryFilter = GalleryCategoryId | 'todas'

const categoryLabels = Object.fromEntries(
  galleryCategories.map((category) => [category.id, category.label]),
) as Record<GalleryCategoryId, string>

const filters = [
  { id: 'todas' as const, label: 'Todas', icon: Images },
  ...galleryCategories,
]

function countPhotos(filter: GalleryFilter): number {
  return filter === 'todas'
    ? galleryPhotos.length
    : galleryPhotos.filter((photo) => photo.category === filter).length
}

/* ── Tarjeta ──────────────────────────────────────────────── */

interface PhotoCardProps {
  photo: GalleryPhoto
  isMissing: boolean
  onOpen: (id: string) => void
  onMissing: (id: string) => void
}

function PhotoCard({ photo, isMissing, onOpen, onMissing }: PhotoCardProps) {
  return (
    <li>
      <figure className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#8BEA00]/60 hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#EAF0F1]">
          {isMissing ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#EAF4F2] to-[#E8F7FB] p-5 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#579900] shadow-sm">
                <ImagePlus size={24} aria-hidden="true" />
              </span>
              <p className="text-xs font-bold text-[#062331]">
                Foto pendiente
              </p>
              <code className="break-all rounded bg-white/70 px-2 py-1 text-[10px] text-slate-500">
                images/arquitectura/{photo.file}
              </code>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => onOpen(photo.id)}
              aria-label={`Ampliar foto: ${photo.title}`}
              className="block h-full w-full cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#65B900]"
            >
              <img
                src={getGalleryPhotoUrl(photo)}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                onError={() => onMissing(photo.id)}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#062331]/85 text-white opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100"
              >
                <ZoomIn size={15} />
              </span>
            </button>
          )}

          <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-[#062331]/90 px-3 py-1.5 text-[10px] font-bold text-white">
            {categoryLabels[photo.category]}
          </span>
        </div>

        <figcaption className="p-5">
          <h4 className="text-sm font-bold text-[#062331]">{photo.title}</h4>
          <p className="mt-1.5 text-xs leading-5 text-slate-500">
            {photo.description}
          </p>
        </figcaption>
      </figure>
    </li>
  )
}

/* ── Visor ampliado ───────────────────────────────────────── */

interface LightboxProps {
  photos: readonly GalleryPhoto[]
  activeId: string
  onChange: (id: string) => void
  onClose: () => void
}

function Lightbox({ photos, activeId, onChange, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  // <dialog> nativo: atrapa el foco, cierra con Escape y devuelve
  // el foco al elemento que lo abrió, sin librerías adicionales.
  useEffect(() => {
    const dialog = dialogRef.current
    dialog?.showModal()
    return () => dialog?.close()
  }, [])

  const index = photos.findIndex((photo) => photo.id === activeId)
  const photo = photos[index]

  if (!photo) return null

  const hasSiblings = photos.length > 1

  const step = (offset: number) => {
    const next = (index + offset + photos.length) % photos.length
    onChange(photos[next].id)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (!hasSiblings) return
    if (event.key === 'ArrowLeft') step(-1)
    if (event.key === 'ArrowRight') step(1)
  }

  // El clic sobre el fondo (el propio <dialog>) cierra el visor.
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  const controlClass =
    'flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8BEA00]'

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      aria-label={`Foto ampliada: ${photo.title}`}
      className="m-auto w-full max-w-5xl bg-transparent p-4 backdrop:bg-[#062331]/95"
    >
      <div className="mb-4 flex items-center justify-between gap-4 text-white">
        <div>
          <h3 className="text-lg font-bold">{photo.title}</h3>
          <p className="mt-0.5 text-xs text-slate-300">
            {categoryLabels[photo.category]} · {index + 1} de {photos.length}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar visor"
          className={controlClass}
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        {hasSiblings && (
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Foto anterior"
            className={controlClass}
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
        )}

        <img
          key={photo.id}
          src={getGalleryPhotoUrl(photo)}
          alt={photo.alt}
          className="max-h-[72vh] min-w-0 flex-1 rounded-xl object-contain"
        />

        {hasSiblings && (
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Foto siguiente"
            className={controlClass}
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        )}
      </div>

      <p aria-live="polite" className="mt-4 text-center text-sm text-slate-300">
        {photo.description}
      </p>
    </dialog>
  )
}

/* ── Galería ──────────────────────────────────────────────── */

export default function ArchitectureGallery() {
  const [filter, setFilter] = useState<GalleryFilter>('todas')
  const [openId, setOpenId] = useState<string | null>(null)
  const [missingIds, setMissingIds] = useState<ReadonlySet<string>>(
    () => new Set(),
  )

  const visiblePhotos =
    filter === 'todas'
      ? galleryPhotos
      : galleryPhotos.filter((photo) => photo.category === filter)

  // El visor solo recorre las fotos que sí cargaron.
  const viewablePhotos = visiblePhotos.filter(
    (photo) => !missingIds.has(photo.id),
  )

  const markAsMissing = (id: string) =>
    setMissingIds((current) => new Set(current).add(id))

  return (
    <section className="mt-14" aria-labelledby="galeria-arquitectura-titulo">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#65B900]">
            <Camera size={13} aria-hidden="true" />
            Registro fotográfico
          </span>
          <h3
            id="galeria-arquitectura-titulo"
            className="mt-2 text-2xl font-extrabold text-[#062331]"
          >
            La arquitectura en el prototipo real
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            Fotografías de la maqueta, de los sensores instalados y del
            sistema en funcionamiento.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filtrar fotos por categoría"
          className="flex flex-wrap gap-2"
        >
          {filters.map(({ id, label, icon: Icon }) => {
            const isActive = filter === id

            return (
              <button
                key={id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setFilter(id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#65B900] ${
                  isActive
                    ? 'border-[#062331] bg-[#062331] text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-[#8BEA00] hover:text-[#062331]'
                }`}
              >
                <Icon size={14} aria-hidden="true" />
                {label}
                <span
                  className={isActive ? 'text-[#8BEA00]' : 'text-slate-400'}
                >
                  {countPhotos(id)}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <ul className="grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isMissing={missingIds.has(photo.id)}
            onOpen={setOpenId}
            onMissing={markAsMissing}
          />
        ))}
      </ul>

      {openId && (
        <Lightbox
          photos={viewablePhotos}
          activeId={openId}
          onChange={setOpenId}
          onClose={() => setOpenId(null)}
        />
      )}
    </section>
  )
}
