'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

const AiImage = ({ prompt, alt, className, index = 0, priority = false }) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let timeoutId;

    const fetchImage = async (retries = 3, delay = 2000) => {
      // API key is pulled from environment or left empty for automatic injection
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`;
      const payload = { 
        instances: [{ prompt: prompt }], 
        parameters: { sampleCount: 1 } 
      };

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.status === 429 && retries > 0) {
          timeoutId = setTimeout(() => fetchImage(retries - 1, delay * 1.5), delay);
          return;
        }

        const result = await response.json();
        if (result.predictions && result.predictions[0]?.bytesBase64Encoded) {
          if (isMounted) {
            setImgSrc(`data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`);
            setLoading(false);
          }
        } else if (retries > 0) {
          timeoutId = setTimeout(() => fetchImage(retries - 1, delay * 1.5), delay);
        } else {
          if (isMounted) setLoading(false);
        }
      } catch (error) {
        if (retries > 0) {
          timeoutId = setTimeout(() => fetchImage(retries - 1, delay * 1.5), delay);
        } else {
          if (isMounted) setLoading(false);
        }
      }
    };

    // Stagger requests intelligently based on index to prevent 429 rate limit errors
    const initialDelay = priority ? 0 : (index + 1) * 1500;
    timeoutId = setTimeout(() => fetchImage(), initialDelay);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [prompt, index, priority]);

  if (loading || !imgSrc) {
    return (
      <div className={`relative overflow-hidden bg-[#E5E0D8] ${className} flex items-center justify-center`}>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF9F6]/60 to-transparent"
          animate={{ x: ['-100%', '200%'] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
        />
        <div className="absolute flex flex-col items-center gap-3 opacity-60">
          <ChefHat className="w-8 h-8 text-[#D97706] animate-bounce" />
          <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-[#1A1A1A]">Generating Art...</span>
        </div>
      </div>
    );
  }

  return (
    <motion.img 
      initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }} 
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} 
      transition={{ duration: 1.2, ease: "easeOut" }} 
      src={imgSrc} 
      alt={alt} 
      className={`${className} object-cover`} 
    />
  );
};

export default AiImage;
