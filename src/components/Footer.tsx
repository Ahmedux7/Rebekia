import { Instagram, Mail, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center text-center md:text-right">
        <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
                <img src="https://i.ibb.co/99cYLyv7/5-removebg-preview.png" alt="Logo" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-gray-500">مستقبلك في إعادة تدوير مخلفاتك</p>
        </div>
        
        <div className="flex justify-center gap-6">
          <a href="#" className="text-gray-600 hover:text-green-700 transition"><Instagram className="size-6" /></a>
          <a href="#" className="text-gray-600 hover:text-green-700 transition"><Facebook className="size-6" /></a>
          <a href="#" className="text-gray-600 hover:text-green-700 transition"><Mail className="size-6" /></a>
        </div>
        
        <div className="text-sm text-gray-500 md:text-left">
           &copy; 2026 ريبكيا. جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
