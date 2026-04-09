import type { OrbConfig, OrbColor } from '../slides/types';
import { cn } from '../lib/cn';

interface AmbientOrbsProps {
  orbs?: OrbConfig[];
}

const driftClasses = [
  'orb-drift-1',
  'orb-drift-2',
  'orb-drift-3',
  'orb-drift-4',
  'orb-drift-5',
];

/** Pastel radial-gradient backgrounds — inline to avoid Tailwind purge */
const orbGradients: Record<OrbColor, string> = {
  blue:    'radial-gradient(circle, #93c5fd 0%, #93c5fd88 35%, transparent 65%)',
  violet:  'radial-gradient(circle, #c4b5fd 0%, #c4b5fd88 35%, transparent 65%)',
  cyan:    'radial-gradient(circle, #a5f3fc 0%, #a5f3fc88 35%, transparent 65%)',
  indigo:  'radial-gradient(circle, #a5b4fc 0%, #a5b4fc88 35%, transparent 65%)',
  rose:    'radial-gradient(circle, #fda4af 0%, #fda4af88 35%, transparent 65%)',
  emerald: 'radial-gradient(circle, #a7f3d0 0%, #a7f3d088 35%, transparent 65%)',
  amber:   'radial-gradient(circle, #fde68a 0%, #fde68a88 35%, transparent 65%)',
  sky:     'radial-gradient(circle, #bae6fd 0%, #bae6fd88 35%, transparent 65%)',
  fuchsia: 'radial-gradient(circle, #f0abfc 0%, #f0abfc88 35%, transparent 65%)',
  teal:    'radial-gradient(circle, #99f6e4 0%, #99f6e488 35%, transparent 65%)',
  orange:  'radial-gradient(circle, #fed7aa 0%, #fed7aa88 35%, transparent 65%)',
  lime:    'radial-gradient(circle, #d9f99d 0%, #d9f99d88 35%, transparent 65%)',
};

export function AmbientOrbs({ orbs }: AmbientOrbsProps) {
  if (!orbs?.length) return null;

  return (
    <>
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={cn('orb', driftClasses[i % driftClasses.length])}
          style={{
            background: orbGradients[orb.color],
            width: orb.size,
            height: orb.size,
            top: orb.top,
            bottom: orb.bottom,
            left: orb.left,
            right: orb.right,
            opacity: orb.opacity ?? 0.5,
            filter: `blur(${orb.blur ?? 80}px)`,
            animationDelay: `${i * -3.5}s`,
          }}
        />
      ))}
    </>
  );
}
