import { useState } from 'react';
import { User, Phone } from 'lucide-react';

export default function WasteForm({ onSubmit }: { onSubmit: () => void }) {
  const [step] = useState(1);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-950">طلب تجميع مخلفات</h2>
      
      {/* Step Indicator */}
      <div className="flex justify-between items-center mb-6 gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex-1 flex flex-col items-center gap-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${s === step ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-400'}`}>
              {s}
            </div>
            <span className={`text-xs ${s === step ? 'text-green-700 font-bold' : 'text-gray-400'}`}>
              {s === 1 ? 'حدد المخلفات' : s === 2 ? 'رقم الطلب' : 'تأكيد'}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">الاسم بالكامل</label>
            <div className="relative">
              <User className="absolute right-3 top-2.5 text-gray-400" size={16} />
              <input type="text" className="w-full pl-3 pr-9 py-2 border rounded-xl" placeholder="الاسم" />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">رقم الواتساب</label>
            <div className="relative">
              <Phone className="absolute right-3 top-2.5 text-gray-400" size={16} />
              <input type="text" className="w-full pl-3 pr-9 py-2 border rounded-xl" placeholder="01xxxxxxxx" />
            </div>
          </div>
        </div>
        
        <div>
           <label className="block text-sm font-semibold text-gray-700 mb-1">المنطقة</label>
           <select className="w-full p-2 border rounded-xl bg-white">
             <option>طنطا - الاستاد</option>
             <option>طنطا - المحطة</option>
           </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">نوع المخلفات</label>
          <div className="grid grid-cols-3 gap-2">
             {['بلاستيك', 'ورق', 'إلكترونيات'].map(type => (
               <label key={type} className="flex items-center gap-1 p-2 border rounded-xl cursor-pointer hover:bg-gray-50 text-xs">
                 <input type="checkbox" className="size-4 accent-green-700" />
                 {type}
               </label>
             ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">الوزن التقريبي</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="weight" className="size-4 accent-green-700" /> أقل من 5 كجم
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="weight" className="size-4 accent-green-700" /> أكثر من 5 كجم
            </label>
          </div>
        </div>

        <button onClick={onSubmit} className="w-full bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-800 transition-colors">تأكيد الطلب</button>
      </div>
    </div>
  );
}
