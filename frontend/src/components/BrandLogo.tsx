
import { Leaf } from 'lucide-react'

interface BrandLogoProps {
  light?: boolean
}

export default function BrandLogo({ light = false }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#062331]">
        <Leaf size={25} className="text-[#8BEA00]" strokeWidth={2.2} />
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-[#00C8F5]" />
      </div>

      <div className="flex flex-col leading-tight">
        <span
          className={`text-xl font-extrabold tracking-tight ${
            light ? 'text-white' : 'text-[#062331]'
          }`}
        >
          SmartGreen<span className="text-[#68B900]">Zone</span>
        </span>
        <span
          className={`mt-1 text-[9px] font-semibold uppercase tracking-[2px] ${
            light ? 'text-white/70' : 'text-slate-500'
          }`}
        >
          Smart Agriculture · IoT
        </span>
      </div>
    </div>
  )
}
