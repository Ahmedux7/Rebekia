import { Leaf } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="https://i.ibb.co/99cYLyv7/5-removebg-preview.png" alt="Rebekia Logo" className="h-16 w-auto" />
        </div>
        <div className="hidden md:flex gap-4 md:gap-6 text-gray-700 text-sm md:text-base">
          <a href="#" className="hover:text-green-600">الرئيسية</a>
          <a href="#" className="hover:text-green-600">كيف تعمل</a>
          <a href="#" className="hover:text-green-600">سفراؤنا</a>
        </div>
        <div className="flex gap-2">
          <button className="bg-green-700 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-green-800 text-sm md:text-base">انضم ك سفير</button>
        </div>
      </div>
    </nav>
  );
}
