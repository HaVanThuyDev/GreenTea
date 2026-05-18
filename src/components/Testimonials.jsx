import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1, name: 'Linh Nguyen', role: 'Food Blogger · @linhsips',
    avatar: 'https://i.pravatar.cc/100?img=47',
    stars: 5, date: 'May 2025',
    text: `"Green Tea completely ruined every other milk tea for me. The matcha latte is so velvety and rich — you can taste the quality in every sip. I've been coming back every single day for three months!"`,
  },
  {
    id: 2, name: 'Minh Tran', role: 'Software Engineer',
    avatar: 'https://i.pravatar.cc/100?img=12',
    stars: 5, date: 'April 2025',
    text: `"I'm obsessed with the Taro Dream Boba. The pearls are always perfectly chewy and the flavor is so authentic — not too sweet, not too bland. Green Tea has genuinely raised the bar for the whole industry."`,
  },
  {
    id: 3, name: 'Sophie Chen', role: 'Interior Designer',
    avatar: 'https://i.pravatar.cc/100?img=32',
    stars: 5, date: 'March 2025',
    text: `"The packaging, the branding, the taste — everything is premium. I ordered for my team and everyone absolutely loved it. The Tiger Brown Sugar is now our Friday tradition. Cannot recommend enough!"`,
  },
  {
    id: 4, name: 'James Pham', role: 'Fitness Coach',
    avatar: 'https://i.pravatar.cc/100?img=8',
    stars: 5, date: 'May 2025',
    text: `"Even as a health-conscious person, I feel great drinking Green Tea. Knowing the ingredients are 100% organic makes all the difference. The Jasmine Milk Tea is light, refreshing and absolutely beautiful."`,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const t = testimonials[current]

  return (
    <section id="reviews" className="py-28 px-6 bg-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #0f9d58 0%, transparent 50%), radial-gradient(circle at 80% 50%, #34c759 0%, transparent 50%)' }} />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full text-sm font-medium text-brand-primary mb-4"
            style={{ background: 'rgba(15,157,88,0.1)' }}>
            Customer Love
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 section-title">
            Real Stories,<br />
            <span className="gradient-text">Real Flavors</span>
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="testimonial-card max-w-3xl mx-auto text-center"
            >
              <Quote className="w-10 h-10 mx-auto mb-6 text-brand-primary opacity-40" />
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">{t.text}</p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full mx-auto mb-3 ring-2 ring-green-300" />
              <div className="font-bold text-gray-900">{t.name}</div>
              <div className="text-sm text-gray-400">{t.role} · {t.date}</div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div className="flex justify-center gap-4 mt-10">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={prev} className="w-12 h-12 rounded-full border-2 border-green-200 flex items-center justify-center text-brand-primary hover:border-brand-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 self-center ${i === current ? 'w-8 bg-brand-primary' : 'bg-green-200'}`} />
            ))}
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={next} className="w-12 h-12 rounded-full border-2 border-green-200 flex items-center justify-center text-brand-primary hover:border-brand-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
