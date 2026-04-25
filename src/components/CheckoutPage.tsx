import { useState } from 'react';
import { User, Phone, MapPin, ArrowRight, UploadCloud, Plus, Minus } from 'lucide-react';

const WASTE_ITEMS = [
    { id: 1, name: 'عصير 1 لتر', points: 10, category: 'بلاستيك', image: 'https://cdn-icons-png.flaticon.com/128/2921/2921761.png' },
    { id: 2, name: 'كرتون', points: 12, category: 'ورق', image: 'https://cdn-icons-png.flaticon.com/128/3062/3062635.png' },
    { id: 3, name: 'جبنة فيتا 450 مل', points: 8, category: 'بلاستيك', image: 'https://cdn-icons-png.flaticon.com/128/2650/2650965.png' },
    { id: 4, name: 'علبة جبنة', points: 8, category: 'بلاستيك', image: 'https://cdn-icons-png.flaticon.com/128/3062/3062668.png' },
    { id: 5, name: 'علبة لبن 1 لتر', points: 8, category: 'بلاستيك', image: 'https://cdn-icons-png.flaticon.com/128/2849/2849319.png' },
    { id: 6, name: 'عصير 235 مل', points: 8, category: 'بلاستيك', image: 'https://cdn-icons-png.flaticon.com/128/2921/2921761.png' },
    { id: 7, name: 'زيت مستعمل', points: 12, category: 'بلاستيك', image: 'https://cdn-icons-png.flaticon.com/128/2921/2921761.png' },
    { id: 8, name: 'ورق', points: 10, category: 'ورق', image: 'https://cdn-icons-png.flaticon.com/128/2921/2921761.png' },
    { id: 9, name: 'جرايد', points: 12, category: 'ورق', image: 'https://cdn-icons-png.flaticon.com/128/2921/2921761.png' },
    { id: 10, name: 'مجلات', points: 8, category: 'ورق', image: 'https://cdn-icons-png.flaticon.com/128/2921/2921761.png' },
    { id: 11, name: 'كتب', points: 8, category: 'ورق', image: 'https://cdn-icons-png.flaticon.com/128/2921/2921761.png' },
];

const FOOD_ITEMS = [
    { id: 101, name: 'سكر', points: 40 },
    { id: 102, name: 'زيت', points: 60 },
    { id: 103, name: 'مكرونة', points: 20 },
    { id: 104, name: 'منظفات', points: 30 },
];

