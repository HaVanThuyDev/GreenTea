import { Leaf, Mail, Phone, MapPin, Star, Heart, Award, Droplet } from 'lucide-react'

const socialLinks = [
  { icon: <Heart className="w-5 h-5" />, href: '#', label: 'Instagram' },
  { icon: <Star className="w-5 h-5" />, href: '#', label: 'Facebook' },
  { icon: <Award className="w-5 h-5" />, href: '#', label: 'Twitter' },
  { icon: <Droplet className="w-5 h-5" />, href: '#', label: 'YouTube' },
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
              <span className="text-xl font-bold">Green tea</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium milk tea crafted with organic leaves and fresh ingredients. 
              Taste nature's finest, one sip at a time.
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
            <h4 className="font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['Home','About','Menu','Features','Reviews','Order'].map((l) => (
                <li key={l}>
                  <button onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-bold text-white mb-5">Our Menu</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['Matcha Latte Supreme','Taro Dream Boba','Jasmine Milk Tea','Tiger Brown Sugar','Seasonal Specials','Custom Orders'].map((item) => (
                <li key={item} className="hover:text-green-400 cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                123 Tea Garden Lane, Green District, GD 10001
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                +1 (555) 234-5678
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                hello@greentea.com
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-2">Get exclusive deals in your inbox</p>
              <div className="flex">
                <input type="email" placeholder="your@email.com"
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
          <p>© 2025 GreenTea. All rights reserved. Made with 🍃 and love.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-400 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
