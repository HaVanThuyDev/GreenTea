import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react'
import PaymentModal from './PaymentModal'

// Convert USD price → VND for payment display (1 USD ≈ 25,000 VND)
const USD_TO_VND = 25000

export default function Cart({ items, onClose, onUpdateQty, onRemove, onClearCart }) {
  const [showPayment, setShowPayment] = useState(false)
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const totalVND = Math.round(total * USD_TO_VND)
  const itemCount = items.reduce((s, i) => s + i.qty, 0)

  const handlePaymentSuccess = () => {
    onClearCart?.()
    onClose()
  }

  return (
    <>
      <AnimatePresence>
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          onClick={onClose}
        />

        {/* Drawer */}
        <motion.div
          initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-brand-primary" />
              <span className="font-bold text-gray-900">Your Cart</span>
              <span className="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white"
                style={{ background: 'linear-gradient(135deg,#0f9d58,#34c759)' }}>
                {itemCount}
              </span>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                <ShoppingCart className="w-16 h-16 mb-4 opacity-20" />
                <p className="text-lg font-medium">Your cart is empty</p>
                <p className="text-sm mt-1">Add some delicious drinks!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 p-4 rounded-2xl bg-gray-50"
                  >
                    <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-xl" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm truncate">{item.name}</p>
                      <p className="text-brand-primary font-bold text-sm">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => onUpdateQty(item.id, item.qty - 1)}
                          className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-green-400 transition-colors">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-sm w-4 text-center">{item.qty}</span>
                        <button onClick={() => onUpdateQty(item.id, item.qty + 1)}
                          className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-green-400 transition-colors">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-gray-900 text-sm">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-100 px-6 py-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Delivery</span>
                <span className="text-green-500 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <div className="text-right">
                  <span className="text-xl font-black text-brand-primary">${total.toFixed(2)}</span>
                  <p className="text-xs text-gray-400">{totalVND.toLocaleString('vi-VN')}₫</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-2xl font-bold text-white text-lg ripple-effect"
                style={{ background: 'linear-gradient(135deg,#0f9d58,#34c759)' }}
                onClick={() => setShowPayment(true)}
              >
                🧾 Thanh toán · ${total.toFixed(2)}
              </motion.button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Payment modal – z-index above drawer */}
      {showPayment && (
        <PaymentModal
          total={totalVND}
          itemCount={itemCount}
          onClose={() => setShowPayment(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </>
  )
}
