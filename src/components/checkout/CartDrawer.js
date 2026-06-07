'use client';

import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Trash2, Calendar, Gift, ShoppingBag, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    deliveryDate,
    setDeliveryDate,
    giftWrap,
    setGiftWrap,
    updateQuantity,
    updateCustomMessage,
    removeFromCart,
    getCartSubtotal,
    clearCart,
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });

  if (!isCartOpen) return null;

  const subtotal = getCartSubtotal();
  const shippingThreshold = 1000;
  const isFreeShipping = subtotal >= shippingThreshold;
  const amountToFreeShipping = shippingThreshold - subtotal;
  const shippingProgress = Math.min((subtotal / shippingThreshold) * 100, 100);

  const tax = Math.round(subtotal * 0.05); // 5% Sweet GST
  const packaging = giftWrap ? 150 : 0;
  const shipping = isFreeShipping ? 0 : 90;
  const total = subtotal + tax + packaging + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill in your shipping details.');
      return;
    }
    
    setIsCheckingOut(true);
    
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
      clearCart();
      
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#8B3A1A', '#C05A2A', '#C4922A', '#F7F0E4'],
      });
    }, 1500);
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black/45 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Main Drawer Shell (Glassmorphism layout) */}
      <div className="relative w-full max-w-md h-full glassmorphism-bg shadow-2xl flex flex-col z-10 border-l border-brand-gold/20 animate-in slide-in-from-right duration-300">
        
        {/* Inner Border */}
        <div className="absolute inset-2 border border-brand-gold/5 pointer-events-none z-20" />

        {/* Header */}
        <div className="p-6 border-b border-brand-gold/15 flex items-center justify-between bg-bg-primary/90 relative z-10">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-4.5 h-4.5 text-brand-crimson" />
            <h2 className="font-serif text-lg font-bold tracking-wide text-text-primary">Your Heritage Crate</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full hover:bg-bg-secondary text-text-muted hover:text-text-primary transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success State */}
        {orderPlaced ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-6 bg-bg-primary/95 relative z-10">
            <div className="w-16 h-16 bg-brand-crimson/10 text-brand-crimson rounded-full flex items-center justify-center border border-brand-gold/15">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-text-primary mb-2">Order Confirmed</h3>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed font-light">
                Your heritage sweets are being prepared by our master artisans in Rishra. A dispatch confirmation will be sent shortly.
              </p>
            </div>
            <button
              onClick={() => {
                setOrderPlaced(false);
                setIsCartOpen(false);
                setFormData({ name: '', phone: '', address: '' });
              }}
              className="px-8 py-3.5 bg-brand-crimson hover:bg-brand-crimson/95 text-bg-primary font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-lg cursor-pointer active:scale-95"
            >
              Continue Journey
            </button>
          </div>
        ) : cart.length === 0 ? (
          /* Empty State */
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4 relative z-10">
            <div className="p-4 bg-bg-primary/80 rounded-full border border-brand-gold/15">
              <ShoppingBag className="w-8 h-8 text-brand-gold" />
            </div>
            <p className="text-xs md:text-sm text-text-muted font-light px-6 leading-relaxed">Your tray is currently empty. Explore our masterpieces to add historical flavor to your crate.</p>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-[10px] font-bold tracking-widest uppercase text-brand-crimson hover:text-brand-gold transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <span>Explore Masterpieces</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        ) : (
          /* Active Cart State */
          <>
            {/* Shipping Progress bar */}
            <div className="bg-bg-primary/95 px-6 py-4 border-b border-brand-gold/15 relative z-10 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] font-bold tracking-wider uppercase text-text-muted">
                {isFreeShipping ? (
                  <span className="text-brand-crimson flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> FREE COLD-CHAIN DISPATCH UNLOCKED
                  </span>
                ) : (
                  <span>Add <strong className="text-text-primary">₹{amountToFreeShipping}</strong> more for free shipping</span>
                )}
                <span>₹{subtotal} / ₹{shippingThreshold}</span>
              </div>
              <div className="w-full h-1 bg-bg-secondary rounded-full overflow-hidden border border-brand-gold/5">
                <div 
                  className="h-full bg-brand-gold transition-all duration-500 ease-out"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>

            {/* Scrollable Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 relative z-10">
              {cart.map((item) => (
                <div key={item.product.id} className="bg-bg-primary/90 p-5 border border-brand-gold/15 rounded-xs flex flex-col space-y-3 shadow-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-text-primary">{item.product.name}</h4>
                      <p className="text-[9px] text-brand-gold font-bold uppercase mt-0.5 tracking-wider">
                        {item.product.tagline}
                      </p>
                      <p className="text-xs text-text-muted mt-1 font-semibold">₹{item.product.price} / {item.product.unit}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-text-muted hover:text-brand-crimson transition-colors cursor-pointer"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity adjustments */}
                  <div className="flex items-center justify-between border-t border-brand-gold/10 pt-3">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2.5 py-1 border border-brand-gold/20 rounded-xs hover:bg-bg-secondary text-xs cursor-pointer select-none font-bold"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2.5 py-1 border border-brand-gold/20 rounded-xs hover:bg-bg-secondary text-xs cursor-pointer select-none font-bold"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm font-bold text-text-primary">
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>

                  {/* Custom Engraving Message Box */}
                  <div className="mt-2 pt-2 border-t border-dashed border-brand-gold/15">
                    <label className="text-[8.5px] uppercase tracking-widest font-bold text-text-muted block mb-1">
                      Box Engraving Note (Optional)
                    </label>
                    <input
                      type="text"
                      maxLength={40}
                      value={item.customMessage}
                      onChange={(e) => updateCustomMessage(item.product.id, e.target.value)}
                      placeholder="e.g. Happy Poila Baisakh"
                      className="w-full bg-bg-secondary text-xs px-3 py-2 border border-brand-gold/15 focus:outline-none focus:border-brand-crimson/50 text-text-primary"
                    />
                  </div>
                </div>
              ))}

              {/* Add Premium Heritage Box Packaging */}
              <div className="bg-bg-primary/95 p-4 border border-brand-gold/15 rounded-xs flex items-center justify-between shadow-xs">
                <div className="flex items-center space-x-3">
                  <Gift className="w-5 h-5 text-brand-gold" />
                  <div>
                    <h4 className="text-xs font-bold text-text-primary">Heritage Wooden Box</h4>
                    <p className="text-[10px] text-text-muted">Handcrafted carved box wrapping (+₹150)</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={giftWrap}
                  onChange={(e) => setGiftWrap(e.target.checked)}
                  className="rounded border-brand-gold text-brand-crimson focus:ring-brand-crimson cursor-pointer w-4 h-4"
                />
              </div>

              {/* Delivery Schedule Date */}
              <div className="bg-bg-primary/95 p-4 border border-brand-gold/15 rounded-xs flex flex-col space-y-2 shadow-xs">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-brand-saffron" />
                  <div>
                    <h4 className="text-xs font-bold text-text-primary">Select Delivery Date</h4>
                    <p className="text-[10px] text-text-muted">Fresh cold-chain dispatch scheduled</p>
                  </div>
                </div>
                <input
                  type="date"
                  min={todayStr}
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full bg-bg-secondary text-xs px-3 py-2 border border-brand-gold/15 focus:outline-none focus:border-brand-crimson/50 text-text-primary font-bold"
                />
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleCheckout} className="border-t border-brand-gold/15 pt-4 space-y-3">
                <span className="text-[9px] font-bold uppercase tracking-widest text-text-muted block mb-1">
                  Shipping Details
                </span>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-bg-primary/90 text-xs px-3 py-2 border border-brand-gold/15 focus:outline-none focus:border-brand-crimson/50"
                />
                <input
                  type="tel"
                  required
                  name="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-bg-primary/90 text-xs px-3 py-2 border border-brand-gold/15 focus:outline-none focus:border-brand-crimson/50"
                />
                <textarea
                  required
                  name="address"
                  placeholder="Detailed Delivery Address"
                  rows={2}
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full bg-bg-primary/90 text-xs px-3 py-2 border border-brand-gold/15 focus:outline-none focus:border-brand-crimson/50 resize-none"
                />
              </form>
            </div>

            {/* Sticky Order Totals */}
            <div className="bg-bg-primary p-6 border-t border-brand-gold/15 space-y-4 relative z-10">
              <div className="space-y-2 text-xs text-text-muted font-light">
                <div className="flex justify-between">
                  <span>Tray Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sweet GST (5%)</span>
                  <span className="font-semibold">₹{tax}</span>
                </div>
                {giftWrap && (
                  <div className="flex justify-between">
                    <span>Heritage Box Wrap</span>
                    <span className="font-semibold">₹{packaging}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Cold-Chain Shipping</span>
                  <span>{isFreeShipping ? <span className="text-brand-crimson font-bold">FREE</span> : <span className="font-semibold">₹{shipping}</span>}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-text-primary pt-2 border-t border-brand-gold/15">
                  <span>Grand Total</span>
                  <span className="text-brand-crimson">₹{total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-4 bg-brand-crimson hover:bg-brand-crimson/95 disabled:bg-brand-crimson/60 text-bg-primary font-bold text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer border border-brand-gold/20 active:scale-95"
              >
                <span>{isCheckingOut ? 'PROCESSING CRATE...' : 'AUTHENTICATE & CHECKOUT'}</span>
                {!isCheckingOut && <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
