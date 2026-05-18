import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, ChevronRight, ArrowLeft, CreditCard, Lock } from 'lucide-react'

/* ─── SVG logos ─────────────────────────────────────── */
const VNPayLogo = () => (
  <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-7">
    <rect width="120" height="40" rx="6" fill="#005BAA"/>
    <text x="10" y="28" fontFamily="Arial" fontWeight="800" fontSize="20" fill="#FFCC00">VN</text>
    <text x="42" y="28" fontFamily="Arial" fontWeight="800" fontSize="20" fill="white">PAY</text>
  </svg>
)

const MoMoLogo = () => (
  <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-7">
    <rect width="120" height="40" rx="6" fill="#A50064"/>
    <circle cx="28" cy="20" r="10" fill="white" opacity="0.9"/>
    <circle cx="28" cy="20" r="6" fill="#A50064"/>
    <text x="45" y="27" fontFamily="Arial" fontWeight="800" fontSize="18" fill="white">MoMo</text>
  </svg>
)

/* ─── Payment methods config ─────────────────────────── */
const METHODS = [
  {
    id: 'vnpay',
    name: 'VNPay',
    tagline: 'Thanh toán qua QR / Thẻ nội địa / Internet Banking',
    color: 'from-blue-700 to-blue-500',
    border: 'border-blue-500',
    bg: 'bg-blue-50',
    icon: <VNPayLogo />,
    badge: 'Phổ biến',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'momo',
    name: 'Ví MoMo',
    tagline: 'Thanh toán qua ví điện tử MoMo, nhận hoàn tiền hấp dẫn',
    color: 'from-pink-700 to-pink-500',
    border: 'border-pink-500',
    bg: 'bg-pink-50',
    icon: <MoMoLogo />,
    badge: 'Ưu đãi',
    badgeColor: 'bg-pink-100 text-pink-700',
  },
]

/* ─── Steps ──────────────────────────────────────────── */
// step: 'select' | 'processing' | 'success'

export default function PaymentModal({ total, itemCount, onClose, onSuccess }) {
  const [step, setStep] = useState('select')
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)

  const handleConfirm = () => {
    if (!selected) return
    setStep('processing')
    // Simulate payment gateway redirect → success
    setTimeout(() => setStep('success'), 2800)
  }

  const handleDone = () => {
    onSuccess?.()
    onClose()
  }

  return (
    <AnimatePresence>
      {/* ── Overlay ── */}
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
        onClick={step === 'select' ? onClose : undefined}
      >
        {/* ── Modal card ── */}
        <motion.div
          key="card"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', damping: 22, stiffness: 260 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* top gradient bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400" />

          {/* ══════════════ STEP: SELECT ══════════════ */}
          {step === 'select' && (
            <div className="px-7 py-6">
              {/* header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-extrabold text-gray-900">Chọn phương thức thanh toán</h2>
                  <p className="text-sm text-gray-400 mt-0.5">Đơn hàng • {itemCount} sản phẩm</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* order summary */}
              <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl px-5 py-4 mb-6 border border-green-100">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <CreditCard className="w-4 h-4 text-green-600" />
                  <span>Tổng thanh toán</span>
                </div>
                <span className="text-2xl font-black text-green-600">
                  {total.toLocaleString('vi-VN')}₫
                </span>
              </div>

              {/* payment methods */}
              <div className="space-y-3 mb-6">
                {METHODS.map((m) => {
                  const isSelected = selected === m.id
                  return (
                    <motion.button
                      key={m.id}
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      onHoverStart={() => setHovered(m.id)}
                      onHoverEnd={() => setHovered(null)}
                      onClick={() => setSelected(m.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-200 text-left
                        ${isSelected
                          ? `${m.border} ${m.bg} shadow-md`
                          : 'border-gray-100 bg-gray-50 hover:border-gray-300'
                        }`}
                    >
                      {/* radio dot */}
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                        ${isSelected ? `${m.border} border-2` : 'border-gray-300'}`}>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${m.color}`}
                          />
                        )}
                      </div>

                      {/* logo */}
                      <div className="flex-shrink-0">{m.icon}</div>

                      {/* text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900 text-sm">{m.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${m.badgeColor}`}>
                            {m.badge}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5 leading-tight">{m.tagline}</p>
                      </div>

                      <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-colors ${isSelected ? 'text-gray-600' : 'text-gray-300'}`} />
                    </motion.button>
                  )
                })}
              </div>

              {/* secure note */}
              <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-5">
                <Lock className="w-3.5 h-3.5" />
                <span>Giao dịch được mã hóa SSL 256-bit, an toàn tuyệt đối</span>
              </div>

              {/* confirm button */}
              <motion.button
                whileHover={selected ? { scale: 1.02 } : {}}
                whileTap={selected ? { scale: 0.97 } : {}}
                onClick={handleConfirm}
                disabled={!selected}
                className={`w-full py-4 rounded-2xl font-bold text-white text-base transition-all duration-300
                  ${selected
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-200 cursor-pointer'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
              >
                {selected
                  ? `Thanh toán qua ${METHODS.find(m => m.id === selected)?.name} →`
                  : 'Chọn phương thức thanh toán'}
              </motion.button>
            </div>
          )}

          {/* ══════════════ STEP: PROCESSING ══════════════ */}
          {step === 'processing' && (
            <div className="px-7 py-12 flex flex-col items-center text-center">
              <div className="relative mb-6">
                {/* spinning ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                  className="w-20 h-20 rounded-full border-4 border-gray-100 border-t-green-500"
                />
                {/* logo inside */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {selected === 'vnpay' ? <VNPayLogo /> : <MoMoLogo />}
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Đang xử lý thanh toán...</h3>
              <p className="text-sm text-gray-400">
                Đang kết nối tới cổng thanh toán {METHODS.find(m => m.id === selected)?.name}.
                <br />Vui lòng không đóng cửa sổ này.
              </p>

              {/* progress bar */}
              <div className="w-full bg-gray-100 rounded-full h-1.5 mt-8 overflow-hidden">
                <motion.div
                  initial={{ width: '5%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.6, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                />
              </div>
            </div>
          )}

          {/* ══════════════ STEP: SUCCESS ══════════════ */}
          {step === 'success' && (
            <div className="px-7 py-10 flex flex-col items-center text-center">
              {/* animated checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, times: [0, 0.6, 1] }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-xl shadow-green-200 mb-6"
              >
                <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Thanh toán thành công! 🎉</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Đơn hàng của bạn đã được xác nhận.
                </p>
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-4 py-2 text-sm text-green-700 font-semibold mb-8">
                  {METHODS.find(m => m.id === selected)?.icon}
                  <span>Thanh toán qua {METHODS.find(m => m.id === selected)?.name}</span>
                </div>

                {/* amount */}
                <div className="flex justify-between items-center bg-gray-50 rounded-2xl px-5 py-4 mb-6 text-sm">
                  <span className="text-gray-500">Số tiền đã thanh toán</span>
                  <span className="font-black text-green-600 text-lg">{total.toLocaleString('vi-VN')}₫</span>
                </div>

                <p className="text-xs text-gray-400 mb-6">
                  🍃 Trà sẽ được chuẩn bị và giao đến bạn sớm nhất!
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleDone}
                  className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-200"
                >
                  Hoàn tất đơn hàng
                </motion.button>
              </motion.div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
