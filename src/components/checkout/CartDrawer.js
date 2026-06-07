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
    <div className="fixed inset-0 z-[9500] flex justify-end">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Main Drawer Shell */}
      <div className="relative w-full max-w-md h-full bg-[#120D06] shadow-2xl flex flex-col z-10 border-l border-[#C4922A]/14 animate-in slide-in-from-right duration-300">
        
        {/* Inner Border decoration */}
        <div className="absolute inset-2 border border-[#C4922A]/5 pointer-events-none z-20" />

        {/* Header */}
        <div className="p-6 border-b border-[#C4922A]/14 flex items-center justify-between bg-[#120D06] relative z-10">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-4.5 h-4.5 text-[#8B3A1A]" />
            <h2 className="font-serif text-lg font-bold tracking-wide text-[#F7F0E4]">Your Heritage Crate</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full hover:bg-[#251B12] text-[#F7F0E4]/40 hover:text-[#F7F0E4] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success State */}
        {orderPlaced ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-6 bg-[#120D06] relative z-10 text-[#F7F0E4]">
            <div className="w-16 h-16 bg-[#8B3A1A]/10 text-[#8B3A1A] rounded-full flex items-center justify-center border border-[#C4922A]/15">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#F7F0E4] mb-2">Order Confirmed</h3>
              <p className="text-xs md:text-sm text-[#F7F0E4]/50 leading-relaxed font-light">
                Your heritage sweets are being prepared by our master artisans in Rishra. A dispatch confirmation will be sent shortly.
              </p>
            </div>
            <button
              onClick={() => {
                setOrderPlaced(false);
                setIsCartOpen(false);
                setFormData({ name: '', phone: '', address: '' });
              }}
              className="px-8 py-3.5 bg-[#8B3A1A] hover:bg-[#8B3A1A]/95 text-[#F7F0E4] font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-lg cursor-pointer active:scale-95 border border-[#C4922A]/20"
            >
              Continue Journey
            </button>
          </div>
        ) : cart.length === 0 ? (
          /* Empty State */
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4 relative z-10 text-[#F7F0E4]">
            <div className="p-4 bg-[#120D06] rounded-full border border-[#C4922A]/15">
              <ShoppingBag className="w-8 h-8 text-[#C4922A]" />
            </div>
            <p className="text-xs md:text-sm text-[#F7F0E4]/50 font-light px-6 leading-relaxed">
              Your tray is currently empty. Explore our masterpieces to add historical flavor to your crate.
            </p>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-[10px] font-bold tracking-widest uppercase text-[#8B3A1A] hover:text-[#C4922A] transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <span>Explore Masterpieces</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        ) : (
          /* Active Cart State */
          <>
            {/* Shipping Progress bar */}
            <div className="bg-[#120D06] px-6 py-4 border-b border-[#C4922A]/14 relative z-10 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] font-bold tracking-wider uppercase text-[#F7F0E4]/40">
                {isFreeShipping ? (
                  <span className="text-[#8B3A1A] flex items-center gap-1.5 font-bold">
                    <Check className="w-3.5 h-3.5" /> FREE COLD-CHAIN DISPATCH UNLOCKED
                  </span>
                ) : (
                  <span>Add <strong className="text-[#F7F0E4]">₹{amountToFreeShipping}</strong> more for free shipping</span>
                )}
                <span>₹{subtotal} / ₹{shippingThreshold}</span>
              </div>
              <div className="w-full h-1 bg-[#251B12] rounded-full overflow-hidden border border-[#C4922A]/5">
                <div 
                  className="h-full bg-[#C4922A] transition-all duration-500 ease-out"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>

            {/* Scrollable Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 relative z-10">
              {cart.map((item) => (
                <div key={item.product.id} className="bg-[#1c160e] p-5 border border-[#C4922A]/14 rounded-xs flex flex-col space-y-3 shadow-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#F7F0E4]">{item.product.name}</h4>
                      <p className="text-[9px] text-[#C4922A] font-bold uppercase mt-0.5 tracking-wider">
                        {item.product.tag}
                      </p>
                      <p className="text-xs text-[#F7F0E4]/50 mt-1 font-semibold">₹{item.product.price} / {item.product.unit}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-[#F7F0E4]/40 hover:text-[#8B3A1A] transition-colors cursor-pointer"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity adjustments */}
                  <div className="flex items-center justify-between border-t border-[#C4922A]/10 pt-3 text-[#F7F0E4]">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2.5 py-1 border border-[#C4922A]/20 rounded-xs hover:bg-[#251B12] text-xs cursor-pointer select-none font-bold"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2.5 py-1 border border-[#C4922A]/20 rounded-xs hover:bg-[#251B12] text-xs cursor-pointer select-none font-bold"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm font-bold text-[#F7F0E4]">
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>

                  {/* Custom Engraving Message Box */}
                  <div className="mt-2 pt-2 border-t border-dashed border-[#C4922A]/14">
                    <label className="text-[8.5px] uppercase tracking-widest font-bold text-[#F7F0E4]/40 block mb-1">
                      Box Engraving Note (Optional)
                    </label>
                    <input
                      type="text"
                      maxLength={40}
                      value={item.customMessage}
                      onChange={(e) => updateCustomMessage(item.product.id, e.target.value)}
                      placeholder="e.g. Happy Poila Baisakh"
                      className="w-full bg-[#120D06] text-xs px-3 py-2 border border-[#C4922A]/15 focus:outline-none focus:border-[#8B3A1A]/50 text-[#F7F0E4]"
                    />
                  </div>
                </div>
              ))}

              {/* Add Premium Heritage Box Packaging */}
              <div className="bg-[#1c160e] p-4 border border-[#C4922A]/14 rounded-xs flex items-center justify-between shadow-xs text-[#F7F0E4]">
                <div className="flex items-center space-x-3">
                  <Gift className="w-5 h-5 text-[#C4922A]" />
                  <div>
                    <h4 className="text-xs font-bold text-[#F7F0E4]">Heritage Wooden Box</h4>
                    <p className="text-[10px] text-[#F7F0E4]/50">Handcrafted carved box wrapping (+₹150)</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={giftWrap}
                  onChange={(e) => setGiftWrap(e.target.checked)}
                  className="rounded border-[#C4922A]/20 text-[#8B3A1A] focus:ring-[#8B3A1A] cursor-pointer w-4 h-4"
                />
              </div>

              {/* Delivery Schedule Date */}
              <div className="bg-[#1c160e] p-4 border border-[#C4922A]/14 rounded-xs flex flex-col space-y-2 shadow-xs text-[#F7F0E4]">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-[#E8B84B]" />
                  <div>
                    <h4 className="text-xs font-bold text-[#F7F0E4]">Select Delivery Date</h4>
                    <p className="text-[10px] text-[#F7F0E4]/50">Fresh cold-chain dispatch scheduled</p>
                  </div>
                </div>
                <input
                  type="date"
                  min={todayStr}
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full bg-[#120D06] text-xs px-3 py-2 border border-[#C4922A]/15 focus:outline-none focus:border-[#8B3A1A]/50 text-[#F7F0E4] font-bold"
                />
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleCheckout} className="border-t border-[#C4922A]/14 pt-4 space-y-3">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#F7F0E4]/40 block mb-1">
                  Shipping Details
                </span>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[#1c160e] text-[#F7F0E4] text-xs px-3 py-2 border border-[#C4922A]/14 focus:outline-none focus:border-[#8B3A1A]/50"
                />
                <input
                  type="tel"
                  required
                  name="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-[#1c160e] text-[#F7F0E4] text-xs px-3 py-2 border border-[#C4922A]/14 focus:outline-none focus:border-[#8B3A1A]/50"
                />
                <textarea
                  required
                  name="address"
                  placeholder="Detailed Delivery Address"
                  rows={2}
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full bg-[#1c160e] text-[#F7F0E4] text-xs px-3 py-2 border border-[#C4922A]/14 focus:outline-none focus:border-[#8B3A1A]/50 resize-none"
                />
              </form>
            </div>

            {/* Sticky Order Totals */}
            <div className="bg-[#120D06] p-6 border-t border-[#C4922A]/14 space-y-4 relative z-10 text-[#F7F0E4]">
              <div className="space-y-2 text-xs text-[#F7F0E4]/50 font-light">
                <div className="flex justify-between">
                  <span>Tray Subtotal</span>
                  <span className="font-semibold text-[#F7F0E4]">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sweet GST (5%)</span>
                  <span className="font-semibold text-[#F7F0E4]">₹{tax}</span>
                </div>
                {giftWrap && (
                  <div className="flex justify-between">
                    <span>Heritage Box Wrap</span>
                    <span className="font-semibold text-[#F7F0E4]">₹{packaging}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Cold-Chain Shipping</span>
                  <span>{isFreeShipping ? <span className="text-[#8B3A1A] font-bold">FREE</span> : <span className="font-semibold text-[#F7F0E4]">₹{shipping}</span>}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#F7F0E4] pt-2 border-t border-[#C4922A]/14">
                  <span>Grand Total</span>
                  <span className="text-[#8B3A1A] font-extrabold text-base">₹{total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-4 bg-[#8B3A1A] hover:bg-[#8B3A1A]/95 disabled:bg-[#8B3A1A]/60 text-[#F7F0E4] font-bold text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer border border-[#C4922A]/20 active:scale-95"
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
