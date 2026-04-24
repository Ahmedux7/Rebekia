import { Star, MessageCircle, Users } from 'lucide-react';

const ambassadors = [
  { name: 'أحمد علي', area: 'منطقة الاستاد', rating: 4.9, image: 'https://i.ibb.co/cX7Mxq6f/Gemini-Generated-Image-v5fai8v5fai8v5fa.png' },
  { name: 'ليلى خالد', area: 'منطقة القاصد', rating: 4.9, image: 'https://i.pravatar.cc/300?u=1' },
  { name: 'أحمد سامي', area: 'منطقة الاستاد', rating: 4.9, image: 'https://i.pravatar.cc/300?u=2' },
];

export default function Ambassadors() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            
          {/* Stats Section (Moved to the right) */}
          <div className="text-right space-y-4 md:w-1/4">
            <h2 className="text-3xl font-bold text-green-950">سفراؤنا</h2>
            <h3 className="text-3xl font-bold text-green-950">أبطال ريبكيا في كل حي</h3>
            <div className="bg-green-50 p-6 rounded-3xl text-center space-y-3">
                <Users className="text-green-700 mx-auto" size={40} />
                <p className="font-bold text-gray-700">لدينا الآن</p>
                <p className="text-4xl font-bold text-green-900">25</p>
                <p className="font-bold text-gray-700">يخدمون أكثر من</p>
                <p className="text-4xl font-bold text-green-800">500 أسرة</p>
            </div>
          </div>

          {/* Ambassadors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
            {ambassadors.map((ambassador, index) => (
              <div key={index} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-full h-48 bg-gray-100 rounded-2xl mb-4 overflow-hidden">
                    <img src={ambassador.image} alt={ambassador.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{ambassador.name}</h3>
                <p className="text-gray-500 text-center mb-4">{ambassador.area}</p>
                <div className="flex justify-center items-center gap-1 mb-0 text-yellow-500 font-bold bg-orange-50 px-3 py-1 rounded-full w-fit mx-auto text-sm">
                  {ambassador.rating}
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
