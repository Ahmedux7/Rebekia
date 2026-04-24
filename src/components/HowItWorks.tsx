import { MapPin, UserCheck, Scale, Recycle } from 'lucide-react';

const steps = [
  { icon: MapPin, title: 'أطلب', desc: 'سجل بياناتك وحدد منطقتك عبر موقعنا' },
  { icon: UserCheck, title: 'تخصيص', desc: 'السيستم بيختار أقرب سفير معتمد' },
  { icon: Scale, title: 'الوزن والتقييم', desc: 'السفير بيوزن و بتاخد نقاطك فوراً' },
  { icon: Recycle, title: 'إعادة التدوير', desc: 'ريبيكيا بتوجه المخلفات للمصانع المتخصصة' },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-950 mb-12">كيف نعمل</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center relative hover:shadow-md transition-shadow">
              <div className="absolute top-4 left-4 w-8 h-8 bg-green-50 text-green-700 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-4 mt-6">
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
