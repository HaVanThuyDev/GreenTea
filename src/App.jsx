import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import OrderCTA from './components/OrderCTA'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const handleUpdateQty = (id, newQty) => {
    if (newQty < 1) {
      handleRemoveItem(id)
      return
    }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, qty: newQty } : item))
  }

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar cartCount={totalCartItems} onCartOpen={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <About />
        <Menu onAddToCart={handleAddToCart} />
        <Features />
        <Testimonials />
        <OrderCTA />
      </main>

      <Footer />

      {isCartOpen && (
        <Cart 
          items={cartItems} 
          onClose={() => setIsCartOpen(false)}
          onUpdateQty={handleUpdateQty}
          onRemove={handleRemoveItem}
          onClearCart={handleClearCart}
        />
      )}
    </div>
  )
}

export default App
