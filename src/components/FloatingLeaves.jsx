import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const NUM_PARTICLES = 18

function randomBetween(a, b) { return a + Math.random() * (b - a) }

export default function FloatingLeaves() {
  const leaves = Array.from({ length: NUM_PARTICLES }, (_, i) => ({
    id: i,
    left: `${randomBetween(0, 100)}%`,
    size: randomBetween(18, 48),
    delay: randomBetween(0, 10),
    duration: randomBetween(8, 18),
    rotate: randomBetween(-60, 60),
    opacity: randomBetween(0.25, 0.65),
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          style={{ left: leaf.left, bottom: '-60px', width: leaf.size, height: leaf.size }}
          animate={{
            y: [0, -window.innerHeight - 100],
            rotate: [leaf.rotate, leaf.rotate + 360],
            opacity: [0, leaf.opacity, leaf.opacity, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute"
        >
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 4C32 4 8 20 8 40C8 52 18 60 32 60C46 60 56 52 56 40C56 20 32 4 32 4Z"
              fill="rgba(52,199,89,0.7)"
            />
            <path d="M32 8C32 8 32 56 32 60" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M32 20 Q42 30 50 42" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
            <path d="M32 20 Q22 30 14 42" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
