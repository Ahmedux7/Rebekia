import { Star } from 'lucide-react';

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
            
          {/* Stats Section */}
          <div className="text-right space-y-6 md:w-1/3">
            <div className='space-y-2'>
                <h2 className="text-sm font-bold text-green-600 tracking-wider">سفراؤنا</h2>
                <h3 className="text-4xl font-bold text-green-950">أبطال ريبكيا في كل حي</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border p-6 rounded-2xl text-center space-y-2 shadow-sm">
                    <p className="text-gray-500 text-sm">سفير</p>
                    <p className="text-3xl font-bold text-green-900">25</p>
                </div>
                <div className="bg-white border p-6 rounded-2xl text-center space-y-2 shadow-sm">
                    <p className="text-gray-500 text-sm">أسرة</p>
                    <p className="text-3xl font-bold text-green-800">500+</p>
                </div>
            </div>
          </div>

          {/* Ambassadors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
            {ambassadors.map((ambassador, index) => (
              <div key={index} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-full h-48 bg-gray-100 rounded-2xl mb-4 overflow-hidden relative">
                    <img src={ambassador.image} alt={ambassador.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-center mb-1 text-green-950">{ambassador.name}</h3>
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
