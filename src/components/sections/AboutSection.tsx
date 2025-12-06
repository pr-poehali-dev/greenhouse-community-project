import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Почему дача — не решение?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Мы понимаем желание горожан выращивать свои овощи, но традиционная
            дача создаёт больше проблем, чем решений
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "Wallet",
              title: "Дорого",
              desc: "Покупка, строительство теплицы, подведение коммуникаций — миллионы рублей",
              gradient: "from-red-500 to-orange-500",
            },
            {
              icon: "Truck",
              title: "Привозить и увозить",
              desc: "Инструменты, удобрения, воду — постоянная логистика и груз в машине",
              gradient: "from-orange-500 to-amber-500",
            },
            {
              icon: "Wrench",
              title: "Много хлопот",
              desc: "Постоянный ремонт, поиск почвы, настройка полива, зимнее обслуживание",
              gradient: "from-amber-500 to-yellow-500",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="animate-fade-in border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="pt-8 pb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon
                    name={item.icon as any}
                    className="text-white"
                    size={32}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
