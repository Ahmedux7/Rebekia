import { Radio } from 'lucide-react';

export default function MatchingStatus() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border text-center space-y-6">
      <div className="flex flex-col items-center gap-4">
        <Radio className="text-green-600 size-16 animate-pulse" />
        <h3 className="text-xl font-bold">Matching</h3>
        <p className="text-gray-500">جاري البحث عن أقرب سفير...</p>
      </div>
      
      <div className="border rounded-lg p-4 bg-green-50">
        <h4 className="font-bold text-green-900">تم تخصيص سفيرك!</h4>
        <div className="flex items-center gap-4 mt-4">
          <img src="/placeholder-avatar.jpg" alt="Agent" className="size-16 rounded-full" />
          <div>
            <p className="font-bold">أحمد علي</p>
            <p className="text-sm text-gray-600">سفير ريبكيا المعتمد في منطقة الاستاد</p>
            <p className="text-xs text-gray-400">الموعد المقترح: بعد 30 دقيقة</p>
          </div>
        </div>
        <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg">تأكيد الموعد عبر واتساب</button>
      </div>
    </div>
  );
}
