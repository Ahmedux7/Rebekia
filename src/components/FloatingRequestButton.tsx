import { useState, useEffect } from 'react';

export default function FloatingRequestButton({ onOpenRequest }: { onOpenRequest: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-5 left-4 right-4 z-50">
      <button 
        className="w-full bg-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-green-800 transition-all flex items-center justify-center gap-2"
        onClick={onOpenRequest}
      >
        اطلب سفير الآن
      </button>
    </div>
  );
}
