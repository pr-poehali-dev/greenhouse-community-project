import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Простые и честные тарифы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Выберите план, который подходит именно вам. Всё включено: теплица,
            инструменты, полив, почва, семена и удобрения.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Базовый",
              price: "12 000",
              period: "/месяц",
              features: [
                "6м² — личная теплица",
                "Инструменты на месте",
                "Автоматический полив",
                "Плодородная почва",
                "Семена и удобрения",
                "Доступ 9:00–21:00",
              ],
              popular: false,
            },
            {
              name: "Премиум",
              price: "18 000",
              period: "/месяц",
              features: [
                "12м² — просторная теплица",
                "Всё из Базового тарифа",
                "Доступ 24/7",
                "Приоритетная поддержка",
                "Клубные мероприятия",
                "Скидки на органические товары",
              ],
              popular: true,
            },
            {
              name: "Пробный",
              price: "3 000",
              period: "/неделя",
              features: [
                "2м² — тестовый участок",
                "Все удобства и инструменты",
                "7 дней доступа",
                "Индивидуальная экскурсия",
                "Консультация агронома",
                "Бонус при переходе на тариф",
              ],
              popular: false,
            },
          ].map((plan, i) => (
            <Card
              key={i}
              className={`animate-fade-in relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "ring-2 ring-emerald-500 bg-gradient-to-br from-emerald-50 to-white"
                  : "bg-gradient-to-br from-white to-gray-50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  🔥 Популярный
                </div>
              )}
              <CardContent className="pt-12 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-emerald-600">
                    {plan.price}₽
                  </span>
                  <span className="text-gray-600 text-lg">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Icon
                        name="CheckCircle2"
                        className="text-emerald-600 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full h-12 text-lg shadow-lg ${
                    plan.popular
                      ? "shadow-emerald-500/30 hover:shadow-emerald-500/50"
                      : ""
                  }`}
                  asChild
                >
                  <a href="#contact">Выбрать тариф</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
