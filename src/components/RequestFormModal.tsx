import { useState } from 'react';
import { X, CheckCircle, User, Phone, MapPin } from 'lucide-react';

export default function RequestFormModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [isMatched, setIsMatched] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg p-8 relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-full">
          <X size={24} />
        </button>

        {!isMatched ? (
          <div className="space-y-6">
            {/* Step Indicator */}
            <div className="flex justify-between items-center mb-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1 flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${s <= step ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {s}
                  </div>
                  <span className="text-xs mt-1 font-bold text-gray-700">
                    {s === 1 ? 'جماد مخلفات' : s === 2 ? 'رقم الطلب' : 'رماد الطلب'}
                  </span>
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold">بيانات الطلب</h2>
                <div className="flex gap-4">
                    <div className="flex-1 relative">
                        <User className="absolute right-3 top-3 text-gray-400" size={20} />
                        <input type="text" placeholder="الاسم بالكامل" className="w-full p-3 pr-10 border rounded-xl" />
                    </div>
                    <div className="flex-1 relative">
                        <Phone className="absolute right-3 top-3 text-gray-400" size={20} />
                        <input type="text" placeholder="رقم الواتساب" className="w-full p-3 pr-10 border rounded-xl" />
                    </div>
                </div>
                <div className="relative">
                    <MapPin className="absolute right-3 top-3 text-gray-400" size={20} />
                    <select className="w-full p-3 pr-10 border rounded-xl bg-white appearance-none"><option>المنطقة</option><option>طنطا - الاستاد</option><option>طنطا - المحطة</option><option>طنطا - القاصد</option></select>
                </div>
                <div className="space-y-2">
                    <label className="font-bold">نوع المخلفات</label>
                    <div className="grid grid-cols-2 gap-2">
                        <label className="flex items-center gap-2"><input type="checkbox" /> بلاستيك</label>
                        <label className="flex items-center gap-2"><input type="checkbox" /> ورق/كرتون</label>
                        <label className="flex items-center gap-2"><input type="checkbox" /> إلكترونيات</label>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="font-bold">الوزن التقريبي</label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2"><input type="radio" name="weight" /> أقل من 5 كيلو</label>
                        <label className="flex items-center gap-2"><input type="radio" name="weight" /> أكثر من 5 كيلو</label>
                    </div>
                </div>
                <button onClick={() => setIsMatched(true)} className="w-full bg-green-800 text-white p-3 rounded-xl font-bold">تأكيد الطلب</button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center space-y-4 py-8">
            <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-4">تم تخصيص سفيرك!</h3>
                <img src="https://i.pravatar.cc/300?u=1" alt="Ambassador" className="w-24 h-24 rounded-full mx-auto border-4 border-green-100 mb-2" />
                <p className="font-bold text-lg">أحمد علي</p>
                <p className="text-gray-600">سفير ريبكيا المعتمد في منطقة الاستاد</p>
                <p className="text-sm text-gray-500 mt-2">الموعد المقترح: بعد 30 دقيقة</p>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                تأكيد الموعد عبر واتساب
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
