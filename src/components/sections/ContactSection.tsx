import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://functions.poehali.dev/5bad7feb-b309-4bad-ad1d-d35d49ce9e67",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const result = await response.json();

      if (response.ok) {
        alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
        setFormData({ name: "", phone: "", email: "" });
      } else {
        alert(result.error || "Произошла ошибка при отправке заявки");
      }
    } catch (error) {
      alert("Ошибка соединения. Пожалуйста, попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Готовы начать?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Оставьте заявку, и мы свяжемся с вами в течение часа. Ответим на
              все вопросы и поможем выбрать идеальный тариф.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: "MapPin",
                  title: "Адрес",
                  info: "Московская область, Новорижское шоссе, 15 км от МКАД",
                },
                {
                  icon: "Phone",
                  title: "Телефон",
                  info: "+7 (495) 123-45-67",
                },
                {
                  icon: "Mail",
                  title: "Email",
                  info: "info@teplitsaplya.ru",
                },
                {
                  icon: "Clock",
                  title: "Время работы",
                  info: "Администрация: пн-вс 9:00–21:00",
                },
              ].map((contact, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
                    <Icon
                      name={contact.icon as any}
                      className="text-white"
                      size={20}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {contact.title}
                    </h3>
                    <p className="text-gray-600">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-emerald-50">
            <CardContent className="pt-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="ivan@example.com"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
                >
                  {isSubmitting ? "Отправка..." : "Оставить заявку"}
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой
                  конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