export default function CheckoutPage({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(1);
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [exchangeOption, setExchangeOption] = useState<'cash' | 'food' | null>(null);
  const [selectedFoodItems, setSelectedFoodItems] = useState<Record<number, number>>({});
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: '',
    address: '',
    wasteTypes: [] as string[]
  });

  const totalPoints = WASTE_ITEMS.reduce((sum, item) => sum + (quantities[item.id] || 0) * item.points, 0);
  const foodPoints = Object.entries(selectedFoodItems).reduce((sum, [id, q]) => sum + (FOOD_ITEMS.find(i => i.id === Number(id))?.points || 0) * q, 0);
  const remainingPoints = Math.max(0, totalPoints - foodPoints);

  const validatePhone = (phone: string) => /^\d{11}$/.test(phone);

  const updateQuantity = (id: number, delta: number) => {
      setQuantities(prev => ({
          ...prev,
          [id]: Math.max(0, (prev[id] || 0) + delta)
      }));
  };

  const updateFoodQuantity = (id: number, delta: number) => {
      const itemPoints = FOOD_ITEMS.find(i => i.id === id)?.points || 0;
      const currentQuantity = selectedFoodItems[id] || 0;
      const newQuantity = Math.max(0, currentQuantity + delta);
      const newFoodPoints = foodPoints - (currentQuantity * itemPoints) + (newQuantity * itemPoints);
      
      if (newFoodPoints <= totalPoints) {
        setSelectedFoodItems(prev => ({
            ...prev,
            [id]: newQuantity
        }));
      }
  };


  const nextStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 1) {
        if (totalPoints < 50) newErrors.waste = 'الحد الأدنى لطلب الاوردر هو: 50 نقطة';
    } else if (step === 2) {
        if (!formData.name) newErrors.name = 'يرجى إدخال الاسم';
        if (!validatePhone(formData.phone)) newErrors.phone = 'رقم الواتساب غير صحيح';
        if (formData.region === '' || formData.region === 'المنطقة') newErrors.region = 'يرجى اختيار المنطقة';
        if (!formData.address) newErrors.address = 'يرجى إدخال العنوان';
    } else if (step === 3) {
        if (!exchangeOption) newErrors.exchange = 'يرجى اختيار طريقة الاستبدال';
        else if (exchangeOption === 'food' && foodPoints === 0) newErrors.exchange = 'يرجى اختيار السلعة الغذائية';
    } else if (step === 4) {
        // Validation for step 4 if needed
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStep(step + 1);
  };


  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 p-2 md:p-8">
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-4 md:p-8 shadow-sm">
        <button onClick={onBack} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-green-700">
          <ArrowRight size={20} />
          العودة للرئيسية
        </button>

        <div className="flex justify-between items-center mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="flex-1 flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${s <= step ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {s}
                    </div>
                    <span className="text-xs mt-1 font-bold text-gray-600">
                    {s === 1 ? 'مخلفات' : s === 2 ? 'بيانات' : s === 3 ? 'محفظة' : s === 4 ? 'مراجعة' : 'سفير'}
                    </span>
                </div>
            ))}
        </div>

        {step === 1 && (
            <div className="flex flex-col h-[calc(100vh-200px)]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">المخلفات</h2>
                </div>
                
                <div className="flex-1 overflow-y-auto no-scrollbar space-y-4 pb-4">
                    <div className="grid grid-cols-2 gap-4">
                        {WASTE_ITEMS.map(item => (
                            <div key={item.id} className="border rounded-2xl p-3 flex flex-col items-center shadow-sm">
                                <span className="self-start text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full mb-1">20 نقطة</span>
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-contain my-2" />
                                <span className="text-xs font-bold text-green-600">{item.points} نقاط</span>
                                <h3 className="font-bold text-sm my-1">{item.name}</h3>
                                <div className="flex items-center gap-2 mt-2 bg-gray-100 rounded-full px-2 py-1">
                                    <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-500"><Minus size={16} /></button>
                                    <span className="font-bold w-6 text-center">{quantities[item.id] || 0}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)} className="text-green-700"><Plus size={16} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="mt-auto pt-4 border-t bg-white">
                    {Object.values(errors).length > 0 && <div className='text-red-500 text-sm mb-2'>{Object.values(errors).map(e => <p key={e}>{e}</p>)}</div>}
                    
                    <div className="flex gap-4 items-center justify-between">
                      <button 
                        onClick={nextStep} 
                        className="flex-1 bg-green-700 text-white p-4 rounded-full font-bold text-lg hover:bg-green-800 transition">
                          تبديل
                      </button>
                      <div className="flex-1 bg-green-50 border border-green-100 p-4 rounded-full text-center font-bold text-green-700">
                        اجمالي : {totalPoints} نقطة
                      </div>
                    </div>
                    <p className="text-red-600 text-sm font-bold text-center mt-2">الحد الأدنى لطلب الاوردر هو: 50 نقطة</p>
                </div>
            </div>
        )}

        {step === 2 && (
             <div className="space-y-4">
                <h2 className="text-2xl font-bold">بيانات التوصيل</h2>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <User className="absolute right-3 top-3 text-gray-400" size={20} />
                        <input type="text" placeholder="الاسم بالكامل" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 pr-10 border rounded-xl" />
                    </div>
                    <div className="flex-1 relative">
                        <Phone className="absolute right-3 top-3 text-gray-400" size={20} />
                        <input type="text" placeholder="رقم الواتساب" value={formData.phone} onChange={(e) => {setFormData({...formData, phone: e.target.value}); setShowPhoneError(!validatePhone(e.target.value));}} className={`w-full p-3 pr-10 border rounded-xl ${showPhoneError && formData.phone ? 'border-red-500' : ''}`} />
                    </div>
                </div>
                {showPhoneError && formData.phone && <p className="text-red-500 text-xs">رقم الواتساب يجب أن يكون 11 رقم</p>}
                
                <div className="relative">
                    <MapPin className="absolute right-3 top-3 text-gray-400" size={20} />
                    <select 
                      value={formData.region} 
                      onChange={(e) => setFormData({...formData, region: e.target.value})} 
                      className="w-full p-3 pr-10 border rounded-xl bg-white"
                    >
                        <option value="">اختر المنطقة</option>
                        <option value="طنطا - الاستاد">طنطا - الاستاد</option>
                        <option value="طنطا - المحطة">طنطا - المحطة</option>
                        <option value="طنطا - القاصد">طنطا - القاصد</option>
                    </select>
                </div>
                <div className="relative">
                    <MapPin className="absolute right-3 top-3 text-gray-400" size={20} />
                    <input type="text" placeholder="العنوان بالتفصيل" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className="w-full p-3 pr-10 border rounded-xl" />
                </div>
                
                {Object.values(errors).length > 0 && <div className='text-red-500 text-sm'>{Object.values(errors).map(e => <p key={e}>{e}</p>)}</div>}
                
                <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="w-full bg-gray-200 p-4 rounded-xl font-bold">السابق</button>
                    <button onClick={nextStep} className="w-full bg-green-700 text-white p-4 rounded-xl font-bold hover:bg-green-800 transition-colors">مراجعة الطلب</button>
                </div>
            </div>
        )}

        {step === 3 && (
             <div className="space-y-4">
               <h2 className="text-2xl font-bold">محفظتك</h2>
               <div className="border rounded-2xl p-6 bg-green-50 space-y-4">
                   <div className="text-center">
                       <p className="text-gray-600 text-lg">نقاطك الحالية</p>
                       <p className="text-4xl font-bold text-green-800">{totalPoints} نقطة</p>
                   </div>
                   <div className="text-center">
                       <p className="text-gray-600 text-lg">ما يعادل كاش</p>
                       <p className="text-4xl font-bold text-green-800">{(totalPoints * 0.1).toFixed(2)} ج.م</p>
                   </div>
               </div>
               
               <p className="font-bold text-lg pt-2">اختر طريقة السحب:</p>
               <div className="grid grid-cols-2 gap-4">
                 <button 
                   onClick={() => setExchangeOption('cash')}
                   className={`p-4 rounded-xl border-2 font-bold ${exchangeOption === 'cash' ? 'border-green-700 bg-green-50' : 'border-gray-200'}`}
                 >
                   تحويل لكاش
                 </button>
                 <button 
                   onClick={() => setExchangeOption('food')}
                   className={`p-4 rounded-xl border-2 font-bold ${exchangeOption === 'food' ? 'border-green-700 bg-green-50' : 'border-gray-200'}`}
                 >
                   سلع غذائية
                 </button>
               </div>
               
               {exchangeOption === 'food' && (
                 <div className="space-y-2 pt-2">
                   <p className="font-bold">اختر السلعة:</p>
                   <div className="grid grid-cols-2 gap-4">
                     {FOOD_ITEMS.filter(item => item.points <= totalPoints).map(item => (
                        <div key={item.id} className="border rounded-xl p-3 flex flex-col items-center">
                            <h3 className="font-bold text-sm mb-1">{item.name}</h3>
                            <span className="text-xs text-gray-500 mb-2">{item.points} نقطة</span>
                            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1">
                                <button onClick={() => updateFoodQuantity(item.id, -1)} className="text-gray-500"><Minus size={16} /></button>
                                <span className="font-bold w-6 text-center">{selectedFoodItems[item.id] || 0}</span>
                                <button onClick={() => updateFoodQuantity(item.id, 1)} className="text-green-700"><Plus size={16} /></button>
                            </div>
                        </div>
                     ))}
                   </div>
                   {FOOD_ITEMS.filter(item => item.points <= totalPoints).length === 0 && (
                     <p className="text-red-500 font-bold">عذراً، نقاطك لا تكفي لاي سلعة غذائية</p>
                   )}
                 </div>
               )}
               
               {Object.values(errors).length > 0 && <div className='text-red-500 text-sm'>{Object.values(errors).map(e => <p key={e}>{e}</p>)}</div>}
               
               <div className="flex gap-4 pt-4">
                   <button onClick={() => setStep(2)} className="w-full bg-gray-200 p-4 rounded-xl font-bold">السابق</button>
                   <button onClick={nextStep} className="w-full bg-green-800 text-white p-4 rounded-xl font-bold">متابعة</button>
               </div>
           </div>
       )}

        {step === 4 && (
            <div className="space-y-4">
               <h2 className="text-2xl font-bold">مراجعة الطلب</h2>
               <div className="border rounded-2xl p-4 bg-gray-50 space-y-3">
                   <div className="space-y-1">
                      <p className="font-bold text-gray-700">طلبك:</p>
                      {WASTE_ITEMS.filter(i => (quantities[i.id] || 0) > 0).map(i => (
                        <p key={i.id} className="text-sm text-gray-600">{i.name}: {quantities[i.id]}</p>
                      ))}
                   </div>
                   <hr/>
                   <p className="font-bold text-green-700">اجمالي النقاط: {totalPoints} نقطة</p>
                    <p className="font-bold text-green-700">القيمة النقدية: {(remainingPoints * 0.1).toFixed(2)} ج.م</p>
                    <p className="font-bold text-green-700">طريقة الاستبدال: {exchangeOption === 'cash' ? 'كاش' : ('سلع غذائية (' + Object.entries(selectedFoodItems).filter(([id, q]) => q > 0).map(([id, q]) => `${FOOD_ITEMS.find(f => f.id === Number(id))?.name || 'Unknown'} (x${q})`).join(', ') + ')')}</p>
                   <hr/>
                   <p className="font-bold text-gray-700">الاسم: {formData.name}</p>
                   <p className="font-bold text-gray-700">التليفون: {formData.phone}</p>
                   <p className="font-bold text-gray-700">العنوان: {formData.region} - {formData.address}</p>
               </div>
               
               <div className="flex gap-4">
                   <button onClick={() => setStep(3)} className="w-full bg-gray-200 p-4 rounded-xl font-bold">السابق</button>
                   <button onClick={nextStep} className="w-full bg-green-800 text-white p-4 rounded-xl font-bold">تأكيد الطلب</button>
               </div>
           </div>
       )}

        {step === 5 && (
          <div className="text-center space-y-4 py-8">
            <div className="bg-green-50 p-6 md:p-8 rounded-3xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-6">تم تخصيص سفيرك!</h3>
                <img src="https://i.pravatar.cc/300?u=1" alt="Ambassador" className="w-32 h-32 rounded-full mx-auto border-4 border-green-100 mb-4" />
                <p className="font-bold text-xl">أحمد علي</p>
                <p className="text-gray-600 text-lg">سفير ريبكيا المعتمد في منطقة الاستاد</p>
                <p className="text-md text-gray-500 mt-3">السفير المتواجد على بعد 1 كيلومتر فقط.</p>
                <p className="text-md text-gray-500 mt-1">سوف يتواصل معك السفير في أقرب وقت.</p>
            </div>
            <button onClick={onBack} className="w-full bg-green-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-colors">
                العودة
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

