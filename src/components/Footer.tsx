import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="p-4 border-t mt-12 bg-white text-center">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex gap-4">
          <a href="#">Instagram</a>
          <a href="#">GitHub</a>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-sm">حقوق الطبع محفوظة 2026 ريبكيا</span>
           <Leaf className="text-green-600 size-6" />
        </div>
      </div>
    </footer>
  );
}
