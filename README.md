# موقع جمعية المشاعر الخيرية

هذا هو الكود المصدري لموقع جمعية المشاعر الخيرية، مبني باستخدام React و TypeScript و Tailwind CSS.

## خطوات التشغيل

1. **تثبيت المتطلبات:**
   تأكد من تثبيت [Node.js](https://nodejs.org/) على جهازك.

2. **تثبيت المكاتب:**
   افتح موجه الأوامر في مجلد المشروع واكتب:
   ```bash
   npm install
   ```

3. **إعداد مفاتيح API:**
   - انسخ ملف `.env.example` إلى ملف جديد باسم `.env`
   - ضع مفتاح Google Gemini API الخاص بك في الملف:
     ```
     VITE_GEMINI_API_KEY=your_api_key_here
     ```

4. **تشغيل الموقع محلياً:**
   ```bash
   npm run dev
   ```

## النشر على Vercel

1. ارفع هذا المجلد على GitHub.
2. اذهب إلى [Vercel](https://vercel.com) وقم بتسجيل الدخول.
3. اضغط على "Add New Project" واختر مستودع GitHub الخاص بك.
4. في إعدادات النشر (Environment Variables)، أضف `VITE_GEMINI_API_KEY`.
5. اضغط Deploy!
