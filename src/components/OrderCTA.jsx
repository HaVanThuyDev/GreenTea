import { motion } from 'framer-motion'
import FloatingLeaves from './FloatingLeaves'

export default function OrderCTA() {
  const scrollToMenu = () => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="order" className="relative py-32 px-6 overflow-hidden">
      {/* Animated gradient bg */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a3d1f 0%, #0f9d58 40%, #34c759 70%, #a8e063 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 8s ease infinite',
        }} />

      {/* Hero bg image overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'url(/hero_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />

      <div className="absolute inset-0 bg-black/10" />

      <FloatingLeaves />

      {/* Glow circle */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(168,224,99,0.4) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-4 py-1 rounded-full text-sm font-medium text-green-200 mb-6 glass">
            🍃 Limited Time — Free Delivery Today Only
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Ready for Your
            <br />
            <span className="gradient-text-gold">Perfect Cup?</span>
          </h2>

          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Join over 10,000 tea lovers who start their day with Green Tea.
            Order now and experience premium freshness delivered to your door.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.06, boxShadow: '0 12px 40px rgba(245,200,66,0.6)' }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToMenu}
              className="ripple-effect px-12 py-5 rounded-full font-black text-xl text-gray-900"
              style={{ background: 'linear-gradient(135deg,#f5c842,#fde68a)' }}
            >
              Order Now ✨
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-12 py-5 rounded-full font-bold text-xl text-white"
              style={{ border: '2px solid rgba(255,255,255,0.5)' }}
            >
              View Menu
            </motion.button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            {['✓ Free delivery on first order', '✓ 30-min guarantee', '✓ 100% organic'].map((b) => (
              <span key={b} className="font-medium">{b}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
