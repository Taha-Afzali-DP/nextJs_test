"use client";
import Link from "next/link";

export default function Product1Detail() {
  const product = {
    id: 1,
    name: "سکه یادبود محمد رضاپهلوی در حرم امام رضا",
    price: "۱۵۰,۰۰۰,۰۰۰ تومان",
    image: "/emami.png",
    description:
      "سکه طلای باستانی از دوران هخامنشیان، ضرب‌شده توسط داریوش اول. نماد قدرت امپراتوری هخامنشی با تصویر کماندار.",
    details:
      "جنس: طلا، وزن: ۸.۴ گرم، قطر: ۲۲ میلی‌متر، سال ضرب: ۱۳۴۰ شمسی. نایاب و مناسب کلکسیونرهای سلطنتی.",
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Link href="/" className="no-underline mb-6 inline-block">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            بازگشت به محصولات
          </button>
        </Link>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="cardImage"
              style={{
                height: "400px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
          <div className="cardContent p-0">
            <h1 className="title mb-4">{product.name}</h1>
            <p className="cardPrice mb-6">{product.price}</p>
            <h2 className="cardName mb-2">توضیحات:</h2>
            <p className="cardDesc mb-6">{product.description}</p>
            <h2 className="cardName mb-2">مشخصات فنی:</h2>
            <p className="cardDesc mb-6">{product.details}</p>
            <button className="w-full px-4 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-colors font-semibold">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // ... بقیه return مثل بالا
}
