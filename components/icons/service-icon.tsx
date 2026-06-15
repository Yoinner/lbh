import { Anchor, Boxes, Ship, FileCheck, Users, type LucideProps } from 'lucide-react'
import type { ServiceIconName } from '@/lib/services'

const iconMap: Record<ServiceIconName, React.ComponentType<LucideProps>> = {
  agency: Anchor,
  logistics: Boxes,
  port: Ship,
  customs: FileCheck,
  husbandry: Users,
}

/**
 * Resolves a serializable service icon name into the matching Lucide icon.
 * Use this inside Client Components so that ServiceDef data passed across the
 * Server/Client boundary stays serializable (no function references).
 */
export function ServiceIcon({
  name,
  ...props
}: { name: ServiceIconName } & LucideProps) {
  const Icon = iconMap[name]
  return <Icon {...props} />
}
