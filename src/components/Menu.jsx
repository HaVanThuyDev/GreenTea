import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShoppingCart, Star, Plus } from 'lucide-react'

export const products = [
  {
    id: 1, name: 'Matcha Latte Supreme', price: 5.90, rating: 4.9, reviews: 284,
    tag: 'Bestseller', tagColor: '#0f9d58',
    desc: 'Velvety ceremonial-grade matcha blended with organic oat milk.',
    img: '/matcha_latte.png',
  },
  {
    id: 2, name: 'Taro Dream Boba', price: 5.50, rating: 4.8, reviews: 196,
    tag: 'Fan Favorite', tagColor: '#8b5cf6',
    desc: 'Creamy taro with chewy tapioca pearls and a hint of green tea.',
    img: '/taro_milk_tea.png',
  },
  {
    id: 3, name: 'Jasmine Milk Tea', price: 5.20, rating: 4.7, reviews: 153,
    tag: 'Floral', tagColor: '#ec4899',
    desc: 'Delicate jasmine blossoms steeped in fresh green tea with silky milk.',
    img: '/jasmine_milk_tea.png',
  },
  {
    id: 4, name: 'Tiger Brown Sugar', price: 6.20, rating: 4.9, reviews: 311,
    tag: 'New', tagColor: '#f59e0b',
    desc: 'Bold brown sugar swirl over fresh green tea with caramel tapioca.',
    img: '/brown_sugar_tea.png',
  },
]

function ProductCard({ product, onAdd }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAdd(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="product-card group"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img src={product.img} alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Tag */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white"
          style={{ background: product.tagColor }}>
          {product.tag}
        </span>
        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full glass text-white text-xs font-medium">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          {product.rating}
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{product.desc}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-black text-brand-primary">${product.price.toFixed(2)}</span>
            <span className="text-xs text-gray-400 ml-2">({product.reviews} reviews)</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300"
            style={{
              background: added
                ? 'linear-gradient(135deg,#0f9d58,#34c759)'
                : 'linear-gradient(135deg,#0f9d58,#34c759)',
              boxShadow: added ? '0 0 20px rgba(52,199,89,0.5)' : 'none',
            }}
          >
            {added ? '✓ Added' : <><Plus className="w-4 h-4" /> Add</>}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Menu({ onAddToCart }) {
  return (
    <section id="menu" className="py-28 px-6 bg-[#f9fdf9] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
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
            Our Menu
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 section-title">
            Sip Into Something
            <br /><span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            Every drink is handcrafted with love using premium organic ingredients 
            sourced from the world's finest tea gardens.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
