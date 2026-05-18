import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShoppingCart, Star, Plus } from 'lucide-react'

export const products = [
  {
    id: 1, name: 'Matcha Latte Thượng Hạng', price: 5.90, rating: 4.9, reviews: 284,
    tag: 'Bán Chạy', tagColor: '#0f9d58',
    desc: 'Matcha hạng cao được pha với sữa yến mạch hữu cơ, mịn màng và đậm đà.',
    img: '/matcha_latte.png',
  },
  {
    id: 2, name: 'Trà Sữa Khoai Môn Boba', price: 5.50, rating: 4.8, reviews: 196,
    tag: 'Yêu Thích', tagColor: '#8b5cf6',
    desc: 'Khoai môn béo mịn với trân châu dai ngon và hương trà xanh nhẹ nhàng.',
    img: '/taro_milk_tea.png',
  },
  {
    id: 3, name: 'Trà Sữa Hoa Nhài', price: 5.20, rating: 4.7, reviews: 153,
    tag: 'Thanh Hoa', tagColor: '#ec4899',
    desc: 'Hương hoa nhài tinh tế ướp trong trà xanh tươi, pha cùng sữa mịn màng.',
    img: '/jasmine_milk_tea.png',
  },
  {
    id: 4, name: 'Trà Đường Nâu Tiger', price: 6.20, rating: 4.9, reviews: 311,
    tag: 'Mới', tagColor: '#f59e0b',
    desc: 'Đường nâu caramel quyện cùng trà xanh tươi và trân châu caramel thơm ngon.',
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
            <span className="text-2xl font-black text-brand-primary">{(product.price * 25000).toLocaleString('vi-VN')}₫</span>
            <span className="text-xs text-gray-400 ml-2">({product.reviews} đánh giá)</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg,#0f9d58,#34c759)',
              boxShadow: added ? '0 0 20px rgba(52,199,89,0.5)' : 'none',
            }}
          >
            {added ? '✓ Đã Thêm' : <><Plus className="w-4 h-4" /> Thêm</>}
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
            Thực Đơn Của Chúng Tôi
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 section-title">
            Thưởng Thức Điều Gì Đó
            <br /><span className="gradient-text">Thật Đặc Biệt</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            Mỗi thức uống được pha chế thủ công với tình yêu từ những nguyên liệu hữu cơ cao cấp,
            tuyển chọn từ những vườn trà tốt nhất thế giới.
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
