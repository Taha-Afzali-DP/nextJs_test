"use client"; // اگر App Router داری

import "./style-index.css"; // مسیر import CSS رو چک کن

export default function Home() {
  const products = [
    {
      id: 1,
      name: "سکه یادبود محمد رضاپهلوی در حرم امام رضا",
      price: "۱۵۰,۰۰۰,۰۰۰ تومان",
      image: "./global/emami.png",
      description:
        "سکه طلای باستانی از دوران هخامنشیان، ضرب‌شده توسط داریوش اول. نماد قدرت امپراتوری هخامنشی با تصویر کماندار.",
    },
    {
      id: 2,
      name: "سکه فارنابازوس",
      price: "۸۰,۰۰۰,۰۰۰ تومان",
      image: "https://via.placeholder.com/300x200?text=سکه+فارنابازوس",
      description:
        "سکه نقره‌ای از دوران هخامنشی با نشان ماهی، ضرب‌شده توسط فارنابازوس. یکی از نایاب‌ترین سکه‌های ساتراپی.",
    },
    {
      id: 3,
      name: "سکه مازئوس (مازیار) ساتراپ بابل",
      price: "۱۲۰,۰۰۰,۰۰۰ تومان",
      image: "https://via.placeholder.com/300x200?text=سکه+مازئوس",
      description:
        "سکه‌ای از دوران داریوش سوم، ضرب‌شده توسط مازئوس. نشان‌دهنده اقتصاد بابل باستان با نقوش هنری زیبا.",
    },
    {
      id: 4,
      name: "سکه رضا شاه پهلوی",
      price: "۲۵,۰۰۰,۰۰۰ تومان",
      image: "https://via.placeholder.com/300x200?text=سکه+رضا+شاه",
      description:
        "سکه طلای شاهنشاهی از دوران پهلوی اول. نماد مدرنیزاسیون ایران با تصویر رضاشاه.",
    },
    {
      id: 5,
      name: "سکه محمد رضا شاه پهلوی",
      price: "۳۰,۰۰۰,۰۰۰ تومان",
      image: "https://via.placeholder.com/300x200?text=سکه+محمدرضا+شاه",
      description:
        "سکه کلکسیونی از دوران پهلوی دوم. با نقوش سلطنتی و ارزش تاریخی بالا برای کلکسیونرها.",
    },
    {
      id: 6,
      name: "سکه کلکسیونی ۵۰ دینار (۱۳۴۶)",
      price: "۱۰,۰۰۰,۰۰۰ تومان",
      image: "https://via.placeholder.com/300x200?text=سکه+۵۰+دینار+۱۳۴۶",
      description:
        "سکه یادبود از دوران پهلوی، ضرب‌شده در سال ۱۳۴۶. مناسب برای مجموعه‌های مدرن ایرانی.",
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">سکه‌های ایرانی کلکسیونی</h1>
        <p className="subtitle">
          مجموعه‌ای نفیس از سکه‌های تاریخی و نایاب ایران
        </p>
        <div className="grid">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img
                src={product.image}
                alt={product.name}
                className="cardImage"
              />
              <div className="cardContent">
                <h2 className="cardName">{product.name}</h2>
                <p className="cardPrice">{product.price}</p>
                <p className="cardDesc">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
