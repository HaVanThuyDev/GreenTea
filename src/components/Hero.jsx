import { motion } from 'framer-motion'
import FloatingLeaves from './FloatingLeaves'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToMenu = () => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  const scrollDown = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a3d1f 0%, #0f5e35 25%, #0f9d58 55%, #34c759 80%, #a8e063 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 10s ease infinite',
        }}
      />

      {/* Hero bg image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/hero_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Floating leaves */}
      <FloatingLeaves />

      {/* Decorative circles */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(52,199,89,0.3) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-green-200"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          100% Organic · Farm to Cup
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6"
        >
          Fresh Green Tea
          <br />
          <span className="gradient-text-gold">Experience</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafted from the finest organic tea leaves, our premium milk tea collection
          brings nature's freshness to every sip. Taste the difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 12px 40px rgba(245,200,66,0.5)' }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToMenu}
            className="ripple-effect px-10 py-4 rounded-full font-bold text-lg text-gray-900"
            style={{ background: 'linear-gradient(135deg,#f5c842,#fde68a)' }}
          >
            Order Now ✨
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline text-white border-white/50"
          >
            Our Story
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-8 mt-20"
        >
          {[['10K+','Happy Customers'],['50+','Unique Flavors'],['100%','Organic Leaves'],['5★','Rating']].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black text-white">{num}</div>
              <div className="text-sm text-white/60 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>

      {/* Bottom wave */}
      <div className="section-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f9fdf9" />
        </svg>
      </div>
    </section>
  )
}
