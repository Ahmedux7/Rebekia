import { PhoneCall } from 'lucide-react';

export default function Hero({ onRequestClick }: { onRequestClick: () => void }) {
  return (
    <div className="bg-green-950 text-white py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">حول مخلفاتك لقيمة.. اطلب سفير ريبكيا الآن</h1>
          <p className="text-lg md:text-xl text-green-100">نظام ذكي يربطك بأقرب سفير معتمد في منطقتك لجمع المخلفات وإعطائك مكافآت فورية.</p>
          <button 
            onClick={onRequestClick}
            className="flex items-center gap-2 bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-colors shadow-lg"
          >
            <PhoneCall size={20} />
            اطلب سفير الآن
          </button>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img src="https://i.ibb.co/Ngm6ddrH/Gemini-Generated-Image-ekxdxbekxdxbekxd-removebg-preview.png" alt="Agent" className="h-64 md:h-[500px] w-full max-w-lg object-contain rounded-2xl shadow-xl" />
        </div>
      </div>
    </div>
  );
}
