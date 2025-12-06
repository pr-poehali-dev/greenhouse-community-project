import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const BenefitsSection = () => {
  return (
    <section
      id="benefits"
      className="py-32 px-6 bg-gradient-to-br from-emerald-50 to-green-50"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            ТеплиЦапля решает 3 ключевые потребности
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы создали пространство, где каждый горожанин получает больше, чем
            просто участок земли
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "Heart",
              title: "Вырастить любовь к природе",
              desc: "Научите детей выращивать еду своими руками в комфортном пространстве. Привейте семейные традиции садоводства.",
              gradient: "from-emerald-400 to-green-600",
            },
            {
              icon: "Leaf",
              title: "Экологичная еда круглый год",
              desc: "Без пестицидов, свежие овощи и зелень. Контроль каждого этапа от семечка до урожая — вы знаете, что едите.",
              gradient: "from-green-500 to-emerald-500",
            },
            {
              icon: "Users",
              title: "Сообщество по интересам",
              desc: "Обмен опытом, совместные мероприятия, новые знакомства. Клуб единомышленников, где каждый помогает друг другу.",
              gradient: "from-emerald-500 to-teal-500",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="animate-fade-in border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="pt-8 pb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30`}
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
