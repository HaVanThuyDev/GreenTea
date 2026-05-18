import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, Award, Heart } from 'lucide-react'

const badges = [
  { icon: <Leaf className="w-4 h-4" />, label: 'Organic' },
  { icon: <Award className="w-4 h-4" />, label: 'Award Winning' },
  { icon: <Heart className="w-4 h-4" />, label: 'Loved by Thousands' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28 px-6 bg-white relative overflow-hidden">
      {/* Bg decoration */}
      <div className="absolute -left-40 top-20 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #34c759, transparent)' }} />
      <div className="absolute -right-40 bottom-20 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #0f9d58, transparent)' }} />

      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src="/about_img.png" alt="Artisan tea brewing" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          {/* Floating glass card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-6 -right-6 glass-dark rounded-2xl p-5 shadow-xl"
          >
            <div className="text-3xl font-black text-white">5+</div>
            <div className="text-green-300 text-sm">Years of Excellence</div>
            <div className="flex gap-1 mt-2">
              {'★★★★★'.split('').map((s, i) => <span key={i} className="text-yellow-400 text-xs">{s}</span>)}
            </div>
          </motion.div>
          {/* Green accent box */}
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl opacity-80"
            style={{ background: 'linear-gradient(135deg,#0f9d58,#34c759)' }} />
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-block px-4 py-1 rounded-full text-sm font-medium text-brand-primary mb-4"
            style={{ background: 'rgba(15,157,88,0.1)' }}>
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6 section-title text-left">
            Rooted in Nature,<br />
            <span className="gradient-text">Brewed with Love</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Born from a deep love of authentic green tea culture, Green Tea was founded to bring the 
            pure essence of nature's finest leaves to every cup. We source premium organic tea directly 
            from sustainable farms, ensuring every sip tells a story of craftsmanship and care.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            From the misty mountains of Asia to your hands — we believe great tea changes how you feel. 
            Each blend is a masterwork of balance, freshness, and unforgettable taste.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {badges.map(({ icon, label }) => (
              <div key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border font-medium text-sm text-brand-primary"
                style={{ borderColor: 'rgba(15,157,88,0.3)', background: 'rgba(15,157,88,0.06)' }}>
                {icon} {label}
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary ripple-effect"
          >
            Explore Our Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
