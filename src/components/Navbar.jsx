import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, X, Menu, Leaf } from 'lucide-react'

const links = [
  { label: 'Trang Chủ', id: 'home' },
  { label: 'Về Chúng Tôi', id: 'about' },
  { label: 'Thực Đơn', id: 'menu' },
  { label: 'Đặc Điểm', id: 'features' },
  { label: 'Đánh Giá', id: 'reviews' },
  { label: 'Đặt Hàng', id: 'order' },
]

export default function Navbar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark shadow-lg py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollTo('home')}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white/20 flex items-center justify-center p-1">
            <img src="/logo.png" alt="Green Tea Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold text-white">
            Green tea
          </span>
        </motion.div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="nav-link text-white/80 hover:text-white">
              {l.label}
            </button>
          ))}
        </div>

        {/* Cart + Hamburger */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCartOpen}
            className="relative p-2 rounded-full glass text-white"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center text-white"
                style={{ background: 'linear-gradient(135deg,#f5c842,#fde68a)', color: '#1a2e1a' }}
              >
                {cartCount}
              </motion.span>
            )}
          </motion.button>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-dark overflow-hidden"
          >
            <div className="flex flex-col px-6 pb-6 pt-2 gap-4">
              {links.map((l) => (
                <button key={l.id} onClick={() => scrollTo(l.id)} className="text-white/80 hover:text-white text-left py-2 border-b border-white/10">
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
