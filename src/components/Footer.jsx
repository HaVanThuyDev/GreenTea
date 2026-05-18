import { Leaf, Mail, Phone, MapPin, Star, Heart, Award, Droplet } from 'lucide-react'

const socialLinks = [
  { icon: <Heart className="w-5 h-5" />, href: '#', label: 'Instagram' },
  { icon: <Star className="w-5 h-5" />, href: '#', label: 'Facebook' },
  { icon: <Award className="w-5 h-5" />, href: '#', label: 'Twitter' },
  { icon: <Droplet className="w-5 h-5" />, href: '#', label: 'YouTube' },
]

const navLinks = [
  { label: 'Trang Chủ', id: 'home' },
  { label: 'Về Chúng Tôi', id: 'about' },
  { label: 'Thực Đơn', id: 'menu' },
  { label: 'Đặc Điểm', id: 'features' },
  { label: 'Đánh Giá', id: 'reviews' },
  { label: 'Đặt Hàng', id: 'order' },
]

const menuItems = [
  'Matcha Latte Thượng Hạng',
  'Trà Sữa Khoai Môn Boba',
  'Trà Sữa Hoa Nhài',
  'Trà Đường Nâu Tiger',
  'Đặc Biệt Theo Mùa',
  'Đặt Theo Yêu Cầu',
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white/20 flex items-center justify-center p-1">
                <img src="/logo.png" alt="Green Tea Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold">Green Tea</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Trà sữa cao cấp được pha chế từ lá trà hữu cơ và nguyên liệu tươi sạch.
              Thưởng thức tinh hoa thiên nhiên trong từng ngụm.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-brand-primary flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-5">Liên Kết Nhanh</h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <button onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-bold text-white mb-5">Thực Đơn</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {menuItems.map((item) => (
                <li key={item} className="hover:text-green-400 cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                123 Đường Trà Xanh, Quận Xanh, TP. Hồ Chí Minh
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                0912 345 678
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                xin.chao@greentea.vn
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-2">Nhận ưu đãi độc quyền qua email</p>
              <div className="flex">
                <input type="email" placeholder="email@cua.ban"
                  className="flex-1 bg-gray-800 text-white text-sm px-4 py-2.5 rounded-l-xl border border-gray-700 focus:outline-none focus:border-green-500" />
                <button className="px-4 py-2.5 rounded-r-xl text-sm font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg,#0f9d58,#34c759)' }}>
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2025 GreenTea. Bảo lưu mọi quyền. Làm với 🍃 và tình yêu.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-400 transition-colors">Chính Sách Bảo Mật</a>
            <a href="#" className="hover:text-green-400 transition-colors">Điều Khoản Dịch Vụ</a>
            <a href="#" className="hover:text-green-400 transition-colors">Chính Sách Hoàn Tiền</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
