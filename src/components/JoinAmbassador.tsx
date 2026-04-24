import { DollarSign, Clock, BookOpen } from 'lucide-react';

export default function JoinAmbassador() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Features side */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-green-950 mb-2">انضم ك سفير</h2>
            <h3 className="text-2xl font-bold text-green-800">كن شريكاً في التغيير.. وزود دخلك مع ريبكيا</h3>
          </div>
          
          {[
            { icon: DollarSign, title: 'دخل إضافي مجزي' },
            { icon: Clock, title: 'سيد قرارك في الوقت والمكان' },
            { icon: BookOpen, title: 'دعم تقني وتدريب' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="bg-green-50 p-3 rounded-xl text-green-700">
                <item.icon size={24} />
              </div>
              <p className="font-bold text-lg text-gray-800">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Form side */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <form className="space-y-4">
            <input type="text" placeholder="الاسم" className="w-full p-3 border border-gray-100 rounded-xl bg-gray-50" />
            <input type="text" placeholder="واتساب" className="w-full p-3 border border-gray-100 rounded-xl bg-gray-50" />
            <select className="w-full p-3 border border-gray-100 rounded-xl bg-gray-50"><option>المنطقة</option></select>
            
            <div className="flex justify-center my-4">
              <div className="h-24 w-32 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 text-sm border-dashed border-2 border-gray-200">
                صورة المعدات
              </div>
            </div>
            
            <button className="w-full bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-800 transition-colors">ارسل طلب الانضمام</button>
          </form>
        </div>
      </div>
    </section>
  );
}
