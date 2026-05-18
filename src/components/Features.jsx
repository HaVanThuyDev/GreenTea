import { motion } from 'framer-motion'
import { Leaf, Zap, Shield, Truck, Droplets, Award } from 'lucide-react'

const features = [
  {
    icon: <Leaf className="w-7 h-7 text-white" />,
    title: 'Lá Trà Hữu Cơ',
    desc: 'Được thu hái từ các trang trại hữu cơ được chứng nhận, không thuốc trừ sâu, giữ trọn sự tinh khiết của thiên nhiên trong từng ngụm.',
    delay: 0.1,
  },
  {
    icon: <Droplets className="w-7 h-7 text-white" />,
    title: 'Nguyên Liệu Tươi Sạch',
    desc: 'Chúng tôi chỉ dùng sữa tươi, trái cây theo mùa và siro thủ công — không hương liệu nhân tạo, không phẩm màu.',
    delay: 0.2,
  },
  {
    icon: <Zap className="w-7 h-7 text-white" />,
    title: 'Giao Hàng Nhanh',
    desc: 'Đơn hàng của bạn đến trong vòng 30 phút, đảm bảo tươi ngon và mát lạnh — mỗi lần đều như vậy.',
    delay: 0.3,
  },
  {
    icon: <Shield className="w-7 h-7 text-white" />,
    title: 'Chứng Nhận Chất Lượng',
    desc: 'Đạt chứng nhận hữu cơ USDA và tiêu chuẩn ISO, đảm bảo an toàn thực phẩm và chất lượng cao nhất.',
    delay: 0.4,
  },
  {
    icon: <Award className="w-7 h-7 text-white" />,
    title: 'Giải Thưởng Uy Tín',
    desc: 'Được vinh danh là thương hiệu trà sữa cao cấp số 1 tại Giải Thưởng Ẩm Thực Châu Á 2024 và 2025.',
    delay: 0.5,
  },
  {
    icon: <Truck className="w-7 h-7 text-white" />,
    title: 'Bao Bì Thân Thiện',
    desc: '100% ly và ống hút phân hủy sinh học — vì chúng tôi yêu thiên nhiên không kém gì yêu trà.',
    delay: 0.6,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f9fdf9 0%, #e8f9ee 100%)' }}>
      {/* Decorative bg circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #0f9d58, transparent)' }} />

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
            Tại Sao Chọn Chúng Tôi
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 section-title">
            Điều Làm Nên
            <br /><span className="gradient-text">Sự Khác Biệt Green Tea</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto">
            Chúng tôi không chỉ pha trà — chúng tôi tạo ra những trải nghiệm nuôi dưỡng cơ thể và tâm hồn bạn.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: f.delay }}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(15,157,88,0.15)' }}
              className="p-8 rounded-3xl bg-white transition-all duration-300 cursor-default"
              style={{ boxShadow: '0 8px 30px rgba(15,157,88,0.08)' }}
            >
              <div className="feature-icon mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
