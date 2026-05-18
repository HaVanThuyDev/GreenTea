import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Star, Plus, Check } from 'lucide-react'

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
  {
    id: 5, name: 'Trà Sữa Oolong Sương Mai', price: 5.80, rating: 4.8, reviews: 142,
    tag: 'Đặc Biệt', tagColor: '#06b6d4',
    desc: 'Trà oolong thơm mát hòa quyện với sữa tươi, thêm hạt thạch dừa giòn sần.',
    img: '/matcha_latte.png',
  },
  {
    id: 6, name: 'Matcha Dâu Tây Lạnh', price: 6.50, rating: 4.9, reviews: 278,
    tag: 'Hot Trend', tagColor: '#ef4444',
    desc: 'Matcha xanh mướt kết hợp dâu tây tươi ngọt, đá bào mịn — cực kỳ sảng khoái.',
    img: '/jasmine_milk_tea.png',
  },
  {
    id: 7, name: 'Trà Đen Chanh Muối', price: 4.90, rating: 4.6, reviews: 189,
    tag: 'Thanh Mát', tagColor: '#10b981',
    desc: 'Trà đen đậm đà kết hợp chanh muối truyền thống, vừa chua nhẹ vừa mặn mà.',
    img: '/taro_milk_tea.png',
  },
  {
    id: 8, name: 'Bạc Hà Chocolate Đá', price: 6.00, rating: 4.7, reviews: 167,
    tag: 'Phổ Biến', tagColor: '#6366f1',
    desc: 'Chocolate đắng nhẹ kết hợp bạc hà tươi mát, pha trên đá bào — thức uống lý tưởng mùa hè.',
    img: '/brown_sugar_tea.png',
  },
  {
    id: 9, name: 'Trà Shan Tuyết Mật Ong', price: 5.60, rating: 4.8, reviews: 203,
    tag: 'Thuần Việt', tagColor: '#d97706',
    desc: 'Trà shan tuyết cổ thụ Hà Giang nguyên chất, ngọt dịu tự nhiên từ mật ong rừng.',
    img: '/matcha_latte.png',
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
      whileHover={{ y: -6 }}
      className="product-card group flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img src={product.img} alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Tag */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow"
          style={{ background: product.tagColor }}>
          {product.tag}
        </span>
        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full glass text-white text-xs font-semibold">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          {product.rating}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug min-h-[2.5rem]">{product.name}</h3>
        <p className="text-gray-500 text-xs mb-4 leading-relaxed flex-1">{product.desc}</p>

        {/* Price + reviews */}
        <div className="mb-4">
          <span className="text-xl font-black text-brand-primary">
            {(product.price * 25000).toLocaleString('vi-VN')}₫
          </span>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-gray-400">{product.reviews} đánh giá</span>
          </div>
        </div>

        {/* Button — full width, consistent height */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleAdd}
          className="w-full h-11 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 transition-all duration-300"
          style={{
            background: added
              ? 'linear-gradient(135deg,#059669,#34c759)'
              : 'linear-gradient(135deg,#0f9d58,#34c759)',
            boxShadow: added ? '0 0 18px rgba(52,199,89,0.45)' : '0 4px 14px rgba(15,157,88,0.25)',
          }}
        >
          {added
            ? <><Check className="w-4 h-4" /> Đã Thêm!</>
            : <><Plus className="w-4 h-4" /> Thêm Vào Giỏ</>
          }
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function Menu({ onAddToCart }) {
  return (
    <section id="menu" className="py-28 px-6 bg-[#f9fdf9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
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

        {/* Cards grid — 3 cols on large, 2 on medium */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (idx % 3) * 0.1 }}
            >
              <ProductCard product={p} onAdd={onAddToCart} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
